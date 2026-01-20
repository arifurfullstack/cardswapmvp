
import React, { useState, useEffect } from 'react';
import { View, User, Card, TradeMatch } from './types';
import { INITIAL_CARDS } from './constants';
import WelcomeView from './views/WelcomeView';
import OnboardingView from './views/OnboardingView';
import DiscoverView from './views/DiscoverView';
import MatchesView from './views/MatchesView';
import ChatView from './views/ChatView';
import ProfileView from './views/ProfileView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.WELCOME);
  const [user, setUser] = useState<User>({
    id: 'me',
    nickname: 'AshKetchum',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtsVUFU7ubc3xGRwcKjtuCNl9v4-QqxjJ9pNO0TC1KA86HzgOG820FF2ndO_1NXaDFBTDqskMpRpMq3Ex8Qj889VC3WWwaj9__uIt8mCm4RQj1yUKRpel_jwkz_O--31i4eQxdbv6j4J-kc_TB0VSLDNsWL_VaNlblrjvjGTNwti-fk3f4QwFCsmRNFntIjhq9E-DvtYBk7rii4vSSP-RIAT7PKRH5YoN89qcYKLeEz2gQVxis6DlvihwFtLvgMgnWkAQIAJHN06uI',
    location: 'United States',
    games: ['Pokémon TCG', 'Magic: The Gathering'],
    collection: INITIAL_CARDS.slice(0, 1) // Start with one card
  });

  const [matches, setMatches] = useState<TradeMatch[]>([
    {
      id: 'm1',
      partner: {
        id: 'p1',
        nickname: 'PokeMaster99',
        avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyBCREEub4gwkPvdbXH0_TsKqr5r5kSMvPRCSmgLOqvas0AaTr1UIU-SKi1372r8-TJZw0OMxIa2-o7AxU2BkWb8CQIG1cjxZg7_AYpJAeZqCpVfpLO4btS9clrE1plt0hjmju2baHnicdFSivHgf46dyS4Md6adcgZmp8rajql-ipdncxWIlvxAzvMorKFwzU_tIqTSN4Prjll4K7oPZnqLHcYbsZXaCDlyrvgIw9FNaCoh292OrXbpPyVI6vkiHSgqrH6ST5pdGf',
        online: true
      },
      myCard: INITIAL_CARDS[0],
      partnerCard: INITIAL_CARDS[1],
      timestamp: '2m ago',
      lastMessage: 'Hey! I saw you liked my Charizard.'
    }
  ]);

  const [activeMatch, setActiveMatch] = useState<TradeMatch | null>(null);

  const handleStartChat = (match: TradeMatch) => {
    setActiveMatch(match);
    setCurrentView(View.CHAT);
  };

  const navigateTo = (view: View) => setCurrentView(view);

  // Simple state router
  const renderView = () => {
    switch (currentView) {
      case View.WELCOME:
        return <WelcomeView onStart={() => navigateTo(View.ONBOARDING)} />;
      case View.ONBOARDING:
        return <OnboardingView onComplete={(userData) => {
          setUser({ ...user, ...userData });
          navigateTo(View.DISCOVER);
        }} />;
      case View.DISCOVER:
        return <DiscoverView 
          onNavigate={navigateTo} 
          onMatch={(partnerCard) => {
            const newMatch: TradeMatch = {
              id: Date.now().toString(),
              partner: {
                id: 'new_partner',
                nickname: 'Alex',
                avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNF7LnjMksRbuO7svfX0uJ7XLPYyUWUU0XEziMGIY26tM0qF8A1bzFh1A45wBNFhcVSqL7bwxQqPyoG0R8LWUqhkWYlArZ0CEspP59DLzQwOhbFs_RFPT5KWxV6M7Vr-rsvN6DoOfaI3Nzzafu-UpBonpiX3aewizI_X8ktxhqIoiqPyArZxEYpwfTJ1viSn2eXK-XERRfV6eJHxuza1BaPXz7zfuMS9w-c4zt7MxDHyMVBBr7XPAWXpjx3YgJyAgozLxnihTvGTp-',
                online: true
              },
              myCard: user.collection[0],
              partnerCard: partnerCard,
              timestamp: 'Just now'
            };
            setMatches(prev => [newMatch, ...prev]);
            setActiveMatch(newMatch);
          }}
        />;
      case View.MATCHES:
        return <MatchesView matches={matches} onChat={handleStartChat} onNavigate={navigateTo} />;
      case View.CHAT:
        return activeMatch ? <ChatView match={activeMatch} onBack={() => navigateTo(View.MATCHES)} /> : <DiscoverView onNavigate={navigateTo} onMatch={() => {}} />;
      case View.PROFILE:
        return <ProfileView user={user} onBack={() => navigateTo(View.DISCOVER)} />;
      default:
        return <WelcomeView onStart={() => navigateTo(View.ONBOARDING)} />;
    }
  };

  return (
    <div className="flex flex-col h-full max-w-md mx-auto relative overflow-hidden bg-background-light dark:bg-background-dark shadow-2xl">
      {renderView()}
    </div>
  );
};

export default App;
