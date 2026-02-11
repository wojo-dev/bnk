// components/section-title.stories.tsx
import { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { SectionTitle } from './section-title';

const meta = {
  title: 'UI/SectionTitle',
  component: SectionTitle,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof SectionTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Recent',
    actionLabel: 'View All',
  },
};

export const WithoutAction: Story = {
  args: {
    title: 'Transactions',
  },
};

export const Transactions: Story = {
  args: {
    title: 'Transactions',
    actionLabel: 'See All',
  },
};
