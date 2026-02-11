// components/input.stories.tsx
import { Feather } from '@expo/vector-icons';
import { Meta, StoryObj } from '@storybook/react-native';
import { Text, View } from 'react-native';
import { Input } from './input';

const meta = {
  title: 'UI/Input',
  component: Input,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: 'First Name',
    placeholder: 'John',
  },
};

export const WithSearchIcon: Story = {
  args: {
    placeholder: 'Search name or account',
  },
  render: (args) => <Input {...args} icon={<Feather name="search" size={20} color="#9CA3AF" />} />,
};

export const WithUserIcon: Story = {
  args: {
    placeholder: 'Recipient name',
  },
  render: (args) => <Input {...args} icon={<Feather name="user" size={20} color="#9CA3AF" />} />,
};

export const WithTextIcon: Story = {
  args: {
    placeholder: '0.00',
  },
  render: (args) => (
    <Input
      {...args}
      icon={<Text style={{ fontSize: 16, fontWeight: '600', color: '#1F2937' }}>RM</Text>}
    />
  ),
};

export const Error: Story = {
  args: {
    title: 'Email',
    error: 'Email is required',
    disabled: false,
    placeholder: 'example@example.com',
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled',
    error: '',
    disabled: true,
    placeholder: 'Disabled',
  },
};
