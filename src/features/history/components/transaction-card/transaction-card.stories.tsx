import { history } from '@/server/data/history.data';
import { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { History } from '../../types/history.types';
import { TransactionCard } from './transaction-card';

const meta = {
  title: 'History/TransactionCard',
  component: TransactionCard,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof TransactionCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const items = history as History[];

export const Completed: Story = {
  args: {
    item: items.find((i) => i.status === 'completed') ?? items[0],
  },
};

export const Pending: Story = {
  args: {
    item: items.find((i) => i.status === 'pending') ?? items[0],
  },
};
