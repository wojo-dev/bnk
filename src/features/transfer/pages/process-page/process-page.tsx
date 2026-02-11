import { apiClient } from '@/features/shared/lib/api-client';
import { useBiometric } from '@/features/transfer/hooks/use-biometric';
import { useTransfer } from '@/features/transfer/hooks/use-transfer';
import { useTransferStore } from '@/features/transfer/store/use-transfer-store';
import { Button } from '@/ui/button/button';
import { PinInput } from '@/ui/pin-input/pin-input';
import { SecurityLevel } from 'expo-local-authentication';
import { router } from 'expo-router';
import { useCallback, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './process-page.styles';

const MAX_PIN_ATTEMPTS = 3;

export function ProcessPage() {
  const { mutateAsync } = useTransfer();

  const handleTransfer = useCallback(async () => {
    const transferRequest = useTransferStore.getState().transferRequest;
    if (!transferRequest) return;
    await mutateAsync(transferRequest);
  }, [mutateAsync]);

  const { result, requiresPin, securityLevel, authenticate } = useBiometric({
    onSuccess: handleTransfer,
  });
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
        await apiClient.post('/verify', { pin: value });
        setPin('');
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
    [pinAttempts, handleTransfer],
  );

  if (!result) {
    const isBiometric =
      securityLevel === SecurityLevel.BIOMETRIC_STRONG ||
      securityLevel === SecurityLevel.BIOMETRIC_WEAK;

    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.statusText}>
            {isBiometric
              ? 'Verify with biometrics to continue'
              : 'Verify your identity to continue'}
          </Text>
          <Button
            onPress={authenticate}
            title={isBiometric ? 'Verify with Face ID / Fingerprint' : 'Verify Identity'}
          />
          <Button onPress={() => router.back()} title="Go Back" variant="secondary" />
        </View>
      </SafeAreaView>
    );
  }

  if (requiresPin) {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.statusText}>Enter your PIN to confirm</Text>
          <PinInput
            length={6}
            value={pin}
            secure
            disabled={verifyingPin || pinAttempts >= MAX_PIN_ATTEMPTS}
            error={pinError}
            onChangeValue={setPin}
            onComplete={handlePinComplete}
          />
          <Button onPress={() => router.back()} title="Cancel" variant="secondary" />
        </View>
      </SafeAreaView>
    );
  }

  if (!result.success) {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.errorText}>
            {result.cancelled ? 'Verification cancelled' : result.error || 'Authentication failed'}
          </Text>
          {!result.cancelled && <Button onPress={authenticate} title="Try Again" />}
          <Button onPress={() => router.back()} title="Go Back" variant="secondary" />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text style={styles.statusText}>Processing transfer...</Text>
      </View>
    </SafeAreaView>
  );
}
