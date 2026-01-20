
export enum View {
  WELCOME = 'welcome',
  ONBOARDING = 'onboarding',
  DISCOVER = 'discover',
  MATCHES = 'matches',
  CHAT = 'chat',
  PROFILE = 'profile'
}

export interface Card {
  id: string;
  name: string;
  set: string;
  rarity: string;
  imageUrl: string;
  estimatedValue: number;
  condition: string;
  isHot?: boolean;
  isVerified?: boolean;
}

export interface User {
  id: string;
  nickname: string;
  avatarUrl: string;
  location: string;
  games: string[];
  collection: Card[];
}

export interface TradeMatch {
  id: string;
  partner: {
    id: string;
    nickname: string;
    avatarUrl: string;
    online: boolean;
  };
  myCard: Card;
  partnerCard: Card;
  timestamp: string;
  lastMessage?: string;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
}
