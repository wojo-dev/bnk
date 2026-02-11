import { FlashListProps } from '@shopify/flash-list';
import { ReactElement } from 'react';

export type ListProps<T> = Omit<FlashListProps<T>, 'ListFooterComponent'> & {
  isFetchingNextPage?: boolean;
  emptyTitle?: string;
  emptySubtitle?: string;
  ListEmptyComponent?: ReactElement;
};
