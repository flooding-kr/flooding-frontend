'use client';

import { usePathname } from 'next/navigation';
import { ToastContainer } from 'react-toastify';

import { Header, MobileFooter } from '@/shared/ui';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith('/sign');

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      {!isAuthPage && <Header />}
      <main className={isAuthPage ? '' : 'mobile:pt-[98px] mobile:pb-[63px]'}>{children}</main>
      {!isAuthPage && <MobileFooter />}
    </>
  );
}
