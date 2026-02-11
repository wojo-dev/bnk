import { useBiometric } from '@/features/transfer/hooks/use-biometric';
import { useTransfer } from '@/features/transfer/hooks/use-transfer';
import { useTransferStore } from '@/features/transfer/store/use-transfer-store';
import { Button } from '@/ui/button/button';
import { PinInput } from '@/ui/pin-input/pin-input';
import { router } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './process-page.styles';

export function ProcessPage() {
  const { mutateAsync } = useTransfer();
  const transferRequest = useTransferStore((s) => s.transferRequest);

  const handleTransfer = async () => {
    if (!transferRequest) return;
    await mutateAsync(transferRequest);
  };

  const { result, requiresPin, retry } = useBiometric({ onSuccess: handleTransfer });
  const [pin, setPin] = useState('');

  if (!result) {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <ActivityIndicator size="large" />
          <Text style={styles.statusText}>Authenticating...</Text>
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
            onChangeValue={setPin}
            onComplete={handleTransfer}
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
          <Text style={styles.errorText}>{result.error || 'Authentication failed'}</Text>
          <Button onPress={retry} title="Try Again" />
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
