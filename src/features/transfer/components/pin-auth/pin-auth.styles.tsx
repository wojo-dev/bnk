import { colors } from '@/tokens/colors';
import { scale } from '@/tokens/scale';
import { radius, spacing } from '@/tokens/spacing';
import { typography } from '@/tokens/typography';
import { StyleSheet } from 'react-native';

export const pinAuthStyles = StyleSheet.create({
  iconContainer: {
    width: scale(64),
    height: scale(64),
    borderRadius: radius.xl,
    backgroundColor: '#EEF2FF',
    borderWidth: 1,
    borderColor: '#DEE5F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  heading: {
    ...typography.heading,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  subtitle: {
    ...typography.body,
    color: colors.label.placeholder,
    textAlign: 'center',
  },
  bold: {
    fontWeight: '700',
  },
  pinInput: {
    marginTop: spacing.xl,
  },
  numpad: {
    marginTop: spacing.xl,
  },
});
