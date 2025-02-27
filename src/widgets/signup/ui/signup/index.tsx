'use client';

import React from 'react';

import { useModalPageStore } from '@/entities/signup/store/useStore';
import { SignupSection, CertificationSection } from '@/entities/signup/ui';

export default function SignupContainer() {
  const { modalPage } = useModalPageStore();

  return (
    <>
      {modalPage === 0 && <SignupSection />}
      {modalPage === 1 && <CertificationSection />}
    </>
  );
}
