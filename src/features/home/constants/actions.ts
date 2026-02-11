import { Action } from '../types/action.types';

export const actions: Action[] = [
  { id: '1', icon: 'send', label: 'Send', accessibilityLabel: 'Send', route: '/recipients' },
  { id: '2', icon: 'receive', label: 'Receive', accessibilityLabel: 'Receive', route: '/receive' },
  {
    id: '3',
    icon: 'pay-bills',
    label: 'Pay Bills',
    accessibilityLabel: 'Pay Bills',
    route: '/pay-bills',
  },
  { id: '4', icon: 'top-up', label: 'Top Up', accessibilityLabel: 'Top Up', route: '/top-up' },
];
