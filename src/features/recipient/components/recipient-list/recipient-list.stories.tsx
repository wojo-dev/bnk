import { recipients } from '@/server/data/recipients.data';
import { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { Recipient } from '../../types/recipient.types';
import { RecipientList } from './recipient-list';

const meta = {
  title: 'Recipients/RecipientList',
  component: RecipientList,
  decorators: [
    (Story) => (
      <View style={{ flex: 1 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof RecipientList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    recipients: recipients as Recipient[],
  },
};

export const WithSelection: Story = {
  args: {
    recipients: recipients as Recipient[],
  },
  render: (args) => {
    return <RecipientList {...args} />;
  },
};
