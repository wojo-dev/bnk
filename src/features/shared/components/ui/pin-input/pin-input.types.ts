import { ViewProps } from 'react-native';

export type PinInputProps = ViewProps & {
  length?: number;
  value?: string;
  error?: string;
  disabled?: boolean;
  secure?: boolean;
  onChangeValue?: (value: string) => void;
  onComplete?: (value: string) => void;
};
