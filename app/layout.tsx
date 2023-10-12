import type { Metadata } from 'next';
import { El_Messiri } from 'next/font/google';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import './globals.css';

const messiri = El_Messiri({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'My NextJS Blog',
  description: 'Base Next App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={messiri.className}>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
