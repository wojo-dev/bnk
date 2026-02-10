import { BalanceCard } from '@/features/balance/components/balance-card/balance-card';
import { useBalance } from '@/features/balance/hooks/use-balance';
import { HistoryList } from '@/features/history/components/history-list/history-list';
import { useHistory } from '@/features/history/hooks/use-history';
import { Card } from '@/ui/card/card';
import { Link, useRouter } from 'expo-router';
import { ActivityIndicator, Button, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './home-page.styles';

export function HomePage() {
  const router = useRouter();
  const { data: balance } = useBalance();
  const { data, isLoading } = useHistory();
  const history = data?.pages.flatMap((p) => p.data) ?? [];

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Button title="Storybook" onPress={() => router.push('/storybook')} />
      <BalanceCard amount={balance?.data.balance.amount ?? 0} />
      <Button title="Transfer" onPress={() => router.push('/transfer')} />
      <Link href="/history" asChild={true}>
        <Link.AppleZoom>
          <Pressable>
            <Card title="History" style={styles.historyCard}>
              <HistoryList history={history} />
            </Card>
          </Pressable>
        </Link.AppleZoom>
      </Link>
    </SafeAreaView>
  );
}
