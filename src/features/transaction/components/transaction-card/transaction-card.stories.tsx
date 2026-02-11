import { transactions } from '@/server/data/transaction.data';
import { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { Transaction } from '../../types/transaction.types';
import { TransactionCard } from './transaction-card';

const meta = {
  title: 'Transaction/TransactionCard',
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

const items = transactions as Transaction[];

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
