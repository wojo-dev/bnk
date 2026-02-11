import { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { BalanceCard } from './balance-card';

const meta = {
  title: 'Balance/BalanceCard',
  component: BalanceCard,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof BalanceCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    amount: 12450.8,
  },
};

export const LargeAmount: Story = {
  args: {
    amount: 1250000.5,
    accountType: 'Current Account',
    accountNumber: '7392',
  },
};

export const SmallAmount: Story = {
  args: {
    amount: 24.0,
    accountType: 'Savings Account',
    accountNumber: '1234',
  },
};

export const ZeroBalance: Story = {
  args: {
    amount: 0,
  },
};
