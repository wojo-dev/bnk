// components/textarea.tsx
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { colors } from '@/tokens/colors';
import { errorStyles, getBorderColor, textareaStyles } from './textarea.styles';
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
    <View style={textareaStyles.container}>
      {title && (
        <Text id="textarea-label" style={textareaStyles.label}>
          {title}
        </Text>
      )}

      <View
        style={[
          textareaStyles.inputWrapper,
          { borderColor: getBorderColor(isFocused, error) },
          hasError && errorStyles.inputWrapperError,
        ]}>
        <TextInput
          aria-labelledby="textarea-label"
          aria-disabled={disabled}
          style={[textareaStyles.input, hasError && errorStyles.inputError, style]}
          editable={!disabled}
          multiline
          maxLength={maxLength}
          value={value}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          {...props}
        />
      </View>

      {(error || maxLength) && (
        <View style={textareaStyles.footer}>
          {error ? (
            <View style={errorStyles.errorContainer}>
              <Feather name="alert-circle" size={14} color={colors.label.error} />
              <Text style={errorStyles.errorText}>{error}</Text>
            </View>
          ) : (
            <View />
          )}
          {maxLength && (
            <Text style={textareaStyles.charCount}>
              {value?.length ?? 0}/{maxLength}
            </Text>
          )}
        </View>
      )}
    </View>
  );
};
