import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Factory,
  Mail,
  Phone,
  Send,
} from 'lucide-react';

export const siteUrl = 'https://inform-umh-thailand.sonpra0112.workers.dev';
const contactEmail = 'pakawat.th@informrack.com';
const phoneHref = 'tel:+66956537674';

type ArticleSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type KnowledgeArticle = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  image: string;
  imageAlt: string;
  answer: string;
  readingTime: string;
  sections: ArticleSection[];
  sources: Array<{ label: string; href: string }>;
};

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    slug: 'asrs-price-thailand',
    title: 'ระบบ AS/RS ราคาเท่าไร? ข้อมูลที่ต้องเตรียมก่อนขอประเมินโครงการ',
    metaTitle: 'ระบบ AS/RS ราคาเท่าไร พร้อมข้อมูลขอประเมินโครงการ',
    description:
      'ระบบ AS/RS ไม่มีราคากลางเดียว ดูปัจจัยกำหนดงบและรายการข้อมูลที่โรงงานควรเตรียมก่อนขอประเมินระบบคลังสินค้าอัตโนมัติในไทย',
    eyebrow: 'AS/RS Project Guide',
    image: '/assets/parent-site/full-system-overview.png',
    imageAlt: 'ภาพรวมระบบ AS/RS และคลังสินค้าอัตโนมัติ',
    answer:
      'ระบบ AS/RS ไม่มีราคามาตรฐานที่ใช้ได้กับทุกคลัง เพราะขอบเขตลงทุนขึ้นอยู่กับจำนวนตำแหน่งจัดเก็บ ความเร็วรับเข้า-จ่ายออก ความสูงอาคาร ประเภทเครื่องจักร และการเชื่อมต่อซอฟต์แวร์ วิธีเริ่มที่แม่นยำที่สุดคือส่ง Layout พร้อมข้อมูล Pallet, Capacity และ Throughput ให้ทีมวิศวกรรมประเมินแนวทางระบบก่อนจัดงบประมาณ',
    readingTime: 'อ่านประมาณ 6 นาที',
    sections: [
      {
        heading: 'อะไรเป็นตัวกำหนดงบลงทุน AS/RS',
        paragraphs: [
          'การเปรียบเทียบราคาเฉพาะตัวเครื่องจักรอาจทำให้ขอบเขตโครงการคลาดเคลื่อน เพราะระบบจริงประกอบด้วยโครงสร้างจัดเก็บ อุปกรณ์ขนถ่าย ระบบควบคุม ซอฟต์แวร์ งานติดตั้ง และการทดสอบร่วมกัน',
        ],
        bullets: [
          'จำนวนตำแหน่งจัดเก็บ ขนาด Load Unit และน้ำหนักสูงสุดต่อ Pallet หรือ Tote',
          'ความสูงใช้งาน จำนวน Aisle และข้อจำกัดของอาคารหรือพื้นที่ติดตั้ง',
          'เป้าหมาย Inbound และ Outbound ต่อชั่วโมง รวมถึงช่วงเวลาที่มีงานหนาแน่น',
          'รูปแบบระบบ เช่น Stacker Crane, Shuttle, Conveyor, AGV หรือการทำงานร่วมกัน',
          'ขอบเขต WMS/WCS การเชื่อมต่อ ERP และอุปกรณ์หน้างาน',
          'งานติดตั้ง Commissioning, Acceptance Test, Training และบริการหลังการขาย',
        ],
      },
      {
        heading: 'ข้อมูล 8 รายการที่ควรส่งเพื่อประเมินเบื้องต้น',
        bullets: [
          'Layout อาคาร พร้อมตำแหน่งเสา ประตู Loading และพื้นที่ Staging',
          'ความสูงอาคารและระดับความสูงที่สามารถติดตั้งระบบได้',
          'ขนาด Pallet หรือ Tote รวมสินค้า และน้ำหนักสูงสุดต่อหน่วย',
          'จำนวน SKU และจำนวน Pallet เฉลี่ยต่อ SKU',
          'Target Capacity หรือจำนวนตำแหน่งจัดเก็บที่ต้องการ',
          'ปริมาณรับเข้า-จ่ายออกต่อชั่วโมงหรือต่อวัน',
          'กฎ FIFO, FEFO, Lot Control หรือข้อกำหนดเฉพาะของสินค้า',
          'Timeline โครงการและระบบ ERP/WMS ที่ใช้อยู่',
        ],
      },
      {
        heading: 'ควรเริ่มจาก Full Automation เสมอหรือไม่',
        paragraphs: [
          'ไม่จำเป็น โครงการที่ดีควรเริ่มจากปัญหาธุรกิจและข้อมูลการปฏิบัติงาน บางคลังเหมาะกับ Racking ร่วมกับ Radio Shuttle หรือ Conveyor บางส่วน ขณะที่คลังที่ต้องการใช้พื้นที่แนวสูงและมี Flow คงที่อาจเหมาะกับ Stacker Crane AS/RS มากกว่า',
          'การทำ Concept Design หลายทางเลือกช่วยให้ทีมจัดซื้อ วิศวกรรม และฝ่ายปฏิบัติการเห็นผลกระทบต่อ Capacity, Throughput, พื้นที่ และการขยายในอนาคตก่อนตัดสินใจลงทุน',
        ],
      },
      {
        heading: 'ขั้นตอนขอประเมินกับทีม Thailand',
        bullets: [
          'ส่ง Layout และ Requirement ที่มีอยู่ แม้ข้อมูลยังไม่ครบทั้งหมด',
          'ทีม Thailand นัดคุยเพื่อยืนยันเป้าหมาย Capacity, Flow และข้อจำกัดหน้างาน',
          'คัดเลือกแนวทางระบบที่ควรศึกษา พร้อมระบุข้อมูลที่ต้องเก็บเพิ่ม',
          'จัดทำ Concept และขอบเขตเบื้องต้นก่อนเข้าสู่การเสนอราคาโครงการ',
        ],
      },
    ],
    sources: [
      {
        label: 'Why Choose an ASRS Warehouse for Global Supply Chains?',
        href: 'https://www.inform-international.com/top-blog/',
      },
      {
        label: 'Inform Storage Product Center',
        href: 'https://en.informrack.com/products',
      },
    ],
  },
  {
    slug: 'shuttle-vs-stacker-crane',
    title: 'Shuttle Rack กับ Stacker Crane เลือกระบบไหนให้เหมาะกับคลังสินค้า',
    metaTitle: 'Shuttle Rack vs Stacker Crane เลือกระบบคลังสินค้า',
    description:
      'เปรียบเทียบ Shuttle Rack และ Stacker Crane AS/RS ตาม SKU, storage density, throughput, ความสูง และแผนขยาย เพื่อเลือกแนวทางสำหรับโรงงานในไทย',
    eyebrow: 'System Selection Guide',
    image: '/assets/parent-site/shuttle-rack-system.png',
    imageAlt: 'ระบบ Shuttle Rack สำหรับจัดเก็บสินค้าความหนาแน่นสูง',
    answer:
      'ไม่มีระบบใดดีกว่าในทุกกรณี Shuttle เหมาะกับการเพิ่มความหนาแน่นและจัดเก็บสินค้าเป็น Lane หรือ Batch ส่วน Stacker Crane เหมาะกับคลัง High-bay ที่ต้องการการจัดเก็บและเบิกจ่ายอัตโนมัติใน Aisle อย่างต่อเนื่อง การเลือกควรอ้างอิง SKU Profile, Pallet ต่อ SKU, Throughput, ความสูง และกฎการหมุนเวียนสินค้า',
    readingTime: 'อ่านประมาณ 7 นาที',
    sections: [
      {
        heading: 'เมื่อใดควรพิจารณา Shuttle Rack',
        bullets: [
          'ต้องการเพิ่ม Storage Density โดยลดจำนวนทางวิ่ง Forklift',
          'มีจำนวน Pallet ต่อ SKU หรือ Batch มากพอสำหรับการจัดเก็บแบบ Lane',
          'ต้องการระบบกึ่งอัตโนมัติหรือระบบ Four-way Shuttle ที่ขยายได้เป็นขั้น',
          'มีข้อกำหนด FIFO/LIFO ที่สามารถออกแบบทิศทางรับเข้าและจ่ายออกได้ชัดเจน',
          'ต้องการประยุกต์ใช้กับ Cold Storage หรือพื้นที่ที่ต้องลดเวลาการทำงานของคน',
        ],
      },
      {
        heading: 'เมื่อใดควรพิจารณา Stacker Crane AS/RS',
        bullets: [
          'ต้องการใช้พื้นที่แนวสูงและควบคุมตำแหน่งจัดเก็บอัตโนมัติ',
          'มี Throughput เป้าหมายที่วัดได้และ Flow ในแต่ละ Aisle ค่อนข้างชัด',
          'ต้องการเชื่อม Conveyor, Picking Station และ WMS/WCS เป็นระบบเดียว',
          'ต้องการลดการใช้ Forklift ในพื้นที่จัดเก็บหลัก',
          'อาคารใหม่หรือโครงการขยายเปิดโอกาสให้ออกแบบ Rack และ Machine ร่วมกันตั้งแต่ต้น',
        ],
      },
      {
        heading: '6 คำถามก่อนเลือกระบบ',
        bullets: [
          'คลังมีจำนวน SKU เท่าไร และแต่ละ SKU มี Pallet เฉลี่ยกี่ Pallet',
          'รับเข้าและจ่ายออกสูงสุดกี่ Pallet ต่อชั่วโมง',
          'ต้องการ FIFO, FEFO, Lot Control หรือเข้าถึงทุก Pallet โดยตรงหรือไม่',
          'ความสูงอาคารและพื้นที่ขยายในอนาคตมีเท่าไร',
          'หากเครื่องจักรบางส่วนหยุด ระบบต้องรักษาการทำงานระดับใด',
          'ทีมหน้างานมีแผน Maintenance, Spare Parts และการตอบสนองเหตุขัดข้องอย่างไร',
        ],
      },
      {
        heading: 'อาจไม่จำเป็นต้องเลือกเพียงระบบเดียว',
        paragraphs: [
          'คลังที่มี SKU Profile หลายรูปแบบอาจใช้ Hybrid Solution เช่น Stacker Crane สำหรับ Pallet Reserve, Shuttle สำหรับสินค้าปริมาณมาก และ Selective Rack สำหรับ Slow-moving หรือสินค้าที่ต้องเข้าถึงโดยตรง การแบ่ง Zone ตามลักษณะสินค้าอาจให้ความยืดหยุ่นกว่าการบังคับให้ทุก SKU ใช้เทคโนโลยีเดียวกัน',
          'ทีม Thailand สามารถช่วยเปรียบเทียบ Concept จากข้อมูลจริงของคลัง เพื่อให้เห็นทั้ง Capacity, Flow, การเชื่อมต่อระบบ และข้อจำกัดในการติดตั้ง',
        ],
      },
    ],
    sources: [
      {
        label:
          'When Should Manufacturers Choose Shuttle Racking Over Stacker Crane ASRS?',
        href: 'https://www.inform-international.com/news/when-should-manufacturers-choose-shuttle-racking-over-stacker-crane-asrs-for-nearshore-buffer-stock',
      },
      {
        label: 'What Is the Best Pallet Shuttle System in 2026?',
        href: 'https://www.inform-international.com/top-blog/',
      },
    ],
  },
  {
    slug: 'warehouse-automation-checklist',
    title: 'Checklist ก่อนลงทุน Warehouse Automation สำหรับโรงงานและคลังสินค้า',
    metaTitle: 'Checklist ก่อนลงทุน Warehouse Automation ในไทย',
    description:
      'เช็กลิสต์สำหรับจัดซื้อ วิศวกร และผู้บริหารก่อนลงทุน Warehouse Automation ตั้งแต่เป้าหมาย ข้อมูล SKU, throughput, software, safety ถึง acceptance test',
    eyebrow: 'Automation Readiness Checklist',
    image: '/assets/parent-site/stacker-crane.jpg',
    imageAlt: 'Stacker Crane และระบบ Warehouse Automation',
    answer:
      'ก่อนเลือกเครื่องจักร ควรกำหนดเป้าหมายโครงการและเก็บข้อมูล Operation ให้ครบ โดยเฉพาะ SKU Profile, Capacity, Peak Throughput, Layout, Integration และ Acceptance Criteria ข้อมูลเหล่านี้ช่วยให้ผู้ขายออกแบบระบบบนโจทย์เดียวกันและช่วยให้ทีมจัดซื้อเปรียบเทียบข้อเสนอได้อย่างเป็นธรรม',
    readingTime: 'อ่านประมาณ 8 นาที',
    sections: [
      {
        heading: '1. กำหนดผลลัพธ์ทางธุรกิจที่ต้องการ',
        bullets: [
          'เพิ่ม Capacity ในพื้นที่เดิมหรือรองรับการเติบโตในระยะใด',
          'ลดเวลารับเข้า จ่ายออก หรือค้นหาสินค้าในขั้นตอนไหน',
          'เพิ่ม Inventory Accuracy และ Traceability ระดับ Pallet, Lot หรือ Serial Number',
          'ลดความเสี่ยงด้าน Safety หรือการพึ่งพาแรงงานในพื้นที่เฉพาะ',
          'กำหนด KPI ปัจจุบันและ Target ที่สามารถตรวจรับได้',
        ],
      },
      {
        heading: '2. เตรียมข้อมูล Operation ที่ใช้ในการออกแบบ',
        bullets: [
          'SKU Master, ขนาดสินค้า, Pallet Type, น้ำหนัก และข้อจำกัดการซ้อน',
          'Inventory ปกติ สูงสุด และจำนวน Pallet ต่อ SKU',
          'Inbound/Outbound รายวัน พร้อม Peak Hour และ Seasonal Pattern',
          'Order Profile เช่น Full Pallet, Case Picking หรือ Piece Picking',
          'FIFO/FEFO, Lot, Expiry, Quarantine และ Quality Hold',
        ],
      },
      {
        heading: '3. ตรวจข้อจำกัดอาคารและหน้างาน',
        bullets: [
          'Layout, Clear Height, Column Grid, Floor Load และ Floor Flatness',
          'เส้นทางรถบรรทุก Dock, Staging, Fire Protection และทางหนีไฟ',
          'อุณหภูมิ ฝุ่น ความชื้น หรือข้อกำหนด Cleanroom และ Dangerous Goods',
          'พื้นที่ติดตั้ง Maintenance Access และแผนทำงานระหว่างก่อสร้าง',
          'กำลังไฟ Network และความพร้อมของระบบสนับสนุน',
        ],
      },
      {
        heading: '4. ระบุ Software และ Integration ตั้งแต่ต้น',
        paragraphs: [
          'ระบบอัตโนมัติทำงานได้ดีเมื่อคำสั่งและข้อมูลมีความชัดเจน ควรกำหนดบทบาทของ ERP, WMS, WCS และ PLC รวมถึงเจ้าของข้อมูลหลัก วิธีรับคำสั่ง สถานะที่ต้องส่งกลับ และแผนทำงานเมื่อระบบเชื่อมต่อขัดข้อง',
        ],
        bullets: [
          'Interface ที่ต้องเชื่อมต่อและผู้รับผิดชอบของแต่ละระบบ',
          'Master Data, Barcode/RFID และหลักการสร้าง Location',
          'สิทธิ์ผู้ใช้ Log, Alert, Dashboard และรายงานที่ต้องใช้',
          'Backup, Cybersecurity และโหมด Manual Recovery',
        ],
      },
      {
        heading: '5. ตกลงการทดสอบและส่งมอบให้ชัด',
        bullets: [
          'กำหนด Functional Test, Performance Test และ Acceptance Criteria',
          'ระบุ Test Data, Peak Scenario และเงื่อนไขการวัด Throughput',
          'วางแผน Training สำหรับ Operator, Supervisor และ Maintenance',
          'ตกลง Warranty, Preventive Maintenance, Spare Parts และ Response Time',
          'กำหนด Cutover, Ramp-up และผู้รับผิดชอบหลัง Go-live',
        ],
      },
      {
        heading: '6. ใช้ Site Visit เพื่อลดความเสี่ยงก่อนตัดสินใจ',
        paragraphs: [
          'ทีมโครงการที่มี Requirement จริงสามารถนัดเยี่ยมชมโรงงานหรือพื้นที่สาธิตเพื่อเห็นขนาดอุปกรณ์ หลักการทำงาน การทดสอบ และแนวทางบำรุงรักษา การเยี่ยมชมควรเตรียมคำถามจาก Use Case ของบริษัท เพื่อให้ได้ข้อมูลที่นำกลับไปใช้ตัดสินใจได้จริง',
        ],
      },
    ],
    sources: [
      {
        label:
          'Why Is Hybrid Warehouse Automation Better for Different SKU Profiles?',
        href: 'https://www.inform-international.com/news/why-is-hybrid-warehouse-automation-better-for-different-sku-profiles',
      },
      {
        label: 'Inform International Top Blog',
        href: 'https://www.inform-international.com/top-blog/',
      },
    ],
  },
];

