import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { createHash } from "node:crypto";

const base = "/my-portfolio/";
const html = readFileSync("dist/index.html", "utf8");
const references = [...html.matchAll(/(?:src|href)="([^"#]+)"/g)].map((match) => match[1]);
for (const reference of references.filter((value) => value.startsWith("/"))) {
  assert(reference.startsWith(base), `Incorrect base: ${reference}`);
  assert(existsSync(join("dist", reference.slice(base.length))), `Missing file: ${reference}`);
}
assert(!html.includes("/src/"), "Production entry still references source");
assert(existsSync("dist/cv/Yousef_Osama_CV.pdf"), "CV missing");
assert(existsSync("dist/images/after-hours.webp"), "After Hours art missing");
assert(existsSync("dist/images/shifaa-architecture.webp"), "Project diagram missing");
const scrapbookAssets = JSON.parse(readFileSync("docs/AFTER-HOURS-ASSETS.json", "utf8")).assets;
assert.equal(new Set(scrapbookAssets.map(asset => asset.name)).size, scrapbookAssets.length, "Duplicate scrapbook assets");
for (const asset of scrapbookAssets) {
  const path = join("dist", asset.file.replace(/^public\//, ""));
  assert(existsSync(path), `Scrapbook asset missing: ${asset.name}`);
  const bytes = readFileSync(path);
  assert.equal(bytes.toString("ascii", 8, 12), "WEBP", `Invalid WebP: ${asset.name}`);
}
const certificates = readdirSync("dist/certificates", { withFileTypes: true }).filter((file) => file.isFile());
const credentialData = JSON.parse(readFileSync('src/data/credentials.json', 'utf8'));
assert.equal(certificates.length, credentialData.length, "Certificate originals and gallery disagree");
assert.equal(readdirSync("dist/certificates/thumbnails").length, credentialData.length, "Certificate thumbnails and gallery disagree");
for (const credential of credentialData) {
  assert(existsSync(join('dist/certificates', credential.file)), `Missing original: ${credential.file}`);
  assert(existsSync(join('dist/certificates/thumbnails', credential.file.replace(/\.(png|jpg)$/, '.webp'))), `Missing thumbnail: ${credential.file}`);
}
const inventory = JSON.parse(readFileSync('src/data/projectInventory.json', 'utf8'));
for (const file of ['src/data/projectInventory.json', 'src/data/credentials.json']) {
  assert(!/[\u00c2\u00c3\ufffd]|\u00e2\u20ac/.test(readFileSync(file, 'utf8')), `Garbled UTF-8 content: ${file}`);
}
assert.equal(new Set(inventory.map(p => p.id)).size, inventory.length, 'Duplicate project IDs');
assert.equal(inventory.filter(p => p.id === 'netshield').length, 1, 'NetShield must appear once');
assert(!inventory.some(p => p.id === 'soc-home-lab'), 'SOC lab is not an independent project');
for (const project of inventory) {
  if (project.image) assert(existsSync(join('dist', project.image)), `Missing project visual: ${project.id}`);
  if (project.github) assert(/^https:\/\/github.com\/YousefE1bana\/(Net-Shield|msi-ec-tui|solar-odyssey|al-tayyibat|shifaa-project|my-portfolio)$/.test(project.github), `Unverified repository: ${project.github}`);
}
for (const asset of JSON.parse(readFileSync('docs/SUPPLIED-ASSETS.json', 'utf8'))) {
  const file = asset.file.startsWith('public/') ? join('dist',asset.file.slice('public/'.length)) : asset.file;
  assert(existsSync(file), `Supplied asset missing: ${file}`);
  assert.equal(createHash('sha256').update(readFileSync(file)).digest('hex'),asset.sha256,`Supplied asset changed: ${file}`);
}
const suppliedCertificate = 'Certificate_Yousef_Osama_Abdelhameed_NSF-26-005.png';
// The manifest always verifies the published original; local intake files need not ship to CI.
if (existsSync(suppliedCertificate)) {
  assert.equal(createHash('sha256').update(readFileSync(suppliedCertificate)).digest('hex'), createHash('sha256').update(readFileSync('dist/certificates/innovera-network-security.png')).digest('hex'),'Certificate original altered');
}
let clientSource = "";
for (const filename of readdirSync("dist/assets").filter((file) => file.endsWith(".js"))) {
  const source = readFileSync(join("dist/assets", filename), "utf8");
  assert(!/tel:\+?[\d(]/.test(source), "Public phone link found");
  clientSource += source;
}
assert(clientSource.includes("after-hours"), "Third theme missing from build");
assert(readFileSync(".gitignore", "utf8").split(/\r?\n/).includes("dist"), "dist must remain ignored");
const canonical = 'https://yousefe1bana.github.io/my-portfolio/';
assert(html.includes(`rel="canonical" href="${canonical}"`), 'Canonical URL missing or incorrect');
assert(html.includes(`property="og:url" content="${canonical}"`), 'Open Graph URL missing or incorrect');
assert(html.includes('content="summary_large_image"'), 'Large Twitter card missing');
for (const match of html.matchAll(/(?:property="og:image"|name="twitter:image") content="([^"]+)"/g)) {
  assert(match[1].startsWith(canonical), 'Social image must use the canonical Pages URL');
  assert(existsSync(join('dist', match[1].slice(canonical.length))), 'Social image missing');
}
const manifest = JSON.parse(readFileSync('dist/site.webmanifest', 'utf8'));
assert.equal(manifest.start_url, './', 'Manifest start URL must respect the project base');
assert.equal(manifest.scope, './', 'Manifest scope must respect the project base');
for (const icon of manifest.icons) assert(existsSync(join('dist', icon.src)), `Manifest icon missing: ${icon.src}`);
function files(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? files(join(directory, entry.name)) : [join(directory, entry.name)]);
}
const localPaths = /(?:[CD]:[\\/]|127\.0\.0\.1|localhost|\.codex|visualizations|\.local-backup)/i;
const secrets = /(?:-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----|gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{40,}|sk-proj-[A-Za-z0-9_-]{30,})/;
for (const file of files('dist')) {
  assert(!/(?:\.env(?:\.|$)|\.(?:map|bak|log)$)/i.test(file), `Private or debug artifact shipped: ${file}`);
  if (!/\.(?:js|css|html|json|webmanifest|svg|xml|txt)$/.test(file)) continue;
  const source = readFileSync(file, 'utf8');
  assert(!localPaths.test(source), `Local development path leaked: ${file}`);
  assert(!secrets.test(source), `Possible credential leaked: ${file}`);
  assert(!/(?<!\d)(?:\+?20|0)1[0125](?:[-\s]?\d){8}(?!\d)/.test(source), `Possible public mobile number found: ${file}`);
  if (file.endsWith('.css')) for (const match of source.matchAll(/url\(["']?(\/my-portfolio\/[^"')]+)["']?\)/g)) {
    assert(existsSync(join('dist', match[1].slice(base.length))), `CSS asset missing: ${match[1]}`);
  }
}
console.log(`Build integrity passed: Pages base, SEO, icons, manifest, CV, ${scrapbookAssets.length} scrapbook assets, ${inventory.length} unique projects, supplied-asset hashes, ${credentialData.length} certificates and thumbnails, and privacy checks.`);
