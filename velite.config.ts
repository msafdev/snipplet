import { exec } from "node:child_process";
import { promisify } from "node:util";
import rehypePrettyCode from "rehype-pretty-code";
import { defineCollection, defineConfig, s } from "velite";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
} from "@shikijs/transformers";

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: "min-dark",
  transformers: [transformerNotationDiff(), transformerNotationHighlight()],
};

const meta = s
  .object({
    title: s.string().optional(),
    description: s.string().optional(),
    keywords: s.array(s.string()).optional(),
  })
  .default({});

const execAsync = promisify(exec);

const timestamp = () =>
  s
    .custom<string | undefined>((i) => i === undefined || typeof i === "string")
    .transform<string>(async (value, { meta, addIssue }) => {
      if (value != null) {
        addIssue({
          fatal: false,
          code: "custom",
          message:
            "`s.timestamp()` schema will resolve the value from `git log -1 --format=%cd`",
        });
      }
      const { stdout } = await execAsync(
        `git log -1 --format=%cd ${meta.path}`
      );
      return new Date(stdout || Date.now()).toISOString();
    });

const docs = defineCollection({
  name: "Doc",
  pattern: "docs/**/*.mdx",
  schema: s
    .object({
      title: s.string().max(99),
      slug: s.slug("doc"),
      type: s
        .enum(["start", "component", "animation", "block"])
        .default("component"),
      date: s.isodate(),
      updated: timestamp(),
      cover: s.image().optional(),
      video: s.file().optional(),
      description: s.string().max(999).optional(),
      draft: s.boolean().default(false),
      featured: s.boolean().default(false),
      categories: s.array(s.string()).default(["Journal"]),
      tags: s.array(s.string()).default([]),
      meta: meta,
      toc: s.toc(),
      metadata: s.metadata(),
      excerpt: s.excerpt(),
      content: s.mdx(),
    })
    .transform((data) => ({ ...data, permalink: `/docs/${data.slug}` })),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { docs },
  mdx: { rehypePlugins: [[rehypePrettyCode, options]] },
  prepare: ({ docs }) => {
    const doc = docs.filter(
      (i) => process.env.NODE_ENV !== "production" || !i.draft
    );
  },
});
