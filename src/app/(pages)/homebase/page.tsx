'use client';

import { useState } from 'react';

import SearchInput from '@/shared/ui/SearchInput';
import { Tag } from '@/shared/ui';

export default function HomeBase() {
  const [s, u] = useState('');

  return (
    <div>
      <SearchInput
        placeholder="검색할 학생"
        onChange={e => u(e.target.value)}
        onDebounce={value => {
          // eslint-disable-next-line no-console
          console.log(`검색:${value}`);
        }}
        value={s}
        debounceTime={300}
      />
      <Tag text="4층" disabled />
      <Tag text="4층" />
    </div>
  );
}
