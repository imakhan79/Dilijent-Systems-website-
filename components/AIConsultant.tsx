
import React, { useState, useRef, useEffect } from 'react';
import { generateStrategyResponse } from '../services/geminiService';
import { Message } from '../types';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello! I'm Dilijent's AI Strategist. How can I help you optimize your operations today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    // Hide the small welcome bubble after 15 seconds
    const timer = setTimeout(() => setShowWelcome(false), 15000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const response = await generateStrategyResponse(input);
    
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsTyping(false);
  };

  const openChat = () => {
    setIsOpen(true);
    setShowWelcome(false);
  };

  return (
    <>
      {/* Welcome Bubble - Matches screenshot positioning and style */}
      {showWelcome && !isOpen && (
        <div className="fixed bottom-24 right-8 z-40 bg-white p-5 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border border-gray-100 max-w-[280px] animate-in fade-in slide-in-from-bottom-4 duration-500">
          <p className="text-[15px] text-gray-800 leading-snug font-medium">
            Welcome to Dilijent Systems! We're online and ready to assist you.
          </p>
          {/* Arrow */}
          <div className="absolute bottom-[-8px] right-8 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white drop-shadow-sm"></div>
        </div>
      )}

      {/* Trigger Button with Red Notification Badge */}
      <button 
        onClick={openChat}
        className="fixed bottom-8 right-8 z-40 w-16 h-16 rounded-full bg-ds-red flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform active:scale-95"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        {/* Red Badge */}
        <div className="absolute top-0 right-0 w-6 h-6 bg-ds-red rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold">
          1
        </div>
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-24 md:right-8 z-50 w-full md:w-[420px] h-full md:h-[640px] bg-white md:rounded-[2rem] border border-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-500">
          {/* Header */}
          <div className="p-6 bg-[#0f172a] flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-ds-red flex items-center justify-center text-white font-black text-xl">D</div>
              <div>
                <h3 className="text-lg font-bold text-white">Dilijent Assistant</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <p className="text-[11px] text-green-400 uppercase tracking-widest font-bold">Online Now</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors p-2">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-5 py-4 rounded-2xl text-[15px] shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-ds-red text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white px-5 py-4 rounded-2xl flex gap-1.5 items-center shadow-sm border border-gray-100">
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white border-t border-gray-100">
            <div className="relative flex items-center gap-3">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask our AI strategist..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl py-4 px-5 text-[15px] focus:outline-none focus:border-ds-red focus:ring-4 focus:ring-red-500/10 transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isTyping}
                className="w-14 h-14 rounded-2xl bg-ds-red flex items-center justify-center text-white hover:bg-[#d42d18] transition-colors shadow-lg shadow-red-500/20 disabled:opacity-50"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIConsultant;
