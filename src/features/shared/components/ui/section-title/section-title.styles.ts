// section-title styles

import { colors } from '@/tokens/colors';
import { typography } from '@/tokens/typography';
import { StyleSheet } from 'react-native';

export const sectionTitleStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: typography.medium.fontSize,
    lineHeight: typography.medium.lineHeight,
    fontWeight: '700' as const,
    fontFamily: typography.medium.fontFamily,
    color: colors.label.text,
  },
  action: {
    fontSize: typography.medium.fontSize,
    lineHeight: typography.medium.lineHeight,
    fontWeight: '600' as const,
    fontFamily: typography.medium.fontFamily,
    color: colors.accent.primary,
  },
});
