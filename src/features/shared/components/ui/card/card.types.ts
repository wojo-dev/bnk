// card types

import { ViewProps } from 'react-native';

export type CardVariant = 'default' | 'elevated' | 'outlined';

export type CardProps = ViewProps & {
  variant?: CardVariant;
  title?: string;
  description?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
};
