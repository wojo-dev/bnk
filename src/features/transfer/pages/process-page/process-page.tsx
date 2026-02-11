import { useBiometric } from '@/features/biometric/hooks/use-biometric';
import { useRecipientStore } from '@/features/recipient/store/use-recipient-store';
import { apiClient } from '@/features/shared/lib/api-client';
import { useTransfer } from '@/features/transfer/hooks/use-transfer';
import { useTransferStore } from '@/features/transfer/store/use-transfer-store';
import { colors } from '@/tokens/colors';
import { spacing } from '@/tokens/spacing';
import { Button } from '@/ui/button/button';
import { Numpad } from '@/ui/numpad/numpad';
import { NumpadKey } from '@/ui/numpad/numpad.types';
import { PinInput } from '@/ui/pin-input/pin-input';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SecurityLevel } from 'expo-local-authentication';
import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { processPageStyles as styles } from './process-page.styles';

const MAX_PIN_ATTEMPTS = 3;
const AUTH_TTL_MS = 30_000;

function maskAccount(accountNumber: string) {
  const last4 = accountNumber.slice(-4);
  return `\u2022\u2022\u2022\u2022 ${last4}`;
}

export function ProcessPage() {
  const { mutateAsync } = useTransfer();
  const transferSucceeded = useRef(false);
  const transferDetail = useTransferStore((s) => s.transferDetail);
  const clearTransferDetail = useTransferStore((s) => s.clearTransferDetail);
  const setAuthTimestamp = useTransferStore((s) => s.setAuthTimestamp);
  const resetRecipientStore = useRecipientStore((s) => s.reset);

  const handleTransfer = useCallback(async () => {
    const { transferRequest, authTimestamp } = useTransferStore.getState();
    if (!transferRequest) return;

    if (!authTimestamp || Date.now() - authTimestamp > AUTH_TTL_MS) {
      useTransferStore.setState({ authTimestamp: null });
      return;
    }

    transferSucceeded.current = true;
    await mutateAsync(transferRequest);
  }, [mutateAsync]);

  useEffect(() => {
    return () => {
      if (!transferSucceeded.current) {
        clearTransferDetail();
        resetRecipientStore();
      }
    };
  }, [clearTransferDetail, resetRecipientStore]);

  const onAuthSuccess = useCallback(() => {
    setAuthTimestamp(Date.now());
    handleTransfer();
  }, [setAuthTimestamp, handleTransfer]);

  const { result, requiresPin, securityLevel, ready, authenticate } = useBiometric({
    onSuccess: onAuthSuccess,
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
  const pinLength = 6;

  const handlePinComplete = useCallback(
    async (value: string) => {
      if (pinAttempts >= MAX_PIN_ATTEMPTS) return;

      setVerifyingPin(true);
      setPinError('');
      try {
        const { data } = await apiClient.post('/verify', { pin: value });
        if (data.token) {
          await SecureStore.setItemAsync('auth_token', data.token);
        }
        setPin('');
        setAuthTimestamp(Date.now());
        await handleTransfer();
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
    [pinAttempts, handleTransfer, setAuthTimestamp],
  );

  const handleNumpadPress = useCallback(
    (key: NumpadKey) => {
      if (verifyingPin || pinAttempts >= MAX_PIN_ATTEMPTS) return;

      setPin((prev) => {
        if (key === 'backspace') return prev.slice(0, -1);
        if (prev.length >= pinLength) return prev;
        const next = prev + key;
        if (next.length === pinLength) handlePinComplete(next);
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
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="lock-outline" size={32} color={colors.primary} />
          </View>

          <Text style={styles.heading}>Enter your PIN</Text>
          {transferDetail && (
            <Text style={styles.subtitle}>
              Sending{' '}
              <Text style={{ fontWeight: '700' }}>
                {transferDetail.currency} {transferDetail.amount}
              </Text>{' '}
              to {transferDetail.recipientName}
            </Text>
          )}

          <PinInput
            length={pinLength}
            value={pin}
            secure
            disabled={pinDisabled}
            error={pinError}
            style={{ marginTop: spacing.xl }}
          />
          <Numpad
            onKeyPress={handleNumpadPress}
            disabled={pinDisabled}
            style={{ marginTop: spacing.xl }}
          />
          <Pressable onPress={() => {}} style={{ marginTop: spacing.lg }}>
            <Text style={styles.pinLinkText}>Forgot PIN?</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  // Auth failed
  if (result && !result.success) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.errorText}>
            {result.cancelled ? 'Verification cancelled' : result.error || 'Authentication failed'}
          </Text>
          {!result.cancelled && (
            <Button
              icon={
                <MaterialCommunityIcons
                  name="refresh"
                  size={24}
                  color={colors.background.neutral}
                />
              }
              onPress={authenticate}
              title="Try Again"
            />
          )}
          <Button
            icon={<MaterialCommunityIcons name="arrow-left" size={24} color={colors.label.text} />}
            onPress={() => router.back()}
            title="Go Back"
            variant="secondary"
          />
        </View>
      </SafeAreaView>
    );
  }

  // Auth succeeded — processing transfer
  if (result?.success) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <ActivityIndicator size="large" />
          <Text style={styles.statusText}>Processing transfer...</Text>
        </View>
      </SafeAreaView>
    );
  }

  // Awaiting biometric — main confirmation screen
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
          {isBiometric ? 'Confirm with Face ID' : 'Confirm your identity'}
        </Text>
        <Text style={styles.subtitle}>Authenticate to authorize this payment securely</Text>

        {transferDetail && (
          <View style={styles.amountSection}>
            <Text style={styles.amount}>
              {transferDetail.currency} {transferDetail.amount}
            </Text>
            <Text style={styles.recipientInfo}>
              to {transferDetail.recipientName} {'\u2022'} {transferDetail.bank}{' '}
              {maskAccount(transferDetail.accountNumber)}
            </Text>
          </View>
        )}

        <Pressable style={styles.pinLink} onPress={() => setShowPin(true)}>
          <Text style={styles.pinLinkText}>Use PIN instead</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
