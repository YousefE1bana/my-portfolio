import { readFileSync, readdirSync, statSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const inventory = JSON.parse(readFileSync('src/data/projectInventory.json', 'utf8'));
const credentials = JSON.parse(readFileSync('src/data/credentials.json', 'utf8'));
const required = new Set(inventory.flatMap(project => [project.github, project.demo].filter(Boolean)));
const urls = [...new Set([...required,
  ...credentials.map(credential => credential.verifyUrl).filter(Boolean),
  'https://github.com/YousefE1bana/Akher-Kheit',
  'https://github.com/YousefE1bana',
  'https://www.linkedin.com/in/yousefelbana',
  'https://tryhackme.com/p/ELbanna',
  'https://open.spotify.com/playlist/2mI2CeQG710cVAtFeqDkOI',
  'https://open.spotify.com/embed/playlist/2mI2CeQG710cVAtFeqDkOI?utm_source=generator&theme=0',
])];
const results = await Promise.all(urls.map(async url => {
  try {
    const response = await fetch(url, { redirect: 'follow', signal: AbortSignal.timeout(20000) });
    const result = { url, status: response.status, finalUrl: response.url, ok: response.ok, required: required.has(url) };
    await response.body?.cancel();
    return result;
  } catch (error) { return { url, ok: false, required: required.has(url), error: String(error) }; }
}));
function files(path) {
  return readdirSync(path).flatMap(name => {
    const full = join(path, name);
    return statSync(full).isDirectory() ? files(full) : [full];
  });
}
const localFailures = [];
const localFiles = files('dist');
const preview = process.env.PORTFOLIO_PREVIEW_URL || 'http://127.0.0.1:4173/my-portfolio/';
for (const file of localFiles) {
  const url = preview + file.replace(/^dist[\\/]/, '').replaceAll('\\', '/');
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(10000) });
    if (!response.ok) localFailures.push({ url, status: response.status });
    await response.body?.cancel();
  } catch (error) { localFailures.push({ url, error: String(error) }); }
}
const evidence = { checkedAt: new Date().toISOString(), external: results, local: { count: localFiles.length, failures: localFailures } };
mkdirSync('.local-backup/pre-release', { recursive: true });
writeFileSync('.local-backup/pre-release/link-checks.json', JSON.stringify(evidence, null, 2) + '\n');
console.log(JSON.stringify(evidence, null, 2));
if (localFailures.length || results.some(result => result.required && !result.ok)) process.exitCode = 1;
