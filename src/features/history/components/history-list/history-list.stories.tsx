import { history } from '@/server/history';
import { Meta, StoryObj } from '@storybook/react-native';
import { History } from '../../types/history';
import { HistoryList } from './history-list';

const meta = {
  component: HistoryList,
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof HistoryList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    history: history as History[],
  },
};
