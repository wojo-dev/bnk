import { scale } from '@/tokens/scale';
import { blueShadow } from '@/tokens/shadows';
import { sizes } from '@/tokens/sizes';
import { radius, spacing } from '@/tokens/spacing';
import { typography } from '@/tokens/typography';
import { StyleSheet } from 'react-native';

export const balanceCardStyles = StyleSheet.create({
  shadowWrapper: {
    borderRadius: radius.xl,
    backgroundColor: '#1B4FD8',
    ...blueShadow,
  },
  gradient: {
    borderRadius: radius.xl,
    padding: spacing.lg,
    paddingVertical: spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  headerLabel: {
    fontSize: typography.body.fontSize,
    fontWeight: '500',
    fontFamily: typography.body.fontFamily,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  eyeButton: {
    width: sizes['2xl'],
    height: sizes['2xl'],
    borderRadius: radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  amountRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: spacing.md,
  },
  currency: {
    fontSize: scale(18),
    fontWeight: '600',
    fontFamily: typography.display.fontFamily,
    color: '#FFFFFF',
    marginRight: spacing.xs,
  },
  amount: {
    fontSize: scale(40),
    fontWeight: '700',
    fontFamily: typography.display.fontFamily,
    color: '#FFFFFF',
  },
  hiddenAmount: {
    fontSize: scale(32),
    fontWeight: '700',
    fontFamily: typography.display.fontFamily,
    color: '#FFFFFF',
    letterSpacing: 4,
  },
  accountInfo: {
    fontSize: typography.caption.fontSize,
    fontWeight: '400',
    fontFamily: typography.caption.fontFamily,
    color: 'rgba(255, 255, 255, 0.7)',
    letterSpacing: 0.5,
  },
});
