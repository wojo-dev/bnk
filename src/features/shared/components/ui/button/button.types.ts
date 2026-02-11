// button types

import { ReactElement } from 'react';
import { PressableProps } from 'react-native';

export type ButtonVariant = 'primary' | 'secondary' | 'link';

export type ButtonProps = PressableProps & {
  title: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  icon?: ReactElement;
};
