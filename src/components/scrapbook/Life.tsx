import { hobbies, gameShelves, worlds } from '@/data/scrapbook';
import { Heading, Note, Photo, SceneLayer } from './Fragments';
import { assetUrl } from '@/lib/assets';

const clubs = [{ name: 'Real Madrid', file: 'real-madrid', height: 321 }, { name: 'Al Ahly', file: 'al-ahly', height: 290 }, { name: 'Arsenal', file: 'arsenal', height: 283 }];

export function Life() {
  return <section id="personal" className="sb-life sb-paper" aria-labelledby="life-title">
    <div className="sb-life-heading"><Heading id="life-title" title="Off the clock" note="A richer life. A clearer mind." /><p>I’m more than the things I build.<br />This is the part that completes the day.</p></div>
    <div className="sb-life-canvas">{hobbies.map((hobby, i) => <Photo key={hobby.image} image={hobby.image} title={hobby.title} note={hobby.note} rotation={[-3,4,-2,3,-4,2][i]} className={`sb-hobby sb-hobby-${hobby.image}`}><details><summary>{hobby.image === 'football' ? 'Match-day loyalties ↗' : 'Behind the photo'}</summary><p>{hobby.text}</p>{hobby.image === 'football' && <><div className="sb-club-marks">{clubs.map(club => <figure key={club.file}><img src={assetUrl(`images/clubs/${club.file}.webp`)} alt={`${club.name} supplied club logo`} width="240" height={club.height} loading="lazy" decoding="async" /><figcaption>{club.name}</figcaption></figure>)}</div><p className="sb-hand">Favorite player: Cristiano Ronaldo.</p></>}</details></Photo>)}
      <Note className="sb-life-note">More of these days.<br />Less autopilot.<span>And yes, the gym<br />gets its own page.</span></Note>
    </div>
  </section>;
}

export function Gaming() {
  return <section id="gaming" className="sb-gaming sb-night" aria-labelledby="gaming-title">
    <SceneLayer image="gaming" />
    <div className="sb-gaming-heading"><Heading id="gaming-title" title="Save. Continue." note="One more round is a very flexible unit of time." /><p>Different worlds.<br />Same competitive streak.</p><a className="sb-button" href="#game-shelf">Choose your next world ↓</a></div>
    <div className="sb-game-rail" id="game-shelf" tabIndex={0} role="region" aria-label="Gaming worlds — scroll horizontally">{gameShelves.map((game, i) => <Photo key={game.title} image={game.image} title={game.title} note={game.note} rotation={[-3,3,-2,2][i]}><details><summary>Titles on this shelf ↗</summary><p className="sb-game-names">{game.games}</p></details></Photo>)}</div>
    <Note className="sb-save-note">Checkpoint reached.<br />Go drink some water.</Note>
  </section>;
}

export function Worlds() {
  return <section id="worlds" className="sb-worlds sb-night" aria-labelledby="worlds-title">
    <div className="sb-worlds-intro"><Heading id="worlds-title" title="Worlds that stayed with me." note="Stories shape a person, too." /><p>Big worlds. Complicated people.<br />And the comfort of the familiar ones.</p></div>
    <div className="sb-story-wall" tabIndex={0} role="region" aria-label="Story worlds — scroll horizontally">{worlds.map((world, i) => <Photo key={world.title} image={world.image} title={world.title} note={world.note} rotation={[-4,3,-2,4,-3][i]}><details><summary>Stories behind the scene ↗</summary><p className="sb-world-names">{world.names}</p></details></Photo>)}</div>
    <p className="sb-worlds-margin sb-hand">Imagination doesn’t belong<br />only to childhood.</p>
  </section>;
}
