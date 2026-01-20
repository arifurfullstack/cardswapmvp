
import React, { useState } from 'react';
import { MOCK_GAMES } from '../constants';

interface Props {
  onComplete: (data: { nickname: string, games: string[] }) => void;
}

const OnboardingView: React.FC<Props> = ({ onComplete }) => {
  const [nickname, setNickname] = useState('AshKetchum');
  const [selectedGames, setSelectedGames] = useState<string[]>(['pokemon', 'mtg']);

  const toggleGame = (id: string) => {
    setSelectedGames(prev => prev.includes(id) ? prev.filter(g => g !== id) : [...prev, id]);
  };

  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark">
      <header className="flex items-center justify-between p-6 pb-2">
        <button className="w-10 h-10 -ml-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined text-[28px]">arrow_back_ios_new</span>
        </button>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-slate-300"></div>
          <div className="h-2 w-8 rounded-full bg-primary"></div>
          <div className="h-2 w-2 rounded-full bg-slate-300"></div>
        </div>
        <button onClick={() => onComplete({ nickname, games: selectedGames })} className="text-primary font-bold">Skip</button>
      </header>

      <main className="flex-1 px-6 pb-32 overflow-y-auto no-scrollbar">
        <div className="pt-4 pb-8">
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">Build your<br/>Trader Profile</h1>
          <p className="text-slate-500 font-medium">Let's get you set up to start trading.</p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="relative group cursor-pointer">
            <div className="w-28 h-28 rounded-full bg-slate-100 border-4 border-white shadow-xl overflow-hidden flex items-center justify-center relative">
              <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCtsVUFU7ubc3xGRwcKjtuCNl9v4-QqxjJ9pNO0TC1KA86HzgOG820FF2ndO_1NXaDFBTDqskMpRpMq3Ex8Qj889VC3WWwaj9__uIt8mCm4RQj1yUKRpel_jwkz_O--31i4eQxdbv6j4J-kc_TB0VSLDNsWL_VaNlblrjvjGTNwti-fk3f4QwFCsmRNFntIjhq9E-DvtYBk7rii4vSSP-RIAT7PKRH5YoN89qcYKLeEz2gQVxis6DlvihwFtLvgMgnWkAQIAJHN06uI')`}}></div>
              <span className="material-symbols-outlined text-white text-4xl z-10 opacity-0 group-hover:opacity-100 transition-opacity">photo_camera</span>
            </div>
            <div className="absolute bottom-1 right-1 bg-primary text-white p-2 rounded-full border-4 border-background-light flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[16px]">edit</span>
            </div>
          </div>
        </div>

        <div className="space-y-6 mb-10">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-2">Nickname</label>
            <div className="relative">
              <input 
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className="w-full bg-white dark:bg-surface-dark border-slate-200 dark:border-slate-700 text-lg rounded-full px-6 py-4 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm"
              />
              <span className="absolute right-5 top-1/2 -translate-y-1/2 text-primary">
                <span className="material-symbols-outlined icon-filled">check_circle</span>
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-2">Location</label>
            <div className="w-full bg-white dark:bg-surface-dark border-slate-200 dark:border-slate-700 text-lg rounded-full px-6 py-4 flex items-center justify-between shadow-sm cursor-pointer">
              <span className="flex items-center gap-3">🇺🇸 United States</span>
              <span className="material-symbols-outlined text-slate-400">expand_more</span>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-bold mb-4 ml-1">Select Games</h3>
          <div className="flex flex-col gap-3">
            {MOCK_GAMES.map(game => (
              <label key={game.id} className={`flex items-center justify-between p-4 bg-white dark:bg-surface-dark rounded-2xl border cursor-pointer transition-all ${selectedGames.includes(game.id) ? 'border-primary ring-1 ring-primary/20' : 'border-slate-100 dark:border-slate-800 opacity-80'}`}>
                <div className="flex items-center gap-4">
                  <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${game.color} flex items-center justify-center text-white shadow-inner`}>
                    <span className="material-symbols-outlined">{game.icon}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-base">{game.name}</span>
                    <span className="text-xs text-slate-500 font-medium">{game.sub}</span>
                  </div>
                </div>
                <div className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only" 
                    checked={selectedGames.includes(game.id)}
                    onChange={() => toggleGame(game.id)}
                  />
                  <div className={`w-12 h-7 rounded-full transition-colors ${selectedGames.includes(game.id) ? 'bg-primary' : 'bg-slate-200'}`}>
                    <div className={`absolute top-[2px] left-[2px] bg-white rounded-full h-6 w-6 transition-transform ${selectedGames.includes(game.id) ? 'translate-x-5' : ''}`}></div>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>
      </main>

      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background-light dark:from-background-dark via-background-light dark:via-background-dark pt-12">
        <button 
          onClick={() => onComplete({ nickname, games: selectedGames })}
          className="w-full bg-primary text-white font-bold text-xl py-5 rounded-full shadow-lg shadow-primary/30 active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          Continue
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default OnboardingView;
