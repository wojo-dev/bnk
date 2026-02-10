// components/input.tsx
import { colors } from '@/features/shared/styles/tokens/colors';
import { useState } from 'react';
import { Text, TextInput, View, type TextInputProps } from 'react-native';
import { inputStyles } from './input.styles';

type InputProps = TextInputProps & {
  label?: string;
  error?: string;
  disabled?: boolean;
};

const getBorderColor = (isFocused: boolean, error?: string) => {
  if (error) {
    return colors.border.error;
  }

  return isFocused ? colors.border.focus : colors.border.input;
};

export const Input = ({ disabled, label, error, ...props }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const borderColor = getBorderColor(isFocused, error);

  return (
    <View style={inputStyles.container}>
      <Text id="input-label" style={inputStyles.label}>
        {label}
      </Text>

      <TextInput
        aria-labelledby="input-label"
        aria-disabled={disabled}
        style={[inputStyles.input, { borderColor }]}
        editable={!disabled}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        {...props}
      />

      {error && <Text style={inputStyles.error}>{error}</Text>}
    </View>
  );
};
