
import React, { useState, useEffect } from 'react';
import { View, Card } from '../types';
import { INITIAL_CARDS } from '../constants';
import { appraiseCard } from '../geminiService';

interface Props {
  onNavigate: (view: View) => void;
  onMatch: (card: Card) => void;
}

const DiscoverView: React.FC<Props> = ({ onNavigate, onMatch }) => {
  const [cardIndex, setCardIndex] = useState(0);
  const [appraisal, setAppraisal] = useState<string>('');
  const [isAppraising, setIsAppraising] = useState(false);
  const [showMatchModal, setShowMatchModal] = useState(false);

  const currentCard = INITIAL_CARDS[cardIndex % INITIAL_CARDS.length];

  const handleAppraisal = async () => {
    setIsAppraising(true);
    const result = await appraiseCard(currentCard.name);
    setAppraisal(result);
    setIsAppraising(false);
  };

  const handleAction = (type: 'pass' | 'like') => {
    if (type === 'like' && cardIndex === 0) {
      // Logic to trigger a "Match" for the first card for demo
      setShowMatchModal(true);
    } else {
      setCardIndex(prev => prev + 1);
      setAppraisal('');
    }
  };

  const handleStartChat = () => {
    onMatch(currentCard);
    setShowMatchModal(false);
    onNavigate(View.MATCHES);
  };

  return (
    <div className="flex flex-col h-full overflow-hidden bg-background-light dark:bg-background-dark">
      <header className="flex items-center justify-between px-6 pt-6 pb-2 shrink-0 z-20">
        <button className="size-10 rounded-full bg-white dark:bg-surface-dark shadow-sm flex items-center justify-center text-slate-600">
          <span className="material-symbols-outlined text-[24px]">tune</span>
        </button>
        <h2 className="text-xl font-bold tracking-tight">Discover</h2>
        <div className="flex items-center gap-1.5 bg-white dark:bg-surface-dark px-3 py-1.5 rounded-full shadow-sm">
          <span className="material-symbols-outlined text-primary text-[20px] icon-filled">bolt</span>
          <span className="text-sm font-bold">4,250</span>
        </div>
      </header>

      <main className="flex-1 relative flex flex-col items-center justify-center w-full px-4 py-2 z-10">
        {/* Visual Stack Effect */}
        <div className="absolute w-[90%] h-[65vh] bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 transform translate-y-4 scale-[0.95] opacity-60 z-0"></div>
        
        {/* Active Card */}
        <div className="relative w-full h-[65vh] rounded-3xl overflow-hidden shadow-2xl bg-slate-900 group z-20 transition-all transform">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('${currentCard.imageUrl}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          </div>

          <button 
            onClick={handleAppraisal}
            className={`absolute top-4 right-4 size-10 flex items-center justify-center rounded-full text-white border border-white/20 transition-all ${isAppraising ? 'animate-spin bg-primary' : 'bg-black/20 hover:bg-black/40 backdrop-blur-md'}`}
          >
            <span className="material-symbols-outlined text-[24px]">{isAppraising ? 'refresh' : 'info'}</span>
          </button>

          {currentCard.isHot && (
            <div className="absolute top-4 left-4">
              <div className="bg-primary/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">HOT</div>
            </div>
          )}

          <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col gap-3">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col">
                <h2 className="text-white text-3xl font-extrabold tracking-tight drop-shadow-md">{currentCard.name}</h2>
                <p className="text-slate-300 text-sm font-medium tracking-wide uppercase">{currentCard.set} • {currentCard.rarity}</p>
              </div>
              <div className="flex flex-col items-end shrink-0">
                <span className="text-white text-xl font-bold">${currentCard.estimatedValue}</span>
                <span className="text-emerald-400 text-xs font-bold bg-emerald-400/10 px-2 py-0.5 rounded-md border border-emerald-400/20">Est.</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-1">
              <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-yellow-400 icon-filled">star</span>
                {currentCard.condition}
              </span>
              {currentCard.isVerified && (
                <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-blue-300">verified</span>
                  Verified Seller
                </span>
              )}
            </div>

            {appraisal && (
              <div className="mt-2 p-3 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-xl text-white text-sm font-medium animate-in slide-in-from-bottom-2 fade-in">
                <div className="flex items-center gap-2 mb-1 text-primary-light">
                  <span className="material-symbols-outlined text-[16px] icon-filled">psychology</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider">Expert Appraisal</span>
                </div>
                {appraisal}
              </div>
            )}
          </div>
        </div>
      </main>

      <div className="flex items-center justify-center gap-8 pb-6 pt-2 shrink-0 z-20">
        <button 
          onClick={() => handleAction('pass')}
          className="size-16 rounded-full bg-white dark:bg-surface-dark shadow-lg flex items-center justify-center text-red-500 hover:scale-110 active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-[32px]">close</span>
        </button>
        <button className="size-12 rounded-full bg-white dark:bg-surface-dark shadow-lg flex items-center justify-center text-primary hover:scale-110 active:scale-95 transition-all">
          <span className="material-symbols-outlined text-[24px] icon-filled">star</span>
        </button>
        <button 
          onClick={() => handleAction('like')}
          className="size-16 rounded-full bg-white dark:bg-surface-dark shadow-lg flex items-center justify-center text-green-500 hover:scale-110 active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-[32px] icon-filled">favorite</span>
        </button>
      </div>

      <nav className="shrink-0 bg-white/80 dark:bg-surface-dark/90 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-around p-3">
          <button className="flex flex-col items-center gap-1 text-primary">
            <span className="material-symbols-outlined text-[26px] icon-filled">style</span>
            <span className="text-[10px] font-bold">Discover</span>
          </button>
          <button onClick={() => onNavigate(View.MATCHES)} className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined text-[26px]">handshake</span>
            <span className="text-[10px] font-medium">Trades</span>
          </button>
          <button onClick={() => onNavigate(View.PROFILE)} className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined text-[26px]">person</span>
            <span className="text-[10px] font-medium">Profile</span>
          </button>
        </div>
      </nav>

      {/* Match Modal Overlay */}
      {showMatchModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background-light dark:bg-background-dark p-6 animate-in fade-in duration-300">
          <div className="flex flex-col items-center w-full max-w-md gap-8">
            <div className="flex flex-col items-center text-center gap-2">
              <div className="p-3 rounded-full bg-primary/10 mb-4 animate-bounce">
                <span className="material-symbols-outlined text-primary text-4xl">handshake</span>
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight">It's a Match!</h1>
              <p className="text-slate-500 text-lg">You and Alex both want to trade!</p>
            </div>

            <div className="relative w-full flex items-center justify-center gap-4 py-8">
              <div className="relative group transform -rotate-6 transition-all duration-500 hover:rotate-0">
                <div className="w-[140px] h-[200px] bg-white rounded-xl shadow-2xl border-4 border-white overflow-hidden relative">
                  <div className="absolute inset-0 bg-center bg-cover" style={{backgroundImage: `url('${INITIAL_CARDS[0].imageUrl}')`}}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-2 left-0 right-0 text-center text-white text-[10px] font-bold px-1 truncate">{INITIAL_CARDS[0].name}</div>
                </div>
              </div>

              <div className="absolute z-30 bg-white rounded-full p-2 shadow-xl border-2 border-primary/20 flex items-center justify-center scale-125">
                <span className="material-symbols-outlined text-primary text-2xl font-bold">sync_alt</span>
              </div>

              <div className="relative group transform rotate-6 transition-all duration-500 hover:rotate-0">
                <div className="w-[140px] h-[200px] bg-white rounded-xl shadow-2xl border-4 border-white overflow-hidden relative">
                  <div className="absolute inset-0 bg-center bg-cover" style={{backgroundImage: `url('${currentCard.imageUrl}')`}}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-2 left-0 right-0 text-center text-white text-[10px] font-bold px-1 truncate">{currentCard.name}</div>
                </div>
              </div>
            </div>

            <div className="w-full space-y-4">
              <button 
                onClick={handleStartChat}
                className="w-full h-14 bg-primary text-white text-lg font-bold rounded-full shadow-lg shadow-primary/30 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined icon-filled">chat_bubble</span>
                Start Chat
              </button>
              <button 
                onClick={() => {
                  setShowMatchModal(false);
                  setCardIndex(prev => prev + 1);
                }}
                className="w-full text-slate-500 font-bold hover:text-slate-700 transition-colors"
              >
                Keep Swiping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiscoverView;
