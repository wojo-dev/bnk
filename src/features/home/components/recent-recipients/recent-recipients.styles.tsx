// recent recipients styles

import { spacing } from '@/features/shared/styles/tokens/spacing';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  recipient: {
    alignItems: 'center',
    gap: spacing.sm,
    padding: spacing.sm,
    minWidth: 100,
  },
});
