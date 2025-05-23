import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';
import './globals.css';
import { ReactQueryProvider } from '@/shared/providers/ReactQueryProvider';
import { ToastModal } from '@/shared/components/ToastModal';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Rabbit Bear Life',
  description: '토끼와 곰돌이의 사진첩',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#f79f1f" />
          <link rel="apple-touch-icon" href="/icons/heart.svg" />
        </head>
        <body className={`${montserrat.variable} ${inter.variable}`}>
          <div className="wrap">{children}</div>
          <ToastModal />
        </body>
      </html>
    </ReactQueryProvider>
  );
}
