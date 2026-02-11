// components/textarea.stories.tsx
import { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { TextArea } from './textarea';

const meta = {
  title: 'UI/TextArea',
  component: TextArea,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: 'Notes',
    placeholder: 'Enter your notes here...',
  },
};

export const WithMaxLength: Story = {
  args: {
    title: 'Description',
    placeholder: 'Enter a description...',
    maxLength: 200,
    value: 'Hello world',
  },
};

export const Error: Story = {
  args: {
    title: 'Message',
    error: 'Message is required',
    placeholder: 'Enter your message...',
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled',
    disabled: true,
    placeholder: 'Cannot edit this...',
  },
};