export function getKnowledgeArticle(slug: string) {
  return knowledgeArticles.find((article) => article.slug === slug);
}

function ContactCta({ compact = false }: { compact?: boolean }) {
  const subject = encodeURIComponent('ขอประเมินโครงการ Warehouse Automation');
  const body = encodeURIComponent(
    'เรียนคุณ Pakawat\n\nบริษัท:\nสถานที่โครงการ:\nระบบที่สนใจ:\nCapacity / Throughput ที่ต้องการ:\nรายละเอียดเพิ่มเติม:\n',
  );

  return (
    <section
      className={
        compact
          ? 'border-t border-zinc-200 pt-10'
          : 'bg-zinc-950 py-16 text-white'
      }
    >
      <div className={compact ? '' : 'mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'}>
        <p
          className={`text-xs font-bold uppercase tracking-widest ${compact ? 'text-red-600' : 'text-red-400'}`}
        >
          Thailand Project Consultation
        </p>
        <h2
          className={`mt-3 font-bold tracking-tight ${compact ? 'text-2xl text-zinc-950' : 'text-3xl text-white'}`}
        >
          มี Layout หรือ Requirement แล้ว? ส่งให้ทีม Thailand ประเมินเบื้องต้น
        </h2>
        <p
          className={`mt-4 max-w-3xl leading-7 ${compact ? 'text-zinc-700' : 'text-zinc-300'}`}
        >
          ติดต่อ Mr. Pakawat Sonprates, Sales &amp; Project Lead (Thailand)
          เพื่อคุยโจทย์ Capacity, Flow และแนวทางระบบที่เหมาะกับโครงการของคุณ
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={`mailto:${contactEmail}?subject=${subject}&body=${body}`}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
          >
            <Send className="h-4 w-4" /> ส่ง Requirement ทางอีเมล
          </a>
          <a
            href={phoneHref}
            className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-5 py-3 text-sm font-bold transition ${compact ? 'border-zinc-300 text-zinc-900 hover:border-red-600' : 'border-zinc-700 text-white hover:border-red-500'}`}
          >
            <Phone className="h-4 w-4" /> +66 95 653 7674
          </a>
          <Link
            href="/factory-visit-warehouse-automation-thailand"
            prefetch={false}
            className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition ${compact ? 'text-zinc-800 hover:text-red-600' : 'text-zinc-200 hover:text-white'}`}
          >
            <Factory className="h-4 w-4" /> นัดเยี่ยมชมโรงงาน
          </Link>
        </div>
      </div>
    </section>
  );
}

