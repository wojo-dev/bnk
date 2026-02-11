import { colors } from '@/tokens/colors';
import { spacing } from '@/tokens/spacing';
import { typography } from '@/tokens/typography';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background.background,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    padding: spacing.lg,
    paddingTop: spacing['2xl'],
  },
  checkCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: colors.background.success,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
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
    marginBottom: spacing.lg,
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
