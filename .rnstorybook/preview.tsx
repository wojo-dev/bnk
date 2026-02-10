import { NavigationIndependentTree } from '@react-navigation/native';
import type { Preview } from '@storybook/react-native';
import React from 'react';

const preview: Preview = {
  decorators: [
    (Story) => (
      <NavigationIndependentTree>
        <Story />
      </NavigationIndependentTree>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
