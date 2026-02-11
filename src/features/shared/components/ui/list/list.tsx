import { FlashList, FlashListRef } from '@shopify/flash-list';
import { Ref } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { listStyles as styles } from './list.styles';
import { ListProps } from './list.types';

const DefaultEmpty = ({ title, subtitle }: { title?: string; subtitle?: string }) => (
  <View style={styles.empty}>
    {title && <Text style={styles.emptyTitle}>{title}</Text>}
    {subtitle && <Text style={styles.emptySubtitle}>{subtitle}</Text>}
  </View>
);

export function List<T>({
  ref,
  isFetchingNextPage,
  emptyTitle,
  emptySubtitle,
  ListEmptyComponent,
  onEndReachedThreshold = 0.5,
  ...props
}: ListProps<T> & { ref?: Ref<FlashListRef<T>> }) {
  const emptyComponent =
    ListEmptyComponent ??
    (emptyTitle || emptySubtitle ? (
      <DefaultEmpty title={emptyTitle} subtitle={emptySubtitle} />
    ) : undefined);

  return (
    <FlashList<T>
      ref={ref}
      onEndReachedThreshold={onEndReachedThreshold}
      ListEmptyComponent={emptyComponent}
      ListFooterComponent={isFetchingNextPage ? <ActivityIndicator style={styles.loader} /> : null}
      {...props}
    />
  );
}
