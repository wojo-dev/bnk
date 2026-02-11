import { haptic } from '@/features/shared/lib/haptics';
import { Stack, router } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchLayout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              haptic.light();
              router.back();
            }}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        ),
      }}
    />
  );
}
