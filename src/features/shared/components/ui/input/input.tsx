// components/input.tsx
import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { getBorderColor, inputStyles as styles } from './input.styles';
import { InputProps } from './input.types';

export const Input = ({ disabled, title, error, icon, ...props }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      {title && (
        <Text id="input-label" style={styles.label}>
          {title}
        </Text>
      )}

      <View style={[styles.inputWrapper, { borderColor: getBorderColor(isFocused, error) }]}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <TextInput
          aria-labelledby="input-label"
          aria-disabled={disabled}
          style={styles.input}
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

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
