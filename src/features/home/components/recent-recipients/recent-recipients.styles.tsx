// recent recipients styles

import { typography } from '@/tokens/typography';

import { sizes } from '@/tokens/sizes';
import { spacing } from '@/tokens/spacing';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  recipient: {
    alignItems: 'center',
    gap: spacing.sm,
    padding: spacing.sm,
    minWidth: sizes['4xl'],
  },
  name: {
    ...typography.small,
  },
});
