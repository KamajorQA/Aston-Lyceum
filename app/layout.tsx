import type { Metadata } from 'next';
import { El_Messiri } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { ReduxProvider } from '@/redux/ReduxProvider';
import Providers from '@/components/Providers';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import './globals.css';

const messiri = El_Messiri({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Aston Lyceum',
  description: 'Lyceum and set of instructions for devs & QA specialists',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={messiri.className}>
        <Providers>
          <Header />
          <main className="container">
            <ReduxProvider>{children}</ReduxProvider>
          </main>
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
