// components/textarea.tsx
import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { getBorderColor, textareaStyles } from './textarea.styles';
import { TextAreaProps } from './textarea.types';

export const TextArea = ({ disabled, title, error, maxLength, value, ...props }: TextAreaProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={textareaStyles.container}>
      {title && (
        <Text id="textarea-label" style={textareaStyles.label}>
          {title}
        </Text>
      )}

      <View
        style={[textareaStyles.inputWrapper, { borderColor: getBorderColor(isFocused, error) }]}>
        <TextInput
          aria-labelledby="textarea-label"
          aria-disabled={disabled}
          style={textareaStyles.input}
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
          {error ? <Text style={textareaStyles.error}>{error}</Text> : <View />}
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
