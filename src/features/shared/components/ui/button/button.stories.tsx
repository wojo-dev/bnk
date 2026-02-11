// components/button.stories.tsx
import { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { Button } from './button';

const meta = {
  title: 'UI/Button',
  component: Button,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Continue',
  },
};

export const Secondary: Story = {
  args: {
    title: 'Cancel',
    variant: 'secondary',
  },
};

export const Disabled: Story = {
  args: {
    title: 'Submit',
    disabled: true,
  },
};
