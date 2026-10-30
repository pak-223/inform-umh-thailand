import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone, Send, Warehouse } from "lucide-react";

const siteUrl = "https://inform-umh-thailand.sonpra0112.workers.dev";
const contactEmail = "pakawat.th@informrack.com";
const thailandCompany = "INFORM-UMH (THAILAND) CO., LTD.";
const googleBusinessProfileUrl = "https://maps.app.goo.gl/5Fn1jorxfdRy82q17";
const thailandOffice = {
  addressTh: "890 88 ตำบลเขาคันทรง อำเภอศรีราชา ชลบุรี 20110",
  phoneDisplay: "062 264 1818",
  phoneHref: "tel:+66622641818",
  latitude: 13.1325412,
  longitude: 101.1532136,
};
const thailandContact = {
  name: "Mr. Pakawat Sonprates",
  position: "Sales & Project Lead (Thailand)",
  phoneDisplay: "+66 95 653 7674",
  phoneHref: "tel:+66956537674",
  lineWechat: "Pakawat-tp",
};

export const metadata: Metadata = {
  title: "รับออกแบบชั้นวางสินค้าและระบบคลังสินค้าอัตโนมัติ ชลบุรี / EEC",
  description:
    "ปรึกษา warehouse racking, pallet rack, AS/RS, Shuttle, Stacker Crane และ WMS/WCS สำหรับโรงงานและคลังสินค้าในชลบุรี ระยอง ฉะเชิงเทรา ปราจีนบุรี และภาคตะวันออก",
  alternates: {
    canonical: "/warehouse-racking-chonburi-eec",
  },
  openGraph: {
    title: "Warehouse Racking & Automation for Chonburi / EEC",
    description:
      "Send layout or warehouse requirements to INFORM-UMH Thailand for racking, AS/RS, shuttle, stacker crane, and WMS/WCS project review.",
    url: "/warehouse-racking-chonburi-eec",
    images: ["/assets/parent-site/shuttle-rack-system.png"],
  },
};

const localJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${siteUrl}/warehouse-racking-chonburi-eec#service`,
      name: "Warehouse racking and automation consultation for Chonburi and EEC",
      serviceType:
        "Warehouse racking, pallet rack, AS/RS, shuttle system, stacker crane, WMS/WCS consultation",
      provider: {
        "@type": "Organization",
        name: thailandCompany,
        url: siteUrl,
        email: contactEmail,
        telephone: thailandOffice.phoneDisplay,
        address: {
          "@type": "PostalAddress",
          streetAddress: "890 88",
          addressLocality: "Khao Khansong, Si Racha",
          addressRegion: "Chonburi",
          postalCode: "20110",
          addressCountry: "TH",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: thailandOffice.latitude,
          longitude: thailandOffice.longitude,
        },
        hasMap: googleBusinessProfileUrl,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          name: thailandContact.name,
          email: contactEmail,
          telephone: thailandContact.phoneDisplay,
        },
      },
      areaServed: ["Chonburi", "Rayong", "Chachoengsao", "Prachinburi", "Eastern Seaboard", "EEC", "Thailand"],
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Manufacturers, industrial estates, distribution centers, and 3PL warehouses",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/warehouse-racking-chonburi-eec#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "ถ้ามีคลังสินค้าหรือโรงงานในชลบุรี ควรเริ่มประเมินระบบจากอะไร?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "เริ่มจาก layout หรือ drawing, ความสูงอาคาร, ประเภทสินค้า, จำนวน pallet, รูปแบบรับเข้า-จ่ายออก และเป้าหมายความจุ ทีม Thailand จะใช้ข้อมูลนี้ช่วยประเมินแนวทาง racking หรือ automation ที่เหมาะสม",
          },
        },
        {
          "@type": "Question",
          name: "พื้นที่ EEC เหมาะกับระบบ AS/RS หรือ Shuttle แบบไหน?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "คลังที่ต้องการใช้พื้นที่แนวสูงและควบคุม inventory มักเหมาะกับ AS/RS หรือ Stacker Crane ส่วนคลังที่ต้องการเพิ่มความหนาแน่นและความยืดหยุ่นของช่องจัดเก็บอาจเหมาะกับ Shuttle System",
          },
        },
        {
          "@type": "Question",
          name: "ยังไม่รู้ว่าควรใช้ pallet rack, shuttle rack หรือ automation ทำอย่างไร?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ส่ง requirement เบื้องต้นและข้อมูลพื้นที่ให้ทีม Thailand ประเมินก่อนได้ โดยยังไม่จำเป็นต้องเลือกเทคโนโลยีเองตั้งแต่แรก",
          },
        },
      ],
    },
  ],
};

