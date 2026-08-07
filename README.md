# 项目结构与部署

## 目录结构

```text
.
├── .github/
│   ├── dependabot.yml
│   └── workflows/
│       └── deploy.yml
├── docs/
│   └── architecture.md
├── public/
│   └── images/
│       └── avatar.jpg
├── src/
│   ├── components/
│   │   ├── ArticleCard.astro
│   │   ├── MomentCard.astro
│   │   └── OwnerDock.astro
│   ├── content/
│   │   ├── blog/
│   │   ├── moments/
│   │   ├── notes/
│   │   ├── projects/
│   │   └── config.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── blog/
│   │   ├── moments/
│   │   ├── notes/
│   │   ├── projects/
│   │   ├── studio/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
├── package-lock.json
└── tsconfig.json
```

## 本地运行

```bash
npm ci
npm run dev
```

打开：

```text
http://127.0.0.1:4321/
```

## 本地构建检查

```bash
npm run build
```

构建产物：

```text
dist/
```

## 新增博客

```bash
cp src/content/blog/start.md src/content/blog/new-post.md
```

编辑：

```text
src/content/blog/new-post.md
```

必需 frontmatter：

```md
---
title: "文章标题"
description: "文章描述"
date: 2026-08-07
tags: ["Astro", "Debug"]
---
```

## 新增学习笔记

```bash
cp src/content/notes/cs-start.md src/content/notes/new-note.md
```

必需 frontmatter：

```md
---
title: "笔记标题"
description: "笔记描述"
date: 2026-08-07
category: "cs"
order: 10
---
```

可用 `category`：

```text
cs
math
physics
void
```

## 新增项目

```bash
cp src/content/projects/homepage.md src/content/projects/new-project.md
```

必需 frontmatter：

```md
---
title: "项目名"
description: "项目描述"
date: 2026-08-07
repo: "https://github.com/username/repo"
demo: "https://example.com"
tech: ["Astro", "Java"]
featured: false
---
```

## 新增动态

```bash
touch src/content/moments/new-moment.md
```

写入：

```md
---
date: 2026-08-07T10:00:00
text: "动态内容"
images: ["/images/avatar.jpg"]
video: ""
mood: "daily"
---
```

图片放到：

```text
public/images/
```

引用路径：

```text
/images/文件名.jpg
```

## 部署到 GitHub Pages

第一次部署前，在 GitHub 仓库页面设置：

```text
Settings -> Pages -> Build and deployment -> Source -> GitHub Actions
```

之后本地执行：

```bash
npm run build
git status
git add .
git commit -m "Update site"
git push origin main
```

GitHub Actions 会自动运行：

```bash
npm ci
npm run build
```

并发布：

```text
dist/
```

## 更新依赖

```bash
npm outdated
npm update
npm run build
git add package.json package-lock.json
git commit -m "Update dependencies"
git push origin main
```

## 常用命令

```bash
npm run dev
npm run build
npm run preview
git status
git add .
git commit -m "Update site"
git push origin main
```
