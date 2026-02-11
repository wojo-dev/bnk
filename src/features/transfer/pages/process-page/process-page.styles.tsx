import { colors } from '@/tokens/colors';
import { spacing } from '@/tokens/spacing';
import { typography } from '@/tokens/typography';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    gap: spacing.md,
    alignItems: 'center',
  },
  statusText: {
    ...typography.body,
    textAlign: 'center',
  },
  errorText: {
    ...typography.body,
    textAlign: 'center',
    color: colors.label.error,
  },
});
