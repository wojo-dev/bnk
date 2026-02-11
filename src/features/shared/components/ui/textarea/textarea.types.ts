// textarea types

import { TextInputProps } from 'react-native';

export type TextAreaProps = TextInputProps & {
  title?: string;
  error?: string;
  disabled?: boolean;
  maxLength?: number;
};
