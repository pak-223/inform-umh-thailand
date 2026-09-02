"use client";

import Image from "next/image";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Factory,
  Mail,
  MessageSquare,
  Phone,
  QrCode,
  Send,
  Settings2,
  ShieldCheck,
  Sparkles,
  Warehouse,
  Workflow,
  X,
} from "lucide-react";
import { FormEvent, useState } from "react";

const contactEmail = "pakawat.th@informrack.com";
const thailandCompany = "INFORM-UMH (THAILAND) CO., LTD.";
const thailandLogo = "/assets/parent-site/inform-logo.png";
const externalLeadFormUrl = "";
const thailandContact = {
  name: "Mr. Pakawat Sonprates",
  position: "Sales & Project Lead (Thailand)",
  phoneDisplay: "+66 95 653 7674",
  phoneHref: "tel:+66956537674",
  lineWechat: "Pakawat-tp",
  lineQrImage: "/assets/line-qr.jpg",
  wechatQrImage: "/assets/wechat-qr.jpg",
};

const copy = {
  th: {
    label: "ไทย",
    nav: ["โซลูชัน", "หมวดหมู่สินค้า", "ส่ง Requirement"],
    badge: thailandCompany,
    heroTitle: "โซลูชันระบบคลังสินค้าอัตโนมัติ และชั้นวางสินค้าอุตสาหกรรมระดับโลก",
    heroLead:
      "ยกระดับประสิทธิภาพคลังสินค้าด้วยเทคโนโลยีคลังสินค้าอัตโนมัติ (AS/RS), ระบบ Four-way Shuttle, Stacker Crane และ WMS/WCS มาตรฐานวิศวกรรมระดับสากล พร้อมทีมงานวิศวกรและฝ่ายขายดูแลในประเทศไทย",
    primaryCta: "ปรึกษาโปรเจกต์ & ขอประเมินราคา",
    secondaryCta: "สำรวจโซลูชันระบบคลังสินค้า",
    credibility: "ก่อตั้งปี 1997 | Listed 603066 (SSE)",
    proofTitle: "มาตรฐานวิศวกรรมระดับสากล พร้อมทีมงานดูแลในประเทศไทย",
    proofBody:
      "Nanjing Inform Storage Group ผู้นำด้านโซลูชัน Intelligent Logistics จดทะเบียนในตลาดหลักทรัพย์ Shanghai Stock Exchange (603066) มุ่งมั่นส่งมอบระบบจัดเก็บและบริหารคลังสินค้าความแม่นยำสูง ครอบคลุมตั้งแต่ High Precision Rack ไปจนถึงระบบ Automation สมบูรณ์แบบ",
    solutionsTitle: "ออกแบบโซลูชันตามโจทย์ธุรกิจคลังสินค้าของคุณ",
    solutionsLead:
      "วิเคราะห์พื้นที่และความต้องการเฉพาะของธุรกิจคุณ เพื่อเลือกโซลูชันที่เหมาะกับ layout, product flow, operation และแผนขยายคลังสินค้า",
    formTitle: "ส่งข้อมูลความต้องการเพื่อประเมินโปรเจกต์เบื้องต้น",
    formLead:
      "ทีมงานวิศวกรและฝ่ายขายในประเทศไทยพร้อมประเมินพื้นที่ Layout และช่วยวางแนวทางระบบที่เหมาะสมกับธุรกิจของคุณ",
    submit: "ส่งข้อมูลประเมินโปรเจกต์",
    note: "เมื่อกดส่ง ระบบจะเปิดอีเมลพร้อมสรุปข้อมูลโครงการเพื่อให้คุณส่งตรงถึงทีมงาน Sales Thailand ได้ทันที",
    fields: {
      contactName: "ชื่อผู้ติดต่อ *",
      company: "ชื่อบริษัท / องค์กร *",
      phone: "เบอร์โทรศัพท์ติดต่อ",
      email: "อีเมลสำหรับตอบกลับ",
      location: "สถานที่ตั้งโครงการ / จังหวัด *",
      projectType: "ประเภทโครงการ",
      signal: "โจทย์ความต้องการหรือรายละเอียดโปรเจกต์ *",
      warehouseSize: "ขนาดพื้นที่คลังสินค้า (ตร.ม. / สูง กี่เมตร)",
      productType: "ประเภทสินค้า / ชนิด Pallet",
      capacity: "เป้าหมายความจุจัดเก็บ (Pallet Capacity)",
      timeline: "กำหนดการเริ่มโครงการ (Timeline)",
      budget: "งบประมาณโดยประมาณ",
      system: "ระบบที่สนใจประเมินราคา",
    },
    productsTitle: "หมวดหมู่ผลิตภัณฑ์มาตรฐานสากล (Product Range)",
    productsLead:
      "ครอบคลุมทุกระบบจัดเก็บคลังสินค้า จากโรงงานผู้ผลิตมาตรฐานสากลของ Inform Storage Group",
    visualsTitle: "โซลูชันคลังสินค้าอัตโนมัติครบวงจรในภาพเดียว",
    visualsLead:
      "เห็นภาพการเชื่อมต่อของ Racking, Shuttle, AS/RS, AGV, Conveyor และ Monitoring เพื่อวางแผนระบบคลังสินค้าที่เหมาะกับพื้นที่ การไหลของสินค้า และเป้าหมายการขยายธุรกิจของคุณ",
    visualSource: "ภาพสินค้าและโซลูชันจาก Inform Storage Group",
    parentSystemsTitle: "เลือกโซลูชันให้เหมาะกับรูปแบบคลังสินค้าของคุณ",
    parentSystemsLead:
      "Inform มีระบบให้เลือกตั้งแต่โซลูชันกึ่งอัตโนมัติสำหรับเพิ่มความจุ ไปจนถึงระบบคลังสินค้าอัตโนมัติเต็มรูปแบบสำหรับงานที่ต้องการ throughput และความแม่นยำสูง",
    manufacturingTitle: "กำลังผลิตและวิศวกรรมจากเครือ Inform Storage Group",
    manufacturingLead:
      "Inform Storage Group มีฐานผลิตและทีมสนับสนุนในหลายพื้นที่ รวมถึง Thailand plant พร้อมสภาพแวดล้อมสำหรับทดสอบ Shuttle, AGV, Conveyor และ WMS/WCS เพื่อสนับสนุนงานออกแบบระบบก่อนนำไปใช้จริง",
    referencesTitle: "ตัวอย่างลูกค้าและเคสอ้างอิงระดับสากล",
    referencesLead:
      "ดูตัวอย่างอุตสาหกรรมและโปรเจกต์ที่ Inform Storage Group เคยรองรับ เพื่อประเมินแนวทางที่อาจเหมาะกับคลังสินค้าในประเทศไทยของคุณ",
    sourceLink: "ดูข้อมูลบริษัทแม่",
    faqTitle: "คำถามที่พบบ่อยเกี่ยวกับการเริ่มโปรเจกต์คลังสินค้า",
    faqLead:
      "คำตอบเบื้องต้นสำหรับทีมที่กำลังวางแผนสร้างคลังใหม่ ขยายพื้นที่จัดเก็บ หรือพิจารณาระบบ Automation",
    industriesTitle: "กลุ่มอุตสาหกรรมที่ไว้วางใจใช้งาน",
    industriesLead:
      "รองรับการใช้งานในหลากหลายอุตสาหกรรมหลักที่มีข้อกำหนดความแม่นยำและมาตรฐานความปลอดภัยสูง",
    finalTitle: "พร้อมยกระดับคลังสินค้าของคุณแล้วหรือยัง?",
    finalBody:
      "ส่ง Layout, Drawing หรือโจทย์ความต้องการเบื้องต้นให้ทีมงาน Thailand ช่วยประเมินและออกแบบโซลูชันที่คุ้มค่าที่สุด",
    contactTitle: "ติดต่อทีมงาน Sales & Engineering Thailand",
    contactLead: "ปรึกษาโปรเจกต์ ติดต่อคุณ Pakawat ได้โดยตรงทุกวัน",
    qrTitle: "สแกนเพื่อเพิ่มเพื่อน (LINE / WeChat)",
  },
  en: {
    label: "EN",
    nav: ["Solutions", "Products", "Send Requirement"],
    badge: thailandCompany,
    heroTitle: "World-Class Warehouse Racking & Automation Solutions",
    heroLead:
      "Transforming warehouse logistics with advanced Automated Storage & Retrieval Systems (AS/RS), Four-way Shuttles, Stacker Cranes, and Intelligent WMS/WCS software. Engineering excellence supported by local Thailand experts.",
    primaryCta: "Project Consultation & Quote",
    secondaryCta: "Explore Warehouse Solutions",
    credibility: "Founded 1997 | SSE Listed 603066",
    proofTitle: "Global Engineering Expertise, Local Thailand Sales & Engineering Support",
    proofBody:
      "Nanjing Inform Storage Group (SSE Code: 603066) is a premier global provider of intelligent logistics and warehouse storage solutions, delivering high-precision racking systems, shuttle technology, stacker cranes, and WMS/WCS integration worldwide.",
    solutionsTitle: "Tailored Solutions Engineered for Your Operations",
    solutionsLead:
      "We analyze your site layout, SKU characteristics, and throughput targets to engineer high-density, cost-effective warehouse storage systems.",
    formTitle: "Submit Project Requirements for Initial Review",
    formLead:
      "Share your project scope or layout drawing. Our Thailand engineering & sales team will evaluate your requirements and contact you with targeted recommendations.",
    submit: "Submit Project Inquiry",
    note: "Submitting generates an email summary directly formatted for immediate intake by our Thailand Sales & Engineering team.",
    fields: {
      contactName: "Contact Name *",
      company: "Company Name *",
      phone: "Phone Number",
      email: "Business Email",
      location: "Project Location / Province *",
      projectType: "Project Type",
      signal: "Project Scope & Key Requirements *",
      warehouseSize: "Warehouse Area (sq.m / Height)",
      productType: "Cargo Type / Pallet Spec",
      capacity: "Target Pallet Capacity",
      timeline: "Target Timeline",
      budget: "Estimated Budget",
      system: "Interested Systems",
    },
    productsTitle: "Global Product Range",
    productsLead:
      "Comprehensive warehouse storage systems manufactured to international quality standards.",
    visualsTitle: "A complete warehouse automation solution at a glance",
    visualsLead:
      "See how racking, shuttle systems, AS/RS, AGV, conveyors, and monitoring can work together to support your warehouse layout, product flow, and future expansion plan.",
    visualSource: "Product and solution visuals from Inform Storage Group",
    parentSystemsTitle: "Select the right solution for your warehouse operation",
    parentSystemsLead:
      "Inform offers a practical range of systems, from semi-automated storage upgrades to fully automated warehouse solutions for higher-throughput operations.",
    manufacturingTitle: "Manufacturing and engineering capability from Inform Storage Group",
    manufacturingLead:
      "Inform Storage Group operates across multiple production bases, including a Thailand plant, with test environments for shuttle, AGV, conveyor, and WMS/WCS integrated systems.",
    referencesTitle: "Global customer and project references",
    referencesLead:
      "Explore industries and project examples supported by Inform Storage Group, then share your Thailand warehouse requirements for a local project review.",
    sourceLink: "View parent company profile",
    faqTitle: "Frequently asked questions for warehouse projects",
    faqLead:
      "Quick answers for teams planning a new warehouse, storage expansion, or automation upgrade.",
    industriesTitle: "Target Industry Applications",
    industriesLead:
      "Proven performance across major industrial sectors requiring high precision and safety standards.",
    finalTitle: "Ready to Upgrade Your Warehouse Operations?",
    finalBody:
      "Send your layout drawing or project requirements to our Thailand team for initial engineering review.",
    contactTitle: "Contact Thailand Sales & Engineering",
    contactLead: "For Thailand projects, contact Pakawat directly.",
    qrTitle: "Scan QR Code (LINE / WeChat)",
  },
  zh: {
    label: "中文",
    nav: ["解决方案", "产品中心", "提交需求"],
    badge: thailandCompany,
    heroTitle: "全球领先的智能仓储货架与自动化物流解决方案",
    heroLead:
      "采用先进的自动化立库 (AS/RS)、四向穿梭车、堆垛机及 WMS/WCS 智能管理软件，全面提升仓库空间利用率与作业效率。全球工程标准，泰国本地专业团队全方位服务。",
    primaryCta: "项目咨询与报价",
    secondaryCta: "浏览仓储解决方案",
    credibility: "成立于 1997 | 沪市上市 (603066)",
    proofTitle: "全球化工程品质，泰国本地技术与销售团队支持",
    proofBody:
      "音飞储存 (Nanjing Inform Storage Group, 股票代码 603066) 是全球知名的智能物流仓储设备与解决方案提供商，业务涵盖高精度货架、穿梭车系统、堆垛机及 WMS/WCS 软件集成。",
    solutionsTitle: "定制化仓储规划，精准匹配业务需求",
    solutionsLead:
      "针对您的仓库空间、出入库频率及预算，提供从传统高密度货架到全自动化立库的最优方案设计。",
    formTitle: "提交项目需求，获取专业评估",
    formLead:
      "提交您的仓库平面图或项目需求，泰国本地销售与工程团队将为您提供针对性的系统方案建议。",
    submit: "提交项目评估申请",
    note: "提交后将自动生成项目需求邮件，方便直接与泰国本地团队取得联系。",
    fields: {
      contactName: "联系人姓名 *",
      company: "公司名称 *",
      phone: "联系电话",
      email: "电子邮箱",
      location: "项目地点 / 省份 *",
      projectType: "项目类型",
      signal: "项目需求与评估重点 *",
      warehouseSize: "仓库面积 (平方米 / 净高)",
      productType: "货物类型 / 托盘规格",
      capacity: "目标托盘容量",
      timeline: "预计项目周期",
      budget: "预算范围",
      system: "感兴趣的系统",
    },
    productsTitle: "全球标准化产品中心",
    productsLead:
      "涵盖符合国际质量标准的全系列仓储设备与自动化系统。",
    visualsTitle: "一张图了解完整智能仓储自动化方案",
    visualsLead:
      "展示货架、穿梭车、AS/RS、AGV、输送线及监控系统如何协同运作，帮助规划适合仓库布局、货物流转和未来扩展的系统方案。",
    visualSource: "图片来自 Inform Storage Group 产品与解决方案资料",
    parentSystemsTitle: "为您的仓储运营选择合适的系统方案",
    parentSystemsLead:
      "Inform 提供从半自动化存储升级到全自动化立体仓库的多种系统选择，适用于高效率、高吞吐量的仓储运营场景。",
    manufacturingTitle: "Inform Storage Group 的制造与工程能力",
    manufacturingLead:
      "Inform Storage Group 拥有多个生产基地，包括 Thailand plant，并具备穿梭车、AGV、输送线及 WMS/WCS 集成系统的测试环境。",
    referencesTitle: "全球客户与项目案例参考",
    referencesLead:
      "了解 Inform Storage Group 服务过的行业与项目类型，并将泰国仓库需求提交给本地团队进行方案评估。",
    sourceLink: "查看母公司资料",
    faqTitle: "仓储项目常见问题",
    faqLead:
      "适用于正在规划新仓库、扩充存储容量或评估自动化升级的团队。",
    industriesTitle: "主要应用行业",
    industriesLead:
      "广泛应用于对精度与安全性要求高的各大工业与物流领域。",
    finalTitle: "准备好升级您的仓库系统了吗？",
    finalBody:
      "欢迎发送平面图或初步需求，泰国本地团队将为您进行初步技术评估与方案规划。",
    contactTitle: "联系泰国销售与工程团队",
    contactLead: "泰国项目请直接联系 Pakawat。",
    qrTitle: "扫描二维码添加好友 (LINE / WeChat)",
  },
};

