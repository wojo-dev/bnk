import { haptic } from '@/lib/haptics';
import { useEffect, useRef, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { getDotStyle, pinInputStyles as styles } from './pin-input.styles';
import { PinInputProps } from './pin-input.types';

export const PinInput = ({
  length = 6,
  value = '',
  error,
  disabled,
  secure,
  onChangeValue,
  onComplete,
  style,
  ...props
}: PinInputProps) => {
  const inputRef = useRef<TextInput>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handlePress = () => {
    if (!disabled) {
      inputRef.current?.focus();
    }
  };

  const prevErrorRef = useRef(error);
  useEffect(() => {
    if (error && !prevErrorRef.current) haptic.error();
    prevErrorRef.current = error;
  }, [error]);

  const handleChange = (text: string) => {
    const sanitized = text.replace(/[^0-9]/g, '').slice(0, length);
    if (sanitized.length > value.length) haptic.light();
    onChangeValue?.(sanitized);

    if (sanitized.length === length) {
      haptic.success();
      onComplete?.(sanitized);
    }
  };

  return (
    <View style={[styles.container, style]} {...props}>
      <Pressable
        style={styles.row}
        onPress={handlePress}
        accessibilityRole="none"
        accessible={false}>
        {Array.from({ length }, (_, index) => {
          const isFilled = index < value.length;
          const isCellFocused = isFocused && index === value.length;

          return (
            <View
              key={index}
              style={[styles.dot, getDotStyle(isCellFocused, isFilled, error, disabled)]}
            />
          );
        })}
      </Pressable>

      <TextInput
        ref={inputRef}
        style={styles.hiddenInput}
        value={value}
        onChangeText={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        keyboardType="number-pad"
        maxLength={length}
        editable={!disabled}
        caretHidden
        accessibilityLabel={`PIN input, ${length} digits`}
        accessibilityRole="text"
      />

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
