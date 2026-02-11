// input types

import { TextInputProps } from 'react-native';

export type InputProps = TextInputProps & {
  title?: string;
  error?: string;
  disabled?: boolean;
};
