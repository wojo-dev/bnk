// components/chip.stories.tsx
import { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { Chip } from './chip';

const meta = {
  title: 'UI/Chip',
  component: Chip,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'RM 50',
  },
};

export const Selected: Story = {
  args: {
    label: 'RM 250',
    selected: true,
  },
};

export const Group: Story = {
  args: {
    label: 'RM 50',
  },
  render: () => (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
      <Chip label="RM 50" />
      <Chip label="RM 100" />
      <Chip label="RM 250" selected />
      <Chip label="RM 500" />
    </View>
  ),
};
