import React from 'react';

import { SectionTitle } from '@/entities/homebase';
import HomeBaseSection from '../HomeBaseSection';

export default function HomeBasePageWrapper() {
  return (
    <div className="w-full max-w-[1360px]">
      <SectionTitle />
      <HomeBaseSection />
    </div>
  );
}
