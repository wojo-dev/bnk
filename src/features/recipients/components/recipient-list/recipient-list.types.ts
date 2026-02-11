import { ViewProps } from 'react-native';
import { Recipient } from '../../types/recipient.types';

export type RecipientListProps = ViewProps & {
  recipients: Recipient[];
  selectedId?: string;
  onSelect?: (recipient: Recipient) => void;
  onEndReached?: () => void;
  isFetchingNextPage?: boolean;
};
