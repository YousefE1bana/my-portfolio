import { assetUrl } from '@/lib/assets';

export const afterHoursNav = [
  { id: 'about', label: 'The origin' },
  { id: 'projects', label: 'Project files' },
  { id: 'personal', label: 'My life' },
  { id: 'worlds', label: 'Stories' },
  { id: 'fuel', label: 'Fuel' },
  { id: 'contact', label: 'Contact' },
];

export const media = (name: string) => assetUrl(`images/scrapbook/${name}.webp`);
export const storyPhotos = ['take-apart', 'fix-it', 'build-it', 'secure-it'];
export const storyNotes = ['A screwdriver. A thousand questions.', 'The family’s little engineer.', 'Hello, world. And then some.', 'One incident. A different question.'];

export const hobbies = [
  { image: 'gym', title: 'The gym', note: 'Stronger body. Clearer head.', text: 'A major constant in my life. Training is discipline, but it is also a part of the day I really look forward to.' },
  { image: 'swim', title: 'Swimming', note: 'Reset. Breathe. Go again.', text: 'A different pace, a different kind of quiet. Swimming gives me another way to reset.' },
  { image: 'football', title: 'Match days', note: 'Some loyalties never rotate.', text: 'Al Ahly. Real Madrid. Arsenal. Cristiano Ronaldo is my favorite player. Yes, there is always another match to talk about.' },
  { image: 'drawing', title: 'Drawing', note: 'No compiler required.', text: 'Pencil, paper, and a different kind of problem solving. Sometimes I just want to make something with my hands.' },
  { image: 'hardware', title: 'PC hardware', note: 'One more upgrade…', text: 'GPUs, CPUs, cooling, mechanical keyboards and the small decisions that change a whole machine. I love understanding the parts.' },
  { image: 'ai', title: 'AI & LLMs', note: 'What’s happening under the hood?', text: 'A deep obsession outside cybersecurity: experimenting with tools, following models and understanding what happens beneath the interface.' },
];

export const gameShelves = [
  { image: 'tactical', title: 'One more round.', games: 'PUBG Mobile · Counter-Strike · Valorant', note: 'Quick decisions. Team energy.' },
  { image: 'fantasy', title: 'Lose track of time.', games: 'Elden Ring · God of War', note: 'A world worth getting lost in.' },
  { image: 'survival', title: 'Keep the lights on.', games: 'Resident Evil', note: 'Okay. Maybe one more chapter.' },
  { image: 'animated', title: 'Different map. Same instinct.', games: 'Clash Royale · League of Legends', note: 'Think. Adapt. Try again.' },
];

export const worlds = [
  { image: 'heroes', title: 'Heroes & complicated people', note: 'Ordinary people. Extraordinary choices.', names: 'Marvel · Iron Man · Spider-Man · Logan · Magneto' },
  { image: 'crime', title: 'A plan. A suit. A little chaos.', note: 'Keep your head. Know your next move.', names: 'La Casa de Papel · Suits · John Wick' },
  { image: 'survival', title: 'When the world changes', note: 'The people matter more than the apocalypse.', names: 'The Walking Dead' },
  { image: 'friends', title: 'The everyday ones', note: 'Good company is a whole world.', names: 'Friends' },
  { image: 'animated', title: 'Imagination doesn’t expire', note: 'Still plenty of room for wonder.', names: 'Transformers · Danny Phantom · Ben 10 · Adventure Time · Ninjago' },
];

export const musicMoods = [
  { label: 'After midnight', artists: 'The Neighbourhood · Arctic Monkeys', image: 'music', note: 'Headphones on. Outside world down.' },
  { label: 'The long way home', artists: 'Pink Floyd', image: 'fantasy', note: 'Some music deserves the scenic route.' },
  { label: 'Cairo, with the windows open', artists: 'Amr Diab · Aziz Maraka · Sherine', image: 'arabic-music', note: 'Different sound. Same company.' },
];
