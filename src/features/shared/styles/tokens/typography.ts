import { colors } from './colors';
import { fonts } from './fonts';
import { scale } from './scale';

export const typography = {
  display: {
    fontSize: scale(28),
    lineHeight: scale(32),
    fontWeight: '700' as const,
    fontFamily: fonts.display,
    color: colors.label.text,
  },
  heading: {
    fontSize: scale(24),
    lineHeight: scale(32),
    fontWeight: '600' as const,
    fontFamily: fonts.heading,
    color: colors.label.text,
  },
  body: {
    fontSize: scale(16),
    lineHeight: scale(24),
    fontWeight: '400' as const,
    fontFamily: fonts.body,
    color: colors.label.text,
  },
  caption: {
    fontSize: scale(12),
    lineHeight: scale(16),
    fontWeight: '400' as const,
    fontFamily: fonts.caption,
    color: colors.label.text,
  },
  label: {
    fontSize: scale(12),
    lineHeight: scale(16),
    fontWeight: '400' as const,
    fontFamily: fonts.label,
    color: colors.label.text,
  },
  button: {
    fontSize: scale(16),
    lineHeight: scale(20),
    fontWeight: '700' as const,
    fontFamily: fonts.button,
    color: colors.label.text,
  },
  input: {
    fontSize: scale(16),
    lineHeight: scale(24),
    fontWeight: '400' as const,
    fontFamily: fonts.input,
    color: colors.label.text,
  },
  placeholder: {
    fontSize: scale(16),
    lineHeight: scale(24),
    fontWeight: '400' as const,
    fontFamily: fonts.placeholder,
    color: colors.label.placeholder,
  },
  error: {
    fontSize: scale(12),
    lineHeight: scale(16),
    fontWeight: '400' as const,
    fontFamily: fonts.body,
    color: colors.label.error,
  },
  badge: {
    fontSize: scale(11),
    lineHeight: scale(16),
    fontWeight: '700' as const,
    fontFamily: fonts.body,
    color: colors.label.text,
  },
  small: {
    fontSize: scale(10),
    lineHeight: scale(16),
    fontWeight: '400' as const,
    fontFamily: fonts.body,
    color: colors.label.text,
  },
  medium: {
    fontSize: scale(14),
    lineHeight: scale(20),
    fontWeight: '500' as const,
    fontFamily: fonts.body,
    color: colors.label.text,
  },
} as const;
