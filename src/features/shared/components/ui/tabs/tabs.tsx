// components/tabs.tsx

import { Pressable, Text, View } from 'react-native';
import { tabsStyles as styles } from './tabs.styles';
import { TabsProps } from './tabs.types';

export const Tabs = ({ tabs, activeTab, onTabChange, style, ...props }: TabsProps) => {
  return (
    <View style={[styles.container, style]} accessibilityRole="tablist" {...props}>
      {tabs.map((tab) => {
        const isActive = tab.key === activeTab;
        return (
          <Pressable
            key={tab.key}
            style={[styles.tab, isActive && styles.tabActive]}
            onPress={() => onTabChange(tab.key)}
            accessibilityRole="tab"
            accessibilityState={{ selected: isActive }}>
            <Text style={[styles.label, isActive && styles.activeLabel]}>{tab.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};
