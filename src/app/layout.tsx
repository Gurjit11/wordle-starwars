
import type { Metadata} from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Styles from '@/components/styles';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  style: ['normal'],
  weight: ['400', '700'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Star Wordle',
  description: 'A Star Wars themed Wordle clone.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <section className='section'>
            <span className='span'></span>
            <span className='span'></span>
            <span className='span'></span>
            <span className='span'></span>
            <span className='span'></span>
            <span className='span'></span>
            <span className='span'></span>
            <span className='span'></span>
            <span className='span'></span>
            <span className='span'></span>
        </section>
        <div className='z-10'>
        {children}
        </div>
        <Styles/>
      </body>
    </html>
  );
}
