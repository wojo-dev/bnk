import { haptic } from '@/lib/haptics';
import { cloneElement } from 'react';
import { Pressable, Text, View } from 'react-native';
import {
  containerStyle,
  getIconColor,
  iconSizeMap,
  iconButtonStyles as styles,
} from './icon-button.styles';
import { IconButtonProps } from './icon-button.types';

export const IconButton = ({
  icon,
  label,
  color = 'blue',
  size = 'md',
  disabled,
  accessibilityLabel,
  ...props
}: IconButtonProps) => {
  const iconColor = getIconColor(color, !!disabled);
  const iconSize = iconSizeMap[size];

  return (
    <View style={styles.wrapper}>
      <Pressable
        style={[styles.container, containerStyle(size, color), disabled && styles.disabled]}
        disabled={disabled}
        onPressIn={() => haptic.light()}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}
        {...props}>
        {cloneElement(icon, { size: iconSize, color: iconColor } as Record<string, unknown>)}
      </Pressable>
      {label && <Text style={styles.label}>{label}</Text>}
    </View>
  );
};
