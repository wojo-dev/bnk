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
    fontSize: typography.bodyBold.fontSize,
    lineHeight: typography.bodyBold.lineHeight,
    fontWeight: typography.bodyBold.fontWeight,
    fontFamily: typography.bodyBold.fontFamily,
    color: colors.label.text,
  },
  action: {
    fontSize: typography.action.fontSize,
    lineHeight: typography.action.lineHeight,
    fontWeight: typography.action.fontWeight,
    fontFamily: typography.action.fontFamily,
    color: colors.accent.primary,
  },
});
