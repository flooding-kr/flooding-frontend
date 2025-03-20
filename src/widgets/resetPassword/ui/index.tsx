import React, { Suspense } from 'react';

import ChangePasswordForm from '@/entities/resetPassword/ui/ResetPasswordForm';
import { SignInLogo } from '@/shared/assets/svg';

export default function ResetPassword() {
  return (
    <Suspense>
      <div className="max-w-[588px] w-full flex flex-col h-screen items-center justify-center gap-10">
        <div className="flex w-full justify-center">
          <SignInLogo />
        </div>
        <ChangePasswordForm />
      </div>
    </Suspense>
  );
}
