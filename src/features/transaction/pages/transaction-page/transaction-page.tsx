//  page

import { TransactionList } from '@/features/transaction/components/transaction-list/transaction-list';
import { useTransaction } from '@/features/transaction/hooks/use-transaction';
import { Transaction } from '@/features/transaction/types/transaction.types';
import { ActivityIndicator, View } from 'react-native';
import { transactionPageStyles as styles } from './transaction-page.styles';
export const TransactionPage = ({
  search,
  onTransactionPress,
}: {
  search: string;
  onTransactionPress?: (item: Transaction) => void;
}) => {
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
        onTransactionPress={onTransactionPress}
      />
    </View>
  );
};
