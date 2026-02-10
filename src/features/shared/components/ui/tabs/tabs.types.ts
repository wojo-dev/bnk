// tabs types

import { ViewProps } from 'react-native';

export type TabItem = {
  key: string;
  label: string;
};

export type TabsProps = ViewProps & {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (key: string) => void;
};
