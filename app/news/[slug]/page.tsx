export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import { generateStaticParams, generateMetadata, articles } from "./utils";
import ArticleContent from "./ArticleContent";

export { generateStaticParams, generateMetadata };

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return notFound();

  return <ArticleContent article={article} />;
}
