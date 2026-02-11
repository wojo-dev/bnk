import { Recipient } from '../../types/recipient';

export type RecipientCardProps = {
  item: Recipient;
  selected: boolean;
  onPress: () => void;
  variant?: 'radio' | 'change';
};
