import type { Metadata } from "next";
import { SeoLandingPage, seoPages } from "../seo-page-content";

const page = seoPages.find((item) => item.slug === "shuttle-rack-system-thailand")!;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.description,
  alternates: { canonical: `/${page.slug}` },
  openGraph: {
    title: page.metaTitle,
    description: page.description,
    url: `/${page.slug}`,
    images: [page.image],
  },
};

export default function Page() {
  return <SeoLandingPage page={page} />;
}
