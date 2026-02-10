import { Pressable, Text } from 'react-native';
import { labelVariantStyle, buttonStyles as styles, variantStyle } from './button.styles';
import { ButtonProps } from './button.types';

export const Button = ({ label, variant = 'primary', disabled, ...props }: ButtonProps) => {
  return (
    <Pressable
      style={[styles.base, variantStyle(variant), disabled && styles.disabled]}
      disabled={disabled}
      accessibilityRole="button"
      {...props}>
      <Text style={[styles.label, labelVariantStyle(variant), disabled && styles.disabledLabel]}>
        {label}
      </Text>
    </Pressable>
  );
};
