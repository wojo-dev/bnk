// components/badge.tsx
import { Text, View, type ViewProps } from 'react-native';
import { badgeStyles } from './badge.styles';

type BadgeVariant = 'default' | 'primary' | 'success' | 'error' | 'warning' | 'outline';

type BadgeProps = ViewProps & {
  label: string;
  variant?: BadgeVariant;
};

const variantStyleMap = {
  default: badgeStyles.default,
  primary: badgeStyles.primary,
  success: badgeStyles.success,
  error: badgeStyles.error,
  warning: badgeStyles.warning,
  outline: badgeStyles.outline,
} as const;

const labelStyleMap = {
  default: badgeStyles.defaultLabel,
  primary: badgeStyles.primaryLabel,
  success: badgeStyles.successLabel,
  error: badgeStyles.errorLabel,
  warning: badgeStyles.warningLabel,
  outline: badgeStyles.outlineLabel,
} as const;

export const Badge = ({ label, variant = 'default', style, ...props }: BadgeProps) => {
  return (
    <View
      style={[badgeStyles.base, variantStyleMap[variant], style]}
      accessibilityRole="text"
      {...props}>
      <Text style={[badgeStyles.label, labelStyleMap[variant]]}>{label}</Text>
    </View>
  );
};
