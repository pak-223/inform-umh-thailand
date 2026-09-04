import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, Phone, Send } from "lucide-react";

export const siteUrl = "https://inform-umh-thailand.sonpra0112.workers.dev";
export const contactEmail = "pakawat.th@informrack.com";

const thailandCompany = "INFORM-UMH (THAILAND) CO., LTD.";
const thailandContact = {
  name: "Mr. Pakawat Sonprates",
  position: "Sales & Project Lead (Thailand)",
  phoneDisplay: "+66 95 653 7674",
  phoneHref: "tel:+66956537674",
  lineWechat: "Pakawat-tp",
};

export type SeoPageConfig = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  lead: string;
  image: string;
  imageAlt: string;
  fitTitle: string;
  fitPoints: string[];
  buyerTitle: string;
  buyerPoints: string[];
  faq: Array<{ question: string; answer: string }>;
};

export const seoPages: SeoPageConfig[] = [
  {
    slug: "warehouse-racking-thailand",
    title: "รับออกแบบชั้นวางสินค้าอุตสาหกรรมและ Pallet Rack ในประเทศไทย",
    metaTitle: "รับออกแบบชั้นวางสินค้าอุตสาหกรรม Pallet Rack ในไทย",
    description:
      "ปรึกษาและส่ง layout เพื่อประเมิน pallet rack, selective rack, drive-in, push back, shuttle rack และ high-bay racking สำหรับโรงงานและคลังสินค้าในไทย",
    eyebrow: "Warehouse Racking Thailand",
    lead:
      "สำหรับโรงงานและคลังสินค้าที่ต้องการเพิ่มพื้นที่จัดเก็บ วาง pallet flow ให้เป็นระบบ หรือเตรียมขยายคลัง ทีม Thailand ช่วยรับ requirement และประเมินแนวทาง racking ที่เหมาะกับพื้นที่จริง",
    image: "/assets/parent-site/high-bay-racking.jpg",
    imageAlt: "ชั้นวางสินค้าอุตสาหกรรม pallet rack และ high bay racking สำหรับคลังสินค้า",
    fitTitle: "เหมาะกับโจทย์แบบไหน",
    fitPoints: [
      "ต้องการออกแบบ selective rack, drive-in rack, push back rack หรือ gravity rack",
      "ต้องการเพิ่ม pallet capacity โดยยังใช้ forklift operation",
      "กำลังสร้างคลังใหม่และต้องการ layout ชั้นวางตั้งแต่ต้น",
      "ต้องการเตรียมโครงสร้าง racking ให้รองรับ automation ในอนาคต",
    ],
    buyerTitle: "ข้อมูลที่ช่วยให้ประเมินเร็ว",
    buyerPoints: [
      "ขนาดพื้นที่คลัง ความสูงอาคาร และตำแหน่งเสา",
      "ขนาด pallet, น้ำหนักสินค้า และประเภทสินค้า",
      "จำนวน pallet ปัจจุบันและ target capacity",
      "รูปแบบรับเข้า-จ่ายออก และข้อจำกัดของ forklift aisle",
    ],
    faq: [
      {
        question: "Pallet rack แบบไหนเหมาะกับคลังโรงงาน?",
        answer:
          "ขึ้นอยู่กับจำนวน SKU, ความถี่การหยิบ, น้ำหนักสินค้า และพื้นที่ aisle ถ้า SKU หลากหลายมักเริ่มจาก selective rack ส่วนคลังที่เน้นความหนาแน่นอาจพิจารณา drive-in, push back หรือ shuttle rack",
      },
      {
        question: "ถ้ายังไม่มี layout สมบูรณ์ส่งให้ประเมินได้ไหม?",
        answer:
          "ได้ สามารถเริ่มจากขนาดพื้นที่ ความสูงอาคาร จำนวน pallet และรูปถ่ายพื้นที่ เพื่อให้ทีม Thailand ประเมินแนวทางเบื้องต้นก่อน",
      },
      {
        question: "พื้นที่ชลบุรีหรือภาคตะวันออกติดต่อทีมไหน?",
        answer:
          "ติดต่อทีม Thailand โดยตรงผ่าน Pakawat เพื่อรับ requirement และประสานการประเมินระบบ racking หรือ automation ต่อไป",
      },
    ],
  },
  {
    slug: "asrs-warehouse-automation-thailand",
    title: "ระบบ AS/RS และคลังสินค้าอัตโนมัติสำหรับโรงงานในไทย",
    metaTitle: "ระบบ AS/RS คลังสินค้าอัตโนมัติในไทย",
    description:
      "ประเมินระบบ AS/RS, automated warehouse, shuttle, stacker crane, conveyor และ WMS/WCS สำหรับโรงงาน ศูนย์กระจายสินค้า และคลัง 3PL ในประเทศไทย",
    eyebrow: "AS/RS Warehouse Automation",
    lead:
      "เหมาะกับทีมที่ต้องการเพิ่มความแม่นยำ ลด dependency จาก forklift ใช้พื้นที่แนวสูง และเชื่อมข้อมูล inventory กับระบบคลังสินค้าอัตโนมัติ",
    image: "/assets/parent-site/full-system-overview.png",
    imageAlt: "ภาพรวมระบบคลังสินค้าอัตโนมัติ AS/RS shuttle stacker crane conveyor AGV",
    fitTitle: "AS/RS เหมาะเมื่อมีสัญญาณเหล่านี้",
    fitPoints: [
      "ต้องการใช้พื้นที่แนวสูงหรือเพิ่ม storage density",
      "ต้องการควบคุม inventory และตำแหน่งสินค้าแม่นยำขึ้น",
      "ต้องการลดการพึ่งพา forklift หรือ manual handling",
      "มี throughput เป้าหมายชัดเจนและต้องการระบบต่อเนื่อง",
    ],
    buyerTitle: "ระบบที่อาจเกี่ยวข้อง",
    buyerPoints: [
      "Stacker Crane AS/RS สำหรับ pallet high-bay storage",
      "Four-way Shuttle หรือ Mother-Child Shuttle สำหรับ dense storage",
      "Conveyor, AGV/RGV และ goods-to-person picking",
      "WMS/WCS สำหรับจัดการ inventory และควบคุม equipment",
    ],
    faq: [
      {
        question: "AS/RS ต่างจาก racking ทั่วไปอย่างไร?",
        answer:
          "Racking ทั่วไปเป็นโครงสร้างจัดเก็บ ส่วน AS/RS รวมโครงสร้างจัดเก็บ เครื่องจักรอัตโนมัติ และ software control เพื่อจัดเก็บและเบิกจ่ายสินค้า",
      },
      {
        question: "ต้องมีข้อมูลอะไรเพื่อประเมิน AS/RS?",
        answer:
          "ควรมี layout, ความสูงอาคาร, pallet size/weight, SKU profile, throughput, inbound-outbound flow และ timeline โครงการ",
      },
      {
        question: "AS/RS เหมาะกับคลังสินค้าใน EEC ไหม?",
        answer:
          "เหมาะได้ถ้าโครงการต้องการความหนาแน่น ความแม่นยำ หรือ throughput สูง โดยต้องประเมินจากพื้นที่และ operation จริงก่อน",
      },
    ],
  },
  {
    slug: "shuttle-rack-system-thailand",
    title: "Shuttle Rack System สำหรับเพิ่มพื้นที่จัดเก็บในคลังสินค้า",
    metaTitle: "Shuttle Rack System Thailand เพิ่มพื้นที่จัดเก็บคลังสินค้า",
    description:
      "ประเมิน Shuttle Rack, Four-way Shuttle, Radio Shuttle และระบบจัดเก็บความหนาแน่นสูงสำหรับคลังสินค้า โรงงาน และศูนย์กระจายสินค้าในไทย",
    eyebrow: "Shuttle Rack System",
    lead:
      "Shuttle Rack เหมาะกับคลังที่ต้องการเพิ่มความหนาแน่นในการจัดเก็บ ลด aisle บางส่วน และวางระบบให้รองรับ flow สินค้าที่ชัดเจนขึ้น",
    image: "/assets/parent-site/shuttle-rack-system.png",
    imageAlt: "Shuttle Rack System สำหรับคลังสินค้าความหนาแน่นสูง",
    fitTitle: "เหมาะกับคลังแบบไหน",
    fitPoints: [
      "มีปริมาณ pallet สูงและต้องการเพิ่ม storage density",
      "ต้องการลด aisle เมื่อเทียบกับ selective rack บางรูปแบบ",
      "มีสินค้าเป็น batch, lot หรือ SKU ที่จัดกลุ่มได้",
      "ต้องการเริ่มจาก semi-automation ก่อน full automation",
    ],
    buyerTitle: "สิ่งที่ต้องเช็กก่อนเลือก Shuttle",
    buyerPoints: [
      "จำนวน SKU และจำนวน pallet ต่อ SKU",
      "อัตราการรับเข้า-จ่ายออกต่อวัน",
      "FIFO, LIFO หรือข้อกำหนดด้าน lot/expiry",
      "พื้นที่ aisle, docking, staging และ charging/maintenance",
    ],
    faq: [
      {
        question: "Shuttle Rack ช่วยเพิ่มความจุได้อย่างไร?",
        answer:
          "โดยลดจำนวน aisle และใช้ช่องจัดเก็บลึกขึ้น ทำให้พื้นที่เดียวกันรองรับ pallet ได้มากขึ้นเมื่อ SKU และ flow เหมาะสม",
      },
      {
        question: "Shuttle Rack เหมาะกับ cold storage ไหม?",
        answer:
          "หลายกรณีเหมาะกับ cold storage เพราะช่วยเพิ่ม density และลดเวลาคนทำงานในพื้นที่เย็น แต่ต้องประเมินอุณหภูมิ สินค้า และ operation จริง",
      },
      {
        question: "ควรเลือก Shuttle หรือ Stacker Crane?",
        answer:
          "Shuttle มักเหมาะกับ dense storage ที่ยืดหยุ่น ส่วน Stacker Crane เหมาะกับ high-bay AS/RS และการจัดเก็บแนวสูงแบบต่อเนื่อง",
      },
    ],
  },
  {
    slug: "stacker-crane-thailand",
    title: "Stacker Crane AS/RS สำหรับ High-Bay Warehouse ในประเทศไทย",
    metaTitle: "Stacker Crane AS/RS Thailand High-Bay Warehouse",
    description:
      "ปรึกษาระบบ Stacker Crane, pallet AS/RS และ high-bay warehouse สำหรับคลังสินค้าอัตโนมัติในไทย ชลบุรี ระยอง และพื้นที่ EEC",
    eyebrow: "Stacker Crane AS/RS",
    lead:
      "Stacker Crane เหมาะกับคลังแนวสูงที่ต้องการจัดเก็บและเบิกจ่าย pallet แบบอัตโนมัติ เชื่อม WMS/WCS และควบคุม inventory ได้แม่นยำ",
    image: "/assets/parent-site/stacker-crane.jpg",
    imageAlt: "Stacker Crane AS/RS สำหรับ high-bay warehouse",
    fitTitle: "เหมาะกับโปรเจกต์แบบไหน",
    fitPoints: [
      "คลังใหม่หรือคลัง high-bay ที่ต้องการใช้ความสูงอาคาร",
      "ต้องการ automated storage and retrieval แบบต่อเนื่อง",
      "ต้องการลด forklift traffic ในพื้นที่จัดเก็บหลัก",
      "มีเป้าหมาย inventory accuracy และ throughput ชัดเจน",
    ],
    buyerTitle: "ข้อมูลที่ควรส่งให้ทีม Thailand",
    buyerPoints: [
      "ความสูงอาคาร, grid เสา และข้อจำกัดโครงสร้าง",
      "pallet dimension, load weight และ condition สินค้า",
      "จำนวนช่องจัดเก็บและ movement ต่อชั่วโมง",
      "integration ที่ต้องเชื่อมกับ ERP, WMS หรือ production line",
    ],
    faq: [
      {
        question: "Stacker Crane ต้องใช้กับคลังใหม่เท่านั้นไหม?",
        answer:
          "ไม่จำเป็นเสมอไป แต่เหมาะมากกับคลังที่วางแผนโครงสร้างและความสูงตั้งแต่ต้น หากเป็นคลังเดิมต้องประเมินข้อจำกัดอาคารอย่างละเอียด",
      },
      {
        question: "Stacker Crane ต่างจาก forklift อย่างไร?",
        answer:
          "Stacker Crane ทำงานใน aisle เฉพาะและควบคุมด้วยระบบ จึงเหมาะกับ high-bay storage และงานที่ต้องการความแม่นยำต่อเนื่อง",
      },
      {
        question: "เริ่มประเมินงบประมาณ Stacker Crane ต้องรู้อะไร?",
        answer:
          "ควรเริ่มจากจำนวน pallet, ความสูง, throughput, จำนวน aisle และรูปแบบรับเข้า-จ่ายออก เพื่อกำหนด concept เบื้องต้น",
      },
    ],
  },
  {
    slug: "wms-wcs-warehouse-software-thailand",
    title: "WMS / WCS สำหรับคลังสินค้าอัตโนมัติและระบบจัดเก็บ",
    metaTitle: "WMS WCS Warehouse Software Thailand",
    description:
      "เชื่อมระบบ WMS/WCS สำหรับ warehouse management, equipment control, inventory tracking, AS/RS, shuttle, conveyor และ ERP integration ในไทย",
    eyebrow: "WMS / WCS Integration",
    lead:
      "สำหรับคลังที่ต้องการควบคุม inventory, equipment, task dispatch และ monitoring ให้เชื่อมกับระบบ automation หรือ racking operation อย่างเป็นระบบ",
    image: "/assets/parent-site/wms.jpg",
    imageAlt: "WMS WCS warehouse software monitoring dashboard",
    fitTitle: "WMS/WCS ช่วยแก้โจทย์อะไร",
    fitPoints: [
      "รู้ตำแหน่งสินค้าและสถานะ inventory แบบ real-time",
      "ควบคุม AS/RS, shuttle, conveyor, AGV/RGV หรือ lifter",
      "ลดงาน manual และลดความผิดพลาดในการเบิกจ่าย",
      "เชื่อมข้อมูลกับ ERP หรือระบบบริหารงานเดิม",
    ],
    buyerTitle: "สิ่งที่ต้องเตรียมก่อนคุยระบบ software",
    buyerPoints: [
      "process รับเข้า จัดเก็บ หยิบ จ่ายออก และ cycle count",
      "ข้อมูล SKU, lot, expiry, serial หรือ traceability",
      "ระบบ ERP/SAP หรือ database ที่ต้องเชื่อมต่อ",
      "report, dashboard และ approval flow ที่ต้องใช้จริง",
    ],
    faq: [
      {
        question: "WMS กับ WCS ต่างกันอย่างไร?",
        answer:
          "WMS เน้นบริหารคลังและ inventory ส่วน WCS เน้นควบคุมเครื่องจักรและการสั่งงาน automation เช่น shuttle, conveyor หรือ stacker crane",
      },
      {
        question: "ถ้ายังไม่มี automation ต้องใช้ WMS/WCS ไหม?",
        answer:
          "บางคลังเริ่มจาก WMS เพื่อจัดข้อมูลและ process ก่อน แล้วค่อยเชื่อม WCS เมื่อมี automation ในอนาคต",
      },
      {
        question: "ระบบ software ต้องเชื่อม ERP ได้ไหม?",
        answer:
          "โดยทั่วไปควรวางแผน integration กับ ERP หรือระบบธุรกิจเดิมตั้งแต่ช่วง design เพื่อให้ข้อมูลสินค้าและ order ไหลต่อเนื่อง",
      },
    ],
  },
  {
    slug: "warehouse-storage-capacity-optimization-thailand",
    title: "เพิ่มพื้นที่จัดเก็บคลังสินค้าและ Pallet Capacity โดยไม่เริ่มผิดระบบ",
    metaTitle: "เพิ่มพื้นที่จัดเก็บคลังสินค้า Pallet Capacity Thailand",
    description:
      "ส่ง layout เพื่อประเมินการเพิ่มพื้นที่จัดเก็บ เพิ่ม pallet capacity ปรับ warehouse layout และเลือก racking, shuttle หรือ AS/RS ที่เหมาะกับคลังสินค้าในไทย",
    eyebrow: "Storage Capacity Optimization",
    lead:
      "ถ้าคลังเริ่มเต็ม forklift วิ่งยาก หรือ capacity ไม่พอต่อแผนผลิต ทีม Thailand ช่วยดู layout และแนะนำว่าจะเริ่มจากปรับ racking, shuttle หรือ automation ดี",
    image: "/assets/parent-site/full-system-overview.png",
    imageAlt: "แนวทางเพิ่มพื้นที่จัดเก็บคลังสินค้า pallet capacity และ automation",
    fitTitle: "สัญญาณว่าควรประเมิน layout ใหม่",
    fitPoints: [
      "พื้นที่จัดเก็บเต็มแต่ยังไม่พร้อมขยายอาคาร",
      "ช่องทาง forklift หรือ staging area เริ่มเป็นคอขวด",
      "จำนวน pallet เพิ่มขึ้นเร็วกว่าแผนเดิม",
      "ต้องการเปรียบเทียบ racking, shuttle และ AS/RS ก่อนลงทุน",
    ],
    buyerTitle: "สิ่งที่ทีมประเมินจาก layout",
    buyerPoints: [
      "พื้นที่จัดเก็บ พื้นที่ staging และทิศทาง material flow",
      "ความสูงอาคาร น้ำหนักสินค้า และข้อจำกัดพื้น/โครงสร้าง",
      "target capacity และ movement ต่อวัน",
      "timeline, budget direction และแผนขยายในอนาคต",
    ],
    faq: [
      {
        question: "อยากเพิ่ม pallet capacity ต้องเริ่มจากอะไร?",
        answer:
          "เริ่มจากส่ง layout ปัจจุบัน จำนวน pallet target และ flow รับเข้า-จ่ายออก เพื่อประเมินว่าควรปรับ racking หรือใช้ automation",
      },
      {
        question: "การเพิ่ม capacity จำเป็นต้องใช้ automation เสมอไหม?",
        answer:
          "ไม่เสมอไป บางกรณีปรับชนิด rack หรือ layout ก็ช่วยได้ ส่วน automation เหมาะเมื่อมีโจทย์ throughput, accuracy หรือ labor dependency เพิ่มเข้ามา",
      },
      {
        question: "ทีม Thailand ช่วยประเมินเบื้องต้นได้เร็วแค่ไหน?",
        answer:
          "เมื่อมี layout และ requirement เบื้องต้น ทีมสามารถเริ่มคัดแนวทางระบบที่เหมาะสมเพื่อคุยรายละเอียดต่อได้",
      },
    ],
  },
  {
    slug: "factory-visit-warehouse-automation-thailand",
    title: "นัดเยี่ยมชมโรงงานและดูแนวทางระบบคลังสินค้าอัตโนมัติก่อนลงทุน",
    metaTitle: "เยี่ยมชมโรงงานระบบคลังสินค้าอัตโนมัติ Thailand",
    description:
      "สำหรับทีมจัดซื้อ วิศวกร และผู้บริหารที่มีโปรเจกต์คลังสินค้า สามารถนัดคุยทีม Thailand เพื่อเยี่ยมชมโรงงาน ดูแนวทางระบบ racking, AS/RS, shuttle, stacker crane และ WMS/WCS ก่อนตัดสินใจลงทุน",
    eyebrow: "Factory Visit / Project Review",
    lead:
      "โปรเจกต์คลังสินค้าเป็นการลงทุนใหญ่ ลูกค้าไม่จำเป็นต้องตัดสินใจจากหน้าเว็บเพียงอย่างเดียว หากมี layout หรือ requirement เบื้องต้น สามารถนัดหมายกับทีม Thailand เพื่อคุยโจทย์ ดูแนวทางระบบ และวางแผนเยี่ยมชมโรงงานหรือ reference ที่เกี่ยวข้องได้",
    image: "/assets/parent-site/full-system-overview.png",
    imageAlt: "นัดเยี่ยมชมโรงงานและดูระบบคลังสินค้าอัตโนมัติ AS/RS shuttle stacker crane",
    fitTitle: "เหมาะกับใคร",
    fitPoints: [
      "ทีมจัดซื้อที่กำลังคัดเลือก supplier ระบบคลังสินค้า",
      "วิศวกรหรือ project team ที่ต้องการเห็นภาพระบบก่อนสรุป specification",
      "ผู้บริหารที่ต้องการประเมินความน่าเชื่อถือก่อนลงทุน",
      "ทีมที่มี layout แล้วและต้องการหารือ racking, AS/RS, shuttle หรือ WMS/WCS",
    ],
    buyerTitle: "สิ่งที่ควรส่งมาก่อนนัดหมาย",
    buyerPoints: [
      "layout หรือ drawing ของพื้นที่คลังสินค้า",
      "ประเภทสินค้า, pallet size, pallet weight และ target capacity",
      "timeline โครงการและเป้าหมายทาง operation",
      "ระบบที่สนใจ เช่น pallet rack, shuttle, stacker crane, AS/RS หรือ WMS/WCS",
    ],
    faq: [
      {
        question: "ลูกค้าสามารถนัดเยี่ยมชมโรงงานได้ไหม?",
        answer:
          "ได้ หากเป็นทีมที่มีโปรเจกต์จริงหรือกำลังประเมินระบบ ทีม Thailand สามารถรับ requirement และประสานแนวทางนัดหมายเพื่อเยี่ยมชมโรงงานหรือพูดคุยระบบที่เกี่ยวข้องได้",
      },
      {
        question: "ก่อนเยี่ยมชมโรงงานต้องเตรียมอะไร?",
        answer:
          "ควรเตรียม layout, ขนาดคลัง, ประเภทสินค้า, pallet capacity และโจทย์ที่ต้องการแก้ เพื่อให้การพูดคุยตรงกับระบบที่เหมาะสม",
      },
      {
        question: "ถ้ายังไม่แน่ใจว่าจะใช้ระบบอะไร ควรติดต่อไหม?",
        answer:
          "ควรติดต่อได้เลย ทีม Thailand สามารถช่วยดูโจทย์ก่อนว่าเหมาะกับ racking, shuttle, stacker crane, AS/RS หรือควรเริ่มจาก layout optimization",
      },
    ],
  },
];

