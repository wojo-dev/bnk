import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { IconButton } from './icon-button';

const meta = {
  component: IconButton,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: <MaterialCommunityIcons name="plus" />,
    accessibilityLabel: 'Add',
  },
};

export const Secondary: Story = {
  args: {
    icon: <MaterialCommunityIcons name="pencil" />,
    variant: 'secondary',
    accessibilityLabel: 'Edit',
  },
};

export const Small: Story = {
  args: {
    icon: <MaterialCommunityIcons name="close" />,
    size: 'sm',
    accessibilityLabel: 'Close',
  },
};

export const Large: Story = {
  args: {
    icon: <MaterialCommunityIcons name="arrow-right" />,
    size: 'lg',
    accessibilityLabel: 'Next',
  },
};

export const Disabled: Story = {
  args: {
    icon: <MaterialCommunityIcons name="send" />,
    disabled: true,
    accessibilityLabel: 'Send',
  },
};
