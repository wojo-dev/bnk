// components/tabs.stories.tsx

import { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { Tabs } from './tabs';

const sampleTabs = [
  { key: 'all', label: 'All' },
  { key: 'income', label: 'Income' },
  { key: 'expenses', label: 'Expenses' },
];

const meta = {
  component: Tabs,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: sampleTabs,
    activeTab: 'all',
    onTabChange: () => {},
  },
};

export const SecondActive: Story = {
  args: {
    tabs: sampleTabs,
    activeTab: 'income',
    onTabChange: () => {},
  },
};