const solutionCards = [
  {
    id: "racking",
    icon: Warehouse,
    titleKey: "High Precision Racking",
    thTitle: "ระบบชั้นวางสินค้าความแม่นยำสูง (Racking Solutions)",
    enTitle: "High Precision Racking Solutions",
    zhTitle: "高精度货架系统解决方案",
    th: "Selective Rack, Drive-in, Push Back, Gravity Rack, Shuttle Rack, Cantilever และ High Bay สำหรับเพิ่มประสิทธิภาพการจัดเก็บและจัดระบบ pallet flow",
    en: "Selective Rack, Drive-in, Push Back, Gravity Rack, Shuttle Rack, Cantilever, and High Bay systems engineered for maximum storage density.",
    zh: "选择式货架、驶入式、后推式、重力式、穿梭车货架及高位货架，用于提升仓储规划与托盘流转效率。",
    focus: {
      th: "วางผังพื้นที่และเพิ่มประสิทธิภาพการไหลของสินค้า",
      en: "Layout planning and storage flow optimization",
      zh: "仓库布局规划与货物流转优化",
    },
  },
  {
    id: "automation",
    icon: Settings2,
    titleKey: "Warehouse Automation",
    thTitle: "ระบบคลังสินค้าอัตโนมัติ (Automated Warehouse & AS/RS)",
    enTitle: "Automated Storage & Retrieval Systems (AS/RS)",
    zhTitle: "自动化立库与穿梭车系统 (AS/RS)",
    th: "Four-way Pallet Shuttle, Stacker Crane System, Mother-Child Shuttle และ Goods-to-Person สำหรับงานคลังที่ต้องการ automation และ throughput สูง",
    en: "Four-way Pallet Shuttle, Stacker Crane, Mother-Child Shuttle, and Goods-to-Person systems for higher-throughput warehouse automation.",
    zh: "四向托盘穿梭车、堆垛机系统、子母车及货到人系统，适用于高效率自动化仓储场景。",
    focus: {
      th: "เลือก automation ให้เหมาะกับ throughput และขั้นตอนทำงาน",
      en: "Automation fit for throughput and material flow",
      zh: "根据吞吐量与物流动线匹配自动化方案",
    },
  },
  {
    id: "software",
    icon: Workflow,
    titleKey: "WMS / WCS Integration",
    thTitle: "ซอฟต์แวร์บริหารคลังสินค้า (WMS / WCS Smart Control)",
    enTitle: "WMS / WCS Intelligent Software",
    zhTitle: "WMS / WCS 智能软件集成",
    th: "ระบบบริหารจัดการคลังสินค้า (WMS) และระบบควบคุมเครื่องจักร (WCS) เชื่อมต่อข้อมูล Real-time ติดตามตำแหน่งสินค้าและกระจายงานอัตโนมัติ",
    en: "Warehouse Management System (WMS) & Control System (WCS) for real-time inventory tracking, equipment execution, and ERP integration.",
    zh: "WMS 仓储管理系统与 WCS 设备控制系统，实现实时库存可视化与自动化调度。",
    focus: {
      th: "เชื่อมข้อมูลคลังสินค้า เครื่องจักร และระบบบริหารงาน",
      en: "Warehouse software integration and equipment control",
      zh: "仓储软件集成与设备控制",
    },
  },
  {
    id: "consultation",
    icon: Building2,
    titleKey: "Turnkey Engineering Services",
    thTitle: "บริการวิศวกรรมแบบครบวงจร (Turnkey Project Support)",
    enTitle: "Turnkey Project Engineering",
    zhTitle: "交钥匙工程与技术咨询",
    th: "ให้คำปรึกษาตั้งแต่ New Warehouse Construction, Space Expansion, Capacity Optimization ไปจนถึง System Upgrade โดยทีมวิศวกรผู้เชี่ยวชาญ",
    en: "End-to-end services covering new warehouse planning, storage expansion, AS/RS upgrades, and layout optimization.",
    zh: "从新仓建设、扩建规划到自动化升级，提供一站式工程咨询与技术支持。",
    focus: {
      th: "ประเมินโจทย์โครงการและวางแนวทางลงทุน",
      en: "Project requirement review and solution direction",
      zh: "项目需求评估与方案方向规划",
    },
  },
];

