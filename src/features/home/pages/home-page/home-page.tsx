import { BalanceCard } from '@/features/balance/components/balance-card/balance-card';
import { useBalance } from '@/features/balance/hooks/use-balance';
import { TransactionList } from '@/features/transaction/components/transaction-list/transaction-list';
import { useTransaction } from '@/features/transaction/hooks/use-transaction';
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
  const { data, isLoading } = useTransaction();
  const transactions = data?.pages.flatMap((p) => p.data) ?? [];

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
            onAction={() => router.push('/transaction')}
            style={styles.sectionTitle}
          />
          <Link href="/transaction" asChild={true}>
            <Link.AppleZoom>
              <Pressable>
                <Card style={styles.transactionCard}>
                  <TransactionList transactions={transactions} />
                </Card>
              </Pressable>
            </Link.AppleZoom>
          </Link>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
