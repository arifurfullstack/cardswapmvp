
import React from 'react';
import { View, TradeMatch } from '../types';

interface Props {
  matches: TradeMatch[];
  onChat: (match: TradeMatch) => void;
  onNavigate: (view: View) => void;
}

const MatchesView: React.FC<Props> = ({ matches, onChat, onNavigate }) => {
  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark overflow-hidden">
      <header className="sticky top-0 z-20 flex items-center bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md px-6 py-4 justify-between border-b border-slate-200 dark:border-slate-800">
        <div>
          <h2 className="text-xl font-bold">Your Matches</h2>
          <p className="text-xs font-medium text-slate-500">{matches.length} Active Trades</p>
        </div>
        <button className="size-10 rounded-full bg-white dark:bg-surface-dark shadow-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600">
          <span className="material-symbols-outlined text-[20px]">filter_list</span>
        </button>
      </header>

      <div className="flex gap-3 px-6 py-4 overflow-x-auto no-scrollbar snap-x">
        <button className="snap-start flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-5 shadow-lg shadow-primary/20">
          <span className="text-sm font-semibold">Newest</span>
        </button>
        {['High Value', 'Near You', 'Favorites'].map(filter => (
          <button key={filter} className="snap-start flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 px-5 text-slate-600">
            <span className="text-sm font-medium">{filter}</span>
          </button>
        ))}
      </div>

      <main className="flex-1 overflow-y-auto px-4 pb-24 flex flex-col gap-4 no-scrollbar">
        {matches.map(match => (
          <div key={match.id} className="group bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 transition-all hover:shadow-md">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="size-10 rounded-full bg-cover bg-center border-2 border-white" style={{backgroundImage: `url('${match.partner.avatarUrl}')`}}></div>
                  {match.partner.online && <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></div>}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold">{match.partner.nickname}</span>
                  <span className="text-xs text-slate-500">Matched {match.timestamp}</span>
                </div>
              </div>
              <button 
                onClick={() => onChat(match)}
                className="h-8 px-4 rounded-full bg-primary/10 hover:bg-primary/20 text-primary text-xs font-bold transition-colors"
              >
                Chat
              </button>
            </div>

            <div className="flex items-center justify-between bg-slate-50 dark:bg-background-dark/50 rounded-xl p-3 relative">
              <div className="flex flex-col items-center gap-2 w-[40%]">
                <span className="text-[10px] uppercase font-bold text-slate-400">You Give</span>
                <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden shadow-sm">
                  <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url('${match.myCard.imageUrl}')`}}></div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-1 pt-4 text-[9px] font-bold text-white text-center">{match.myCard.name}</div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-green-100 text-green-700">{match.myCard.condition.split(' ')[0]}</span>
              </div>

              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-surface-dark shadow-md z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-slate-100 dark:border-slate-800">
                <span className="material-symbols-outlined text-primary text-lg">swap_horiz</span>
              </div>

              <div className="flex flex-col items-center gap-2 w-[40%]">
                <span className="text-[10px] uppercase font-bold text-slate-400">You Get</span>
                <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden shadow-sm">
                  <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url('${match.partnerCard.imageUrl}')`}}></div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-1 pt-4 text-[9px] font-bold text-white text-center">{match.partnerCard.name}</div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-100 text-blue-700">{match.partnerCard.condition.split(' ')[0]}</span>
              </div>
            </div>
            {match.lastMessage && (
              <p className="mt-3 text-sm text-slate-500 italic px-1 truncate">"{match.lastMessage}"</p>
            )}
          </div>
        ))}
      </main>

      <nav className="absolute bottom-0 w-full bg-white dark:bg-surface-dark border-t border-slate-200 dark:border-slate-800 flex justify-around p-3">
        <button onClick={() => onNavigate(View.DISCOVER)} className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined text-[26px]">style</span>
          <span className="text-[10px] font-medium">Discover</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-primary relative">
          <span className="material-symbols-outlined text-[26px] icon-filled">handshake</span>
          <span className="absolute top-0 right-1 h-2 w-2 rounded-full bg-primary ring-2 ring-white"></span>
          <span className="text-[10px] font-bold">Trades</span>
        </button>
        <button onClick={() => onNavigate(View.PROFILE)} className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined text-[26px]">person</span>
          <span className="text-[10px] font-medium">Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default MatchesView;