export function KnowledgeArticlePage({
  article,
}: {
  article: KnowledgeArticle;
}) {
  const articleUrl = `${siteUrl}/knowledge/${article.slug}`;
  const related = knowledgeArticles.filter(
    (item) => item.slug !== article.slug,
  );
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: article.title,
    description: article.description,
    image: `${siteUrl}${article.image}`,
    datePublished: '2026-10-12',
    dateModified: '2026-10-12',
    author: {
      '@type': 'Organization',
      name: 'INFORM-UMH (THAILAND) CO., LTD.',
    },
    publisher: {
      '@type': 'Organization',
      name: 'INFORM-UMH (THAILAND) CO., LTD.',
    },
    mainEntityOfPage: articleUrl,
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'หน้าแรก', item: siteUrl },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Knowledge Center',
        item: `${siteUrl}/knowledge`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
            href={`mailto:${contactEmail}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-zinc-800 hover:text-red-600"
          >
            <Mail className="h-4 w-4" />{' '}
            <span className="hidden sm:inline">ติดต่อ Sales Thailand</span>
          </a>
        </div>
      </header>

      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs font-semibold text-zinc-500"
          >
            <Link href="/" prefetch={false} className="hover:text-red-600">
              หน้าแรก
            </Link>
            <span>/</span>
            <Link
              href="/knowledge"
              prefetch={false}
              className="hover:text-red-600"
            >
              Knowledge Center
            </Link>
          </nav>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-red-600">
                {article.eyebrow}
              </p>
              <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                {article.title}
              </h1>
              <p className="mt-5 text-sm font-medium text-zinc-500">
                {article.readingTime} · อัปเดต 12 ตุลาคม 2026
              </p>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-zinc-200 bg-white">
              <Image
                src={article.image}
                alt={article.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-contain p-3"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,760px)_280px] lg:px-8 lg:py-16">
        <article>
          <section className="border-l-4 border-red-600 bg-red-50 px-5 py-6 sm:px-7">
            <p className="text-xs font-bold uppercase tracking-widest text-red-700">
              คำตอบโดยย่อ
            </p>
            <p className="mt-3 text-lg leading-8 text-zinc-900">
              {article.answer}
            </p>
          </section>

          <div className="mt-12 space-y-12">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
                  {section.heading}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-5 text-base leading-8 text-zinc-700"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-6 space-y-3">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-base leading-7 text-zinc-700"
                      >
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-red-600" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <ContactCta compact />

          <section className="mt-12 border-t border-zinc-200 pt-8">
            <h2 className="text-lg font-bold text-zinc-950">
              แหล่งข้อมูลเพิ่มเติมจาก Inform Storage Group
            </h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              บทความนี้เรียบเรียงใหม่สำหรับผู้วางแผนโครงการในประเทศไทย
              โดยอ้างอิงแนวคิดและขอบเขตผลิตภัณฑ์จากบริษัทแม่
            </p>
            <ul className="mt-4 space-y-2">
              {article.sources.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-start gap-2 text-sm font-semibold text-red-700 hover:text-red-800 hover:underline"
                  >
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0" />{' '}
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </article>

        <aside className="lg:sticky lg:top-6 lg:self-start">
          <div className="border-t-2 border-zinc-950 pt-5">
            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-950">
              อ่านต่อ
            </h2>
            <div className="mt-4 divide-y divide-zinc-200">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/knowledge/${item.slug}`}
                  prefetch={false}
                  className="group block py-5"
                >
                  <p className="text-sm font-bold leading-6 text-zinc-900 group-hover:text-red-600">
                    {item.title}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-zinc-500">
                    อ่านบทความ <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
            <Link
              href="/knowledge"
              prefetch={false}
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700"
            >
              <ArrowLeft className="h-4 w-4" /> ดูบทความทั้งหมด
            </Link>
          </div>
        </aside>
      </div>

      <ContactCta />
      <footer className="border-t border-zinc-800 bg-zinc-950 py-8 text-zinc-400">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-xs sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 INFORM-UMH (THAILAND) CO., LTD.</p>
          <p>Line / WeChat: Pakawat-tp · {contactEmail}</p>
        </div>
      </footer>
    </main>
  );
}
