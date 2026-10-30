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
    default: 'ระบบคลังสินค้าอัตโนมัติ AS/RS และชั้นวางสินค้า | INFORM-UMH Thailand',
    template: '%s | INFORM-UMH Thailand',
  },
  description:
    'รับออกแบบระบบ AS/RS, Shuttle, Stacker Crane, WMS/WCS และชั้นวางสินค้า สำหรับโรงงานในไทย ชลบุรี ระยอง และ EEC ส่ง Layout ให้ทีม Thailand ประเมินโครงการ',
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
    title: 'ระบบคลังสินค้าอัตโนมัติ AS/RS และชั้นวางสินค้า | INFORM-UMH Thailand',
    description:
      'ส่ง Layout หรือ Requirement ให้ทีม INFORM-UMH Thailand ประเมินระบบ Racking, AS/RS, Shuttle, Stacker Crane และ WMS/WCS',
    url: '/',
    siteName: 'INFORM-UMH Thailand',
    images: ['/assets/parent-site/full-system-overview.png'],
    locale: 'th_TH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ระบบคลังสินค้าอัตโนมัติ AS/RS และชั้นวางสินค้า | INFORM-UMH Thailand',
    description:
      'โซลูชัน Racking, AS/RS, Shuttle, Stacker Crane, AGV และ WMS/WCS พร้อมทีมงานดูแลโครงการในประเทศไทย',
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
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token":"d7d6bbf529894c138f4e8a64bd8f35db"}'
        />
      </body>
    </html>
  );
}
