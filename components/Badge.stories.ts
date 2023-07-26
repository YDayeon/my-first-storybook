import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    label: 'D-10',
    bgColor: 'inactive',
    boxShadow: true,
    size: 'sm',
  },
};

export const Modal: Story = {
  args: {
    ...Primary.args,
    label: '직접입력',
    size: 'md',
    boxShadow: true,
  },
};

export const Notice: Story = {
  args: {
    ...Primary.args,
    label: '알림 0',
    bgColor: 'notice',
    size: 'sm',
  },
};
