// biometric confirmation

import { useBiometric } from '@/features/transfer/hooks/use-biometric';
import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const BiometricConfirmationForm = () => {
  const result = useBiometric();
  if (!result) return null;
  const { success, error } = result;
  if (!success) return null;
  if (error) return <Text>Error: {error}</Text>;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Button onPress={() => router.push('/transfer/success')} title="Confirm" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
  },
});

export default BiometricConfirmationForm;
