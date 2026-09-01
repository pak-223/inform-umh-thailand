"use client";

import Image from "next/image";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ExternalLink,
  Factory,
  Globe2,
  Mail,
  PackageCheck,
  Phone,
  Send,
  Settings2,
  Warehouse,
  Workflow,
} from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

const contactEmail = "sale@informrack.com";

const copy = {
  th: {
    label: "ไทย",
    nav: ["โซลูชัน", "สินค้า", "ส่ง Requirement"],
    badge: "Inform Thailand Project Intake",
    heroTitle: "โซลูชันชั้นวางสินค้าและระบบคลังสินค้าอัตโนมัติในประเทศไทย",
    heroLead:
      "กำลังสร้างคลังใหม่ ขยายพื้นที่จัดเก็บ หรือเตรียมอัปเกรดระบบคลังสินค้า? ส่ง Layout หรือ Requirement ให้ทีม Thailand ประเมินเบื้องต้น แล้วเราจะติดต่อกลับเพื่อ qualify โปรเจ็คเข้าสู่ pipeline",
    primaryCta: "ส่ง Layout / Requirement",
    secondaryCta: "ดูข้อมูลบริษัทแม่",
    credibility: "ก่อตั้งปี 1997 | Listed 603066 | Rack + Automation + WMS/WCS",
    proofTitle: "ใช้ข้อมูลบริษัทแม่เพื่อเพิ่มความน่าเชื่อถือ แต่ลูกค้าไทยติดต่อทีม Thailand",
    proofBody:
      "Nanjing Inform Storage Group ระบุว่าก่อตั้งในปี 1997 จดทะเบียนใน Shanghai Stock Exchange ในปี 2015 และมี product scope ครอบคลุม High Precision Rack, Stacker Crane, Shuttle System และ WMS/WCS",
    solutionsTitle: "เริ่มจากโจทย์ของคลัง ไม่ใช่แค่รายการสินค้า",
    solutionsLead:
      "ลูกค้าสามารถส่งข้อมูลเท่าที่มี ทีม Thailand จะช่วยคัดว่าเหมาะกับ racking, semi-automation หรือ automation project ระดับไหน",
    formTitle: "ส่งข้อมูลโปรเจ็คเพื่อประเมินเบื้องต้น",
    formLead:
      "ไม่จำเป็นต้องครบทุกช่อง ช่องเทคนิคเป็น optional แต่ยิ่งมีข้อมูลมาก ทีม sales จะ qualify ได้เร็วขึ้น",
    submit: "สร้างอีเมลส่งทีม Thailand",
    note: "หลัง submit ระบบจะเปิดอีเมลพร้อมข้อมูลที่กรอกไว้ เพื่อให้ส่งเข้า Thailand sales ได้ทันที",
    fields: {
      contactName: "ชื่อผู้ติดต่อ",
      company: "บริษัท",
      phone: "เบอร์โทร",
      email: "อีเมล",
      location: "จังหวัด / พื้นที่โครงการ",
      projectType: "ประเภทโปรเจ็ค",
      signal: "ต้องการให้ช่วยประเมินอะไร",
      warehouseSize: "ขนาด Warehouse",
      productType: "ประเภทสินค้า",
      capacity: "จำนวน pallet / target capacity",
      timeline: "Timeline",
      budget: "Budget range",
      system: "ระบบที่สนใจ",
    },
    productsTitle: "Product Coverage จากเว็บบริษัทแม่",
    productsLead:
      "หมวดสินค้าด้านล่างอ้างอิงจาก product center ของ Inform parent site เพื่อให้ลูกค้าเห็นว่าเราขายอะไรและช่วยประเมินอะไรได้บ้าง",
    industriesTitle: "อุตสาหกรรมที่เหมาะกับโซลูชัน",
    industriesLead:
      "ใช้เป็น application areas เบื้องต้น ไม่ใช่ Thailand reference จนกว่าจะมีหลักฐานโปรเจ็คในไทยแยกต่างหาก",
    finalTitle: "มีโปรเจ็คอยู่แล้ว?",
    finalBody:
      "ส่ง layout, drawing, รูปพื้นที่ หรือ requirement เบื้องต้นมาได้เลย ทีม Thailand จะติดต่อกลับเพื่อคัด requirement และวาง next action",
  },
  en: {
    label: "EN",
    nav: ["Solutions", "Products", "Send Requirement"],
    badge: "Inform Thailand Project Intake",
    heroTitle: "Warehouse Racking & Automation Solutions in Thailand",
    heroLead:
      "Building a new warehouse, expanding storage capacity, or preparing an automation upgrade? Send your layout or requirement to the Thailand team for initial review, project qualification, and pipeline follow-up.",
    primaryCta: "Send Layout / Requirement",
    secondaryCta: "View Parent Company",
    credibility: "Founded 1997 | Listed 603066 | Rack + Automation + WMS/WCS",
    proofTitle: "Parent-company credibility, Thailand-owned lead capture",
    proofBody:
      "Nanjing Inform Storage Group states that it was founded in 1997, listed on the Shanghai Stock Exchange in 2015, and covers High Precision Rack, Stacker Crane, Shuttle System, and WMS/WCS product categories.",
    solutionsTitle: "Start with the warehouse project, not a product list",
    solutionsLead:
      "Share what you have. The Thailand team will qualify whether the project needs racking, semi-automation, or a broader automation solution.",
    formTitle: "Send project details for initial review",
    formLead:
      "Only contact and project context are essential. Technical fields are optional, but they help sales qualify the project faster.",
    submit: "Create Email to Thailand Team",
    note: "Submitting opens an email draft with your project details so it can be sent to Thailand sales immediately.",
    fields: {
      contactName: "Contact name",
      company: "Company",
      phone: "Phone",
      email: "Email",
      location: "Project location / province",
      projectType: "Project type",
      signal: "What should we help assess?",
      warehouseSize: "Warehouse size",
      productType: "Product type",
      capacity: "Pallet quantity / target capacity",
      timeline: "Timeline",
      budget: "Budget range",
      system: "Interested system",
    },
    productsTitle: "Product Coverage From The Parent Site",
    productsLead:
      "These categories are based on Inform parent-site product center references, so visitors can quickly see what we sell and what the Thailand team can help assess.",
    industriesTitle: "Relevant Application Areas",
    industriesLead:
      "Use these as application areas only, not Thailand customer references unless separately verified.",
    finalTitle: "Already have a project?",
    finalBody:
      "Send the layout, drawing, site photo, or initial requirement. The Thailand team will follow up to qualify the requirement and set the next action.",
  },
  zh: {
    label: "中文",
    nav: ["解决方案", "产品", "提交需求"],
    badge: "Inform 泰国项目线索入口",
    heroTitle: "泰国仓储货架与自动化仓库解决方案",
    heroLead:
      "正在建设新仓库、扩充仓储容量，或准备升级自动化系统？请将布局图或项目需求提交给泰国团队，我们会进行初步评估并跟进项目机会。",
    primaryCta: "提交布局图 / 需求",
    secondaryCta: "查看母公司资料",
    credibility: "成立于 1997 | 股票代码 603066 | 货架 + 自动化 + WMS/WCS",
    proofTitle: "以母公司资料建立信任，由泰国团队负责项目跟进",
    proofBody:
      "Nanjing Inform Storage Group 官网资料显示，集团成立于 1997 年，2015 年在上海证券交易所上市，产品范围包括高精度货架、堆垛机、穿梭车系统及 WMS/WCS。",
    solutionsTitle: "从仓库项目需求出发，而不是只看产品目录",
    solutionsLead:
      "客户可以先提交现有资料。泰国团队会判断项目更适合货架、半自动化，还是更完整的自动化仓储方案。",
    formTitle: "提交项目资料进行初步评估",
    formLead:
      "联系信息与项目背景为核心。技术资料可选填写，资料越完整，销售团队越快完成项目判断。",
    submit: "生成邮件发送泰国团队",
    note: "提交后将打开包含项目资料的邮件草稿，方便立即发送给泰国销售团队。",
    fields: {
      contactName: "联系人姓名",
      company: "公司",
      phone: "电话",
      email: "邮箱",
      location: "项目地点 / 省份",
      projectType: "项目类型",
      signal: "希望我们评估什么？",
      warehouseSize: "仓库面积",
      productType: "货品类型",
      capacity: "托盘数量 / 目标容量",
      timeline: "项目时间",
      budget: "预算范围",
      system: "感兴趣的系统",
    },
    productsTitle: "来自母公司官网的产品范围",
    productsLead:
      "以下类别参考 Inform 母公司产品中心，帮助客户快速了解我们销售哪些产品，以及泰国团队可以评估哪些项目方向。",
    industriesTitle: "适用行业方向",
    industriesLead:
      "以下仅作为应用行业方向，不代表泰国本地客户案例，除非另有验证资料。",
    finalTitle: "已有仓库项目？",
    finalBody:
      "可先提交布局图、图纸、现场照片或初步需求。泰国团队会联系您确认需求并安排下一步。",
  },
};

