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
    fontSize: typography.body.fontSize,
    lineHeight: typography.body.lineHeight,
    fontWeight: '700' as const,
    fontFamily: typography.body.fontFamily,
    color: colors.label.text,
  },
  action: {
    fontSize: typography.caption.fontSize,
    lineHeight: typography.caption.lineHeight,
    fontWeight: '600' as const,
    fontFamily: typography.caption.fontFamily,
    color: colors.accent.primary,
  },
});
