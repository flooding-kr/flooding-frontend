'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { useUserStore } from '../stores/useUserStore';

export default function useUser() {
  const { user, setUser } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      return;
    }

    const cookies = document.cookie.split('; ').reduce(
      (acc, cookie) => {
        const [key, value] = cookie.split('=');
        acc[key] = decodeURIComponent(value);
        return acc;
      },
      {} as Record<string, string>
    );

    if (cookies.user) {
      try {
        const decodedString = atob(cookies.user);
        const decodedUtf8String = new TextDecoder('utf-8').decode(
          new Uint8Array([...decodedString].map(c => c.charCodeAt(0)))
        );

        const parsedUser = JSON.parse(decodedUtf8String);
        const stuNum = Number(
          `${parsedUser.student_info.grade}${parsedUser.student_info.classroom}${parsedUser.student_info.number.toString().padStart(2, '0')}`
        );
        setUser({ ...parsedUser, stuNum });
      } catch (error) {
        router.push('/signin');
        toast.error('유저 정보가 존재하지 않습니다');
      }
    } else {
      router.push('/signin');
      toast.error('유저 정보가 존재하지 않습니다');
    }
  }, [setUser, user, router]);

  return user;
}
