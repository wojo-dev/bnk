import { colors } from '@/tokens/colors';
import { radius, spacing } from '@/tokens/spacing';
import { scale } from '@/tokens/scale';
import { fonts } from '@/tokens/fonts';
import { StyleSheet } from 'react-native';

export const numpadStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: spacing.sm,
  },
  key: {
    width: scale(100),
    height: scale(72),
    borderRadius: radius.lg,
    backgroundColor: colors.background.neutral,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border.secondary,
  },
  keyPressed: {
    backgroundColor: colors.background.background,
  },
  keyLabel: {
    fontSize: scale(28),
    fontWeight: '700',
    fontFamily: fonts.display,
    color: colors.label.text,
  },
  placeholder: {
    width: scale(100),
    height: scale(72),
  },
  disabled: {
    opacity: 0.4,
  },
});
