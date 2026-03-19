import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// ============================================
// 博客笔记 (Notes) — 原有 blog 集合保留沿用
// ============================================
const blog = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.{md,mdx}',
    base: "./src/content/blog",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.union([z.string(), z.array(z.string())]).optional(),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    cover: z.string().optional(),
    excerpt: z.string().optional(),
    comment: z.boolean().optional(),
    outdated: z.boolean().optional(),
    toc: z.boolean().optional(),
    author: z.string().optional(),
    sponsor: z.boolean().optional(),
    copyright: z.boolean().optional(),
    share: z.boolean().optional(),
  }),
});

// ============================================
// 项目展示 (Projects)
// ============================================
const projects = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.{md,mdx}',
    base: "./src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // 基本信息
    date: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    // 项目媒体
    cover: z.string().optional(),
    images: z.array(z.string()).optional(),
    // 项目链接
    links: z.object({
      demo: z.string().optional(),
      repo: z.string().optional(),
      blog: z.string().optional(),
      paper: z.string().optional(),
      video: z.string().optional(),
    }).optional(),
    // 特性标签
    featured: z.boolean().optional().default(false),
    status: z.enum(["active", "completed", "wip", "archived"]).optional().default("active"),
    // 扩展字段（预留）
    draft: z.boolean().optional().default(false),
  }).passthrough(),
});

// ============================================
// 科研成果 (Research)
// ============================================
const research = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.{md,mdx}',
    base: "./src/content/research",
  }),
  schema: z.object({
    title: z.string(),
    // 学术元数据
    type: z.enum(["paper", "patent", "opensource", "experiment", "talk", "misc"]),
    venue: z.string().optional(),          // 期刊/会议/专利号
    date: z.coerce.date(),
    // 链接
    links: z.object({
      pdf: z.string().optional(),
      doi: z.string().optional(),
      repo: z.string().optional(),
      demo: z.string().optional(),
      video: z.string().optional(),
      patent: z.string().optional(),
    }).optional(),
    // 摘要/描述
    abstract: z.string().optional(),
    description: z.string().optional(),
    // 标签
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
    // 媒体
    cover: z.string().optional(),
    // 状态
    draft: z.boolean().optional().default(false),
  }).passthrough(),
});

// ============================================
// 生活内容 (Life)
// ============================================
const life = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.{md,mdx}',
    base: "./src/content/life",
  }),
  schema: z.object({
    title: z.string(),
    type: z.enum(["gallery", "writing", "game", "video", "travel", "daily", "misc"]),
    date: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    // 图片画廊
    images: z.array(z.string()).optional(),
    cover: z.string().optional(),
    // 扩展
    draft: z.boolean().optional().default(false),
  }).passthrough(),
});

// ============================================
// 统一标签系统（规范说明）
// ============================================
// 技术标签: robotics, ai, control, embedded, llm, cv, mobile-robot, manip
// 领域标签: research, engineering, hobby, creative
// 状态标签: published, draft, wip
// 生活标签: travel, game, photography, writing

export const collections = {
  blog,
  projects,
  research,
  life,
};
