// components/tabs.tsx

import { useCallback, useState } from 'react';
import { LayoutChangeEvent, Pressable, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { tabsStyles as styles } from './tabs.styles';
import { TabsProps } from './tabs.types';

const ANIMATION_CONFIG = { duration: 250 };

export const Tabs = ({
  tabs,
  activeTab,
  onTabChange,
  scrollOffset,
  style,
  ...props
}: TabsProps) => {
  const activeIndex = tabs.findIndex((t) => t.key === activeTab);
  const [tabWidth, setTabWidth] = useState(0);

  const internalOffset = useSharedValue(activeIndex * tabWidth);
  const offset = scrollOffset ?? internalOffset;

  const handleLayout = useCallback(
    (e: LayoutChangeEvent) => {
      const containerWidth = e.nativeEvent.layout.width;
      const width = containerWidth / tabs.length;
      setTabWidth(width);
      offset.value = activeIndex * width;
    },
    [tabs.length, activeIndex, offset],
  );

  const handleTabPress = useCallback(
    (key: string, index: number) => {
      if (!scrollOffset) {
        internalOffset.value = withTiming(index * tabWidth, ANIMATION_CONFIG);
      }
      onTabChange(key);
    },
    [tabWidth, onTabChange, scrollOffset, internalOffset],
  );

  const pillStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value * (scrollOffset ? tabWidth : 1) }],
  }));

  return (
    <View style={[styles.container, style]} accessibilityRole="tablist" {...props}>
      <View style={styles.tabRow} onLayout={handleLayout}>
        {tabWidth > 0 && <Animated.View style={[styles.pill, { width: tabWidth }, pillStyle]} />}
        {tabs.map((tab, index) => {
          const isActive = tab.key === activeTab;
          return (
            <Pressable
              key={tab.key}
              style={styles.tab}
              onPress={() => handleTabPress(tab.key, index)}
              accessibilityRole="tab"
              accessibilityState={{ selected: isActive }}>
              <Text style={[styles.label, isActive && styles.activeLabel]}>{tab.label}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};
