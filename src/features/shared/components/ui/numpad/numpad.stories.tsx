import { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { Numpad } from './numpad';

const meta = {
  title: 'UI/Numpad',
  component: Numpad,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Numpad>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onKeyPress: () => {},
  },
};

export const Disabled: Story = {
  args: {
    onKeyPress: () => {},
    disabled: true,
  },
};
