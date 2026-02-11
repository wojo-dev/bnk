// components/card.stories.tsx
import { Meta, StoryObj } from '@storybook/react-native';
import { Text, View } from 'react-native';
import { Card } from './card';

const meta = {
  title: 'UI/Card',
  component: Card,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    description: 'This is a default card with a description.',
  },
  render: (args) => (
    <Card {...args}>
      <Text>Card content goes here.</Text>
    </Card>
  ),
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    title: 'Elevated Card',
    description: 'This card has a shadow for depth.',
  },
  render: (args) => (
    <Card {...args}>
      <Text>Card content goes here.</Text>
    </Card>
  ),
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    title: 'Outlined Card',
    description: 'This card has a border outline.',
  },
  render: (args) => (
    <Card {...args}>
      <Text>Card content goes here.</Text>
    </Card>
  ),
};

export const ContentOnly: Story = {
  args: {
    variant: 'elevated',
  },
  render: (args) => (
    <Card {...args}>
      <Text>A card with only content, no title or description.</Text>
    </Card>
  ),
};

export const WithFooter: Story = {
  args: {
    variant: 'outlined',
    title: 'Card with Footer',
    description: 'This card includes a footer section.',
  },
  render: (args) => <Card {...args} footer={<Text>Footer content</Text>} />,
};
