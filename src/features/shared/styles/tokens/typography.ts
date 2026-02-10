import { colors } from './colors';
import { fonts } from './fonts';
import { scale } from './scale';

export const typography = {
  display: {
    fontSize: scale(32),
    lineHeight: scale(40),
    fontWeight: '700' as const,
    fontFamily: fonts.display,
    color: colors.text,
  },
  heading: {
    fontSize: scale(24),
    lineHeight: scale(32),
    fontWeight: '600' as const,
    fontFamily: fonts.heading,
    color: colors.text,
  },
  body: {
    fontSize: scale(16),
    lineHeight: scale(24),
    fontWeight: '400' as const,
    fontFamily: fonts.body,
    color: colors.text,
  },
  caption: {
    fontSize: scale(12),
    lineHeight: scale(16),
    fontWeight: '400' as const,
    fontFamily: fonts.caption,
    color: colors.text,
  },
  label: {
    fontSize: scale(12),
    lineHeight: scale(16),
    fontWeight: '400' as const,
    fontFamily: fonts.label,
    color: colors.text,
  },
  button: {
    fontSize: scale(14),
    lineHeight: scale(20),
    fontWeight: '500' as const,
    fontFamily: fonts.button,
    color: colors.text,
  },
  input: {
    fontSize: scale(16),
    lineHeight: scale(24),
    fontWeight: '400' as const,
    fontFamily: fonts.input,
    color: colors.text,
  },
  placeholder: {
    fontSize: scale(16),
    lineHeight: scale(24),
    fontWeight: '400' as const,
    fontFamily: fonts.placeholder,
    color: colors.placeholder,
  },
  error: {
    fontSize: scale(12),
    lineHeight: scale(16),
    fontWeight: '400' as const,
    fontFamily: fonts.body,
    color: colors.error,
  },
} as const;
