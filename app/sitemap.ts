import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://inform-umh-thailand.sonpra0112.workers.dev";
const seoRoutes = [
  "warehouse-racking-chonburi-eec",
  "warehouse-racking-thailand",
  "asrs-warehouse-automation-thailand",
  "shuttle-rack-system-thailand",
  "stacker-crane-thailand",
  "wms-wcs-warehouse-software-thailand",
  "warehouse-storage-capacity-optimization-thailand",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...seoRoutes.map((route) => ({
      url: `${siteUrl}/${route}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    })),
  ];
}
