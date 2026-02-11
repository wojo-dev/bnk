// components/badge.stories.tsx
import { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { Badge } from './badge';

const meta = {
  title: 'UI/Badge',
  component: Badge,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Default',
  },
};

export const Primary: Story = {
  args: {
    title: 'Primary',
    variant: 'primary',
  },
};

export const Success: Story = {
  args: {
    title: 'Approved',
    variant: 'success',
  },
};

export const Error: Story = {
  args: {
    title: 'Failed',
    variant: 'error',
  },
};

export const Warning: Story = {
  args: {
    title: 'Pending',
    variant: 'warning',
  },
};

export const Outline: Story = {
  args: {
    title: 'Draft',
    variant: 'outline',
  },
};
