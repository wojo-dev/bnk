import { recipients } from '@/server/recipients';
import { Meta, StoryObj } from '@storybook/react-native';
import { Recipient } from '../../types/recipient.types';
import { RecipientCard } from './recipient-card';

const recipient = recipients[0] as Recipient;

const meta = {
  title: 'Recipients/RecipientCard',
  component: RecipientCard,
} satisfies Meta<typeof RecipientCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    item: recipient,
    selected: false,
    onPress: () => {},
  },
};

export const Selected: Story = {
  args: {
    item: recipient,
    selected: true,
    onPress: () => {},
  },
};

export const Change: Story = {
  args: {
    item: recipient,
    selected: false,
    variant: 'change',
    onPress: () => {},
  },
};