const solutionCards = [
  {
    icon: Warehouse,
    key: "Racking Solutions",
    th: "Selective Rack, Drive-in, Push Back, Gravity Rack, Shuttle Rack, Cantilever และ High Bay สำหรับเพิ่มพื้นที่จัดเก็บและจัดระบบ pallet flow",
    en: "Selective Rack, Drive-in, Push Back, Gravity Rack, Shuttle Rack, Cantilever and High Bay systems for storage density and pallet flow.",
    zh: "选择式货架、驶入式、后推式、重力式、穿梭车货架、悬臂式及高位货架，用于提升仓储密度与托盘流转。",
  },
  {
    icon: Settings2,
    key: "Warehouse Automation",
    th: "Shuttle + Forklift, Shuttle + Stacker, Four-way Shuttle, Mother-Child Shuttle และ Goods-to-Person สำหรับ throughput ที่สูงขึ้น",
    en: "Shuttle + Forklift, Shuttle + Stacker, Four-way Shuttle, Mother-Child Shuttle and Goods-to-Person systems for higher throughput.",
    zh: "穿梭车+叉车、穿梭车+堆垛机、四向穿梭车、子母车及货到人系统，用于提升作业效率。",
  },
  {
    icon: Workflow,
    key: "Software & Integration",
    th: "WMS / WCS และ integration เพื่อเชื่อมข้อมูล, equipment control และ operation rule ให้ทำงานร่วมกัน",
    en: "WMS / WCS and integration support to connect information flow, equipment control, and operating rules.",
    zh: "WMS / WCS 与系统集成，连接信息流、设备控制与仓库作业规则。",
  },
  {
    icon: Building2,
    key: "Project Consultation",
    th: "สำหรับ New Warehouse, Expansion, Increase Storage Capacity, Replacement และ Automation Upgrade",
    en: "For new warehouses, expansion, storage capacity increase, replacement, and automation upgrade projects.",
    zh: "适用于新仓建设、扩建、提升仓储容量、设备替换及自动化升级项目。",
  },
];

