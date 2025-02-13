'use client';

import useStore from '@/shared/stores/useStore';
import { Header } from '@/shared/ui';

export default function Home() {
  const { count, increment, decrement } = useStore();
  return (
    <div>
      <Header />
      {count}
      <button type="button" onClick={increment}>
        +
      </button>
      <button type="button" onClick={decrement}>
        -
      </button>
    </div>
  );
}
