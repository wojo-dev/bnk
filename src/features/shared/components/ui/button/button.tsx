import { haptic } from '@/features/shared/lib/haptics';
import { Pressable, StyleProp, Text, ViewStyle } from 'react-native';
import { labelVariantStyle, buttonStyles as styles, variantStyle } from './button.styles';
import { ButtonProps } from './button.types';

export const Button = ({
  title,
  variant = 'primary',
  disabled,
  style,
  ...props
}: ButtonProps & { style?: StyleProp<ViewStyle> }) => {
  return (
    <Pressable
      style={[
        styles.base,
        variantStyle(variant),
        disabled && variant !== 'link' && styles.disabled,
        style as ViewStyle,
      ]}
      disabled={disabled}
      onPressIn={() => haptic.light()}
      accessibilityRole="button"
      {...props}>
      <Text style={[styles.label, labelVariantStyle(variant), disabled && styles.disabledLabel]}>
        {title}
      </Text>
    </Pressable>
  );
};
