#!/bin/bash

# 检查环境变量文件
if [ -f .env ]; then
  if git ls-files .env --error-unmatch 2>/dev/null; then
    echo "❌ Error: .env file is tracked by Git. Remove it using: git rm --cached .env"
    exit 1
  else
    echo "✅ .env file exists but is not tracked by Git (good)"
  fi
fi

# 检查 .gitignore 配置
if ! grep -q "^.env$" .gitignore; then
  echo "❌ Error: .env is not properly ignored in .gitignore"
  exit 1
else
  echo "✅ .env is properly configured in .gitignore"
fi

# 检查环境变量示例文件
if [ ! -f .env.example ]; then
  echo "❌ Error: .env.example file is missing"
  exit 1
else
  echo "✅ .env.example file exists"
fi

# 检查敏感信息
if [ -f .env ]; then
  if grep -q "sk-[a-zA-Z0-9]" .env; then
    echo "⚠️  Warning: API key found in .env file. Ensure this file is never committed"
  fi
fi

# 检查类型定义
if [ ! -f env.d.ts ]; then
  echo "❌ Error: env.d.ts file is missing"
  exit 1
else
  echo "✅ env.d.ts file exists"
fi

echo "✅ Security check completed"
