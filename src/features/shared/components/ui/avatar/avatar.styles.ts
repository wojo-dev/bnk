import { radius } from '@/features/shared/styles/tokens/spacing';
import { typography } from '@/features/shared/styles/tokens/typography';
import { StyleSheet } from 'react-native';

export const avatarStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.lg,
  },
  initials: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontFamily: typography.body.fontFamily,
  },
});
