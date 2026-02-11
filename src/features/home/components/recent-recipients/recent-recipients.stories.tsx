import { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { RecentRecipients } from './recent-recipients';

const meta = {
  title: 'Home/RecentRecipients',
  component: RecentRecipients,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof RecentRecipients>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
