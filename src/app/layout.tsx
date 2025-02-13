import { pretendard } from '@/shared/style/font';

import TanstackProvider from './_provider/TanstackProvider';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
