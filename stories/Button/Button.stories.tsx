import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../src/components/Button/Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  name: 'Primary Button',
  args: {
    label: 'Primary Button',
    variant: 'primary',
    size: 'medium',
  },
};

export const Secondary: Story = {
  name: 'Secondary Button',
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    size: 'medium',
  },
};

export const Success: Story = {
  name: 'Success Button',
  args: {
    label: 'Success Button',
    variant: 'success',
    size: 'medium',
  },
};

export const Warning: Story = {
  name: 'Warning Button',
  args: {
    label: 'Warning Button',
    variant: 'warning',
    size: 'medium',
  },
};

export const Error: Story = {
  name: 'Error Button',
  args: {
    label: 'Error Button',
    variant: 'error',
    size: 'medium',
  },
};

export const Small: Story = {
  name: 'Small Button',
  args: {
    label: 'Small Button',
    variant: 'primary',
    size: 'small',
  },
};

export const Large: Story = {
  name: 'Large Button',
  args: {
    label: 'Large Button',
    variant: 'primary',
    size: 'large',
  },
};

export const Disabled: Story = {
  name: 'Disabled Button',
  args: {
    label: 'Disabled Button',
    variant: 'primary',
    size: 'medium',
    disabled: true,
  },
}; 