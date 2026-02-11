import { sizes } from '@/tokens/sizes';
import { spacing } from '@/tokens/spacing';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: sizes['7xl'],
  },
  pager: {
    flex: 1,
  },
  page: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: sizes['6xl'],
    left: spacing.md,
    right: spacing.md,
  },
});
