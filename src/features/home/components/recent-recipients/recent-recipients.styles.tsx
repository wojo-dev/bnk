// recent recipients styles

import { sizes } from '@/tokens/sizes';
import { spacing } from '@/tokens/spacing';
import { typography } from '@/tokens/typography';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  recipient: {
    paddingLeft: spacing.md,
    width: sizes['4xl'] + spacing.sm,
    alignItems: 'center',
    gap: spacing.sm,
  },
  name: {
    ...typography.small,
  },
});
