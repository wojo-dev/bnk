import { Pressable, Text, type PressableProps } from 'react-native';
import { buttonStyles as styles } from './button.styles';

type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = PressableProps & {
  label: string;
  variant?: ButtonVariant;
  disabled?: boolean;
};

export const Button = ({ label, variant = 'primary', disabled, ...props }: ButtonProps) => {
  const variantStyle = variant === 'primary' ? styles.primary : styles.secondary;

  const labelVariantStyle = variant === 'primary' ? styles.primaryLabel : styles.secondaryLabel;

  return (
    <Pressable
      style={[styles.base, variantStyle, disabled && styles.disabled]}
      disabled={disabled}
      accessibilityRole="button"
      {...props}>
      <Text style={[styles.label, labelVariantStyle, disabled && styles.disabledLabel]}>
        {label}
      </Text>
    </Pressable>
  );
};
