import { sizes } from '@/features/shared/styles/tokens/sizes';
import { colors } from '@/tokens/colors';
import { greenShadow } from '@/tokens/shadows';
import { spacing } from '@/tokens/spacing';
import { typography } from '@/tokens/typography';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.neutral,
  },
  scrollContent: {
    backgroundColor: colors.background.neutral,
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingTop: sizes['6xl'],
  },
  checkCircleWrapper: {
    width: sizes['6xl'],
    height: sizes['6xl'],
    borderRadius: sizes['6xl'] / 2,
    marginBottom: spacing.lg,
    ...greenShadow,
  },
  checkCircle: {
    width: sizes['6xl'],
    height: sizes['6xl'],
    borderRadius: sizes['6xl'] / 2,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  title: {
    ...typography.display,
    textAlign: 'center',
    marginBottom: spacing.xs,
  },
  subtitle: {
    ...typography.body,
    color: colors.label.placeholder,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  detail: {
    width: '100%',
    marginBottom: spacing.md,
  },
  actionRow: {
    flexDirection: 'row',
    gap: spacing.md,
    width: '100%',
    marginBottom: spacing.md,
  },
  actionButton: {
    flex: 1,
  },
  backButton: {
    width: '100%',
    marginBottom: spacing.md,
  },
  transactionId: {
    ...typography.caption,
    color: colors.label.placeholder,
    textAlign: 'center',
  },
});
