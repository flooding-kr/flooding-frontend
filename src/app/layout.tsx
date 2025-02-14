'use client';

import { usePathname } from 'next/navigation';

import { pretendard } from '@/shared/style/font';
import { Header, MoblieFooter } from '@/shared/ui';

import TanstackProvider from './_provider/TanstackProvider';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAuthPage = pathname === '/signin' || pathname === '/signup';

  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <TanstackProvider>
          {!isAuthPage && <Header />}
          <div className="mobile:pt-[137px] mobile:pb-[63px]">{children}</div>
          {!isAuthPage && <MoblieFooter />}
        </TanstackProvider>
      </body>
    </html>
  );
}
