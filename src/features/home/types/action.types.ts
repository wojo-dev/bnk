// action type

import { IconButtonColor } from '@/ui/button/icon-button.types';

export type Action = {
  id: string;
  icon: string;
  label: string;
  color: IconButtonColor;
  accessibilityLabel: string;
  route: string;
};
