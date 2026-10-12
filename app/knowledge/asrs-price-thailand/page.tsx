import type { Metadata } from 'next';
import { getKnowledgeArticle, KnowledgeArticlePage } from '../article-content';

const article = getKnowledgeArticle('asrs-price-thailand')!;

export const metadata: Metadata = {
  title: article.metaTitle,
  description: article.description,
  alternates: { canonical: `/knowledge/${article.slug}` },
  openGraph: {
    title: article.title,
    description: article.description,
    url: `/knowledge/${article.slug}`,
    type: 'article',
    images: [article.image],
  },
};

export default function Page() {
  return <KnowledgeArticlePage article={article} />;
}
