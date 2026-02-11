import { haptic } from '@/features/shared/lib/haptics';
import { colors } from '@/tokens/colors';
import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs
      minimizeBehavior="onScrollDown"
      backgroundColor={colors.background.neutral}
      tintColor={colors.accent.primary}
      indicatorColor={colors.background.neutral}
      labelStyle={{ selected: { color: colors.label.primary } }}
      screenListeners={{
        tabPress: () => {
          haptic.light();
        },
      }}>
      <NativeTabs.Trigger name="index" disableAutomaticContentInsets>
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon src={require('@/assets/images/tabIcons/hh.png')} />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="recipients" role="search">
        <NativeTabs.Trigger.Label>Search</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon src={require('@/assets/images/tabIcons/sd.png')} />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