const productFamilies = [
  {
    id: "racking-family",
    title: "High Precision Rack Systems",
    subtitle: "ชั้นวางสินค้าอุตสาหกรรมความแม่นยำสูง",
    href: "https://en.informrack.com/gjmhj.aspx?nid=3&typeid=92",
    image: "/assets/parent-site/high-bay-racking.jpg",
    items: [
      "Drive-In & Drive-Thru Rack",
      "Radio Shuttle Racking",
      "Push Back Racking System",
      "Gravity Roller Racking",
      "Electric Mobile Racking",
      "Heavy Duty Cantilever Rack",
      "Automated High Bay Structure",
    ],
  },
  {
    id: "stacker-family",
    title: "Stacker Crane AS/RS Systems",
    subtitle: "ระบบเครนจัดเก็บสินค้าอัตโนมัติ (Stacker Crane)",
    href: "https://en.informrack.com/gjmhj.aspx?nid=3&typeid=93",
    image: "/assets/parent-site/stacker-crane.jpg",
    items: [
      "Single / Double Deep Stacker Crane",
      "Pallet AS/RS High-Bay Storage",
      "Miniload Stacker Crane for Boxes",
      "Curved Track Stacker Crane",
      "Shuttle + Stacker Crane Integration",
    ],
  },
  {
    id: "shuttle-family",
    title: "Intelligent Shuttle Systems",
    subtitle: "หุ่นยนต์พวกลำเลียงสินค้า 2 ทิศทาง และ 4 ทิศทาง",
    href: "https://en.informrack.com/gjmhj.aspx?nid=3&typeid=94",
    image: "/assets/parent-site/shuttle-rack-system.png",
    items: [
      "Four-Way Pallet Shuttle",
      "Two-Way Heavy Duty Shuttle",
      "Four-Way Tote Shuttle",
      "Mother-Child Shuttle System",
      "High-Speed Attic Shuttle",
    ],
  },
  {
    id: "wms-family",
    title: "WMS / WCS Logistics Software",
    subtitle: "ซอฟต์แวร์บริหารคลังสินค้าและควบคุมเครื่องจักร",
    href: "https://en.informrack.com/wmswcs.aspx?nid=3&typeid=95",
    image: "/assets/parent-site/wms.jpg",
    items: [
      "Warehouse Management System (WMS)",
      "Warehouse Control System (WCS)",
      "Multi-Warehouse Central Dashboard",
      "3D Real-time Visual Monitoring",
      "ERP / SAP Integration Gateway",
    ],
  },
];

