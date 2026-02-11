import { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { ProfileHeader } from './profile-header';

const meta = {
  title: 'Home/ProfileHeader',
  component: ProfileHeader,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ProfileHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Danish H.',
  },
};

export const WithoutNotifications: Story = {
  args: {
    name: 'Danish H.',
    hasNotifications: false,
  },
};

export const LongName: Story = {
  args: {
    name: 'Muhammad Amirul Hakim',
  },
};
