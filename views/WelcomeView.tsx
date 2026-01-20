
import React from 'react';

interface Props {
  onStart: () => void;
}

const WelcomeView: React.FC<Props> = ({ onStart }) => {
  return (
    <div className="relative flex flex-col h-full justify-between overflow-hidden bg-background-light dark:bg-background-dark">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-primary/5 dark:from-background-dark dark:to-primary/10 pointer-events-none z-0"></div>
      
      <div className="relative z-10 flex flex-col items-center w-full pt-12 pb-10 px-6 h-full flex-grow">
        <h1 className="text-primary tracking-tight text-[36px] font-extrabold leading-tight pb-2 flex items-center gap-2">
          <span className="material-symbols-outlined text-4xl icon-filled">style</span>
          CardSwap
        </h1>

        <div className="flex-grow flex items-center justify-center py-6 w-full">
          <div className="relative w-full max-w-[320px] aspect-[3/4]">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>

            <div className="absolute inset-0 rotate-6 translate-x-4 bg-white dark:bg-[#1a2c38] rounded-2xl border-4 border-white dark:border-[#2a3c48] shadow-lg overflow-hidden opacity-60 scale-95 origin-bottom-left">
              <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url("https://picsum.photos/400/600?random=1")'}}></div>
            </div>

            <div className="absolute inset-0 -rotate-3 bg-white dark:bg-[#1a2c38] rounded-2xl border-[6px] border-white dark:border-[#2a3c48] shadow-2xl overflow-hidden transition-transform hover:scale-105 duration-300">
              <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTEiE_yFaNxmodIrjgPxdFAyCeTQmreLVBoXDR7AhyUVAp4L2hSLAVrxJ97RztTWPBT1qNO2VqCfiFRlKASwyu28jgMe9-rH8YCRn8EuCicyv1hBO9qTXNgmL_8A1dSV3_ForSgc6w6rSMHmkINcj2gkktU2P9iDaelFG_VIPefTXjhqpf9vxLzu0EEJ0Fi2trlgE1Dq1XBoFsM0EszDR9Jsw3qCeKK8Kd4uUidGI-JszWvRUxuJnfOzwmCOnRblWEBJoiInruLaxB")'}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-40"></div>
              </div>
              <div className="absolute bottom-6 right-6 bg-accent text-[#0c161d] rounded-full p-3 shadow-lg flex items-center justify-center animate-bounce">
                <span className="material-symbols-outlined">swipe_right</span>
              </div>
            </div>

            <span className="material-symbols-outlined absolute -top-6 -left-2 text-accent text-4xl animate-[bounce_3s_infinite]">star</span>
          </div>
        </div>

        <div className="w-full text-center mt-4 mb-8">
          <h2 className="text-[#0c161d] dark:text-white text-3xl font-bold tracking-tight mb-3">
            Swap. Collect. Battle.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">
            The easiest way to trade your collection. <br/>Swipe right to start swapping!
          </p>
        </div>

        <div className="w-full flex flex-col gap-4">
          <button 
            onClick={onStart}
            className="group relative flex w-full items-center justify-center rounded-full h-16 bg-primary text-white text-xl font-bold shadow-xl shadow-primary/30 active:scale-95 transition-all overflow-hidden"
          >
            <span className="z-10">Get Started</span>
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer"></div>
          </button>
          
          <button className="flex w-full items-center justify-center rounded-full h-16 bg-transparent border-2 border-primary/30 text-primary text-xl font-bold transition-colors hover:bg-primary/5 active:scale-95">
            I already have an account
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-slate-400">
            By continuing, you agree to our <span className="underline cursor-pointer">Terms</span> & <span className="underline cursor-pointer">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeView;
