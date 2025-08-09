import Image from "next/image";
import { notFound } from "next/navigation";

import { docs } from "#velite";
import { MDXContent } from "@/components/ui/mdx";

import "@/styles/mdx.css";

interface PostProps {
  params: Promise<{ slug: string }>;
}

function getPostBySlug(slug: string) {
  return docs.find((doc) => doc.slug === slug);
}

export default async function PostPage({ params }: PostProps) {
  const { slug } = await params;
  const doc = getPostBySlug(slug);

  if (doc == null) notFound();

  return (
    <article className="prose lg:prose-lg dark:prose-invert w-full max-w-lg lg:max-w-xl mx-auto px-6">
      <h1 className="text-2xl font-semibold font-display mb-6">{doc.title}</h1>
      {doc.description && (
        <p className="mb-6 text-base text-muted-foreground">
          {doc.description}
        </p>
      )}
      {doc.cover && (
        <Image src={doc.cover} alt={doc.title} placeholder="blur" className="mb-6" />
      )}
      <MDXContent code={doc.content} />
    </article>
  );
}

export async function generateMetadata({ params }: PostProps) {
  const { slug } = await params;
  const doc = getPostBySlug(slug);
  if (doc == null) return {};
  return { title: doc.title, description: doc.description };
}

export function generateStaticParams() {
  return docs.map((doc) => ({ slug: doc.slug }));
}
