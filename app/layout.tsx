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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://inform-umh-thailand.sonpra0112.workers.dev'),
  title: {
    default: 'INFORM-UMH Thailand | Warehouse Racking, AS/RS & Automation Solutions',
    template: '%s | INFORM-UMH Thailand',
  },
  description:
    'Contact INFORM-UMH Thailand for warehouse racking, AS/RS, shuttle systems, stacker cranes, AGV, WMS/WCS, and automated warehouse project consultation.',
  keywords: [
    'warehouse racking Thailand',
    'ASRS Thailand',
    'automated warehouse Thailand',
    'warehouse automation Thailand',
    'warehouse racking Chonburi',
    'warehouse automation Chonburi',
    'ASRS Chonburi',
    'warehouse racking Eastern Thailand',
    'warehouse automation EEC',
    'เยี่ยมชมโรงงานระบบคลังสินค้า',
    'เยี่ยมชมโรงงาน Inform Thailand',
    'factory visit warehouse automation Thailand',
    'warehouse automation factory visit',
    'ชั้นวางสินค้าอุตสาหกรรม ชลบุรี',
    'ระบบคลังสินค้าอัตโนมัติ ชลบุรี',
    'ระบบ AS/RS ชลบุรี',
    'คลังสินค้าอัตโนมัติ ภาคตะวันออก',
    'shuttle system Thailand',
    'stacker crane Thailand',
    'WMS WCS Thailand',
    'คลังสินค้าอัตโนมัติ',
    'ชั้นวางสินค้าอุตสาหกรรม',
    'ระบบ AS/RS',
    '货架 泰国',
    '自动化仓库 泰国',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'INFORM-UMH Thailand | Warehouse Racking, AS/RS & Automation Solutions',
    description:
      'Send layout or requirement to the INFORM-UMH Thailand team for warehouse racking and automation project review.',
    url: '/',
    siteName: 'INFORM-UMH Thailand',
    images: ['/assets/parent-site/full-system-overview.png'],
    locale: 'th_TH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'INFORM-UMH Thailand | Warehouse Racking, AS/RS & Automation Solutions',
    description:
      'Warehouse racking, shuttle systems, stacker cranes, AGV, WMS/WCS, and automation project consultation in Thailand.',
    images: ['/assets/parent-site/full-system-overview.png'],
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
