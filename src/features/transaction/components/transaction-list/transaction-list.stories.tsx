import { getTransactions } from '@/server/data/transaction.data';
import { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { Transaction } from '../../types/transaction.types';
import { TransactionList } from './transaction-list';

const meta = {
  title: 'Transaction/TransactionList',
  component: TransactionList,
  decorators: [
    (Story) => (
      <View style={{ padding: 16, flex: 1 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof TransactionList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    transactions: getTransactions() as Transaction[],
  },
};
