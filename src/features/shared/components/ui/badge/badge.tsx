// components/badge.tsx
import { Text, View } from 'react-native';
import { labelVariantStyle, badgeStyles as styles, variantStyle } from './badge.styles';
import { BadgeProps } from './badge.types';

export const Badge = ({ title, variant = 'default', style, ...props }: BadgeProps) => {
  return (
    <View style={[styles.base, variantStyle(variant), style]} accessibilityRole="text" {...props}>
      <Text style={[styles.label, labelVariantStyle(variant)]}>{title}</Text>
    </View>
  );
};
