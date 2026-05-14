# 李磊建筑 - 企业官网

任丘农村自建房 & 装修施工企业官网

[![Deploy to Cloudflare Pages](https://img.shields.io/github/actions/workflow/status/cangming009/house_build_lilei/deploy.yml?logo=github&label=Deploy&style=flat-square)](https://github.com/cangming009/house_build_lilei/actions/workflows/deploy.yml)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare%20Pages-online-ff9800?logo=cloudflare&style=flat-square)](https://house-sister.pages.dev)

## 技术栈

- **框架**: Next.js 16
- **样式**: Tailwind CSS 4
- **部署**: Cloudflare Pages（静态导出）

## 本地开发

```bash
npm install
npm run dev
```

## 部署

推送 `main` 分支自动触发 GitHub Actions 构建并部署到 Cloudflare Pages。

手动部署：

```bash
npm run build
npx wrangler pages deploy out/ --project-name house-sister --branch main
```
