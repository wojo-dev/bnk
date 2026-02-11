import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Meta, StoryObj } from '@storybook/react-native';
import { ComponentProps } from 'react';
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

// icon is provided via render, so make all args optional
type Story = Omit<StoryObj<typeof meta>, 'args'> & {
  args?: Partial<ComponentProps<typeof IconButton>>;
};

export const Primary: Story = {
  args: {
    accessibilityLabel: 'Add',
  },
  render: (args) => <IconButton {...args} icon={<MaterialCommunityIcons name="plus" />} />,
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    accessibilityLabel: 'Edit',
  },
  render: (args) => <IconButton {...args} icon={<MaterialCommunityIcons name="pencil" />} />,
};

export const Small: Story = {
  args: {
    size: 'sm',
    accessibilityLabel: 'Close',
  },
  render: (args) => <IconButton {...args} icon={<MaterialCommunityIcons name="close" />} />,
};

export const Large: Story = {
  args: {
    size: 'lg',
    accessibilityLabel: 'Next',
  },
  render: (args) => <IconButton {...args} icon={<MaterialCommunityIcons name="arrow-right" />} />,
};

export const Disabled: Story = {
  args: {
    disabled: true,
    accessibilityLabel: 'Send',
  },
  render: (args) => <IconButton {...args} icon={<MaterialCommunityIcons name="send" />} />,
};
