import type { Meta, StoryObj } from '@storybook/react';

import SongItem from './index';

const meta: Meta<typeof SongItem> = {
  title: 'Components/Entity/Dormitory/SongtItem',
  component: SongItem,
  args: {
    applicant: '3308 민우석',
    likeCount: 30,
    likeState: true,
    musicImg: '',
    title: '제목제목제목제목제목제목제목제목제목',
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof SongItem>;

export const Primary: Story = {
  args: {},
};
