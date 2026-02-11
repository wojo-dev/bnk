import { Recipient } from '../../types/recipient.types';

export type RecipientCardProps = {
  item: Recipient;
  selected: boolean;
  onPress: () => void;
  variant?: 'radio' | 'change';
};
