'use client';

import { usePathname } from 'next/navigation';
import { ToastContainer } from 'react-toastify';

import { pretendard } from '@/shared/style/font';
import { Header, MobileFooter } from '@/shared/ui';

import TanstackProvider from './_provider/TanstackProvider';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith('/sign');

  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <TanstackProvider>
          <ToastContainer position="top-right" autoClose={2000} />
          {!isAuthPage && <Header />}
          <main className={isAuthPage ? '' : 'mobile:pt-[98px] mobile:pb-[63px]'}>{children}</main>
          {!isAuthPage && <MobileFooter />}
        </TanstackProvider>
      </body>
    </html>
  );
}
