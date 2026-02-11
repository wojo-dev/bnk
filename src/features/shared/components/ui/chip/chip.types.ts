// chip types

import { PressableProps } from 'react-native';

export type ChipProps = Omit<PressableProps, 'children'> & {
  label: string;
  selected?: boolean;
};
