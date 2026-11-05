import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://inform-umh-thailand.sonpra0112.workers.dev";
const originalContentDate = new Date("2026-10-12T00:00:00+07:00");
const latestContentDate = new Date("2026-11-05T00:00:00+07:00");
const seoRoutes = [
  "warehouse-racking-chonburi-eec",
  "warehouse-racking-thailand",
  "asrs-warehouse-automation-thailand",
  "shuttle-rack-system-thailand",
  "stacker-crane-thailand",
  "wms-wcs-warehouse-software-thailand",
  "warehouse-storage-capacity-optimization-thailand",
  "factory-visit-warehouse-automation-thailand",
];
const knowledgeRoutes = [
  "knowledge/asrs-price-thailand",
  "knowledge/shuttle-vs-stacker-crane",
  "knowledge/warehouse-automation-checklist",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: latestContentDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...seoRoutes.map((route) => ({
      url: `${siteUrl}/${route}`,
      lastModified: originalContentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    {
      url: `${siteUrl}/knowledge`,
      lastModified: latestContentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...knowledgeRoutes.map((route) => ({
      url: `${siteUrl}/${route}`,
      lastModified: originalContentDate,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    {
      url: `${siteUrl}/knowledge/pallet-rack-vs-shuttle-vs-asrs`,
      lastModified: latestContentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
