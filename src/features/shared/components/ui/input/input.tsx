// components/input.tsx
import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { getBorderColor, inputStyles } from './input.styles';
import { InputProps } from './input.types';

export const Input = ({ disabled, label, error, ...props }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={inputStyles.container}>
      <Text id="input-label" style={inputStyles.label}>
        {label}
      </Text>

      <TextInput
        aria-labelledby="input-label"
        aria-disabled={disabled}
        style={[inputStyles.input, { borderColor: getBorderColor(isFocused, error) }]}
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
