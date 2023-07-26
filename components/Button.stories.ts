import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: '사건 철회',
  },
};

export const Cancel: Story = {
  args: {
    ...Primary.args,
    label: '취소',
    size: 'sm',
  },
};
