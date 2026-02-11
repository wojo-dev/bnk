//  page

import { TransactionList } from '@/features/transaction/components/transaction-list/transaction-list';
import { useTransaction } from '@/features/transaction/hooks/use-transaction';
import { ActivityIndicator, View } from 'react-native';
import { transactionPageStyles as styles } from './transaction-page.styles';
export const TransactionPage = ({ search }: { search: string }) => {
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useTransaction(search);
  const transactions = data?.pages.flatMap((p) => p.data) ?? [];

  if (isLoading) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.safeArea}>
      <TransactionList
        transactions={transactions}
        onEndReached={() => hasNextPage && fetchNextPage()}
        isFetchingNextPage={isFetchingNextPage}
      />
    </View>
  );
};
