// components/history-list.stories.tsx
import { Meta, StoryObj } from '@storybook/react-native';
import { HistoryList } from './history-list';

const meta = {
  component: HistoryList,
} satisfies Meta<typeof HistoryList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    history: [],
  },
};
