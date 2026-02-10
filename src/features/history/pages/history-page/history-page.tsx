// history page

import { HistoryList } from '@/features/history/components/history-list/history-list';
import { useHistory } from '@/features/history/hooks/use-history';
import { ActivityIndicator, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './history-page.styles';
export const HistoryPage = ({ search }: { search: string }) => {
  const { data, isLoading } = useHistory(search);
  const history = data?.pages.flatMap((p) => p.data) ?? [];

  if (isLoading) {
    return <ActivityIndicator />;
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView>
        <HistoryList history={history} />
      </SafeAreaView>
    </ScrollView>
  );
};
