// history page

import { HistoryList } from '@/features/history/components/history-list/history-list';
import { useHistory } from '@/features/history/hooks/use-history';
import { ActivityIndicator, View } from 'react-native';
import { styles } from './history-page.styles';
export const HistoryPage = ({ search }: { search: string }) => {
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useHistory(search);
  const history = data?.pages.flatMap((p) => p.data) ?? [];

  if (isLoading) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.safeArea}>
      <HistoryList
        history={history}
        onEndReached={() => hasNextPage && fetchNextPage()}
        isFetchingNextPage={isFetchingNextPage}
      />
    </View>
  );
};
