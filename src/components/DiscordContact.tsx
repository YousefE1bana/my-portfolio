import { useEffect, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { DiscordIcon } from './icons';

export function DiscordContact() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    if (!message.startsWith('Discord')) return;
    const timer = window.setTimeout(() => setMessage(''), 2500);
    return () => window.clearTimeout(timer);
  }, [message]);
  async function copy() {
    try { await navigator.clipboard.writeText('usef.elbana'); setMessage('Discord username copied: usef.elbana'); }
    catch { setMessage('Copy unavailable. Select the visible username usef.elbana to copy it manually.'); }
  }
  return <div className="discord-contact"><DiscordIcon size={24} /><div><span className="label">Discord</span><p className="discord-username">usef.elbana</p></div><button type="button" onClick={copy} aria-label="Copy Discord username usef.elbana">{message.startsWith('Discord') ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}Copy username</button><p className="discord-feedback" role="status" aria-live="polite">{message}</p></div>;
}
