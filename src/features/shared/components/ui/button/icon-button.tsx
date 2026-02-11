import { cloneElement } from 'react';
import { Pressable } from 'react-native';
import {
  disabledIconColor,
  iconButtonStyles as styles,
  iconColorMap,
  iconSizeMap,
  sizeStyle,
  variantStyle,
} from './icon-button.styles';
import { IconButtonProps } from './icon-button.types';

export const IconButton = ({
  icon,
  variant = 'primary',
  size = 'md',
  disabled,
  accessibilityLabel,
  ...props
}: IconButtonProps) => {
  const iconColor = disabled ? disabledIconColor : iconColorMap[variant];
  const iconSize = iconSizeMap[size];

  return (
    <Pressable
      style={[styles.base, sizeStyle(size), variantStyle(variant), disabled && styles.disabled]}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      {...props}>
      {cloneElement(icon, { size: iconSize, color: iconColor } as Record<string, unknown>)}
    </Pressable>
  );
};
