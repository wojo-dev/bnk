import { colors } from '@/tokens/colors';
import { typography } from '@/tokens/typography';
import { StyleSheet } from 'react-native';

export const authFailedStyles = StyleSheet.create({
  errorText: {
    ...typography.body,
    textAlign: 'center',
    color: colors.label.error,
  },
});
