import TanstackProvider from './_provider/TanstackProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-Pretendard">
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
