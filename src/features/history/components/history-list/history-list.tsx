// history-list.tsx
import { Text, View } from 'react-native';
import { historyListStyles } from './history-list.styles';
import { HistoryListProps } from './history-list.types';

export const HistoryList = ({ history }: HistoryListProps) => {
  return (
    <View style={historyListStyles.container}>
      <Text>History List</Text>
    </View>
  );
};
