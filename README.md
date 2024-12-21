This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 环境配置

1. 复制环境变量示例文件：
```bash
cp .env.example .env
```

2. 在 `.env` 文件中设置你的 Deepseek API 密钥：
```
DEEPSEEK_API_KEY=your_api_key_here
```

## 开发

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 在浏览器中访问 [http://localhost:3000](http://localhost:3000)

## 安全注意事项

- 永远不要提交 `.env` 文件到版本控制系统
- 确保 `.env` 文件已添加到 `.gitignore`
- 在生产环境中使用安全的环境变量管理系统
- 定期轮换 API 密钥
- 使用适当的访问控制和速率限制

## 部署

在部署到生产环境时，请确保：

1. 正确设置环境变量
2. 使用 HTTPS 加密所有通信
3. 实施适当的安全措施
4. 监控 API 使用情况

## 技术栈

- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion
- Deepseek API