export function SeoLandingPage({ page }: { page: SeoPageConfig }) {
  const pageUrl = `${siteUrl}/${page.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: page.metaTitle,
        description: page.description,
        provider: {
          "@type": "Organization",
          name: thailandCompany,
          url: siteUrl,
          email: contactEmail,
          telephone: thailandContact.phoneDisplay,
        },
        areaServed: ["Thailand", "Chonburi", "Rayong", "Chachoengsao", "Prachinburi", "Eastern Seaboard", "EEC"],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: page.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden bg-zinc-50 px-4 py-20 sm:px-6 lg:px-8">
        <Image
          src={page.image}
          alt={page.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.08fr_420px] lg:items-center">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-red-700">
              <ArrowRight className="h-4 w-4 rotate-180" />
              กลับหน้า INFORM-UMH Thailand
            </Link>
            <div className="mt-8 inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-red-700">
              {page.eyebrow}
            </div>
            <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              {page.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-700 sm:text-lg">
              {page.lead}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${contactEmail}?subject=${encodeURIComponent(page.metaTitle)}`}
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
            </div>
          </div>

          <aside className="rounded-3xl border border-zinc-200 bg-white/95 p-6 shadow-2xl shadow-zinc-200/80">
            <p className="text-xs font-bold uppercase tracking-widest text-red-600">Thailand Project Contact</p>
            <h2 className="mt-3 text-xl font-bold">{thailandContact.name}</h2>
            <p className="mt-1 text-sm text-zinc-600">{thailandContact.position}</p>
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
            </div>
          </aside>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-zinc-200 p-6">
            <h2 className="text-2xl font-bold">{page.fitTitle}</h2>
            <div className="mt-5 space-y-4">
              {page.fitPoints.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-red-600" />
                  <p className="text-sm leading-relaxed text-zinc-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-zinc-200 p-6">
            <h2 className="text-2xl font-bold">{page.buyerTitle}</h2>
            <div className="mt-5 space-y-4">
              {page.buyerPoints.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-red-600" />
                  <p className="text-sm leading-relaxed text-zinc-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold tracking-tight">คำถามที่พบบ่อย</h2>
          <div className="mt-8 grid gap-4">
            {page.faq.map((item) => (
              <details key={item.question} className="rounded-2xl border border-zinc-200 bg-white p-5">
                <summary className="cursor-pointer text-base font-bold">{item.question}</summary>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{item.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href={`mailto:${contactEmail}?subject=${encodeURIComponent(page.metaTitle)}`}
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-red-500"
            >
              <Send className="h-4 w-4" />
              ส่ง Layout / Requirement ให้ทีม Thailand ประเมิน
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