const productFamilies = [
  {
    title: "High Precision Rack System",
    href: "https://en.informrack.com/gjmhj.aspx?nid=3&typeid=92",
    items: [
      "Drive-In Rack",
      "Shuttle Rack",
      "Push Back Rack",
      "Gravity Rack",
      "Electric Mobile Racking",
      "Roller Track-Type Rack",
      "Cantilever Rack",
      "High Bay Racking",
    ],
  },
  {
    title: "Shuttle System",
    href: "https://en.informrack.com/gjmhj.aspx?nid=3&typeid=94",
    items: [
      "Four-way Pallet Shuttle",
      "Two-way Pallet Shuttle",
      "Two-Way Tote Shuttle",
      "Four-Way Tote Shuttle",
      "Bus Shuttle",
      "Attic Shuttle",
      "EMS Shuttle",
    ],
  },
  {
    title: "Stacker Crane / ASRS Direction",
    href: "https://en.informrack.com/sitemap.aspx",
    items: [
      "Stacker Crane System",
      "Shuttle + Stacker",
      "High Bay Storage",
      "Automated Storage",
      "Goods-to-Person Picking",
      "System Integration",
    ],
  },
  {
    title: "WMS / WCS",
    href: "https://en.informrack.com/wmswcs.aspx?nid=3&typeid=95",
    items: [
      "Warehouse Management System",
      "Warehouse Control System",
      "Multi-warehouse Management",
      "Operation Rule Strategy",
      "Visual Monitoring",
      "Task Allocation",
    ],
  },
];

const industries = [
  "Automobile",
  "Food & Cold Chain",
  "Pharmaceutical",
  "Energy",
  "Communication",
  "Liquor",
  "Manufacturing",
  "Logistics / 3PL",
];

const projectTypes = [
  "New Warehouse",
  "Expansion",
  "Increase Storage",
  "Automation Upgrade",
  "Replacement",
  "Other / Not Sure",
];

const systems = ["Racking", "Shuttle", "Stacker Crane", "AS/RS", "AGV/RGV", "WMS/WCS", "Not Sure"];

type Lang = keyof typeof copy;

