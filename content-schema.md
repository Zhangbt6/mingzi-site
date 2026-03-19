# Content Collections Schema 文档

> 定义 mingzi-site 所有内容模型的 Schema，基于 Astro Content Collections v3 (Content Layer API)。

---

## 📁 集合总览

| Collection | 目录 | 主要用途 | 路由 |
|-----------|------|---------|------|
| `blog` | `src/content/blog/` | 博客笔记（沿用原主题） | `/blog/{slug}` |
| `projects` | `src/content/projects/` | 项目展示 | `/projects/{slug}` |
| `research` | `src/content/research/` | 科研成果 | `/research/{slug}` |
| `life` | `src/content/life/` | 生活内容 | `/life/{slug}` |

---

## 📝 blog（博客笔记）

沿用 astro-theme-reimu 原生 schema，字段说明略。

---

## 🚀 projects（项目展示）

**文件位置**: `src/content/projects/{slug}.md`

### 必需字段

| 字段 | 类型 | 说明 |
|------|------|------|
| `title` | string | 项目标题 |
| `description` | string | 项目一句话简介 |

### 可选字段

| 字段 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `date` | date | — | 创建日期 |
| `updatedDate` | date | — | 更新日期 |
| `tags` | string[] | [] | 技术标签 |
| `cover` | string | — | 封面图路径 |
| `images` | string[] | [] | 项目截图/图片列表 |
| `links.demo` | string | — | 线上演示地址 |
| `links.repo` | string | — | 源码仓库 |
| `links.blog` | string | — | 博客文章地址 |
| `links.paper` | string | — | 相关论文 |
| `links.video` | string | — | 演示视频 |
| `featured` | boolean | false | 是否在首页精选 |
| `status` | enum | "active" | active/completed/wip/archived |
| `draft` | boolean | false | 草稿状态 |

### 示例

```yaml
---
title: 四足机器人开源项目
description: 基于 ROS2 的四足机器人控制框架
date: 2025-01-15
tags: [robotics, control, ros2]
cover: /assets/spark/banner-1.jpg
links:
  repo: https://github.com/example/quadruped
  demo: https://demo.example.com
featured: true
status: active
---
```

---

## 🔬 research（科研成果）

**文件位置**: `src/content/research/{slug}.md`

### 必需字段

| 字段 | 类型 | 说明 |
|------|------|------|
| `title` | string | 成果标题 |
| `type` | enum | paper/patent/opensource/experiment/talk/misc |
| `date` | date | 发表/完成日期 |

### 可选字段

| 字段 | 类型 | 说明 |
|------|------|------|
| `venue` | string | 期刊/会议/专利号 |
| `abstract` | string | 论文摘要 |
| `description` | string | 简要描述 |
| `tags` | string[] | 研究标签 |
| `categories` | string[] | 分类 |
| `cover` | string | 封面/配图 |
| `links.pdf` | string | PDF 链接 |
| `links.doi` | string | DOI |
| `links.repo` | string | 代码仓库 |
| `links.demo` | string | 在线演示 |
| `links.video` | string | 演讲视频 |
| `links.patent` | string | 专利链接 |
| `draft` | boolean | 草稿 |

### 示例

```yaml
---
title: 基于强化学习的机械臂操作研究
type: paper
venue: ICRA 2025
date: 2025-02-01
abstract: 本文提出了一种基于深度强化学习的机械臂精确抓取方法...
links:
  pdf: /papers/robot-learning-icra2025.pdf
  doi: 10.1109/ICRA.2025.12345
  repo: https://github.com/example/robot-learning
tags: [robotics, rl, manipulation]
---
```

---

## 🌸 life（生活内容）

**文件位置**: `src/content/life/{slug}.md`

### 必需字段

| 字段 | 类型 | 说明 |
|------|------|------|
| `title` | string | 标题 |
| `type` | enum | gallery/writing/game/video/travel/daily/misc |
| `date` | date | 日期 |

### 可选字段

| 字段 | 类型 | 说明 |
|------|------|------|
| `description` | string | 简要描述 |
| `tags` | string[] | 标签 |
| `images` | string[] | 图片列表（画廊用） |
| `cover` | string | 封面图 |
| `draft` | boolean | 草稿 |

### 示例

```yaml
---
title: 日本旅行记录
type: travel
date: 2024-08-15
description: 东京+京都一周旅行记录
tags: [travel, japan]
cover: /assets/spark/banner-4.jpg
images:
  - /assets/spark/decor-1.jpg
  - /assets/spark/decor-2.jpg
---
```

---

## 🏷️ 统一标签规范

### 技术类标签
```
robotics, ai, llm, cv, control, embedded, mobile-robot, manip, ros2, hardware
```

### 领域类标签
```
research, engineering, hobby, creative
```

### 状态类标签
```
published, draft, wip
```

### 生活类标签
```
travel, game, photography, writing
```

---

## 🌐 URL 路由规则

| Collection | URL Pattern | 说明 |
|-----------|-------------|------|
| blog | `/blog/{slug}` | 博客文章列表 + 文章页 |
| projects | `/projects/{slug}` | 项目详情页 |
| research | `/research/{slug}` | 科研成果详情页 |
| life | `/life/{slug}` | 生活内容详情页 |

**聚合页**（需在 `src/pages/` 创建对应路由）：
- `/projects` — 所有项目
- `/research` — 所有科研成果
- `/life` — 所有生活内容
- `/notes` — 所有博客笔记（可 alias 为 `/blog`）

---

## ⚙️ 注意事项

1. **保留扩展字段**：使用 `.passthrough()` 让 collections 接受额外未定义的字段
2. **图片处理**：封面/图片使用字符串路径，相对于 `public/` 目录
3. **原有 blog 集合**：TASK-003 将 `blog` 集合保留，与 `notes` 共存，由前端决定是否合并展示
4. **Moments 集合**：根据 TASK-007 调整，暂不建立 Moments collection，后续视需求再扩展
