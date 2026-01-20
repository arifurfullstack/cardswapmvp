
import React, { useState } from 'react';
import { TradeMatch, Message } from '../types';

interface Props {
  match: TradeMatch;
  onBack: () => void;
}

const ChatView: React.FC<Props> = ({ match, onBack }) => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', senderId: match.partner.id, text: 'Hey! I saw you liked my card.', timestamp: '10:23 AM' },
    { id: '2', senderId: 'me', text: 'Yeah, looks mint. What are you looking for in return?', timestamp: '10:24 AM' },
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (!inputText.trim()) return;
    const newMessage: Message = {
      id: Date.now().toString(),
      senderId: 'me',
      text: inputText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([...messages, newMessage]);
    setInputText('');
  };

  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark overflow-hidden">
      <header className="flex-none flex items-center justify-between px-4 py-3 bg-white/80 dark:bg-surface-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-20">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 -ml-2 rounded-full text-slate-500 hover:bg-slate-100 transition-colors">
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>
          <div className="relative">
            <div className="size-11 rounded-full bg-cover bg-center border-2 border-white" style={{backgroundImage: `url('${match.partner.avatarUrl}')`}}></div>
            {match.partner.online && <div className="absolute bottom-0 right-0 size-3.5 bg-green-500 rounded-full border-[2.5px] border-white"></div>}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <h2 className="text-[17px] font-bold">{match.partner.nickname}</h2>
              <span className="material-symbols-outlined text-primary text-[16px] icon-filled">verified</span>
            </div>
            <p className="text-xs text-slate-500 font-medium">Online</p>
          </div>
        </div>
        
        <button className="flex items-center gap-2 pl-3 pr-1 py-1 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
          <div className="flex flex-col items-end">
            <span className="text-[9px] uppercase font-bold text-slate-400">Trading</span>
            <span className="text-[11px] font-bold truncate max-w-[60px]">{match.partnerCard.name}</span>
          </div>
          <div className="size-8 rounded-full bg-cover bg-center border border-white" style={{backgroundImage: `url('${match.partnerCard.imageUrl}')`}}></div>
        </button>
      </header>

      <main className="flex-1 overflow-y-auto p-4 flex flex-col gap-5 no-scrollbar">
        <div className="flex justify-center my-2">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">Today</span>
        </div>

        {messages.map(msg => {
          const isMe = msg.senderId === 'me';
          return (
            <div key={msg.id} className={`flex items-end gap-3 max-w-[85%] ${isMe ? 'self-end flex-row-reverse' : ''}`}>
              {!isMe && (
                <div className="size-8 shrink-0 rounded-full bg-cover bg-center mb-1" style={{backgroundImage: `url('${match.partner.avatarUrl}')`}}></div>
              )}
              <div className="flex flex-col gap-1">
                <div className={`px-4 py-3 rounded-2xl ${isMe ? 'bg-primary text-white rounded-br-none shadow-primary/20' : 'bg-white dark:bg-surface-dark rounded-bl-none shadow-sm border border-slate-100 dark:border-slate-800'}`}>
                  <p className="text-[15px]">{msg.text}</p>
                </div>
                <span className={`text-[10px] text-slate-400 font-medium ${isMe ? 'text-right mr-1' : 'ml-1'}`}>{msg.timestamp}</span>
              </div>
            </div>
          );
        })}
      </main>

      <footer className="flex-none p-4 pb-8 bg-white dark:bg-surface-dark border-t border-slate-200 dark:border-slate-800 shadow-xl z-20">
        <div className="flex items-end gap-3">
          <button className="size-11 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
            <span className="material-symbols-outlined">add</span>
          </button>
          <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-3xl flex items-center min-h-[44px] px-4 border border-transparent focus-within:border-primary/30 transition-all">
            <input 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="w-full bg-transparent border-none focus:ring-0 p-0 text-[15px] placeholder-slate-500" 
              placeholder="Make an offer..." 
            />
            <button className="text-slate-400 ml-2">
              <span className="material-symbols-outlined text-[22px]">photo_camera</span>
            </button>
          </div>
          <button 
            onClick={handleSend}
            className="size-11 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30 active:scale-90 transition-all"
          >
            <span className="material-symbols-outlined text-[22px] icon-filled">arrow_upward</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ChatView;
