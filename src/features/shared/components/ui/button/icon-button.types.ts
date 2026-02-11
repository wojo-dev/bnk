import { ReactElement } from 'react';
import { PressableProps } from 'react-native';

export type IconButtonVariant = 'primary' | 'secondary';

export type IconButtonSize = 'sm' | 'md' | 'lg';

export type IconButtonProps = PressableProps & {
  icon: ReactElement;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  disabled?: boolean;
  accessibilityLabel: string;
};
