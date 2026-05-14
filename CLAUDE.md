@AGENTS.md

## 部署

### Cloudflare Pages

- **生产地址**：https://house-sister.pages.dev
- **部署方式**：静态导出 (`output: "export"`)，部署 `out/` 目录

```bash
npm run build
wrangler pages deploy out/ --project-name house-sister --branch main
```

> 首次部署前需通过 `wrangler pages project create house-sister --production-branch main` 创建项目。

### CI/CD (GitHub Actions)

推送到 GitHub main 分支时自动部署。配置方式：

1. 在 [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens) 创建 API Token（权限：Cloudflare Pages → Edit）
2. 在 GitHub 仓库 → Settings → Secrets → Actions 添加 `CLOUDFLARE_API_TOKEN`
3. 之后每次推送 main 分支会自动部署
