"use client";
import React, { useState, useEffect } from "react";
import { BotMessageSquare, Send, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatbotWidget() {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      // Mencegah widget menghilang jika modal chat sedang terbuka
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

  return (
    <>
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          // Di mobile ditaruh agak ke atas (bottom-24) agar tidak menabrak SidebarNav.
          // Di desktop (md) ditaruh persis di pojok kiri bawah (bottom-10 left-10).
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
              <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#0f0f0f] flex flex-col">
                {/* Balon Chat Bot (Pesan Selamat Datang) */}
                <div className="flex justify-start">
                  <div className="bg-gray-800 border border-gray-700 text-white text-sm p-3 rounded-2xl rounded-tl-sm max-w-[85%] leading-relaxed shadow-md">
                    Hi, I'm Valbot AI Assistant! 👋 <br />
                    Do you have any questions about his projects or tech stack?
                  </div>
                </div>
              </div>

              {/* Area Input Pesan (Footer) */}
              <div className="p-3 bg-[#111111] border-t border-gray-800">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Logika pengiriman pesan akan ditaruh di sini nantinya
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 bg-[#1a1a1a] text-white text-sm border border-gray-700 rounded-full px-4 py-2.5 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-500"
                  />
                  {/* Tombol Kirim */}
                  <button
                    type="submit"
                    className="p-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full transition-colors flex-shrink-0"
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