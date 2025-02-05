'use client';

// import useStore from '@/shared/stores/useStore';
import { useState } from 'react';

import SearchInput from '@/shared/ui/SearchInput';

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
    </div>
  );
}
