import type { Meta, StoryObj } from '@storybook/react';

import FilterButton from './index';

const meta: Meta<typeof FilterButton> = {
  title: 'Components/Entity/Dormitory/StudentItem',
  component: FilterButton,
  args: {},
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof FilterButton>;

export const Enable: Story = {
  args: {
    select: true,
  },
};

export const Disable: Story = {
  args: {
    select: false,
  },
};
