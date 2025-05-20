import React from 'react';

import { SigninForm } from '@/entities/signIn';
import SigninPrompt from '@/entities/signIn/ui/SigninPrompt';
import { SignInLogo } from '@/shared/assets/svg';

export default function SignInContainer() {
  return (
    <div className="w-full text-center max-w-[620px] px-4">
      <div className="flex justify-center mb-10">
        <SignInLogo />
      </div>
      <SigninForm />
      <SigninPrompt />
    </div>
  );
}
