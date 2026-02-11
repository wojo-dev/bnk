// tabs types

import { SharedValue } from 'react-native-reanimated';
import { ViewProps } from 'react-native';

export type TabItem = {
  key: string;
  label: string;
};

export type TabsProps = ViewProps & {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (key: string) => void;
  /** Shared value from PagerView scroll position (0 to tabs.length-1) for swipe-synced pill */
  scrollOffset?: SharedValue<number>;
};
