// history page

import { HistoryList } from '@/features/history/components/history-list/history-list';
import { useHistory } from '@/features/history/hooks/use-history';
import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './history-page.styles';
export const HistoryPage = ({ search }: { search: string }) => {
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useHistory(search);
  const history = data?.pages.flatMap((p) => p.data) ?? [];

  if (isLoading) {
    return <ActivityIndicator />;
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <HistoryList
        history={history}
        onEndReached={() => hasNextPage && fetchNextPage()}
        isFetchingNextPage={isFetchingNextPage}
      />
    </SafeAreaView>
  );
};
