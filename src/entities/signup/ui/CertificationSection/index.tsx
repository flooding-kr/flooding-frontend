'use client';

import React from 'react';

import { useSignupStore } from '@/entities/signup/store/useStore';
import { useReVerify } from '@/entities/verify/model/useReVerify';
import { CertificationLogo } from '@/shared/assets/svg';

export default function CertificationLogoSection() {
  const { email } = useSignupStore();
  const reVerifyMutation = useReVerify();

  const handleRetry = () => {
    if (email) {
      reVerifyMutation.mutate({ email });
    }
  };

  return (
    <div className="w-full text-center max-w-[666px] px-4">
      <div className="flex justify-center mb-20">
        <CertificationLogo />
      </div>
      <div className="flex flex-col justify-center gap-6">
        <div className="flex place-content-center place-items-center text-title1M gap-6">
          {email} <p className="text-main-600">발송되었습니다.</p>
        </div>
        <div className="flex place-content-center place-items-center text-title3R text-gray-700 gap-6">
          메일함을 확인해주세요
          <button
            type="button"
            className="text-body1R text-main-600 cursor-pointer"
            onClick={handleRetry}
          >
            인증번호 재전송
          </button>
        </div>
      </div>
    </div>
  );
}
