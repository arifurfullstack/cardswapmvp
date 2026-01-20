
import React from 'react';
import { User, View } from '../types';
import { INITIAL_CARDS } from '../constants';

interface Props {
  user: User;
  onBack: () => void;
}

const ProfileView: React.FC<Props> = ({ user, onBack }) => {
  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark overflow-hidden">
      <header className="sticky top-0 z-30 flex items-center justify-between p-4 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-black/5 transition-colors">
          <span className="material-symbols-outlined text-[24px]">arrow_back_ios_new</span>
        </button>
        <h2 className="text-lg font-bold flex-1 text-center pr-10">My Profile</h2>
        <button className="text-primary font-bold">Save</button>
      </header>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-28">
        <section className="flex flex-col items-center pt-4 pb-8 px-4">
          <div className="relative group cursor-pointer">
            <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-white dark:border-surface-dark shadow-xl">
              <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: `url('${user.avatarUrl}')`}}></div>
            </div>
            <div className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full border-4 border-background-light dark:border-background-dark flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[20px] icon-filled">photo_camera</span>
            </div>
          </div>
          <p className="mt-4 text-primary text-sm font-bold tracking-wide">Change Photo</p>
        </section>

        <section className="flex flex-col gap-6 px-4 mb-10">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold pl-1">Nickname</label>
            <div className="relative">
              <input 
                className="w-full h-14 bg-white dark:bg-surface-dark rounded-2xl border-none focus:ring-2 focus:ring-primary/50 px-5 text-base shadow-sm" 
                value={user.nickname} 
                readOnly
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                <span className="material-symbols-outlined text-[20px]">badge</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold pl-1">Region</label>
            <div className="relative">
              <input 
                className="w-full h-14 bg-white dark:bg-surface-dark rounded-2xl border-none focus:ring-2 focus:ring-primary/50 px-5 text-base shadow-sm" 
                value={user.location} 
                readOnly
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                <span className="material-symbols-outlined text-[20px]">location_on</span>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col w-full">
          <div className="flex items-center justify-between px-5 pb-4">
            <h1 className="text-xl font-bold">My Collection <span className="text-slate-400 font-medium ml-1 text-lg">({INITIAL_CARDS.length})</span></h1>
            <button className="text-primary text-sm font-semibold">View All</button>
          </div>
          
          <div className="grid grid-cols-2 min-[450px]:grid-cols-3 gap-4 px-4">
            {INITIAL_CARDS.map((card, i) => (
              <div key={card.id} className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md border-4 border-white dark:border-surface-dark transform transition-transform hover:scale-105">
                <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url('${card.imageUrl}')`}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <button className="absolute top-2 right-2 size-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20">
                  <span className="material-symbols-outlined text-[18px]">edit</span>
                </button>
                <div className="absolute bottom-2 left-2 right-2 text-white font-bold text-xs truncate opacity-0 group-hover:opacity-100 transition-opacity">
                  {card.name}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="fixed bottom-0 left-0 w-full z-40 px-4 py-6 bg-gradient-to-t from-background-light dark:from-background-dark via-background-light dark:via-background-dark to-transparent backdrop-blur-sm">
        <button className="w-full bg-primary text-white font-bold text-lg h-16 rounded-full shadow-xl shadow-primary/30 flex items-center justify-center gap-2 transition-all active:scale-95">
          <span className="material-symbols-outlined">add_circle</span>
          Add Card
        </button>
      </div>
    </div>
  );
};

export default ProfileView;
