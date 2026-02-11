// components/textarea.tsx
import { colors } from '@/tokens/colors';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { errorStyles, getBorderColor, textareaStyles as styles } from './textarea.styles';
import { TextAreaProps } from './textarea.types';

export const TextArea = ({
  disabled,
  title,
  error,
  maxLength,
  value,
  style,
  ...props
}: TextAreaProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasError = !!error;

  return (
    <View style={styles.container}>
      {title && (
        <Text id="textarea-label" style={styles.label}>
          {title}
        </Text>
      )}

      <View
        style={[
          styles.inputWrapper,
          { borderColor: getBorderColor(isFocused, error) },
          hasError && errorStyles.inputWrapperError,
        ]}>
        <TextInput
          aria-labelledby="textarea-label"
          aria-disabled={disabled}
          style={[styles.input, hasError && errorStyles.inputError, style]}
          editable={!disabled}
          multiline
          maxLength={maxLength}
          value={value}
          {...props}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
        />
      </View>

      {(error || maxLength) && (
        <View style={styles.footer}>
          {error ? (
            <View style={errorStyles.errorContainer}>
              <Feather name="alert-circle" size={14} color={colors.label.error} />
              <Text style={errorStyles.errorText}>{error}</Text>
            </View>
          ) : (
            <View />
          )}
          {maxLength && (
            <Text style={styles.charCount}>
              {value?.length ?? 0}/{maxLength}
            </Text>
          )}
        </View>
      )}
    </View>
  );
};
