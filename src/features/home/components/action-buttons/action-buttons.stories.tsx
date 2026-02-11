import { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { actions } from '../../constants/actions';
import { Action } from '../../types/action.types';
import { ActionButtons } from './action-buttons';

const meta = {
  title: 'Home/ActionButtons',
  component: ActionButtons,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ActionButtons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    actions: actions as Action[],
    onActionPress: () => {},
  },
};

export const TwoActions: Story = {
  args: {
    actions: actions.slice(0, 2) as Action[],
    onActionPress: () => {},
  },
};
