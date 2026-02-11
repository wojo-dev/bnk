import { BalanceCard } from '@/features/balance/components/balance-card/balance-card';
import { useBalance } from '@/features/balance/hooks/use-balance';
import { HistoryList } from '@/features/transaction/components/history-list/history-list';
import { useHistory } from '@/features/transaction/hooks/use-history';
import { Card } from '@/ui/card/card';
import { SectionTitle } from '@/ui/section-title/section-title';
import { Link, RelativePathString, useRouter } from 'expo-router';
import { ActivityIndicator, Pressable, ScrollView, View } from 'react-native';
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
        <View style={styles.container}>
          <ProfileHeader
            name={profile?.data.profile.name ?? ''}
            onNotificationPress={() => router.push('/storybook')}
          />
          <View style={styles.balanceCardContainer}>
            <BalanceCard amount={balance?.data.balance.amount ?? 0} />
          </View>
          <ActionButtons
            actions={actions as Action[]}
            onActionPress={(action) => {
              router.push(action.route as RelativePathString);
            }}
          />
          <SectionTitle
            title="Recent"
            actionLabel="View All"
            onAction={() => router.push('/recipients')}
            style={styles.sectionTitle}
          />
        </View>
        <RecentRecipients
          onPress={(item) =>
            router.push({
              pathname: '/transfer',
              params: {
                recipientId: item.id,
              },
            })
          }
        />
        <View style={styles.container}>
          <SectionTitle
            title="Transactions"
            actionLabel="See All"
            onAction={() => router.push('/history')}
            style={styles.sectionTitle}
          />
          <Link href="/history" asChild={true}>
            <Link.AppleZoom>
              <Pressable>
                <Card style={styles.historyCard}>
                  <HistoryList history={history} />
                </Card>
              </Pressable>
            </Link.AppleZoom>
          </Link>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
