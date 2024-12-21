# 删除旧的依赖和锁文件
rm -rf node_modules package-lock.json

# 清理 npm 缓存
npm cache clean --force

# 重新安装依赖
npm install

# 启动开发服务器
npm run devimport type { Config } from 'postcss-load-config'

const config: Config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

export default config
