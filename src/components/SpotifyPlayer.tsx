import { useId, useState } from 'react';
import { ArrowUpRight, Disc3, Headphones } from 'lucide-react';

export const spotifyUrl = 'https://open.spotify.com/playlist/2mI2CeQG710cVAtFeqDkOI?si=a5u9mLWzTqy-OwR6XQLEzw&utm_source=copy-link';
export function SpotifyPlayer({ scrapbook = false }: { scrapbook?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const id = useId();
  return <div className={`spotify-player${scrapbook ? ' spotify-scrapbook' : ''}`}>
    <div className="spotify-preview"><span className="spotify-disc" aria-hidden="true"><Disc3 size={48} /></span><div><p className="label">Currently in rotation</p><h3>My Playlist #1</h3><p>Yousef’s soundtrack. Indie nights, Arabic favorites.</p></div><Headphones size={24} aria-hidden="true" /></div>
    <div className="spotify-actions"><a href={spotifyUrl} target="_blank" rel="noopener noreferrer">Open on Spotify<ArrowUpRight size={16} aria-hidden="true" /></a><button type="button" aria-expanded={expanded} aria-controls={id} onClick={() => setExpanded(value => !value)}>{expanded ? 'Close player' : 'Open playlist player'}</button></div>
    <div id={id} hidden={!expanded}>{expanded && <><iframe title="Yousef’s Spotify playlist — My Playlist #1" src="https://open.spotify.com/embed/playlist/2mI2CeQG710cVAtFeqDkOI?utm_source=generator&theme=0" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" /><p className="spotify-fallback">If the player is unavailable, use Open on Spotify above.</p></>}</div>
  </div>;
}