const visualHighlights = [
  {
    title: "Integrated AS/RS + Shuttle + AGV Warehouse",
    subtitle: "ภาพรวมระบบคลังอัตโนมัติครบชุด",
    image: "/assets/parent-site/full-system-overview.png",
  },
  {
    title: "Shuttle Rack Storage System",
    subtitle: "ระบบ Shuttle Rack สำหรับคลังความหนาแน่นสูง",
    image: "/assets/parent-site/shuttle-rack-system.png",
  },
  {
    title: "Stacker Crane AS/RS",
    subtitle: "ระบบจัดเก็บและเบิกจ่ายด้วย Stacker Crane",
    image: "/assets/parent-site/stacker-crane.jpg",
  },
  {
    title: "Warehouse Software & Monitoring",
    subtitle: "WMS / WCS และหน้าจอติดตามสถานะคลังสินค้า",
    image: "/assets/parent-site/wms.jpg",
  },
];

const parentProductSystems = [
  "Shuttle + Forklift System",
  "Shuttle + Stacker System",
  "Mother-Child Shuttle System",
  "Attic Shuttle System",
  "Four-Way Tote Shuttle System",
  "Two-Way Tote Shuttle System",
  "Four-Way Shuttle System",
  "Goods-to-Person Picking System",
];

const manufacturingHighlights = [
  {
    title: "Production Network Including Thailand Plant",
    body: "Regional production capability supports faster project coordination and stronger confidence for customers planning warehouse investment in Thailand.",
  },
  {
    title: "Automation Test Environment",
    body: "Integrated testing for shuttle, AGV, conveyor, lifter, and WMS/WCS helps validate system flow before real project rollout.",
  },
  {
    title: "Rack, Automation, Software, and Service",
    body: "Inform combines high-precision racking, automation integration, intelligent software, and service support in one warehouse solution approach.",
  },
];

const referenceCustomers = [
  "FAW-Volkswagen",
  "SAIC-Volkswagen",
  "GM",
  "Chery Automobile",
  "Beijing Benz-Daimler-Chrysler",
  "Dongfeng Honda Engine",
  "Bosch Automotive Products (Changsha)",
  "CSR Changchun Railway Coach Group",
  "Zhengzhou Yutong Bus Group",
  "BYD Automobile",
  "Yili Foods",
  "Lenovo Mobile Communications",
];

const referenceCases = [
  "Nanjing Water Palletized four-way shuttle",
  "Nentech stacker shuttle",
  "Sunyu Double Reach two-way tote shuttle",
  "FAW Fusheng Palletized four-way shuttle",
  "FAWSN Group Four-way Tote Shuttle",
  "Wellcome shuttle garage",
];

const faqs = [
  {
    question: {
      th: "ควรเริ่มต้นประเมินระบบคลังสินค้าจากข้อมูลอะไร?",
      en: "What information is needed to start a warehouse system review?",
      zh: "评估仓储系统需要先提供哪些信息？",
    },
    answer: {
      th: "ข้อมูลที่ช่วยให้ประเมินได้เร็วคือ layout หรือ drawing, ขนาดพื้นที่คลัง, ความสูงอาคาร, ประเภทสินค้า, จำนวน pallet หรือ target capacity, รูปแบบการรับเข้า-จ่ายออก และ timeline ของโครงการ",
      en: "Useful starting information includes layout or drawings, warehouse area, building height, cargo type, pallet quantity or target capacity, inbound-outbound flow, and project timeline.",
      zh: "建议提供仓库平面图、面积、净高、货物类型、托盘数量或目标容量、出入库流程以及项目时间计划。",
    },
  },
  {
    question: {
      th: "AS/RS เหมาะกับคลังสินค้าแบบไหน?",
      en: "What type of warehouse is suitable for AS/RS?",
      zh: "什么类型的仓库适合 AS/RS 自动化立库？",
    },
    answer: {
      th: "AS/RS เหมาะกับคลังที่ต้องการใช้พื้นที่แนวสูง เพิ่มความแม่นยำในการจัดเก็บ ลดการพึ่งพารถยก และต้องการควบคุม inventory ผ่านระบบ WMS/WCS",
      en: "AS/RS is suitable for warehouses that need vertical storage, higher inventory accuracy, reduced forklift dependency, and WMS/WCS-based control.",
      zh: "AS/RS 适用于需要高位存储、提升库存准确性、减少叉车依赖，并通过 WMS/WCS 管理库存与设备的仓库。",
    },
  },
  {
    question: {
      th: "ถ้ายังไม่แน่ใจว่าควรใช้ Racking หรือ Automation ทำอย่างไร?",
      en: "What if we are not sure whether to choose racking or automation?",
      zh: "如果不确定选择货架还是自动化系统怎么办？",
    },
    answer: {
      th: "สามารถส่งโจทย์เบื้องต้นให้ทีม Thailand ประเมินได้ ทีมจะดูจากพื้นที่ ความจุที่ต้องการ throughput งบประมาณ และแผนขยาย เพื่อแนะนำแนวทางที่เหมาะสม",
      en: "You can send an initial requirement to the Thailand team. We review layout, target capacity, throughput, budget direction, and expansion plans before suggesting a suitable path.",
      zh: "可以先提交初步需求给泰国团队，我们会根据布局、目标容量、吞吐量、预算方向和扩展计划建议合适方案。",
    },
  },
  {
    question: {
      th: "ระบบ Shuttle แตกต่างจาก Stacker Crane อย่างไร?",
      en: "How is a shuttle system different from a stacker crane system?",
      zh: "穿梭车系统和堆垛机系统有什么区别？",
    },
    answer: {
      th: "Shuttle มักเหมาะกับการเพิ่มความหนาแน่นและความยืดหยุ่นของช่องจัดเก็บ ส่วน Stacker Crane เหมาะกับงาน high-bay AS/RS ที่ต้องการจัดเก็บและเบิกจ่ายตามแนวสูงแบบต่อเนื่อง",
      en: "Shuttle systems are often used for dense and flexible storage, while stacker cranes are commonly used in high-bay AS/RS for continuous vertical storage and retrieval.",
      zh: "穿梭车系统通常用于高密度、灵活存储；堆垛机系统常用于高位立体库，实现连续的垂直存取作业。",
    },
  },
  {
    question: {
      th: "ทีม Thailand ช่วยอะไรในช่วงเริ่มต้นได้บ้าง?",
      en: "How can the Thailand team support the early project stage?",
      zh: "泰国团队在项目初期可以提供哪些支持？",
    },
    answer: {
      th: "ทีม Thailand ช่วยรับ requirement, ตรวจภาพรวม layout, ประเมินประเภทระบบที่เหมาะสม และประสานข้อมูลที่จำเป็นเพื่อเข้าสู่ขั้นตอนออกแบบหรือ quotation ต่อไป",
      en: "The Thailand team can receive requirements, review the initial layout, identify suitable system directions, and coordinate the information needed for design or quotation.",
      zh: "泰国团队可协助收集需求、初步审核布局、判断适合的系统方向，并协调后续设计或报价所需资料。",
    },
  },
  {
    question: {
      th: "สามารถส่งไฟล์ layout หรือ drawing ได้ไหม?",
      en: "Can we send layout or drawing files?",
      zh: "可以提交仓库布局图或图纸文件吗？",
    },
    answer: {
      th: "ได้ แนะนำให้ส่ง PDF, DWG, รูปพื้นที่ หรือข้อมูลขนาดคลังเบื้องต้น หากยังไม่มีไฟล์ครบ สามารถส่งรายละเอียดสั้น ๆ เพื่อเริ่มประเมินก่อนได้",
      en: "Yes. PDF, DWG, site photos, or basic warehouse dimensions are helpful. If files are not ready, you can still send a short requirement to start the review.",
      zh: "可以。PDF、DWG、现场照片或基本仓库尺寸都有帮助。如果资料尚未完整，也可以先提交简要需求。",
    },
  },
];

