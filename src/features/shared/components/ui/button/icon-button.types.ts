import { ReactElement } from 'react';
import { PressableProps } from 'react-native';

export type IconButtonColor = 'blue' | 'green' | 'orange' | 'purple';

export type IconButtonSize = 'sm' | 'md' | 'lg';

export type IconButtonProps = PressableProps & {
  icon: ReactElement;
  label?: string;
  color?: IconButtonColor;
  size?: IconButtonSize;
  disabled?: boolean;
  accessibilityLabel: string;
};
