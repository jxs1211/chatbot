'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ChatDialog from './components/ChatDialog'

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
            <span className="text-xl font-bold">AI Chat</span>
          </div>
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => setIsChatOpen(true)}
              className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
            >
              开始对话
            </button>
          </div>
        </nav>

        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Experience the Future of Conversation
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            Engage with our advanced AI for natural, intelligent conversations that adapt to your needs.
            Discover a new way to learn, create, and solve problems.
          </p>
          <div className="flex space-x-4">
            <button 
              onClick={() => setIsChatOpen(true)}
              className="px-8 py-4 bg-blue-500 rounded-xl hover:bg-blue-600 transition-all transform hover:scale-105"
            >
              Start Chatting
            </button>
            <button className="px-8 py-4 border border-gray-500 rounded-xl hover:border-blue-500 hover:text-blue-400 transition-all transform hover:scale-105">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Natural Conversations",
              description: "Experience human-like interactions with advanced language understanding"
            },
            {
              title: "24/7 Availability",
              description: "Get instant responses whenever you need them, day or night"
            },
            {
              title: "Secure & Private",
              description: "Your conversations are encrypted and completely private"
            }
          ].map((feature, index) => (
            <div key={index} className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg hover:bg-gray-700/50 transition-colors">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-500 rounded-lg"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Floating Chat Button */}
        <div className="fixed bottom-8 right-8">
          <button 
            onClick={() => setIsChatOpen(true)}
            className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Chat Dialog */}
      <ChatDialog isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </main>
  )
}