export default function Home() {
  const [lang, setLang] = useState<Lang>("th");
  const t = copy[lang];

  const parentLinks = useMemo(
    () => [
      ["Inform Introduction", "https://en.informrack.com/about.aspx?nid=1&typeid=187"],
      ["Product Scope", "https://en.informrack.com/sitemap.aspx"],
      ["High Precision Rack", "https://en.informrack.com/gjmhj.aspx?nid=3&typeid=92"],
      ["Shuttle System", "https://en.informrack.com/gjmhj.aspx?nid=3&typeid=94"],
      ["WMS/WCS", "https://en.informrack.com/wmswcs.aspx?nid=3&typeid=95"],
    ],
    [],
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const selectedSystems = systems.filter((system) => data.get(system));
    const body = [
      "Inform Thailand Website Lead",
      "",
      `Contact name: ${data.get("contactName") || ""}`,
      `Company: ${data.get("company") || ""}`,
      `Phone: ${data.get("phone") || ""}`,
      `Email: ${data.get("email") || ""}`,
      "",
      `Project location: ${data.get("location") || ""}`,
      `Project type: ${data.get("projectType") || ""}`,
      `Assessment request: ${data.get("signal") || ""}`,
      "",
      `Warehouse size: ${data.get("warehouseSize") || ""}`,
      `Product type: ${data.get("productType") || ""}`,
      `Target capacity: ${data.get("capacity") || ""}`,
      `Timeline: ${data.get("timeline") || ""}`,
      `Budget range: ${data.get("budget") || ""}`,
      `Interested system: ${selectedSystems.join(", ") || ""}`,
      "",
      "Please attach layout/drawing/photo if available.",
    ].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      "Thailand Warehouse Project Lead",
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-zinc-950/82 text-white backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Inform Thailand home">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-red-600 font-black text-white">
              in
            </span>
            <span className="text-sm font-semibold tracking-wide">Inform Thailand</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-zinc-200 md:flex">
            <a href="#solutions">{t.nav[0]}</a>
            <a href="#products">{t.nav[1]}</a>
            <a href="#lead-form">{t.nav[2]}</a>
          </nav>
          <div className="flex rounded-md border border-white/18 bg-white/8 p-1">
            {(Object.keys(copy) as Lang[]).map((item) => (
              <button
                key={item}
                onClick={() => setLang(item)}
                className={`rounded px-3 py-1.5 text-xs font-semibold transition ${
                  lang === item ? "bg-white text-zinc-950" : "text-zinc-200 hover:bg-white/12"
                }`}
              >
                {copy[item].label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section id="top" className="relative flex min-h-[86svh] items-end overflow-hidden pt-16 text-white">
        <Image
          src="/assets/inform-rack-catalogue.png"
          alt="Inform rack product catalogue showing warehouse racking reference"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(9_9_11/0.92),rgb(24_24_27/0.74)_48%,rgb(220_38_38/0.34))]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 pb-12 sm:px-6 lg:grid-cols-[minmax(0,0.92fr)_360px] lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-zinc-100">
              <Globe2 className="h-4 w-4" />
              {t.badge}
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
              {t.heroTitle}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-100 sm:text-lg">
              {t.heroLead}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-xl shadow-red-950/30 transition hover:bg-red-500"
              >
                <Send className="h-4 w-4" />
                {t.primaryCta}
              </a>
              <a
                href="#proof"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/18"
              >
                <ExternalLink className="h-4 w-4" />
                {t.secondaryCta}
              </a>
            </div>
          </div>
          <aside className="self-end rounded-md border border-white/18 bg-zinc-950/62 p-5 backdrop-blur-md">
            <p className="text-sm font-semibold text-zinc-100">{t.credibility}</p>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              <div className="rounded border border-white/12 bg-white/8 p-3">
                <p className="text-2xl font-bold">1997</p>
                <p className="mt-1 text-[11px] text-zinc-300">Founded</p>
              </div>
              <div className="rounded border border-white/12 bg-white/8 p-3">
                <p className="text-2xl font-bold">603066</p>
                <p className="mt-1 text-[11px] text-zinc-300">Listed</p>
              </div>
              <div className="rounded border border-white/12 bg-white/8 p-3">
                <p className="text-2xl font-bold">3</p>
                <p className="mt-1 text-[11px] text-zinc-300">Solution lanes</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="solutions" className="border-b border-border bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-red-600">Solutions</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{t.solutionsTitle}</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">{t.solutionsLead}</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {solutionCards.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.key} className="rounded-md border border-border bg-card p-5 shadow-sm">
                  <Icon className="h-7 w-7 text-red-600" />
                  <h3 className="mt-5 text-lg font-semibold">{card.key}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{card[lang]}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="products" className="border-b border-border bg-zinc-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-red-600">
                Parent Site Product Scope
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{t.productsTitle}</h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">{t.productsLead}</p>
            </div>
            <div className="rounded-md border border-zinc-300 bg-white p-4 text-sm leading-6 text-zinc-700">
              Source-backed reference: Inform parent site lists Products Center categories including Intelligent Warehouse and Storage Solution, High Precision Rack System, Stacker Crane System, Shuttle System, and WMS/WCS.
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {productFamilies.map((family) => (
              <article key={family.title} className="rounded-md border border-border bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold">{family.title}</h3>
                  <a
                    href={family.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-none items-center gap-1 rounded border border-zinc-200 px-2 py-1 text-xs font-semibold text-zinc-700 hover:border-red-300 hover:text-red-600"
                  >
                    Source
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {family.items.map((item) => (
                    <span key={item} className="rounded border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-700">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">{t.industriesTitle}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{t.industriesLead}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {industries.map((industry) => (
                <span key={industry} className="rounded-md bg-zinc-950 px-3 py-2 text-sm font-semibold text-white">
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="proof" className="bg-zinc-950 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <Factory className="h-9 w-9 text-red-500" />
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">{t.proofTitle}</h2>
            <p className="mt-5 text-base leading-8 text-zinc-300">{t.proofBody}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {parentLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-md border border-white/12 bg-white/7 p-4 text-sm font-semibold text-zinc-100 transition hover:border-red-400 hover:bg-red-500/12"
              >
                {label}
                <ExternalLink className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="lead-form" className="bg-zinc-100 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-red-600">Project Intake</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{t.formTitle}</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">{t.formLead}</p>
            <div className="mt-8 space-y-3">
              {[
                "Thailand team owns follow-up",
                "Parent site remains credibility reference",
                "Qualified projects move into pipeline",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-red-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-md border border-border bg-white p-5 shadow-sm sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={t.fields.contactName} name="contactName" required />
              <Field label={t.fields.company} name="company" required />
              <Field label={t.fields.phone} name="phone" type="tel" />
              <Field label={t.fields.email} name="email" type="email" />
              <Field label={t.fields.location} name="location" required />
              <label className="grid gap-2 text-sm font-semibold text-zinc-800">
                {t.fields.projectType}
                <select name="projectType" required className="h-11 rounded-md border border-zinc-300 bg-white px-3 text-sm">
                  {projectTypes.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold text-zinc-800 sm:col-span-2">
                {t.fields.signal}
                <textarea
                  name="signal"
                  required
                  rows={4}
                  className="rounded-md border border-zinc-300 px-3 py-3 text-sm"
                />
              </label>
              <Field label={t.fields.warehouseSize} name="warehouseSize" />
              <Field label={t.fields.productType} name="productType" />
              <Field label={t.fields.capacity} name="capacity" />
              <Field label={t.fields.timeline} name="timeline" />
              <Field label={t.fields.budget} name="budget" />
              <div className="sm:col-span-2">
                <p className="text-sm font-semibold text-zinc-800">{t.fields.system}</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {systems.map((system) => (
                    <label key={system} className="flex items-center gap-2 rounded-md border border-zinc-200 px-3 py-2 text-sm">
                      <input name={system} type="checkbox" className="h-4 w-4 accent-red-600" />
                      {system}
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-5 text-xs leading-5 text-muted-foreground">{t.note}</p>
            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-500"
            >
              <Mail className="h-4 w-4" />
              {t.submit}
            </button>
          </form>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight">{t.finalTitle}</h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">{t.finalBody}</p>
          </div>
          <a
            href="#lead-form"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-zinc-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-600"
          >
            <PackageCheck className="h-4 w-4" />
            {t.primaryCta}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <footer className="border-t border-border bg-zinc-950 px-4 py-8 text-sm text-zinc-300 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>Inform Thailand | Warehouse Racking & Automation Solutions</p>
          <div className="flex flex-wrap gap-4">
            <a className="inline-flex items-center gap-2 hover:text-white" href={`mailto:${contactEmail}`}>
              <Mail className="h-4 w-4" />
              Thailand project inquiry
            </a>
            <a className="inline-flex items-center gap-2 hover:text-white" href="tel:+862552726370">
              <Phone className="h-4 w-4" />
              Parent company reference
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-zinc-800">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="h-11 rounded-md border border-zinc-300 px-3 text-sm"
      />
    </label>
  );
}
