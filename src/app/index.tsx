import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/features/shared/components/animated-icon';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <AnimatedIcon />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: 'center',
    gap: 3,
    paddingBottom: 10 + 3,
    maxWidth: 100,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 10,
    gap: 10,
  },
  title: {
    textAlign: 'center',
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    gap: 3,
    alignSelf: 'stretch',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
