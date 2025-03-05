import type { Metadata } from 'next';
import { Fira_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inset = Fira_Mono({ subsets: ['cyrillic'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: 'Интернет магазин X-cart - лучший ассортимент',
  description: 'the best cart in store!',
  icons: 'logo.svg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inset.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
