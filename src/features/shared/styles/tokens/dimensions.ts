// dimentions tokens

import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export const dimensions = {
  width,
  height,
} as const;
