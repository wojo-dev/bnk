import { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { Avatar } from './avatar';

const meta = {
  title: 'UI/Avatar',
  component: Avatar,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Sarah Lee',
  },
};

export const Purple: Story = {
  args: {
    name: 'Raj Kumar',
  },
};

export const Amber: Story = {
  args: {
    name: 'Mei Yin Tan',
  },
};

export const Small: Story = {
  args: {
    name: 'John Wang',
    size: 36,
  },
};

export const Large: Story = {
  args: {
    name: 'Mohd Hassan',
    size: 64,
  },
};
