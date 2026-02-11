import { Action } from '../types/action.types';

export const actions: Action[] = [
  {
    id: '1',
    icon: 'send-variant-outline',
    label: 'Send',
    color: 'blue',
    accessibilityLabel: 'Send',
    route: '/recipients',
  },
  {
    id: '2',
    icon: 'call-received',
    label: 'Receive',
    color: 'green',
    accessibilityLabel: 'Receive',
    route: '/receive',
  },
  {
    id: '3',
    icon: 'receipt-text-outline',
    label: 'Pay Bills',
    color: 'orange',
    accessibilityLabel: 'Pay Bills',
    route: '/pay-bills',
  },
  {
    id: '4',
    icon: 'arrow-up',
    label: 'Top Up',
    color: 'purple',
    accessibilityLabel: 'Top Up',
    route: '/top-up',
  },
];
