
import { Card } from './types';

export const INITIAL_CARDS: Card[] = [
  {
    id: 'c1',
    name: 'Charizard',
    set: 'Base Set',
    rarity: 'Holo Rare',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9viRTN2mt_Wm5yNaNY0sMGATk4k4S_bbrTSdrT4nlp4j1DiLhm52etbiG7LjM9doef5cuTQDG6vV72Zm7GJvTDDhrco8thR4884a0-RCNGjq35fRc9x2gWa4PPFxwWo1oLKnHVGnNfKRe6ekW34HYWkLg_e6hgoyo5kTJ2wdPXHiaeTRFyj6EgnMMR9nNL1WX_lIdBC-SbjzrXDW1WoaTdL85bf1lkeUo97hWBMxRkGMmI2bkKtvdXfwvxBduVVskMBuBn3v-4ra5',
    estimatedValue: 350,
    condition: 'Near Mint (9.5)',
    isHot: true,
    isVerified: true
  },
  {
    id: 'c2',
    name: 'Blue-Eyes Dragon',
    set: 'Legend of Blue Eyes',
    rarity: 'Ultra Rare',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9QoqB_FsZG-Bko7Q8xhCGeM24RgGWBELpyeDKs-_rdH2bCbN91idyZk4Y0KLvq4ZnZP35aHC_Wfl22n4CBMzOf0yrx1v0KnwTswPbvDtPMLj800uTF4rnJ43Up8bpdW7airV1hgHKQ8eOvoLgbX5SmPemQcgLnSO3XiTilTJKMXX3X5qDpezfvTtYwiHYJ_PyP6q27gsWAu73xCFqdOSl4k-ZJL6Gg-w-w1WIdrSnAW2ofdN6Cn5z3LYfdZlPXRsaaZ3y_oILdhSD',
    estimatedValue: 280,
    condition: 'Excellent',
    isHot: false,
    isVerified: true
  },
  {
    id: 'c3',
    name: 'Black Lotus',
    set: 'Alpha',
    rarity: 'Rare',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBa8T646VN3u08flo212V5szY1fk88hY5ThKNHhASATHcjh3En_bYuh1IbkQbBRgI7KZbgsa35ru95SRZI5MwATNXtSKISqjMHCckus5PlHOAvLc9nT5NwfXGvcvc0ZAm5cGmGp-tJvv7jGRcWjPlFwpr_Pe9gBZknzbiGd1pzRbRh-NIhaxafIeHA_cVUiQgYAjAQKNRM_J3kWs47iTKcwji-rvA3KGE6GfKZa3hLwQ0pDUGtbm5iwjsDWl8qTTrw7rmaUf6ebLfk8',
    estimatedValue: 12500,
    condition: 'Played',
    isHot: true,
    isVerified: false
  }
];

export const MOCK_GAMES = [
  { id: 'pokemon', name: 'Pokémon TCG', sub: 'Trading Card Game', icon: 'capture', color: 'from-yellow-400 to-orange-500' },
  { id: 'onepiece', name: 'One Piece', sub: 'Card Game', icon: 'sailing', color: 'from-red-500 to-rose-700' },
  { id: 'mtg', name: 'Magic: The Gathering', sub: 'Wizards of the Coast', icon: 'auto_fix', color: 'from-slate-700 to-black' },
  { id: 'yugioh', name: 'Yu-Gi-Oh!', sub: 'Konami', icon: 'visibility', color: 'from-yellow-700 to-yellow-900' }
];
