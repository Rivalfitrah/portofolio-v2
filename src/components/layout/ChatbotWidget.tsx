"use client";
import React, { useState, useEffect, useRef } from "react";
import { BotMessageSquare, Send, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { sendMessageToAI } from "@/app/services/chatAI";
import ReactMarkdown from "react-markdown";

export default function ChatbotWidget() {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([
  { role: "bot", text: "Hi, I'm valbot AI Assistant! 👋 Do you have any questions?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  // useRef untuk otomatis scroll ke bawah saat ada pesan baru
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]); 

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (isOpen) return;

      setIsVisible(false);
      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isOpen]);


  // submit
  const handlesubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    const userMessage = input;
    setInput("");
    
    // tampillin pesan user di chat
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
        const botReply = await sendMessageToAI(userMessage);
        setMessages((prev) => [...prev, { role: "bot", text: botReply }]);
      } catch (error) {
        setMessages((prev) => [...prev, { role: "bot", text: "Maaf, terjadi kesalahan teknis saat menghubungi AI." }]);
      } finally {
        setIsLoading(false);
      }
    };

  return (
    <>
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-24 right-4 md:bottom-30 md:right-10 z-50"
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group flex items-center justify-center p-4 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-110 border border-cyan-400/50"
            aria-label="Open Chatbot"
          >
            <BotMessageSquare className="w-6 h-6 group-hover:animate-pulse" />
            
            {/* Tooltip sederhana (opsional) */}
            <span className="absolute right-full ml-4 px-3 py-1.5 text-sm bg-gray-800 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden md:block">
              Ask AI Assistant
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>

    <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop transparan untuk deteksi klik di luar modal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60]"
              onClick={() => setIsOpen(false)}
            />

            {/* Kontainer Modal Chat */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed bottom-24 right-4 md:bottom-10 md:right-10 z-[70] w-[calc(100vw-32px)] md:w-[380px] h-[500px] bg-[#0a0a0a] border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-900/20 flex flex-col overflow-hidden"
            >
              {/* Header Modal */}
              <div className="bg-gradient-to-r from-cyan-950 to-blue-950 p-4 flex items-center justify-between border-b border-cyan-500/30">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-500/20 rounded-full">
                    <BotMessageSquare className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm">AI Assistant</h3>
                    <p className="text-cyan-400 text-xs flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span> Online
                    </p>
                  </div>
                </div>
                {/* Tombol Silang */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors p-1 rounded-md hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Area Teks Percakapan (Body) */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#0f0f0f] flex flex-col scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    // Deteksi apakah pesan dari bot atau user untuk mengatur posisi (kiri/kanan)
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      // Styling berbeda untuk bot (abu-abu) dan user (cyan gradient)
                      className={`text-sm p-3 max-w-[85%] leading-relaxed shadow-md ${
                        msg.role === "user"
                          ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-2xl rounded-tr-sm"
                          : "bg-gray-800 border border-gray-700 text-gray-100 rounded-2xl rounded-tl-sm"
                      }`}
                    >
                      {/* Gunakan ReactMarkdown agar cetak tebal/list dirender dengan benar */}
                      {msg.role === "bot" ? (
                         <div className="prose prose-invert prose-p:my-1 prose-sm max-w-none">
                            <ReactMarkdown>{msg.text}</ReactMarkdown>
                         </div>
                      ) : (
                        msg.text // Teks dari user cukup string biasa
                      )}
                    </div>
                  </div>
                ))}

                {/* Animasi Loading (Mengetik...) ketika bot sedang berpikir */}
                {isLoading && (
                   <div className="flex justify-start">
                     <div className="bg-gray-800 border border-gray-700 p-3 rounded-2xl rounded-tl-sm flex gap-1 items-center h-10 shadow-md">
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                     </div>
                   </div>
                )}
                {/* Div kosong ini bertugas sebagai jangkar (anchor) untuk auto-scroll */}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-3 bg-[#111111] border-t border-gray-800">
                <form
                  // Panggil fungsi handle submit di sini
                  onSubmit={handlesubmit}
                  className="flex items-center gap-2"
                >
                  <input
                    type="text"
                    // Sambungkan input dengan state
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={isLoading}
                    placeholder="Type your message..."
                    className="flex-1 bg-[#1a1a1a] text-white text-sm border border-gray-700 rounded-full px-4 py-2.5 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-500 disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()} // Tombol mati kalau lagi loading atau input kosong
                    className="p-2.5 bg-cyan-600 hover:bg-cyan-500 disabled:bg-gray-600 text-white rounded-full transition-colors flex-shrink-0"
                  >
                    <Send className="w-4 h-4 ml-0.5" />
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}