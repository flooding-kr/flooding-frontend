import { Metadata } from 'next';

import { pretendard } from '@/shared/style/font';

import LayoutWrapper from './_component/LayoutWrapper';
import TanstackProvider from './_provider/TanstackProvider';

import './globals.css';

export const metadata: Metadata = {
  title: '플러딩',
  description: 'gsm 통합 관리 서비스 ',
  keywords: [
    'gsm',
    '플러딩',
    '플러딩 통합 관리 서비스',
    'flooding',
    '광주소프트웨어마이스터고등학교',
    '광주소프트웨어마이스터고',
    '광소마',
    '광주',
    '소프트웨어',
    '마이스터고',
    '마이스터고등학교',
    'GSM',
    'GwangjuSoftwareMeisterHighSchool',
    'SoftWare',
    'Gwangju',
    'MeisterHighSchool',
  ],
  creator: 'team-flooding',
  applicationName: '플러딩',
  publisher: 'team-flooding',
  openGraph: {
    title: '플러딩',
    description: 'gsm 통합 관리 서비스 ',
    url: 'https://flooding.kr',
    siteName: '플러딩',
    images: ['/favicon.ico'],
  },
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
