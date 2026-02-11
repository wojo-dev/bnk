import { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { PinInput } from './pin-input';

const meta = {
  title: 'UI/PinInput',
  component: PinInput,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof PinInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    length: 6,
  },
};

export const WithValue: Story = {
  args: {
    length: 6,
    value: '123',
  },
};

export const Filled: Story = {
  args: {
    length: 6,
    value: '123456',
  },
};

export const Secure: Story = {
  args: {
    length: 6,
    value: '1234',
    secure: true,
  },
};

export const FourDigit: Story = {
  args: {
    length: 4,
    value: '12',
  },
};

export const Error: Story = {
  args: {
    length: 6,
    value: '123456',
    error: 'Incorrect PIN. Please try again.',
  },
};

export const Disabled: Story = {
  args: {
    length: 6,
    value: '123',
    disabled: true,
  },
};
