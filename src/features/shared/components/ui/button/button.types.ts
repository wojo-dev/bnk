// button types

import { PressableProps } from 'react-native';

export type ButtonVariant = 'primary' | 'secondary';

export type ButtonProps = PressableProps & {
  label: string;
  variant?: ButtonVariant;
  disabled?: boolean;
};
