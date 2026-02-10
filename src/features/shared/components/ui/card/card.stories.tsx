// components/card.stories.tsx
import { Meta, StoryObj } from '@storybook/react-native';
import { Text, View } from 'react-native';
import { Card } from './card';

const meta = {
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
    children: <Text>Card content goes here.</Text>,
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    title: 'Elevated Card',
    description: 'This card has a shadow for depth.',
    children: <Text>Card content goes here.</Text>,
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    title: 'Outlined Card',
    description: 'This card has a border outline.',
    children: <Text>Card content goes here.</Text>,
  },
};

export const ContentOnly: Story = {
  args: {
    variant: 'elevated',
    children: <Text>A card with only content, no title or description.</Text>,
  },
};

export const WithFooter: Story = {
  args: {
    variant: 'outlined',
    title: 'Card with Footer',
    description: 'This card includes a footer section.',
    footer: <Text>Footer content</Text>,
  },
};
