'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';

import { showError } from '@/shared/libs/showError';
import { Button, Input } from '@/shared/ui';

import { useResetPassword } from '../../model/useResetPassword';

export default function ResetPasswordForm() {
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [checkPasswordError, setCheckPasswordError] = useState('');

  const params = useSearchParams();
  const email = params.get('email') || '';
  const code = params.get('code') || '';
  const router = useRouter();

  useEffect(() => {
    if (!email || !code) {
      showError('잘못된 접근입니다');
      router.push('/signin');
    }
  }, [email, code, router]);

  const { mutate: resetPassword } = useResetPassword();

  const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
  const passwordErrorMessage =
    '비밀번호는 8자리 이상, 대문자 1개, 특수문자 1개 이상을 포함해야 합니다.';

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    let valid = true;

    if (!passwordPattern.test(password)) {
      setPasswordError(passwordErrorMessage);
      showError(passwordErrorMessage);
      valid = false;
    }

    if (password !== checkPassword) {
      setCheckPasswordError('비밀번호가 일치하지 않습니다');
      showError('비밀번호가 일치하지 않습니다');
      valid = false;
    }

    if (valid) {
      resetPassword({
        password,
        code,
        email,
      });
    }
  };

  const handlePasswordChange = (e: { target: { value: any } }) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (passwordPattern.test(newPassword)) {
      setPasswordError('');
    }
  };

  const handleCheckPasswordChange = (e: { target: { value: any } }) => {
    const newCheckPassword = e.target.value;
    setCheckPassword(newCheckPassword);
    if (password === newCheckPassword) {
      setCheckPasswordError('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-20">
      <div className="w-full flex flex-col gap-4">
        <Input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="비밀번호를 입력해주세요"
          error={passwordError}
        />
        <Input
          type="password"
          value={checkPassword}
          onChange={handleCheckPasswordChange}
          placeholder="비밀번호를 다시 입력해주세요"
          error={checkPasswordError}
        />
      </div>
      <Button text="확인" type="submit" disabled={!password || !checkPassword} />
    </form>
  );
}
