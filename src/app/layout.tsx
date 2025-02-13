'use client';

import { usePathname } from 'next/navigation';

import { pretendard } from '@/shared/style/font';
import { Header } from '@/shared/ui';

import TanstackProvider from './_provider/TanstackProvider';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <TanstackProvider>
          {pathname === '/signin' || pathname === '/signup' ? null : <Header />}
          {children}
        </TanstackProvider>
      </body>
    </html>
  );
}
