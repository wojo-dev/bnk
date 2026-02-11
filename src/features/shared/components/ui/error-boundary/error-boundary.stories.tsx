import { Meta, StoryObj } from '@storybook/react-native';
import { ErrorBoundary } from './error-boundary';

const meta = {
  title: 'UI/ErrorBoundary',
  component: ErrorBoundary,
} satisfies Meta<typeof ErrorBoundary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    error: new Error('An unexpected error occurred. Please try again.'),
    retry: () => {},
  },
};

export const NetworkError: Story = {
  args: {
    error: new Error('Network request failed. Check your internet connection.'),
    retry: () => {},
  },
};

export const LongMessage: Story = {
  args: {
    error: new Error(
      'Unable to process your transaction at this time. The server returned an invalid response. Please contact support if this issue persists.',
    ),
    retry: () => {},
  },
};
