// badge types

import { ViewProps } from 'react-native';

export type BadgeVariant = 'default' | 'primary' | 'success' | 'error' | 'warning' | 'outline';

export type BadgeProps = ViewProps & {
  title: string;
  variant?: BadgeVariant;
};
