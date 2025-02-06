import type { Meta, StoryObj } from '@storybook/react';

import SearchInput from './index';

const meta: Meta<typeof SearchInput> = {
  title: 'Components/Shared/SearchInput',
  component: SearchInput,
  args: {
    placeholder: '검색할 학생을 입력해주세요',
  },
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Primary: Story = {
  args: {},
};
