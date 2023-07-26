import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    label: 'Badge',
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    label: 'Secondary',
    bgColor: 'warning',
    size: 'sm',
  },
};
