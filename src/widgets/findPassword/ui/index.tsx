import React from 'react';

import EmailForm from '@/entities/findPassword/ui/EmailForm';
import { SignInLogo } from '@/shared/assets/svg';

export default function FindPassword() {
  return (
    <div className="max-w-[588px] w-full flex flex-col h-screen items-center justify-center gap-10">
      <div className="flex w-full justify-center">
        <SignInLogo />
      </div>
      <EmailForm />
    </div>
  );
}
