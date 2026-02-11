import { Text, View } from 'react-native';
import { offlineBannerStyles as styles } from './offline-banner.styles';
import { OfflineBannerProps } from './offline-banner.types';

export const OfflineBanner = ({ visible }: OfflineBannerProps) => {
  if (!visible) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>No internet connection</Text>
    </View>
  );
};
