# Branding 品牌规范文档

> 本文档定义明子个人主站的基础视觉品牌系统。
> v0.1.0 初稿，迭代完善中。

---

## 🎯 品牌定位

**风格**: Cyber-Aesthetic Personal Hub
- 50% 科技感（冷调、精密、赛博）
- 30% 艺术感（留白、氛围、品味）
- 20% 轻二次元人格化（花火主题元素点缀）

**禁忌**:
- ❌ 全站粒子特效泛滥
- ❌ 过度角色皮肤化（花火元素仅为点缀，不是主体）
- ❌ 模板原始 IP 压过个人品牌

---

## 🎨 色彩系统

### 主色板（Primary Palette）

| 用途 | 色名 | Hex | 使用场景 |
|------|------|-----|---------|
| 主色-蓝 | Tech Blue | `#5a96ff` | 链接、主按钮、导航高亮、Tech 相关标识 |
| 主色-青 | Cyan | `#22d3ee` | 辅助科技感元素、代码高亮、次级按钮 |
| 花火-紫 | Spark Purple | `#a78bfa` | 花火主题强调色、Research 分类标识 |
| 花火-粉 | Spark Pink | `#f472b6` | Life/艺术类分类标识、装饰性高亮 |
| 花火-金 | Spark Gold | `#fbbf24` | 徽章、重要标识、精选内容高亮 |
| 深色背景 | Deep Space | `#070a10` | 深色模式主背景 |
| 浅色背景 | Dark Navy | `#0d1321` | 浅色模式主背景 |
| 卡片背景 | Card Dark | `#0f172a` | 深色模式卡片/区块 |
| 卡片背景-浅 | Card Light | `#1a2235` | 浅色模式卡片/区块 |
| 边框色 | Border Dark | `#1e293b` | 深色模式边框 |
| 边框色-浅 | Border Light | `#e2e8f0` | 浅色模式边框 |
| 正文色 | Text Dark | `#94a3b8` | 深色模式正文文字 |
| 正文色-浅 | Text Light | `#475569` | 浅色模式正文文字 |
| 标题色 | Heading Dark | `#e2e8f0` | 深色模式标题 |
| 标题色-浅 | Heading Light | `#1e293b` | 浅色模式标题 |

### 语义色彩（Semantic Colors）

| 用途 | Light Mode | Dark Mode |
|------|------------|-----------|
| Background | `#0d1321` | `#070a10` |
| Card/Wrap | `#1a2235` | `#0f172a` |
| Border | `#1e293b` | `#1e293b` |
| Text Primary | `#475569` | `#94a3b8` |
| Text Heading | `#1e293b` | `#e2e8f0` |
| Link | `#5a96ff` | `#5a96ff` |
| Link Hover | `#3b7dd8` | `#7bb3ff` |

---

## 🔤 字体系统

### 字体族（Font Stack）

**正文字体**:
```
'Noto Sans SC', 'Source Han Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
```

**代码字体**:
```
'JetBrains Mono', 'Fira Code', 'SF Mono', 'Cascadia Code', monospace
```

**标题字体**:
```
'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif
```
（可考虑后期引入 ZCOOL QingKe HuangYou 作为展示标题字体）

### 字号系统（Type Scale）

| 级别 | 用途 | 尺寸（桌面） | 尺寸（移动） |
|------|------|------------|------------|
| H1 | 页面主标题 | 2.5rem (40px) | 2rem |
| H2 | 区块标题 | 1.875rem (30px) | 1.5rem |
| H3 | 卡片标题 | 1.25rem (20px) | 1.125rem |
| Body | 正文 | 1rem (16px) | 1rem |
| Small | 辅助文字 | 0.875rem (14px) | 0.875rem |
| Tiny | 元信息 | 0.75rem (12px) | 0.75rem |

---

## 🔲 Design Tokens（CSS 变量）

已定义于 `src/styles/variables.css`，覆盖 global.css 的默认值。

### 使用方式
```css
color: var(--color-primary);
background: var(--color-bg);
font-family: var(--font-body);
```

---

## 🔮 Logo 与 Favicon 方向

### 概念方向

**推荐方案**: 简约科技型 + 花火元素暗示

1. **方案A - 首字母变形**: 以 "M"（明子/mingzi）为基础，融入电路/信号波/星光元素
2. **方案B - 花火星火**: 抽象火花/星芒符号，简洁几何化
3. **方案C - 莫比乌斯环**: 科技感环形，暗示无限/机器人/嵌入式方向

### 初步推荐
- **Favicon**: 方案A 或 B，保持 32×32 清晰度
- **Logo**: 可与 favicon 统一，用于首页 Hero 区
- **花火元素**: 以色彩（紫/粉/金）而非图形体现，轻量点缀

### 待办
- [ ] 确定最终 logo 方案（可 AI 生成候选，主人挑选）
- [ ] 制作 favicon.ico / favicon.svg
- [ ] 制作社交媒体 OG Image 模板

---

## 📌 深色/浅色模式说明

主题采用 CSS 变量 + `[data-theme="dark"]` 覆盖层实现双模式。

当前默认：**深色模式为主**（与整体赛博风格一致）。

| 元素 | 深色模式 | 浅色模式 |
|------|---------|---------|
| 背景 | `#070a10` | `#0d1321` |
| 卡片 | `#0f172a` | `#1a2235` |
| 文字 | `#94a3b8` | `#475569` |

---

## 📝 实施记录

| 日期 | 内容 | 状态 |
|------|------|------|
| 2026-03-19 | 完成初稿：色彩系统、字体、方向规划 | ✅ |
