import { useBalance } from '@/features/balance/hooks/use-balance';
import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const { data: balance } = useBalance();
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text>Balance: ${balance?.data.balance.amount}</Text>
      <Button title="Transfer" onPress={() => router.push('/transfer')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: 'center',
    gap: 3,
    paddingBottom: 10 + 3,
    maxWidth: 100,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 10,
    gap: 10,
  },
  title: {
    textAlign: 'center',
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    gap: 3,
    alignSelf: 'stretch',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
