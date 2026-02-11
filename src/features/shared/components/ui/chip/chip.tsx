// components/chip.tsx
import { haptic } from '@/lib/haptics';
import { Pressable, Text, ViewStyle } from 'react-native';
import { chipStyles as styles } from './chip.styles';
import { ChipProps } from './chip.types';

export const Chip = ({ label, selected = false, style, onPress, ...props }: ChipProps) => {
  return (
    <Pressable
      style={[styles.base, selected && styles.selected, style as ViewStyle]}
      accessibilityRole="button"
      accessibilityState={{ selected }}
      onPress={(e) => {
        haptic.light();
        onPress?.(e);
      }}
      {...props}>
      <Text style={[styles.label, selected && styles.selectedLabel]}>{label}</Text>
    </Pressable>
  );
};