const industries = [
  { name: "Automobile & Parts", desc: "ชิ้นส่วนยานยนต์" },
  { name: "Cold Chain & Frozen Food", desc: "คลังสินค้าแช่เย็น-แช่แข็ง" },
  { name: "Pharmaceutical & Medical", desc: "เวชภัณฑ์และยา" },
  { name: "Electronics & Energy", desc: "ชิ้นส่วนอิเล็กทรอนิกส์" },
  { name: "Food & Beverage", desc: "อาหารและเครื่องดื่ม" },
  { name: "Chemical & Industrial Materials", desc: "เคมีภัณฑ์และวัตถุดิบ" },
  { name: "FMCG & Retail Logistics", desc: "สินค้าอุปโภคบริโภค" },
  { name: "3PL & E-Commerce Center", desc: "ผู้ให้บริการคลังสินค้า 3PL" },
];

const projectTypes = [
  "สร้างคลังสินค้าใหม่ (New Warehouse)",
  "ขยายพื้นที่จัดเก็บเดิม (Expansion)",
  "เพิ่มความจุ Pallet (Increase Storage Capacity)",
  "อัปเกรดระบบอัตโนมัติ (Automation Upgrade)",
  "เปลี่ยนระบบชั้นวางเดิม (Replacement)",
  "อื่นๆ / ขอรับคำปรึกษา (Consultation)",
];

const systems = [
  "High Precision Racking",
  "Radio Shuttle System",
  "Four-way Shuttle AS/RS",
  "Stacker Crane AS/RS",
  "Conveyor / AGV / RGV",
  "WMS / WCS Software",
];

type Lang = keyof typeof copy;

