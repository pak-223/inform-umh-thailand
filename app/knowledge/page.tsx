import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, Mail, Phone } from 'lucide-react';
import { knowledgeArticles, siteUrl } from './article-content';

export const metadata: Metadata = {
  title: 'Knowledge Center ระบบคลังสินค้าและ Warehouse Automation',
  description:
    'บทความสำหรับจัดซื้อ วิศวกร และผู้บริหารที่กำลังวางแผน AS/RS, Shuttle Rack, Stacker Crane และ Warehouse Automation ในประเทศไทย',
  alternates: { canonical: '/knowledge' },
  openGraph: {
    title: 'Knowledge Center | INFORM-UMH Thailand',
    description: 'คู่มือวางแผนระบบคลังสินค้าอัตโนมัติสำหรับโครงการในประเทศไทย',
    url: '/knowledge',
    type: 'website',
    images: ['/assets/parent-site/full-system-overview.png'],
  },
};

export default function KnowledgePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'INFORM-UMH Thailand Knowledge Center',
    description: metadata.description,
    url: `${siteUrl}/knowledge`,
    hasPart: knowledgeArticles.map((article) => ({
      '@type': 'TechArticle',
      headline: article.title,
      url: `${siteUrl}/knowledge/${article.slug}`,
    })),
  };

  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            prefetch={false}
            className="flex items-center gap-3"
            aria-label="INFORM-UMH Thailand homepage"
          >
            <Image
              src="/assets/parent-site/inform-logo.png"
              alt="Inform"
              width={142}
              height={42}
              className="h-8 w-auto"
            />
            <span className="hidden border-l border-zinc-300 pl-3 text-xs font-semibold text-zinc-600 sm:block">
              THAILAND
            </span>
          </Link>
          <a
            href="mailto:pakawat.th@informrack.com"
            className="inline-flex items-center gap-2 text-sm font-bold text-zinc-800 hover:text-red-600"
          >
            <Mail className="h-4 w-4" />{' '}
            <span className="hidden sm:inline">ติดต่อ Sales Thailand</span>
          </a>
        </div>
      </header>

      <section className="border-b border-zinc-200 bg-zinc-50 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600">
              <BookOpen className="h-4 w-4" /> Knowledge Center
            </div>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              ข้อมูลช่วยตัดสินใจ ก่อนลงทุนระบบคลังสินค้า
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-700">
              คู่มือสำหรับฝ่ายจัดซื้อ วิศวกร และผู้บริหาร ตั้งแต่การเตรียม Requirement
              เปรียบเทียบระบบ ไปจนถึงการตรวจความพร้อมก่อนเริ่มโครงการ Warehouse
              Automation ในประเทศไทย
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-7 lg:grid-cols-3">
            {knowledgeArticles.map((article) => (
              <article
                key={article.slug}
                className="flex flex-col border-t-2 border-zinc-950 pt-5"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-zinc-200 bg-zinc-50">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-contain p-3"
                  />
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-widest text-red-600">
                  {article.eyebrow}
                </p>
                <h2 className="mt-3 text-xl font-bold leading-8 tracking-tight text-zinc-950">
                  {article.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-7 text-zinc-600">
                  {article.description}
                </p>
                <Link
                  href={`/knowledge/${article.slug}`}
                  prefetch={false}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700"
                >
                  อ่านบทความ <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-14 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-red-400">
                Thailand Project Team
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                มีโจทย์จริงแล้ว ส่ง Layout ให้เราช่วยประเมิน
              </h2>
              <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
                บทความช่วยให้เตรียมข้อมูลได้เร็วขึ้น ส่วนการเลือกระบบต้องอ้างอิงพื้นที่ สินค้า และ
                Flow ของโครงการจริง ติดต่อคุณ Pakawat เพื่อเริ่มประเมินเบื้องต้น
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href="mailto:pakawat.th@informrack.com?subject=ขอประเมินโครงการ Warehouse Automation"
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-bold text-white hover:bg-red-700"
              >
                <Mail className="h-4 w-4" /> ส่ง Requirement
              </a>
              <a
                href="tel:+66956537674"
                className="inline-flex min-h-11 items-center gap-2 rounded-md border border-zinc-700 px-5 py-3 text-sm font-bold text-white hover:border-red-500"
              >
                <Phone className="h-4 w-4" /> โทร Sales Thailand
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
