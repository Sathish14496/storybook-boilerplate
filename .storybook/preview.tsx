import type { Preview } from '@storybook/react';
import React from 'react';
import '../src/styles/global.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '2em' }}>
        <Story />
      </div>
    ),
  ],
};

export default preview; 