const siteUrl = "https://inform-umh-thailand.sonpra0112.workers.dev";
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: thailandCompany,
      url: siteUrl,
      logo: `${siteUrl}${thailandLogo}`,
      email: contactEmail,
      telephone: thailandContact.phoneDisplay,
      areaServed: "Thailand",
      parentOrganization: {
        "@type": "Organization",
        name: "Nanjing Inform Storage Group",
        url: "https://en.informrack.com/",
      },
      sameAs: [
        "https://en.informrack.com/",
        "https://en.informrack.com/about.aspx?nid=1&typeid=187",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: thailandCompany,
      url: siteUrl,
      email: contactEmail,
      telephone: thailandContact.phoneDisplay,
      areaServed: "Thailand",
      address: {
        "@type": "PostalAddress",
        addressCountry: "TH",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        name: thailandContact.name,
        email: contactEmail,
        telephone: thailandContact.phoneDisplay,
        areaServed: "TH",
        availableLanguage: ["Thai", "English", "Chinese"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "INFORM-UMH Thailand Warehouse Racking & Automation",
      url: siteUrl,
      inLanguage: ["th", "en", "zh"],
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#warehouse-automation-service`,
      name: "Warehouse racking and automation project consultation in Thailand",
      serviceType: "Warehouse racking, AS/RS, shuttle system, stacker crane, WMS/WCS consultation",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: "Thailand",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Warehouse storage and automation solutions",
        itemListElement: [
          "High Precision Rack Systems",
          "Shuttle Systems",
          "Stacker Crane AS/RS Systems",
          "WMS/WCS Logistics Software",
          "Goods-to-Person Picking System",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name,
          },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question.th,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer.th,
        },
      })),
    },
  ],
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("th");
  const [activeTab, setActiveTab] = useState<string>("racking");
  const [qrModal, setQrModal] = useState<"line" | "wechat" | null>(null);

  const t = copy[lang];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const selectedSystems = systems.filter((system) => data.get(system));
    const params = new URLSearchParams({
      contactName: String(data.get("contactName") || ""),
      company: String(data.get("company") || ""),
      phone: String(data.get("phone") || ""),
      email: String(data.get("email") || ""),
      location: String(data.get("location") || ""),
      projectType: String(data.get("projectType") || ""),
      requirement: String(data.get("signal") || ""),
      systems: selectedSystems.join(", "),
      assignedSales: thailandContact.name,
    });

    if (externalLeadFormUrl) {
      const separator = externalLeadFormUrl.includes("?") ? "&" : "?";
      window.location.href = `${externalLeadFormUrl}${separator}${params.toString()}`;
      return;
    }

    const body = [
      "========================================",
      "INFORM THAILAND PROJECT INTAKE FORM",
      "========================================",
      thailandCompany,
      "",
      `Contact Name: ${data.get("contactName") || ""}`,
      `Company: ${data.get("company") || ""}`,
      `Phone: ${data.get("phone") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Project Location / Province: ${data.get("location") || ""}`,
      `Project Type: ${data.get("projectType") || ""}`,
      "",
      "--- PROJECT REQUIREMENTS ---",
      `Project Scope / Details: ${data.get("signal") || ""}`,
      `Warehouse Size / Height: ${data.get("warehouseSize") || ""}`,
      `Product Type / Pallet Spec: ${data.get("productType") || ""}`,
      `Target Pallet Capacity: ${data.get("capacity") || ""}`,
      `Timeline: ${data.get("timeline") || ""}`,
      `Estimated Budget: ${data.get("budget") || ""}`,
      `Interested Systems: ${selectedSystems.join(", ") || "N/A"}`,
      "",
      "--- THAILAND SALES ASSIGNED ---",
      `Sales & Project Lead: ${thailandContact.name}`,
      `Title: ${thailandContact.position}`,
      `Email: ${contactEmail}`,
      `Direct Call: ${thailandContact.phoneDisplay}`,
      `Line / WeChat ID: ${thailandContact.lineWechat}`,
      "",
      "Note: Please attach layout drawings (DWG/PDF) or site photos to this email if available.",
    ].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      `[Project Intake] ${data.get("company") || "Warehouse Requirement"} - INFORM-UMH Thailand`,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <main className="min-h-screen bg-white text-zinc-950 antialiased selection:bg-red-600 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      {/* HEADER NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-white/90 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3 group" aria-label="Inform Thailand Home">
            <span className="relative h-10 w-36 overflow-hidden transition group-hover:scale-[1.02] sm:w-40">
              <Image
                src={thailandLogo}
                alt="Inform Storage logo"
                fill
                sizes="160px"
                className="object-contain"
              />
            </span>
            <div className="hidden flex-col sm:flex">
              <span className="text-sm font-bold tracking-tight text-zinc-950">Inform Thailand</span>
              <span className="text-[10px] font-medium tracking-widest text-red-600 uppercase">
                {thailandCompany}
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex">
            <a href="#solutions" className="transition hover:text-red-600">
              {t.nav[0]}
            </a>
            <a href="#products" className="transition hover:text-red-600">
              {t.nav[1]}
            </a>
            <a href="#lead-form" className="transition hover:text-red-600">
              {t.nav[2]}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex rounded-lg border border-zinc-200 bg-zinc-100 p-1">
              {(Object.keys(copy) as Lang[]).map((item) => (
                <button
                  key={item}
                  onClick={() => setLang(item)}
                  className={`rounded-md px-3 py-1 text-xs font-semibold transition ${
                    lang === item
                      ? "bg-red-600 text-white shadow-md"
                      : "text-zinc-600 hover:text-zinc-950"
                  }`}
                >
                  {copy[item].label}
                </button>
              ))}
            </div>

            <a
              href="#lead-form"
              className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-red-200/80 transition hover:bg-red-500 active:scale-95"
            >
              <Send className="h-3.5 w-3.5" />
              {t.primaryCta}
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="top" className="relative flex min-h-[92svh] items-center overflow-hidden bg-zinc-50 pt-24 pb-16">
        <Image
          src="/assets/parent-site/full-system-overview.png"
          alt="Integrated automated warehouse system overview"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/55" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_400px] lg:items-center lg:px-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-xs font-semibold tracking-wider text-red-700 backdrop-blur-md uppercase">
              <Sparkles className="h-3.5 w-3.5 text-red-600" />
              {t.badge}
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl leading-[1.1]">
              {t.heroTitle}
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-zinc-700 sm:text-lg">
              {t.heroLead}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-red-600 px-6 py-4 text-sm font-bold text-white shadow-xl shadow-red-200/80 transition hover:bg-red-500 hover:shadow-red-200/80 active:scale-95"
              >
                <Send className="h-4 w-4" />
                {t.primaryCta}
              </a>

              <a
                href="#solutions"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white/80 px-6 py-4 text-sm font-semibold text-zinc-900 backdrop-blur-md transition hover:border-red-300 hover:text-red-700"
              >
                {t.secondaryCta}
                <ChevronRight className="h-4 w-4 text-zinc-500" />
              </a>
            </div>

            <div className="pt-6 border-t border-zinc-200 grid gap-4 sm:grid-cols-2 max-w-lg">
              <div>
                <p className="text-2xl font-black text-zinc-950">1997</p>
                <p className="text-xs text-zinc-600">Founded Year</p>
              </div>
              <div>
                <p className="text-2xl font-black text-red-600">603066</p>
                <p className="text-xs text-zinc-600">SSE Listed Code</p>
              </div>
            </div>
          </div>

          {/* LOCAL SALES CARD WITH QR CODE BUTTONS */}
          <aside className="rounded-2xl border border-zinc-200 bg-white/90 p-6 backdrop-blur-xl shadow-2xl shadow-zinc-200/80 space-y-5">
            <div className="flex items-center gap-3 border-b border-zinc-200 pb-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-red-50 text-red-600 border border-red-200">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-red-600">
                  Thailand Support
                </p>
                <p className="text-base font-bold text-zinc-950">{thailandContact.name}</p>
                <p className="text-xs text-zinc-600">{thailandContact.position}</p>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={thailandContact.phoneHref}
                className="flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-sm font-medium text-zinc-900 transition hover:border-red-300 hover:bg-red-50"
              >
                <span className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-red-600" />
                  Direct Phone
                </span>
                <span className="font-semibold text-red-700">{thailandContact.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${contactEmail}`}
                className="flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-sm font-medium text-zinc-900 transition hover:border-red-300 hover:bg-red-50"
              >
                <span className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-red-600" />
                  Email
                </span>
                <span className="font-semibold text-red-700">{contactEmail}</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setQrModal("line")}
                  className="flex items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100"
                >
                  <QrCode className="h-4 w-4 text-emerald-400" />
                  LINE QR Code
                </button>
                <button
                  onClick={() => setQrModal("wechat")}
                  className="flex items-center justify-center gap-2 rounded-xl border border-green-200 bg-green-50 p-3 text-xs font-bold text-green-700 transition hover:bg-green-100"
                >
                  <QrCode className="h-4 w-4 text-green-400" />
                  WeChat QR Code
                </button>
              </div>
            </div>

            <div className="pt-2 text-xs text-zinc-600 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-red-600 flex-none" />
              <span>ทีม Thailand พร้อมประเมิน Layout และ requirement เบื้องต้น</span>
            </div>
          </aside>
        </div>
      </section>

      {/* SYSTEM VISUAL OVERVIEW */}
      <section className="border-t border-zinc-200 bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:items-center">
            <div className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-red-600">
                Integrated Warehouse Solutions
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                {t.visualsTitle}
              </h2>
              <p className="text-base leading-relaxed text-zinc-700">{t.visualsLead}</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#lead-form"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-xs font-bold text-white transition hover:bg-red-500"
                >
                  <Send className="h-3.5 w-3.5" />
                  {t.primaryCta}
                </a>
                <a
                  href="https://en.informrack.com/products.aspx?nid=3&typeid=91"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 py-3 text-xs font-bold text-zinc-950 transition hover:border-red-300 hover:text-red-700"
                >
                  View Global Product Range
                  <ExternalLink className="h-3.5 w-3.5 text-red-600" />
                </a>
              </div>
              <p className="text-[11px] font-medium text-zinc-500">{t.visualSource}</p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl shadow-zinc-200/80">
              <div className="relative aspect-[16/9] bg-white">
                <Image
                  src="/assets/parent-site/full-system-overview.png"
                  alt="Full warehouse automation solution overview with AS/RS, shuttle, AGV, conveyor, and monitoring system"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-contain"
                />
              </div>
              <div className="border-t border-zinc-200 bg-white p-4">
                <p className="text-sm font-bold text-zinc-950">
                  Complete warehouse automation concept
                </p>
                <p className="mt-1 text-xs text-zinc-600">
                  AS/RS, stacker crane, shuttle, conveyor, AGV, goods-to-person picking, and monitoring in one connected flow.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {visualHighlights.slice(1).map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-lg shadow-zinc-200/60"
              >
                <div className="relative aspect-[4/3] bg-zinc-50">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-contain p-3"
                  />
                </div>
                <div className="border-t border-zinc-200 p-4">
                  <h3 className="text-sm font-bold text-zinc-950">{item.title}</h3>
                  <p className="mt-1 text-xs text-zinc-600">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS TAB EXPLORER */}
      <section id="solutions" className="border-t border-zinc-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600">
              Tailored Engineering
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              {t.solutionsTitle}
            </h2>
            <p className="mt-4 text-base text-zinc-600">{t.solutionsLead}</p>
          </div>

          {/* TAB BUTTONS */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {solutionCards.map((card) => {
              const Icon = card.icon;
              const isSelected = activeTab === card.id;
              return (
                <button
                  key={card.id}
                  onClick={() => setActiveTab(card.id)}
                  className={`flex items-center gap-2.5 rounded-xl px-5 py-3 text-sm font-semibold transition ${
                    isSelected
                      ? "bg-red-600 text-white shadow-lg shadow-red-200/80"
                      : "border border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:text-zinc-950"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {card.titleKey}
                </button>
              );
            })}
          </div>

          {/* ACTIVE TAB CONTENT */}
          <div className="mt-8">
            {solutionCards.map((card) => {
              if (card.id !== activeTab) return null;
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  className="rounded-2xl border border-zinc-200 bg-white p-8 backdrop-blur-xl shadow-2xl shadow-zinc-200/70 grid gap-8 lg:grid-cols-[1fr_340px] items-center animate-fadeIn"
                >
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-red-600/20 px-3 py-1 text-xs font-bold text-red-600">
                      <Icon className="h-4 w-4" />
                      {card.titleKey}
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-950">
                      {lang === "th" ? card.thTitle : lang === "zh" ? card.zhTitle : card.enTitle}
                    </h3>
                    <p className="text-base leading-relaxed text-zinc-700">{card[lang]}</p>
                    <div className="pt-4 flex items-center gap-4">
                      <a
                        href="#lead-form"
                        className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-red-500 transition"
                      >
                        <Send className="h-3.5 w-3.5" />
                        {t.primaryCta}
                      </a>
                    </div>
                  </div>

                  <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 space-y-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-600">
                      How We Help Your Project
                    </p>
                    <p className="text-xl font-black text-red-600">{card.focus[lang]}</p>
                    <p className="text-xs text-zinc-600">
                      ส่ง layout หรือ requirement ให้ทีม Thailand ช่วยแนะนำแนวทางระบบที่เหมาะกับคลังของคุณ
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCTS GALLERY */}
      <section id="products" className="border-t border-zinc-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-red-600">
                Official Catalog
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                {t.productsTitle}
              </h2>
              <p className="mt-3 text-base text-zinc-600">{t.productsLead}</p>
            </div>
            <a
              href="https://en.informrack.com/sitemap.aspx"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-xs font-bold text-zinc-950 transition hover:bg-zinc-100"
            >
              View Global Parent Catalog
              <ExternalLink className="h-3.5 w-3.5 text-red-600" />
            </a>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {productFamilies.map((family) => (
              <div
                key={family.id}
                className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl transition hover:border-red-500/50"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-zinc-50">
                  <Image
                    src={family.image}
                    alt={family.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-contain p-3 transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-600">
                      Standardized Product Line
                    </span>
                    <h3 className="text-xl font-bold text-white">{family.title}</h3>
                    <p className="text-xs text-zinc-200">{family.subtitle}</p>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {family.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <a
                      href="#lead-form"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 text-xs font-bold text-white transition hover:bg-red-500"
                    >
                      ขอคำปรึกษารายการนี้
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* INDUSTRIES GRID */}
          <div className="mt-16 pt-12 border-t border-zinc-200">
            <h3 className="text-2xl font-bold text-zinc-950 text-center">{t.industriesTitle}</h3>
            <p className="text-xs text-zinc-600 text-center mt-2">{t.industriesLead}</p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {industries.map((ind) => (
                <div
                  key={ind.name}
                  className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-center space-y-1 hover:border-red-500/40 transition"
                >
                  <p className="text-sm font-bold text-zinc-950">{ind.name}</p>
                  <p className="text-xs text-zinc-600">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARENT SYSTEM NAMES */}
      <section className="border-t border-zinc-200 bg-zinc-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-red-600">
                Solution Portfolio
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-950">
                {t.parentSystemsTitle}
              </h2>
              <p className="text-sm leading-relaxed text-zinc-700">{t.parentSystemsLead}</p>
              <a
                href="#lead-form"
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-xs font-bold text-white transition hover:bg-red-500"
              >
                <Send className="h-3.5 w-3.5" />
                {t.primaryCta}
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {parentProductSystems.map((system) => (
                <div
                  key={system}
                  className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm shadow-zinc-200/60"
                >
                  <CheckCircle2 className="h-5 w-5 flex-none text-red-600" />
                  <p className="text-sm font-semibold text-zinc-900">{system}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROOF & GLOBAL CREDIBILITY */}
      <section id="proof" className="border-t border-zinc-200 bg-zinc-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="space-y-6">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-red-600/20 text-red-600 border border-red-500/30">
              <Factory className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold text-zinc-950 sm:text-4xl leading-tight">
              {t.manufacturingTitle}
            </h2>
            <p className="text-base leading-relaxed text-zinc-700">{t.manufacturingLead}</p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <a
                href="https://en.informrack.com/sv_complex.aspx?nid=8"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-zinc-50 px-5 py-3 text-xs font-bold text-zinc-950 hover:bg-zinc-100 transition"
              >
                {t.sourceLink}
                <ExternalLink className="h-3.5 w-3.5 text-red-600" />
              </a>
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-xs font-bold text-white hover:bg-red-500 transition"
              >
                <Send className="h-3.5 w-3.5" />
                {t.primaryCta}
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            {manufacturingHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xl shadow-zinc-200/70"
              >
                <p className="text-base font-bold text-zinc-950">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARENT REFERENCES */}
      <section className="border-t border-zinc-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600">
              Parent Company References
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              {t.referencesTitle}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-700">{t.referencesLead}</p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-600">
                Customer Names Published by Inform Storage Group
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {referenceCustomers.map((customer) => (
                  <span
                    key={customer}
                    className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-800"
                  >
                    {customer}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {referenceCases.map((caseName) => (
                <div
                  key={caseName}
                  className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-lg shadow-zinc-200/60"
                >
                  <p className="text-sm font-bold text-zinc-950">{caseName}</p>
                  <p className="mt-2 text-xs text-zinc-600">
                    Global project case shared by Inform Storage Group.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#lead-form"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-xs font-bold text-white transition hover:bg-red-500"
            >
              <Send className="h-3.5 w-3.5" />
              {t.primaryCta}
            </a>
            <a
              href="https://en.informrack.com/case.aspx?nid=4&typeid=202"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 py-3 text-xs font-bold text-zinc-950 transition hover:border-red-300 hover:text-red-700"
            >
              {t.sourceLink}
              <ExternalLink className="h-3.5 w-3.5 text-red-600" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ FOR SEO / AEO */}
      <section id="faq" className="border-t border-zinc-200 bg-zinc-50 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600">
              FAQ
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              {t.faqTitle}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-700">{t.faqLead}</p>
          </div>

          <div className="mt-10 grid gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.question.en}
                className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-200/70"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                  <span className="text-base font-bold text-zinc-950">{faq.question[lang]}</span>
                  <ChevronRight className="h-5 w-5 flex-none text-red-600 transition group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{faq.answer[lang]}</p>
              </details>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="#lead-form"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-xs font-bold text-white transition hover:bg-red-500"
            >
              <Send className="h-3.5 w-3.5" />
              {t.primaryCta}
            </a>
          </div>
        </div>
      </section>

      {/* LEAD INTAKE FORM */}
      <section id="lead-form" className="border-t border-zinc-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-[400px_1fr]">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600">
              Project Intake
            </span>
            <h2 className="text-3xl font-bold text-zinc-950 sm:text-4xl">{t.formTitle}</h2>
            <p className="text-sm leading-relaxed text-zinc-700">{t.formLead}</p>

            {/* SALES SUPPORT CARD */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 space-y-4">
              <p className="text-xs font-bold uppercase tracking-wider text-red-600">
                {t.contactTitle}
              </p>
              <p className="text-lg font-bold text-zinc-950">{thailandContact.name}</p>
              <p className="text-xs text-zinc-600">{thailandContact.position}</p>

              <div className="space-y-2 pt-2 text-xs">
                <a
                  href={thailandContact.phoneHref}
                  className="flex items-center gap-2 text-zinc-700 hover:text-red-600"
                >
                  <Phone className="h-4 w-4 text-red-600" />
                  {thailandContact.phoneDisplay}
                </a>
                <div className="flex items-center gap-2 text-zinc-700">
                  <MessageSquare className="h-4 w-4 text-red-600" />
                  Line / WeChat: {thailandContact.lineWechat}
                </div>
                <a
                  href={`mailto:${contactEmail}`}
                  className="flex items-center gap-2 text-zinc-700 hover:text-red-600"
                >
                  <Mail className="h-4 w-4 text-red-600" />
                  {contactEmail}
                </a>
              </div>

              <div className="pt-3 flex gap-2">
                <button
                  type="button"
                  onClick={() => setQrModal("line")}
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-lg border border-emerald-200 bg-emerald-50 py-2 text-[11px] font-bold text-emerald-700 hover:bg-emerald-100 transition"
                >
                  <QrCode className="h-3.5 w-3.5 text-emerald-400" />
                  LINE QR
                </button>
                <button
                  type="button"
                  onClick={() => setQrModal("wechat")}
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-lg border border-green-200 bg-green-50 py-2 text-[11px] font-bold text-green-700 hover:bg-green-100 transition"
                >
                  <QrCode className="h-3.5 w-3.5 text-green-400" />
                  WeChat QR
                </button>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 backdrop-blur-xl space-y-6 shadow-2xl"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={t.fields.contactName} name="contactName" required />
              <Field label={t.fields.company} name="company" required />
              <Field label={t.fields.phone} name="phone" type="tel" />
              <Field label={t.fields.email} name="email" type="email" />
              <Field label={t.fields.location} name="location" required />

              <label className="grid gap-2 text-xs font-semibold text-zinc-700">
                {t.fields.projectType}
                <select
                  name="projectType"
                  required
                  className="h-11 rounded-xl border border-zinc-200 bg-white px-3 text-xs text-zinc-950 focus:border-red-500 focus:outline-none"
                >
                  {projectTypes.map((item) => (
                    <option key={item} value={item} className="bg-white">
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2 text-xs font-semibold text-zinc-700 sm:col-span-2">
                {t.fields.signal}
                <textarea
                  name="signal"
                  required
                  rows={4}
                  placeholder="ระบุข้อมูลเพิ่มเติม เช่น ขนาดคลังสินค้า, ชนิด Pallet หรือสิ่งที่ต้องการประเมิน..."
                  className="rounded-xl border border-zinc-200 bg-white p-3 text-xs text-zinc-950 focus:border-red-500 focus:outline-none"
                />
              </label>

              <Field label={t.fields.warehouseSize} name="warehouseSize" />
              <Field label={t.fields.productType} name="productType" />
              <Field label={t.fields.capacity} name="capacity" />
              <Field label={t.fields.timeline} name="timeline" />
              <Field label={t.fields.budget} name="budget" />

              <div className="sm:col-span-2">
                <p className="text-xs font-semibold text-zinc-700 mb-3">{t.fields.system}</p>
                <div className="grid gap-2 sm:grid-cols-3">
                  {systems.map((system) => (
                    <label
                      key={system}
                      className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-xs text-zinc-700 hover:border-red-500/40 cursor-pointer"
                    >
                      <input
                        name={system}
                        type="checkbox"
                        className="h-4 w-4 rounded accent-red-600"
                      />
                      {system}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-[11px] text-zinc-600">{t.note}</p>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-4 text-sm font-bold text-white shadow-xl shadow-red-200/80 transition hover:bg-red-500 active:scale-95"
            >
              <Mail className="h-4 w-4" />
              {t.submit}
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 bg-zinc-50 py-12 text-xs text-zinc-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-sm font-bold text-zinc-950">{thailandCompany}</p>
            <p className="mt-1">
              Sales & Project Support: {thailandContact.name} ({thailandContact.phoneDisplay})
            </p>
          </div>
          <div className="flex gap-6">
            <a href={`mailto:${contactEmail}`} className="hover:text-zinc-950">
              {contactEmail}
            </a>
            <button onClick={() => setQrModal("line")} className="hover:text-emerald-400">
              LINE QR
            </button>
            <button onClick={() => setQrModal("wechat")} className="hover:text-green-400">
              WeChat QR
            </button>
          </div>
        </div>
      </footer>

      {/* FLOATING QUICK CONTACT BAR */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <button
          onClick={() => setQrModal("line")}
          className="grid h-12 w-12 place-items-center rounded-full bg-emerald-600 text-white shadow-xl shadow-emerald-200/80 transition hover:scale-110 active:scale-95"
          title="Open LINE QR Code"
        >
          <QrCode className="h-6 w-6" />
        </button>
        <button
          onClick={() => setQrModal("wechat")}
          className="grid h-12 w-12 place-items-center rounded-full bg-green-600 text-white shadow-xl shadow-green-200/80 transition hover:scale-110 active:scale-95"
          title="Open WeChat QR Code"
        >
          <QrCode className="h-6 w-6" />
        </button>
        <a
          href={thailandContact.phoneHref}
          className="grid h-12 w-12 place-items-center rounded-full bg-red-600 text-white shadow-xl shadow-red-200/80 transition hover:scale-110 active:scale-95"
          title={`Call ${thailandContact.phoneDisplay}`}
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>

      {/* QR CODE MODAL */}
      {qrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/45 p-4 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-sm rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-2xl space-y-4">
            <button
              onClick={() => setQrModal(null)}
              className="absolute top-4 right-4 text-zinc-600 hover:text-zinc-950"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-red-600">
              {qrModal === "line" ? "LINE Contact" : "WeChat Contact"}
            </span>

            <h3 className="text-lg font-bold text-zinc-950">{thailandContact.name}</h3>

            <div className="relative mx-auto aspect-square w-64 overflow-hidden rounded-xl border border-zinc-300 bg-white p-2">
              <Image
                src={
                  qrModal === "line" ? thailandContact.lineQrImage : thailandContact.wechatQrImage
                }
                alt={qrModal === "line" ? "LINE QR Code" : "WeChat QR Code"}
                fill
                className="object-contain p-2"
              />
            </div>

            <p className="text-xs text-zinc-700">
              ID: <span className="font-bold text-zinc-950">{thailandContact.lineWechat}</span>
            </p>
          </div>
        </div>
      )}
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
    <label className="grid gap-2 text-xs font-semibold text-zinc-700">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="h-11 rounded-xl border border-zinc-200 bg-white px-3 text-xs text-zinc-950 focus:border-red-500 focus:outline-none"
      />
    </label>
  );
}
