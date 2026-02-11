import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Meta, StoryObj } from '@storybook/react-native';
import { ComponentProps } from 'react';
import { View } from 'react-native';
import { IconButton } from './icon-button';

const meta = {
  title: 'UI/IconButton',
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

type Story = Omit<StoryObj<typeof meta>, 'args'> & {
  args?: Partial<ComponentProps<typeof IconButton>>;
};

export const Blue: Story = {
  args: {
    label: 'Send',
    color: 'blue',
    accessibilityLabel: 'Send',
  },
  render: (args) => <IconButton {...args} icon={<MaterialCommunityIcons name="send" />} />,
};

export const Green: Story = {
  args: {
    label: 'Request',
    color: 'green',
    accessibilityLabel: 'Request',
  },
  render: (args) => (
    <IconButton {...args} icon={<MaterialCommunityIcons name="arrow-down-bold-box" />} />
  ),
};

export const Orange: Story = {
  args: {
    label: 'Pay Bills',
    color: 'orange',
    accessibilityLabel: 'Pay Bills',
  },
  render: (args) => <IconButton {...args} icon={<MaterialCommunityIcons name="credit-card" />} />,
};

export const Purple: Story = {
  args: {
    label: 'Top Up',
    color: 'purple',
    accessibilityLabel: 'Top Up',
  },
  render: (args) => <IconButton {...args} icon={<MaterialCommunityIcons name="currency-usd" />} />,
};

export const AllColors: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 24 }}>
      <IconButton
        icon={<MaterialCommunityIcons name="send" />}
        label="Send"
        color="blue"
        accessibilityLabel="Send"
      />
      <IconButton
        icon={<MaterialCommunityIcons name="arrow-down-bold-box" />}
        label="Request"
        color="green"
        accessibilityLabel="Request"
      />
      <IconButton
        icon={<MaterialCommunityIcons name="credit-card" />}
        label="Pay Bills"
        color="orange"
        accessibilityLabel="Pay Bills"
      />
      <IconButton
        icon={<MaterialCommunityIcons name="currency-usd" />}
        label="Top Up"
        color="purple"
        accessibilityLabel="Top Up"
      />
    </View>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Send',
    color: 'blue',
    accessibilityLabel: 'Send',
  },
  render: (args) => <IconButton {...args} icon={<MaterialCommunityIcons name="send" />} />,
};
