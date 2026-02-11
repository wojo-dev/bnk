import { List } from '@/ui/list/list';
import { useCallback } from 'react';
import { View } from 'react-native';
import { Recipient } from '../../types/recipient.types';
import { RecipientCard } from '../recipient-card/recipient-card';
import { recipientListStyles as styles } from './recipient-list.styles';
import { RecipientListProps } from './recipient-list.types';

export const RecipientList = ({
  recipients,
  selectedId,
  onSelect,
  onEndReached,
  isFetchingNextPage,
  extraData,
  style,
  ...props
}: RecipientListProps) => {
  const renderItem = useCallback(
    ({ item }: { item: Recipient }) => (
      <View style={styles.recipientRow}>
        <RecipientCard
          item={item}
          selected={item.id === selectedId}
          onPress={() => onSelect?.(item)}
        />
      </View>
    ),
    [selectedId, onSelect],
  );

  return (
    <View style={[styles.container, style]} {...props}>
      <List<Recipient>
        data={recipients}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={extraData}
        contentContainerStyle={styles.contentContainer}
        onEndReached={onEndReached}
        isFetchingNextPage={isFetchingNextPage}
        emptyTitle="No recipients"
        emptySubtitle="Add a recipient to get started"
      />
    </View>
  );
};
