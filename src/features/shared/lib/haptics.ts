import * as Haptics from 'expo-haptics';
import { Platform } from 'react-native';

export const haptic = {
  light: () => Platform.OS !== 'web' && Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light),
  error: () =>
    Platform.OS !== 'web' && Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error),
  success: () =>
    Platform.OS !== 'web' && Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success),
};
