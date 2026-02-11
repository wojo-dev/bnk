// action buttons styles

import { spacing } from '@/features/shared/styles/tokens/spacing';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'stretch',
    gap: spacing.lg,
  },
});
