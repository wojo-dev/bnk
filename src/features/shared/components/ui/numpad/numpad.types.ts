import { StyleProp, ViewStyle } from 'react-native';

export type NumpadKey = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'backspace';

export type NumpadProps = {
  onKeyPress: (key: NumpadKey) => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};
