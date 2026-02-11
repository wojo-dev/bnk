import { BalanceCard } from '@/features/balance/components/balance-card/balance-card';
import { useBalance } from '@/features/balance/hooks/use-balance';
import { HistoryList } from '@/features/history/components/history-list/history-list';
import { useHistory } from '@/features/history/hooks/use-history';
import { Card } from '@/ui/card/card';
import { Link, RelativePathString, useRouter } from 'expo-router';
import { ActivityIndicator, Button, Pressable, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActionButtons } from '../../components/action-buttons/action-buttons';
import { ProfileHeader } from '../../components/profile-header/profile-header';
import { RecentRecipients } from '../../components/recent-recipients/recent-recipients';
import { actions } from '../../constants/actions';
import { useProfile } from '../../hooks/use-profile';
import { Action } from '../../types/action.types';
import { styles } from './home-page.styles';

export function HomePage() {
  const router = useRouter();
  const { data: profile } = useProfile();
  const { data: balance } = useBalance();
  const { data, isLoading } = useHistory();
  const history = data?.pages.flatMap((p) => p.data) ?? [];

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView>
      <SafeAreaView style={styles.safeArea}>
        <Button title="Storybook" onPress={() => router.push('/storybook')} />
        <ProfileHeader name={profile?.data.profile.name ?? ''} />
        <View style={styles.balanceCardContainer}>
          <BalanceCard amount={balance?.data.balance.amount ?? 0} />
        </View>
        <ActionButtons
          actions={actions as Action[]}
          onActionPress={(action) => {
            router.push(action.route as RelativePathString);
          }}
        />
        <RecentRecipients />
        <Link href="/history" asChild={true}>
          <Link.AppleZoom>
            <Pressable>
              <Card style={styles.historyCard}>
                <HistoryList history={history} />
              </Card>
            </Pressable>
          </Link.AppleZoom>
        </Link>
      </SafeAreaView>
    </ScrollView>
  );
}
