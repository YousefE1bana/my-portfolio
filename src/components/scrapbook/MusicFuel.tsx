import { useState } from 'react';
import { Disc3, Headphones } from 'lucide-react';
import { SpotifyPlayer } from '@/components/SpotifyPlayer';
import { media, musicMoods } from '@/data/scrapbook';
import { Heading, Note, Photo } from './Fragments';

export function Music() {
  const [selected, setSelected] = useState(0);
  const mood = musicMoods[selected];
  return <section id="music" className="sb-music sb-paper" aria-label="My soundtrack">
    <div className="sb-record-scene"><img src={media('music')} alt="Vinyl, headphones and cassette on a warmly lit night desk" width="900" height="675" loading="lazy" decoding="async" /><div className="sb-vinyl" aria-hidden="true"><Disc3 size={76} /></div><Note>Side A:<br />whatever the day needs.</Note></div>
    <div className="sb-listening"><Heading title="Always on repeat." note="A soundtrack for the long way home." />
      <div role="group" aria-label="Choose a listening mood" className="sb-mood-picker">{musicMoods.map((item, i) => <button key={item.label} onClick={() => setSelected(i)} aria-pressed={selected === i}>{item.label}</button>)}</div>
      <div className="sb-music-selection" aria-live="polite"><img key={mood.image} src={media(mood.image)} alt="" width="300" height="225" loading="lazy" /><div><Headphones size={20} aria-hidden="true" /><h3>{mood.artists}</h3><p className="sb-hand">{mood.note}</p></div></div>
      <div className="sb-waveform" aria-hidden="true">{Array.from({ length: 32 }, (_, i) => <i key={i} style={{ height: `${12 + (i * 17 % 32)}px`, animationDelay: `${i * .09}s` }} />)}</div>
      <SpotifyPlayer scrapbook /><p className="sb-listening-note">Pick a mood here. The actual listening lives on Spotify.</p>
    </div>
  </section>;
}

export function Fuel() {
  const [coffee, setCoffee] = useState<'iced' | 'espresso'>('iced');
  return <section id="fuel" className="sb-fuel sb-paper" aria-labelledby="fuel-title"><div className="sb-fuel-title"><Heading id="fuel-title" title="Favorites & fuel." note="Good food. Better company. Another coffee." /></div>
    <div className="sb-fuel-canvas"><Photo image="koshari" title="Koshari deserves the big photo." note="Always a good idea." className="sb-koshari" rotation={-3}><p>Rice, lentils, pasta, crispy onions.<br />The answer was always yes.</p></Photo>
      <div className="sb-coffee-file"><Photo image="coffee" title="Coffee is a constant." note={coffee === 'iced' ? 'Iced. Even when it’s late.' : 'Small cup. Big commitment.'} rotation={4} /><div className="sb-coffee-picker" role="group" aria-label="Coffee preference"><button aria-pressed={coffee === 'iced'} onClick={() => setCoffee('iced')}>Iced coffee</button><button aria-pressed={coffee === 'espresso'} onClick={() => setCoffee('espresso')}>Espresso</button></div></div>
      <Photo image="feast" title="The rest of the table" note="There is room for all of it." className="sb-feast" rotation={2}><details><summary>What’s on the menu?</summary><p>Shawarma, grilled food, Negresco, manakish, chips, Bake Rolls and Mountain Dew.</p></details></Photo>
      <Photo image="jasmine" title="A signature in the small things." note="Hugo Dark Blue. White jasmine." className="sb-fragrance" rotation={-4} />
      <Note className="sb-fuel-note">More coffee.<br />More good food.<br />More days like this.<span>Small things.<br />They count.</span></Note>
    </div>
  </section>;
}
