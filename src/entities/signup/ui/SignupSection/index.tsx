import { SignupLogo } from '@/shared/assets/svg';

import SignupForm from '../SignupForm';

export default function SignupSection() {
  return (
    <div className="w-full text-center max-w-[620px] px-4">
      <div className="flex justify-center mb-10">
        <SignupLogo />
      </div>
      <SignupForm />
    </div>
  );
}
