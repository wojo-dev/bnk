import { colors } from '@/tokens/colors';
import { radius, spacing } from '@/tokens/spacing';
import { typography } from '@/tokens/typography';
import { scale } from '@/tokens/scale';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.md,
  },
  iconContainer: {
    width: scale(120),
    height: scale(120),
    borderRadius: radius['2xl'],
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
  errorText: {
    ...typography.body,
    textAlign: 'center',
    color: colors.label.error,
    marginBottom: spacing.lg,
  },
  buttonGroup: {
    width: '100%',
    gap: spacing.sm,
    marginTop: spacing.lg,
  },
});
