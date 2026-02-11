import { history } from '@/server/data/history.data';
import { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { History } from '../../types/history.types';
import { HistoryList } from './history-list';

const meta = {
  title: 'History/HistoryList',
  component: HistoryList,
  decorators: [
    (Story) => (
      <View style={{ padding: 16, flex: 1 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof HistoryList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    history: history as History[],
  },
};
