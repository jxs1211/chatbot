import { NextResponse } from 'next/server'

// 验证环境变量
if (!process.env.DEEPSEEK_API_KEY) {
  throw new Error('Missing DEEPSEEK_API_KEY environment variable')
}

if (!process.env.DEEPSEEK_API_KEY.startsWith('sk-')) {
  throw new Error('Invalid API key format')
}

const API_URL = 'https://api.deepseek.com/v1/chat/completions'

// 速率限制配置
const RATE_LIMIT = 50 // 每个用户每分钟的请求数
const rateLimitMap = new Map<string, { count: number; timestamp: number }>()

function checkRateLimit(userId: string): boolean {
  const now = Date.now()
  const userRateLimit = rateLimitMap.get(userId)

  if (!userRateLimit) {
    rateLimitMap.set(userId, { count: 1, timestamp: now })
    return true
  }

  if (now - userRateLimit.timestamp > 60000) {
    // 重置计数器
    rateLimitMap.set(userId, { count: 1, timestamp: now })
    return true
  }

  if (userRateLimit.count >= RATE_LIMIT) {
    return false
  }

  userRateLimit.count++
  return true
}

export async function POST(request: Request) {
  try {
    const { messages, userId = 'anonymous' } = await request.json()

    // 检查速率限制
    if (!checkRateLimit(userId)) {
      return NextResponse.json(
        { error: '请求过于频繁，请稍后再试' },
        { status: 429 }
      )
    }

    // 验证请求数据
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: '无效的消息格式' },
        { status: 400 }
      )
    }

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: messages,
        temperature: 0.7,
        top_p: 0.95,
        stream: false,
        max_tokens: 2048,
        presence_penalty: 0,
        frequency_penalty: 0,
        stop: null,
        user: userId
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Deepseek API error:', errorData)
      throw new Error(errorData.error || 'API call failed')
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error in chat API:', error)
    return NextResponse.json(
      { error: '对话请求处理失败，请检查 API 配置或稍后重试' },
      { status: 500 }
    )
  }
}
