import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Send, Mic } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export function ChatInterface() {
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: 'Olá! Eu sou Zyrion. Como posso ajudar com seus processos ou ensinar programação hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: "Você é Zyrion, uma assistente pessoal de IA avançada e mentora de programação. Responda de forma profissional, concisa e prestativa. Se perguntarem sobre programação, dê exemplos claros."
        }
      });
      
      setMessages(prev => [...prev, { role: 'ai', text: response.text || 'Desculpe, não consegui processar.' }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: 'Erro de conexão com o núcleo Zyrion.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#0a0f1c] border border-white/10 rounded-2xl overflow-hidden flex flex-col h-[500px] shadow-2xl">
      <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-accent-cyan to-accent-purple flex items-center justify-center">
              <span className="font-bold text-white">Z</span>
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#0a0f1c] rounded-full"></div>
          </div>
          <div>
            <h3 className="font-medium text-white">Zyrion Core</h3>
            <p className="text-xs text-accent-cyan">Online & Monitorando</p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={i} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
              msg.role === 'user' 
                ? 'bg-accent-purple text-white rounded-tr-none' 
                : 'bg-white/10 text-gray-200 rounded-tl-none'
            }`}>
              {msg.text}
            </div>
          </motion.div>
        ))}
        {isLoading && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="bg-white/10 p-4 rounded-2xl rounded-tl-none flex space-x-2">
              <div className="w-2 h-2 bg-accent-cyan rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-accent-cyan rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-accent-cyan rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-white/10 bg-white/5">
        <div className="flex items-center space-x-2">
          <button className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-accent-cyan hover:bg-white/10 transition-colors">
            <Mic size={20} />
          </button>
          <input 
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            placeholder="Fale ou digite para Zyrion..."
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-cyan transition-colors"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="p-3 rounded-xl bg-accent-cyan text-[#0a0f1c] hover:bg-cyan-400 transition-colors disabled:opacity-50"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
