// recent recipients styles

import { sizes } from '@/tokens/sizes';
import { spacing } from '@/tokens/spacing';
import { typography } from '@/tokens/typography';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingLeft: spacing.md,
  },
  recipient: {
    width: sizes['3xl'] + spacing.lg,
    alignItems: 'center',
    gap: spacing.sm,
  },
  name: {
    ...typography.small,
  },
});
