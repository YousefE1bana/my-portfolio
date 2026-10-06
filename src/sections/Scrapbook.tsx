import { Desk } from '@/components/scrapbook/Desk';
import { StorySpread } from '@/components/scrapbook/StorySpread';
import { ProjectFiles } from '@/components/scrapbook/ProjectFiles';
import { Life, Gaming, Worlds } from '@/components/scrapbook/Life';
import { Music, Fuel } from '@/components/scrapbook/MusicFuel';
import { Notebook } from '@/components/scrapbook/Notebook';
import { RoadAhead } from '@/components/scrapbook/RoadAhead';
import '@/styles/scrapbook.css';
import '@/styles/scrapbook-refinements.css';
import { media } from '@/data/scrapbook';
import { useEffect, type CSSProperties } from 'react';

export default function Scrapbook() {
  useEffect(() => {
    // Native fragment navigation runs before this lazy page is mounted.
    const destination = document.getElementById(location.hash.slice(1));
    if (!destination) return;
    const frame = requestAnimationFrame(() => destination.scrollIntoView({ block: 'start', behavior: 'instant' }));
    return () => cancelAnimationFrame(frame);
  }, []);
  return <div className="scrapbook" style={{ '--paper-texture': `url("${media('paper')}")` } as CSSProperties}><Desk /><div className="sb-book"><StorySpread /><ProjectFiles /><Life /><Gaming /><Worlds /><Music /><Fuel /><Notebook /></div><RoadAhead /></div>;
}
