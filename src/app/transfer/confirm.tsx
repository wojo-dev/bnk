// biometric confirmation

import { useBiometric } from '@/features/transfer/hooks/use-biometric';
import { router } from 'expo-router';
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const BiometricConfirmationForm = () => {
  const { result, retry } = useBiometric();

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

  if (!result.success) {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.errorText}>{result.error || 'Authentication failed'}</Text>
          <Button onPress={retry} title="Try Again" />
          <Button onPress={() => router.back()} title="Go Back" color="#888" />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.statusText}>Authentication successful</Text>
        <Button onPress={() => router.push('/transfer/success')} title="Confirm" />
        <Button onPress={() => router.back()} title="Cancel" color="#888" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
    alignItems: 'center',
  },
  statusText: {
    fontSize: 16,
    textAlign: 'center',
  },
  errorText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#d32f2f',
  },
});

export default BiometricConfirmationForm;
