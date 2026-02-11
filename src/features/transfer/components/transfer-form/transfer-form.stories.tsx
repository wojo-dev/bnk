import { Recipient } from '@/features/recipients/types/recipient.types';
import { recipients } from '@/server/recipients.data';
import { Meta, StoryObj } from '@storybook/react-native';
import { Alert, View } from 'react-native';
import { TransferForm } from './transfer-form';

const meta = {
  title: 'Transfer/TransferForm',
  component: TransferForm,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof TransferForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    recipient: recipients[0] as Recipient,
    balance: 12450.8,
    onTransfer: async (data) => {
      Alert.alert('Transfer submitted:', JSON.stringify(data));
    },
  },
};

export const LowBalance: Story = {
  args: {
    recipient: recipients[1] as Recipient,
    balance: 5.0,
    onTransfer: async (data) => {
      Alert.alert('Transfer submitted:', JSON.stringify(data));
    },
  },
};
