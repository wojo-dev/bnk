// components/input.stories.tsx
import { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { Input } from './input';

const meta = {
  title: 'UI/Input',
  component: Input,
  decorators: [
    // Here we're adding a container with 16px padding.
    // add this 👇
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: 'First Name',
    placeholder: 'John',
  },
};

export const Error: Story = {
  args: {
    title: 'Email',
    error: 'Email is required',
    disabled: false,
    placeholder: 'example@example.com',
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled',
    error: '',
    disabled: true,
    placeholder: 'Disabled',
  },
};
