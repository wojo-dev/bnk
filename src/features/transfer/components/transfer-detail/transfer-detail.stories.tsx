import { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { TransferDetail } from './transfer-detail';

const meta = {
  title: 'Transfer/TransferDetail',
  component: TransferDetail,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof TransferDetail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Completed: Story = {
  args: {
    data: {
      amount: '250.00',
      currency: 'RM',
      recipientName: 'Sarah Lim',
      bank: 'Maybank',
      accountNumber: '•••• 7392',
      dateTime: '9 Feb 2026, 9:42 AM',
      reference: 'RYT-2026020941827',
      note: 'Lunch yesterday 🍜',
      status: 'completed',
    },
  },
};

export const Pending: Story = {
  args: {
    data: {
      amount: '1,200.00',
      currency: 'RM',
      recipientName: 'Ahmad Razak',
      bank: 'CIMB',
      accountNumber: '•••• 5018',
      dateTime: '10 Feb 2026, 3:15 PM',
      reference: 'RYT-2026021015302',
      note: 'Rent payment',
      status: 'pending',
    },
  },
};

export const Failed: Story = {
  args: {
    data: {
      amount: '89.90',
      currency: 'RM',
      recipientName: 'Jason Tan',
      bank: 'Public Bank',
      accountNumber: '•••• 2241',
      dateTime: '8 Feb 2026, 11:00 AM',
      reference: 'RYT-2026020811005',
      status: 'failed',
    },
  },
};

export const WithoutNote: Story = {
  args: {
    data: {
      amount: '500.00',
      currency: 'RM',
      recipientName: 'Mei Ling',
      bank: 'Hong Leong',
      accountNumber: '•••• 9103',
      dateTime: '7 Feb 2026, 2:30 PM',
      reference: 'RYT-2026020714301',
      status: 'completed',
    },
  },
};
