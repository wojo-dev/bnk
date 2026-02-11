import { useAuthStore } from '@/features/auth/store/use-auth-store';
import { useBiometric } from '@/features/biometric/hooks/use-biometric';
import { apiClient } from '@/features/shared/lib/api-client';
import { colors } from '@/tokens/colors';
import { spacing } from '@/tokens/spacing';
import { Button } from '@/ui/button/button';
import { Numpad } from '@/ui/numpad/numpad';
import { NumpadKey } from '@/ui/numpad/numpad.types';
import { PinInput } from '@/ui/pin-input/pin-input';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SecurityLevel } from 'expo-local-authentication';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './login-page.styles';

const MAX_PIN_ATTEMPTS = 3;
const PIN_LENGTH = 6;

export function LoginPage() {
  const login = useAuthStore((s) => s.login);

  const handleBiometricSuccess = useCallback(async () => {
    try {
      const { data } = await apiClient.post('/auth', { method: 'biometric' });
      if (data.token) {
        await login(data.token);
      }
    } catch {
      // Biometric auth API failed — user can retry or use PIN
    }
  }, [login]);

  const { result, requiresPin, securityLevel, ready, authenticate } = useBiometric({
    onSuccess: handleBiometricSuccess,
  });

  const authTriggered = useRef(false);
  useEffect(() => {
    if (ready && !authTriggered.current) {
      authTriggered.current = true;
      authenticate();
    }
  }, [ready, authenticate]);

  const [showPin, setShowPin] = useState(false);
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState('');
  const [pinAttempts, setPinAttempts] = useState(0);
  const [verifyingPin, setVerifyingPin] = useState(false);

  const handlePinComplete = useCallback(
    async (value: string) => {
      if (pinAttempts >= MAX_PIN_ATTEMPTS) return;

      setVerifyingPin(true);
      setPinError('');
      try {
        const { data } = await apiClient.post('/verify', { pin: value });
        if (data.token) {
          await login(data.token);
        }
      } catch {
        const attempts = pinAttempts + 1;
        setPinAttempts(attempts);
        setPin('');
        if (attempts >= MAX_PIN_ATTEMPTS) {
          setPinError('Too many failed attempts. Please try again later.');
        } else {
          setPinError(`Incorrect PIN. ${MAX_PIN_ATTEMPTS - attempts} attempt(s) remaining.`);
        }
      } finally {
        setVerifyingPin(false);
      }
    },
    [pinAttempts, login],
  );

  const handleNumpadPress = useCallback(
    (key: NumpadKey) => {
      if (verifyingPin || pinAttempts >= MAX_PIN_ATTEMPTS) return;

      setPin((prev) => {
        if (key === 'backspace') return prev.slice(0, -1);
        if (prev.length >= PIN_LENGTH) return prev;
        const next = prev + key;
        if (next.length === PIN_LENGTH) handlePinComplete(next);
        return next;
      });
    },
    [verifyingPin, pinAttempts, handlePinComplete],
  );

  const isBiometric =
    securityLevel === SecurityLevel.BIOMETRIC_STRONG ||
    securityLevel === SecurityLevel.BIOMETRIC_WEAK;

  // PIN input view (fallback or user-chosen)
  if (requiresPin || showPin) {
    const pinDisabled = verifyingPin || pinAttempts >= MAX_PIN_ATTEMPTS;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.heading}>Enter your PIN</Text>
          <PinInput
            length={PIN_LENGTH}
            value={pin}
            secure
            disabled={pinDisabled}
            error={pinError}
          />
          <Numpad
            onKeyPress={handleNumpadPress}
            disabled={pinDisabled}
            style={{ marginTop: spacing.xl }}
          />
        </View>
      </SafeAreaView>
    );
  }

  // Biometric failed — show retry / PIN fallback
  if (result && !result.success) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="shield-lock-outline" size={56} color={colors.primary} />
          </View>
          <Text style={styles.errorText}>
            {result.cancelled
              ? 'Authentication cancelled'
              : result.error || 'Authentication failed'}
          </Text>
          <View style={styles.buttonGroup}>
            <Button onPress={authenticate} title="Try Again" />
            <Button onPress={() => setShowPin(true)} title="Use PIN instead" variant="secondary" />
          </View>
        </View>
      </SafeAreaView>
    );
  }

  // Biometric succeeded — loading
  if (result?.success) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      </SafeAreaView>
    );
  }

  // Awaiting biometric prompt
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name={isBiometric ? 'face-recognition' : 'shield-lock-outline'}
            size={56}
            color={colors.primary}
          />
        </View>
        <Text style={styles.heading}>
          {isBiometric ? 'Sign in with Face ID' : 'Sign in to continue'}
        </Text>
        <Text style={styles.subtitle}>Authenticate to access your account</Text>
      </View>
    </SafeAreaView>
  );
}
