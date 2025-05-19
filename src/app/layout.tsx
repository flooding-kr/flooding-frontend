import { Metadata } from 'next';

import { pretendard } from '@/shared/style/font';

import LayoutWrapper from './_component/LayoutWrapper';
import TanstackProvider from './_provider/TanstackProvider';
import './globals.css';

export const metadata: Metadata = {
  title: '플러딩',
  description: 'gsm 통합 관리 서비스 ',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <TanstackProvider>
          <div id="portal" />
          <LayoutWrapper>{children}</LayoutWrapper>
        </TanstackProvider>
      </body>
    </html>
  );
}
