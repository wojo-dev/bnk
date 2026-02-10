// card styles

import { colors } from '@/tokens/colors';
import { radius, spacing } from '@/tokens/spacing';
import { typography } from '@/tokens/typography';
import { StyleSheet } from 'react-native';
import { CardProps } from './card.types';

export const cardStyles = StyleSheet.create({
  base: {
    borderRadius: radius.lg,
    padding: spacing.md,
  },
  default: {
    backgroundColor: colors.background.neutral,
  },
  elevated: {
    backgroundColor: colors.background.neutral,
    elevation: 4,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  outlined: {
    backgroundColor: colors.background.neutral,
    borderWidth: 1,
    borderColor: colors.border.input,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  title: {
    fontSize: typography.heading.fontSize,
    fontWeight: typography.heading.fontWeight,
    fontFamily: typography.heading.fontFamily,
    lineHeight: typography.heading.lineHeight,
    color: colors.label.text,
  },
  description: {
    fontSize: typography.body.fontSize,
    fontWeight: typography.body.fontWeight,
    fontFamily: typography.body.fontFamily,
    lineHeight: typography.body.lineHeight,
    color: colors.label.placeholder,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.sm,
  },
});

const variantStyles = {
  default: cardStyles.default,
  elevated: cardStyles.elevated,
  outlined: cardStyles.outlined,
};
export const variantStyle = (variant: CardProps['variant']) => variantStyles[variant ?? 'default'];
