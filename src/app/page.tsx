'use client';

import useStore from '@/shared/stores/useStore';

export default function Home() {
  const { count, increment, decrement } = useStore();
  return (
    <div>
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
