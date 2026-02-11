import { FlashList } from '@shopify/flash-list';
import { ActivityIndicator, View } from 'react-native';
import { RecipientCard } from '../recipient-card/recipient-card';
import { recipientListStyles as styles } from './recipient-list.styles';
import { RecipientListProps } from './recipient-list.types';

export const RecipientList = ({
  recipients,
  selectedId,
  onSelect,
  onEndReached,
  isFetchingNextPage,
  style,
  ...props
}: RecipientListProps) => {
  return (
    <View style={[styles.container, style]} {...props}>
      <FlashList
        data={recipients}
        renderItem={({ item }) => (
          <RecipientCard
            item={item}
            selected={item.id === selectedId}
            onPress={() => onSelect?.(item)}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentContainer}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isFetchingNextPage ? <ActivityIndicator style={{ paddingVertical: 16 }} /> : null
        }
      />
    </View>
  );
};
