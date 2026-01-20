
import React from 'react';

interface Props {
  onStart: () => void;
}

const WelcomeView: React.FC<Props> = ({ onStart }) => {
  return (
    <div className="relative flex flex-col w-full h-full justify-between overflow-hidden bg-background-light dark:bg-background-dark">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-primary/5 dark:from-background-dark dark:to-primary/10 pointer-events-none z-0"></div>
      
      <div className="relative z-10 flex flex-col items-center w-full px-4 sm:px-6 h-full flex-grow overflow-y-auto">
        <h1 className="text-primary tracking-tight text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight pb-2 flex items-center gap-2 pt-8 sm:pt-12">
          <span className="material-symbols-outlined text-2xl sm:text-3xl lg:text-4xl icon-filled">style</span>
          CardSwap
        </h1>

        <div className="flex-grow flex items-center justify-center py-4 sm:py-6 w-full min-h-[40vh]">
          <div className="relative w-full max-w-xs sm:max-w-sm aspect-[3/4]">
            <div className="absolute -top-4 -right-4 w-16 sm:w-24 h-16 sm:h-24 bg-accent/30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-20 sm:w-32 h-20 sm:h-32 bg-primary/20 rounded-full blur-2xl"></div>

            <div className="absolute inset-0 rotate-6 translate-x-4 bg-white dark:bg-[#1a2c38] rounded-2xl border-3 sm:border-4 border-white dark:border-[#2a3c48] shadow-lg overflow-hidden opacity-60 scale-95 origin-bottom-left">
              <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url("https://picsum.photos/400/600?random=1")'}}></div>
            </div>

            <div className="absolute inset-0 -rotate-3 bg-white dark:bg-[#1a2c38] rounded-2xl border-4 sm:border-[6px] border-white dark:border-[#2a3c48] shadow-2xl overflow-hidden transition-transform hover:scale-105 duration-300">
              <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTEiE_yFaNxmodIrjgPxdFAyCeTQmreLVBoXDR7AhyUVAp4L2hSLAVrxJ97RztTWPBT1qNO2VqCfiFRlKASwyu28jgMe9-rH8YCRn8EuCicyv1hBO9qTXNgmL_8A1dSV3_ForSgc6w6rSMHmkINcj2gkktU2P9iDaelFG_VIPefTXjhqpf9vxLzu0EEJ0Fi2trlgE1Dq1XBoFsM0EszDR9Jsw3qCeKK8Kd4uUidGI-JszWvRUxuJnfOzwmCOnRblWEBJoiInruLaxB")'}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-40"></div>
              </div>
              <div className="absolute bottom-4 right-4 bg-accent text-[#0c161d] rounded-full p-2 sm:p-3 shadow-lg flex items-center justify-center animate-bounce">
                <span className="material-symbols-outlined text-base sm:text-xl">swipe_right</span>
              </div>
            </div>

            <span className="material-symbols-outlined absolute -top-6 -left-2 text-accent text-3xl sm:text-4xl animate-[bounce_3s_infinite]">star</span>
          </div>
        </div>

        <div className="w-full text-center mt-2 sm:mt-4 mb-4 sm:mb-8 px-2">
          <h2 className="text-[#0c161d] dark:text-white text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight mb-2 sm:mb-3">
            Swap. Collect. Battle.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base lg:text-lg font-medium">
            The easiest way to trade your collection. <br/>Swipe right to start swapping!
          </p>
        </div>

        <div className="w-full flex flex-col gap-3 px-2 mb-4 sm:mb-6">
          <button 
            onClick={onStart}
            className="group relative flex w-full items-center justify-center rounded-full h-12 sm:h-14 lg:h-16 bg-primary text-white text-base sm:text-lg lg:text-xl font-bold shadow-xl shadow-primary/30 active:scale-95 transition-all overflow-hidden"
          >
            <span className="z-10">Get Started</span>
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer"></div>
          </button>
          
          <button 
            onClick={onStart}
            className="flex w-full items-center justify-center rounded-full h-12 sm:h-14 lg:h-16 bg-transparent border-2 border-primary/30 text-primary text-base sm:text-lg lg:text-xl font-bold transition-colors hover:bg-primary/5 active:scale-95"
          >
            Skip
          </button>
        </div>

        <div className="mt-4 sm:mt-6 lg:mt-8 text-center pb-4 px-2">
          <p className="text-xs sm:text-sm text-slate-400">
            By continuing, you agree to our <span className="underline cursor-pointer">Terms</span> & <span className="underline cursor-pointer">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeView;
