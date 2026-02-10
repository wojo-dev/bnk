// components/badge.tsx
import { Text, View, type ViewProps } from 'react-native';
import { badgeStyles as styles } from './badge.styles';

type BadgeVariant = 'default' | 'primary' | 'success' | 'error' | 'warning' | 'outline';

type BadgeProps = ViewProps & {
  label: string;
  variant?: BadgeVariant;
};

const variantStyleMap = {
  default: styles.default,
  primary: styles.primary,
  success: styles.success,
  error: styles.error,
  warning: styles.warning,
  outline: styles.outline,
} as const;

const labelStyleMap = {
  default: styles.defaultLabel,
  primary: styles.primaryLabel,
  success: styles.successLabel,
  error: styles.errorLabel,
  warning: styles.warningLabel,
  outline: styles.outlineLabel,
} as const;

export const Badge = ({ label, variant = 'default', style, ...props }: BadgeProps) => {
  return (
    <View
      style={[styles.base, variantStyleMap[variant], style]}
      accessibilityRole="text"
      {...props}>
      <Text style={[styles.label, labelStyleMap[variant]]}>{label}</Text>
    </View>
  );
};
