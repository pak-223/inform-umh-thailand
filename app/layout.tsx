import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Inform Thailand | Warehouse Racking & Automation Solutions',
  description:
    'Three-language Thailand project intake page for warehouse racking, automation, WMS/WCS, and solution consultation.',
  openGraph: {
    title: 'Inform Thailand | Warehouse Racking & Automation Solutions',
    description:
      'Send layout or requirement to the Thailand team for warehouse racking and automation project review.',
    images: ['/assets/inform-rack-catalogue.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
