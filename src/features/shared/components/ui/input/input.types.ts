// input types

import { TextInputProps } from 'react-native';

export type InputProps = TextInputProps & {
  label?: string;
  error?: string;
  disabled?: boolean;
};