const areas = ["ชลบุรี", "ระยอง", "ฉะเชิงเทรา", "ปราจีนบุรี", "Eastern Seaboard / EEC"];

const solutions = [
  "Selective Rack, Drive-in Rack, Push Back Rack และ Pallet Rack สำหรับโรงงาน",
  "Shuttle Rack และ Four-way Shuttle สำหรับเพิ่มความหนาแน่นในการจัดเก็บ",
  "Stacker Crane AS/RS และ High-Bay Warehouse สำหรับคลังแนวสูง",
  "WMS / WCS สำหรับเชื่อมระบบคลังสินค้า เครื่องจักร และข้อมูล inventory",
];

const projectSignals = [
  "กำลังสร้างคลังสินค้าใหม่ในชลบุรีหรือพื้นที่ EEC",
  "ต้องการเพิ่ม pallet capacity โดยไม่ขยายอาคาร",
  "มี layout แล้วและต้องการให้ช่วยประเมิน racking / AS/RS",
  "ต้องการลดการใช้ forklift หรือเพิ่มความแม่นยำในการจัดเก็บ",
  "กำลังเปรียบเทียบ supplier ระบบคลังสินค้าอัตโนมัติ",
];

export default function ChonburiEecPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localJsonLd) }}
      />

      <section className="relative overflow-hidden bg-zinc-50 px-4 py-20 sm:px-6 lg:px-8">
        <Image
          src="/assets/parent-site/full-system-overview.png"
          alt="ระบบคลังสินค้าอัตโนมัติ AS/RS Shuttle Stacker Crane สำหรับโรงงานในชลบุรีและ EEC"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/30" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_420px] lg:items-center">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-red-700">
              <ArrowRight className="h-4 w-4 rotate-180" />
              กลับหน้า INFORM-UMH Thailand
            </Link>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-red-700">
              <MapPin className="h-3.5 w-3.5" />
              Chonburi / Eastern Seaboard / EEC
            </div>
            <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              รับออกแบบชั้นวางสินค้าและระบบคลังสินค้าอัตโนมัติในชลบุรีและภาคตะวันออก
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-700 sm:text-lg">
              สำหรับโรงงาน นิคมอุตสาหกรรม ศูนย์กระจายสินค้า และคลัง 3PL ที่ต้องการวางระบบ
              warehouse racking, pallet rack, AS/RS, Shuttle, Stacker Crane หรือ WMS/WCS
              ในชลบุรี ระยอง ฉะเชิงเทรา ปราจีนบุรี และพื้นที่ EEC
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${contactEmail}?subject=Warehouse%20project%20review%20Chonburi%20EEC`}
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-4 text-sm font-bold text-white shadow-xl shadow-red-200/80 transition hover:bg-red-500"
              >
                <Send className="h-4 w-4" />
                ส่ง Layout / Requirement ให้ประเมิน
              </a>
              <a
                href={thailandContact.phoneHref}
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white/85 px-6 py-4 text-sm font-bold text-zinc-950 transition hover:border-red-300 hover:text-red-700"
              >
                <Phone className="h-4 w-4 text-red-600" />
                โทร {thailandContact.phoneDisplay}
              </a>
              <a
                href={googleBusinessProfileUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white/85 px-6 py-4 text-sm font-bold text-zinc-950 transition hover:border-red-300 hover:text-red-700"
              >
                <MapPin className="h-4 w-4 text-red-600" />
                ดูที่ตั้งบริษัท
              </a>
            </div>
          </div>

          <aside className="rounded-3xl border border-zinc-200 bg-white/95 p-6 shadow-2xl shadow-zinc-200/80">
            <div className="flex items-center gap-3 border-b border-zinc-200 pb-5">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-red-50 text-red-600">
                <Warehouse className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-red-600">Thailand Project Contact</p>
                <p className="text-base font-bold">{thailandContact.name}</p>
                <p className="text-xs text-zinc-600">{thailandContact.position}</p>
              </div>
            </div>
            <div className="mt-5 space-y-3 text-sm">
              <a href={thailandContact.phoneHref} className="flex items-center gap-3 rounded-xl bg-zinc-50 p-3 font-semibold text-zinc-900">
                <Phone className="h-4 w-4 text-red-600" />
                {thailandContact.phoneDisplay}
              </a>
              <a href={`mailto:${contactEmail}`} className="flex items-center gap-3 rounded-xl bg-zinc-50 p-3 font-semibold text-zinc-900">
                <Mail className="h-4 w-4 text-red-600" />
                {contactEmail}
              </a>
              <div className="rounded-xl bg-zinc-50 p-3 font-semibold text-zinc-900">
                Line / WeChat: <span className="text-red-700">{thailandContact.lineWechat}</span>
              </div>
              <a
                href={googleBusinessProfileUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 rounded-xl bg-zinc-50 p-3 font-semibold text-zinc-900 transition hover:text-red-700"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                <span>{thailandOffice.addressTh}</span>
              </a>
              <a
                href={thailandOffice.phoneHref}
                className="flex items-center gap-3 rounded-xl bg-zinc-50 p-3 font-semibold text-zinc-900 transition hover:text-red-700"
              >
                <Phone className="h-4 w-4 text-red-600" />
                เบอร์บริษัท {thailandOffice.phoneDisplay}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-red-600">High-Intent Local Search</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                เหมาะกับทีมที่มีโปรเจกต์จริงและต้องการประเมินระบบเร็ว
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-700">
                ถ้าคุณกำลังค้นหา supplier ชั้นวางสินค้าอุตสาหกรรมในชลบุรี หรือระบบคลังสินค้าอัตโนมัติสำหรับโรงงานในภาคตะวันออก
                ให้ส่งข้อมูลพื้นที่และ requirement เบื้องต้น ทีม Thailand จะช่วยประเมินแนวทางที่ควรเริ่มก่อน
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {areas.map((area) => (
                <div key={area} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                  <p className="text-sm font-bold">{area}</p>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-600">
                    รองรับการประเมิน layout, pallet capacity, racking และ warehouse automation
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-zinc-200 p-6">
              <h2 className="text-2xl font-bold">ระบบที่ช่วยประเมินได้</h2>
              <div className="mt-5 space-y-4">
                {solutions.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-red-600" />
                    <p className="text-sm leading-relaxed text-zinc-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 p-6">
              <h2 className="text-2xl font-bold">โจทย์ที่ควรติดต่อทีม Thailand</h2>
              <div className="mt-5 space-y-4">
                {projectSignals.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-red-600" />
                    <p className="text-sm leading-relaxed text-zinc-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold tracking-tight">คำถามที่พบบ่อยสำหรับโปรเจกต์ในชลบุรีและ EEC</h2>
          <div className="mt-8 grid gap-4">
            {[
              [
                "ถ้ามีคลังสินค้าหรือโรงงานในชลบุรี ควรเริ่มประเมินระบบจากอะไร?",
                "เริ่มจาก layout หรือ drawing, ความสูงอาคาร, ประเภทสินค้า, จำนวน pallet, รูปแบบรับเข้า-จ่ายออก และเป้าหมายความจุ",
              ],
              [
                "พื้นที่ EEC เหมาะกับ AS/RS หรือ Shuttle แบบไหน?",
                "ขึ้นอยู่กับความสูงอาคาร ความหนาแน่นที่ต้องการ throughput และรูปแบบสินค้า โดยทีม Thailand สามารถช่วยประเมินแนวทางก่อนทำ quotation",
              ],
              [
                "ยังไม่รู้ว่าควรใช้ pallet rack, shuttle rack หรือ automation ทำอย่างไร?",
                "ส่ง requirement เบื้องต้นให้ทีม Thailand ประเมินก่อนได้ โดยยังไม่จำเป็นต้องเลือกเทคโนโลยีเองตั้งแต่แรก",
              ],
            ].map(([question, answer]) => (
              <details key={question} className="rounded-2xl border border-zinc-200 bg-white p-5">
                <summary className="cursor-pointer text-base font-bold">{question}</summary>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href={`mailto:${contactEmail}?subject=Warehouse%20project%20review%20Chonburi%20EEC`}
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-red-500"
            >
              <Send className="h-4 w-4" />
              ส่ง Layout / Requirement ให้ประเมิน
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
