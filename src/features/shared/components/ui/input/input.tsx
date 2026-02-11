// components/input.tsx
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { colors } from '@/tokens/colors';
import { errorStyles, getBorderColor, inputStyles as styles } from './input.styles';
import { InputProps } from './input.types';

export const Input = ({ disabled, title, error, icon, style, ...props }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasError = !!error;

  return (
    <View style={styles.container}>
      {title && (
        <Text id="input-label" style={styles.label}>
          {title}
        </Text>
      )}

      <View
        style={[
          styles.inputWrapper,
          { borderColor: getBorderColor(isFocused, error) },
          hasError && errorStyles.inputWrapperError,
        ]}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <TextInput
          aria-labelledby="input-label"
          aria-disabled={disabled}
          style={[styles.input, hasError && errorStyles.inputError, style]}
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

      {error && (
        <View style={errorStyles.errorContainer}>
          <Feather name="alert-circle" size={14} color={colors.label.error} />
          <Text style={errorStyles.errorText}>{error}</Text>
        </View>
      )}
    </View>
  );
};
