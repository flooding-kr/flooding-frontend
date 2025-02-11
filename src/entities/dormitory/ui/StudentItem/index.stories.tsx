import type { Meta, StoryObj } from '@storybook/react';

import StudentItem from './index';

const meta: Meta<typeof StudentItem> = {
  title: 'Components/Entity/Dormitory/StudentItem',
  component: StudentItem,
  args: {
    stuName: '민우석',
    stuNum: 3308,
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof StudentItem>;

export const Primary: Story = {
  args: {},
};
