import { colors } from '@/features/shared/styles/tokens/colors';
import { sizes } from '@/tokens/sizes';
import { spacing } from '@/tokens/spacing';
import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? spacing.md : sizes['7xl'] + spacing.md,
    paddingHorizontal: spacing.sm,
    backgroundColor: colors.background.neutral,
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
