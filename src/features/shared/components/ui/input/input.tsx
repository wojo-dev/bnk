// components/input.tsx
import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { getBorderColor, inputStyles } from './input.styles';
import { InputProps } from './input.types';

export const Input = ({ disabled, title, error, icon, ...props }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={inputStyles.container}>
      {title && (
        <Text id="input-label" style={inputStyles.label}>
          {title}
        </Text>
      )}

      <View style={[inputStyles.inputWrapper, { borderColor: getBorderColor(isFocused, error) }]}>
        {icon && <View style={inputStyles.icon}>{icon}</View>}
        <TextInput
          aria-labelledby="input-label"
          aria-disabled={disabled}
          style={inputStyles.input}
          editable={!disabled}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          {...props}
        />
      </View>

      {error && <Text style={inputStyles.error}>{error}</Text>}
    </View>
  );
};
