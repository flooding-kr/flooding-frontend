'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useRef } from 'react';

import { CertificationLogo } from '@/shared/assets/svg';

import { useReVerify } from '../../model/useReVerify';
import { useVerify } from '../../model/useVerify';

export default function Verify() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const code = searchParams.get('code');

  const verifyMutation = useVerify();
  const reVerifyMutation = useReVerify();
  const hasFetched = useRef(false);

  useEffect(() => {
    if (email && code && !hasFetched.current) {
      verifyMutation.mutate({ email, code });
      hasFetched.current = true;
    }
  }, [email, code, verifyMutation]);

  const handleRetry = () => {
    if (email) {
      reVerifyMutation.mutate({ email });
    }
  };

  return (
    <div>
      <div className="flex justify-center mb-20">
        <CertificationLogo />
      </div>
      <div className="flex flex-col justify-center gap-6">
        {verifyMutation.isLoading && <div className="text-main-600 text-center">인증 중...</div>}
        {verifyMutation.error && (
          <>
            <div className="text-red-500 text-center">
              {verifyMutation.error ? verifyMutation.error : '이메일 인증에 실패했습니다.'}
            </div>
            {verifyMutation.error !== '이미 해당 이메일은 인증되었습니다.' && (
              <button
                type="button"
                className="text-body1R text-main-600 cursor-pointer"
                onClick={handleRetry}
              >
                인증번호 재전송
              </button>
            )}

            <p className="text-body1R text-main-600 cursor-pointer">
              <Link href="/signin">로그인 하러가기</Link>
            </p>
          </>
        )}
        {verifyMutation.success && (
          <>
            <div className="text-title1M">
              {email} <p className="text-main-600">인증 되었습니다.</p>
            </div>
            <p className="text-body1R text-main-600 cursor-pointer">
              <Link href={`/signin?email=${email}`}>로그인 하러가기</Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
