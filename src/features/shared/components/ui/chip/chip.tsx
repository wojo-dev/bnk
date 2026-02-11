// components/chip.tsx
import { Pressable, Text, ViewStyle } from 'react-native';
import { chipStyles as styles } from './chip.styles';
import { ChipProps } from './chip.types';

export const Chip = ({ label, selected = false, style, ...props }: ChipProps) => {
  return (
    <Pressable
      style={[styles.base, selected && styles.selected, style as ViewStyle]}
      accessibilityRole="button"
      accessibilityState={{ selected }}
      {...props}>
      <Text style={[styles.label, selected && styles.selectedLabel]}>{label}</Text>
    </Pressable>
  );
};
