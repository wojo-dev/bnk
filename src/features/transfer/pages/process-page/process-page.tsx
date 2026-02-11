import { Button } from '@/features/shared/components/ui/button/button';
import { PinInput } from '@/features/shared/components/ui/pin-input/pin-input';
import { useBiometric } from '@/features/transfer/hooks/use-biometric';
import { router } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './process-page.styles';

export function ProcessPage() {
  const { result, requiresPin, retry } = useBiometric();
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
            onComplete={() => router.push('/transfer/success')}
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
        <Text style={styles.statusText}>Authentication successful</Text>
        <Button onPress={() => router.push('/transfer/success')} title="Confirm" />
        <Button onPress={() => router.back()} title="Cancel" variant="secondary" />
      </View>
    </SafeAreaView>
  );
}
