// components/button.tsx
import { Pressable, Text, type PressableProps } from 'react-native';
import { buttonStyles } from './button.styles';

type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = PressableProps & {
  label: string;
  variant?: ButtonVariant;
  disabled?: boolean;
};

export const Button = ({ label, variant = 'primary', disabled, ...props }: ButtonProps) => {
  const variantStyle = variant === 'primary' ? buttonStyles.primary : buttonStyles.secondary;

  const labelVariantStyle =
    variant === 'primary' ? buttonStyles.primaryLabel : buttonStyles.secondaryLabel;

  return (
    <Pressable
      style={[buttonStyles.base, variantStyle, disabled && buttonStyles.disabled]}
      disabled={disabled}
      accessibilityRole="button"
      {...props}>
      <Text style={[buttonStyles.label, labelVariantStyle, disabled && buttonStyles.disabledLabel]}>
        {label}
      </Text>
    </Pressable>
  );
};
