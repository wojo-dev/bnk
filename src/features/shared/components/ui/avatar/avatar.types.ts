// avatar types

import { ViewProps } from 'react-native';

export type AvatarProps = ViewProps & {
  name: string;
  size?: number;
};
