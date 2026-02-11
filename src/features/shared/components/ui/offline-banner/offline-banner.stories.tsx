import { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { OfflineBanner } from './offline-banner';

const meta = {
  component: OfflineBanner,
  decorators: [
    (Story) => (
      <View style={{ flex: 1 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof OfflineBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Visible: Story = {
  args: {
    visible: true,
  },
};

export const Hidden: Story = {
  args: {
    visible: false,
  },
};
