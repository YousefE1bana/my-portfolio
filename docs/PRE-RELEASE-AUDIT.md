# Pre-release audit

**Audit date:** October 6, 2026

**Recommendation:** **READY for owner review and the first public push / manual Pages release.**

**Publication boundary:** Nothing was committed, pushed, enabled in Pages or deployed. The local folder is not yet an initialized Git repository. Hosted CI and the deployed site remain untested until publication is authorized.

This was a release audit of the approved implementation. Dark, Light and After Hours retain their existing layouts, visual identities and content structure. No major section or feature was added.

## 1. Repository and implementation audit

Reviewed package manifests and lockfile, Vite base, strict TypeScript settings, ESLint rules, theme persistence, motion variants, dialogs and focus handling, project/credential data, public media, optional maintenance scripts and the Pages workflow.

- React/TypeScript/Vite architecture remains unchanged. After Hours is a lazy JavaScript/CSS import; its self-hosted Caveat font belongs to that chunk.
- TypeScript checks unused locals/parameters; ESLint passes with zero warnings. Existing `clsx` and `tailwind-merge` dependencies have actual callers and were retained. No dependency was added.
- Removed the unreferenced `CaseStudy.tsx`, `Tag.tsx`, `caseStudies.ts`, their obsolete case-study CSS and the unused `cardRise` motion export. The old case-study data also contained stale NetShield response wording. Copies were preserved in the ignored local evidence archive before removal.
- All 29 scrapbook exports remain referenced. The older shared night-room image is still used by the professional personal section and was retained.
- Package metadata now identifies `yousef-elbana-portfolio`, version `1.0.0-rc.1`, with Node 24 specified in `engines` and `.node-version`. `start.bat` uses `npm ci`.

## 2. Content truth and exact project inventory

Cross-checked current public GitHub repository metadata, available READMEs/source structure, the supplied project media, the current CV and all nine credential originals. [PROJECT-SOURCES.json](PROJECT-SOURCES.json) records the evidence and claim boundaries.

| Implemented project | Public source | Status / important boundary |
| --- | --- | --- |
| NetShield — SOC Attack & Detection Home Lab | [Net-Shield](https://github.com/YousefE1bana/Net-Shield) | `2.0.0rc1`; local/lab security console, observe-only default and bounded manual nftables response. Its broader isolated SOC lab is the same project. |
| E-Banking Security System — NeuralGuard | No public repository supplied | University prototype; supplied screenshot and CV/award evidence. Reported dataset evaluation is not a production performance guarantee. |
| SHIFAA | [shifaa-project](https://github.com/YousefE1bana/shifaa-project) | In development; six-person team leadership is CV-backed. The displayed architecture is explicitly proposed. No production demo is claimed. |
| Solar Odyssey | [solar-odyssey](https://github.com/YousefE1bana/solar-odyssey) | `v1.1.0` Windows release; C++17/OpenGL 4.5 educational, stylized 31-body exploration sandbox. |
| Al-Tayyibat | [al-tayyibat](https://github.com/YousefE1bana/al-tayyibat) | `v1.0.0`; Arabic RTL static food-reference PWA, 385 entries. [Actual live site](https://yousefe1bana.github.io/al-tayyibat/) verified. |
| MEC — MSI EC Control Center | [msi-ec-tui](https://github.com/YousefE1bana/msi-ec-tui) | `v1.0.1`; Rust Linux tool for supported MSI embedded-controller hardware. Capability/device restrictions remain explicit. |
| This portfolio | [my-portfolio](https://github.com/YousefE1bana/my-portfolio) | Implemented locally; release candidate prepared for Pages. The public repository was empty at audit time. |

The profile contains **seven public repositories**, including the empty/reserved [Akher-Kheit](https://github.com/YousefE1bana/Akher-Kheit). The site contains **seven implemented projects**, including the non-public E-Banking prototype. Akher-Kheit does not inflate that count. Six implemented projects have visible public GitHub actions. No E-Banking repository or extra live demo was invented.

NetShield has one canonical data record and one project count contribution. The SOC lab is its subtitle/context, not an independent project. Gallery totals and workshop filtering use that shared inventory.

### Corrections made

- Replaced stale portfolio repository-empty wording in public project results with factual release-candidate wording. The evidence snapshot still records the repository's actual empty state at audit time.
- Corrected garbled UTF-8 punctuation in project and credential labels and added a build guard against recurrence.
- Preserved the distinctions between course completion and professional certification. The 50.5-hour Udemy course is eJPTv2-aligned, not an INE-issued eJPT credential.
- Palo Alto / Innovera training remains completed. Both NSF certificates support the same 40-hour training; the hours are not added twice. Six training records support the displayed 315h+ total.
- No unsupported project, employment, production readiness or learning achievement was added.

## 3. Runtime assets and cleanup

- Real supplied NetShield, Solar Odyssey, Al-Tayyibat and E-Banking screenshots remain the primary project media. The four full-size and four smaller WebP exports total approximately **351 kB**.
- SHIFAA retains its actual architecture artifact, framed as a proposed engineering document; its content was not altered.
- Every supplied runtime artifact and retained logo master matches its recorded SHA-256 hash. All runtime paths and filename casing were checked against actual build files.
- The three club WebPs have real alpha channels spanning 0–255, transparent outer backgrounds and antialiased edge pixels. Dimensions/proportions remain 240×321 for Real Madrid, 240×290 for Al Ahly and 240×283 for Arsenal. Desktop and mobile screenshots confirm clean marks on the existing football note. The intentional mini-card backgrounds are separate from the transparent logos. No marks were redrawn or replaced.
- Moved the two lossless logo export masters out of `public/` to `assets/source/clubs/`, removing approximately **531 kB** of unnecessary deployed originals while preserving the source exports.
- Added intrinsic gallery thumbnail dimensions from the actual nine image files, including the taller Innovera artifact. Main page images have width/height attributes; below-fold media uses lazy loading and asynchronous decoding where appropriate.
- Runtime image metadata inspection found no EXIF/XMP payloads. Credential originals remain viewable and downloadable.
- Root-level raw intake files, previous internal working reports, raw link evidence and private generation briefs were preserved in the ignored local archive. The publication set now contains source, runtime assets, useful provenance and release documentation rather than intermediate working material.

## 4. Credentials and CV

**Nine original certificate/award artifacts and nine thumbnails** match the data. Counts are derived from the credential structure. All nine previews opened successfully at 360px, with labelled dialogs and close controls. Escape closed each preview and restored focus to its gallery trigger. Tab/Shift+Tab containment and the full-size action were tested.

The Innovera certificate preserves the printed facts: Yousef Osama Abdelhameed, Palo Alto Network Security Fundamentals, 40 training hours, signed Maha Elshibiny, Head of Innovera Academy. No printed date or identifier was invented. The other NSF certificate records September 8, 2026 and validation `m8PPpCl5P7`.

The public CV is **two pages**. Both pages were rendered and visually inspected at full page scale: no clipping, replacement glyphs or broken characters found. Text extraction confirms no public phone number and one combined NetShield/SOC project heading. Training completion matches the certificate evidence. Only the portfolio's stale release wording was refreshed; the CV's structure and other professional facts were preserved. The previous PDF remains in the ignored archive.

## 5. Visual review

Reviewed the entire professional experience in Dark and Light independently, including hero, about, projects, skills, training, awards, education, personal content, Spotify and contact. Reviewed After Hours hero, origin/work spread, project files/drawer, life, football, gaming, stories, music, fuel, professional notebook and final contact scene.

- **Dark:** approved technical composition, real project previews, restrained mint hierarchy and clear controls retained.
- **Light:** approved white/cool-neutral editorial hierarchy, blue accents, asymmetric project presentation, borders and shadows retained.
- **After Hours:** approved night-room hero, handmade paper, taped photos, rotations, illustrations, authentic project files and cinematic ending retained. The football note stays in its original location.
- Targeted polish consists of readable corrected punctuation, accurate thumbnail sizing and explicit After Hours email-copy success/failure feedback with a reset timer. There was no broad layout or theme redesign.
- Screenshot review found no persistent clipping, text collisions, unintended boxed logo backgrounds or defect requiring a redesign. The three experiences remain visibly distinct.

## 6. Responsive results

Production preview was tested at every requested width:

| Width | Dark | Light | After Hours |
| --- | --- | --- | --- |
| 1920 | Pass | Pass | Pass |
| 1440 | Pass | Pass | Pass |
| 1280 | Pass | Pass | Pass |
| 1024 | Pass | Pass | Pass |
| 768 | Pass | Pass | Pass |
| 640 | Pass | Pass | Pass |
| 430 | Pass | Pass | Pass |
| 390 | Pass | Pass | Pass |
| 360 | Pass | Pass | Pass |

“Pass” means no document-level horizontal overflow in the inspected settled layout, with responsive navigation and content usable at that width. Checked all 27 theme/width combinations with reduced motion and again with normal motion enabled. Additional checks covered open project records/drawers, the football disclosure and Spotify. The intentionally horizontal gaming/story rails scroll inside their own containers.

Mobile checks covered long project names, original credential dialogs, Spotify, copy controls, contact and the scrapbook's layered layouts. Dialog width at 360px was 322px, within the available viewport. Tablet and ultrawide paper compositions were inspected. Testing used the Chromium-based in-app browser; Safari, Firefox and physical-device testing were not performed.

## 7. Accessibility and interaction

- One main landmark and one H1 per active experience; labelled navigation, skip link, meaningful section headings, image alternatives and labelled controls inspected.
- Actual keyboard input tested skip-to-main, theme controls, project disclosures/drawers, mobile menus and certificate dialogs. Visible focus was confirmed in professional and scrapbook controls. Escape behavior, focus containment and focus restoration worked.
- Dark/Light project filtering returned the correct smaller-project record; additional records remain part of the same project system.
- Discord copied **exactly `usef.elbana`** in all three themes. Accessible status feedback is present. Email copied the intended address; the After Hours failure state now offers explicit feedback and a manual-copy instruction. Test clipboard contents were restored.
- The Spotify iframe is titled `Yousef’s Spotify playlist — My Playlist #1`, mounted only when opened, and has an obvious external action/fallback. The actual playlist and track list loaded; playback was not started.
- All inspected new-tab actions have `noopener noreferrer`. Runtime checks found no unlabelled buttons or completed-but-broken images in the active themes.
- Theme persistence and reload/direct anchors were tested in all modes, including the lazily mounted After Hours `#gaming` anchor and professional `#projects`. Sticky navigation did not obscure their headings.
- Live reduced-motion changes suppress scene parallax, rotating/decorative motion and hover transitions. Content remains visible and disclosures usable. Normal motion was tested separately; layout does not require animation.
- Sampled text/background contrast: Dark muted text ≥8.01:1; Light muted text ≥5.38:1; After Hours muted text ≥8.95:1; scrapbook ink/paper approximately 10.93:1. These are token samples, not an exhaustive audit of every photographic background.

No full WCAG certification or screen-reader certification is claimed. Actual assistive-technology testing was not performed.

## 8. Performance observations

Final Vite output, decimal kB:

| Asset | Uncompressed | Gzip |
| --- | ---: | ---: |
| Main JavaScript | 423.87 kB | 137.08 kB |
| Main CSS | 56.70 kB | 12.03 kB |
| Lazy scrapbook JavaScript | 30.02 kB | 10.09 kB |
| Lazy scrapbook CSS | 32.59 kB | 7.98 kB |
| Self-hosted Caveat font | 74.93 kB | — |

Cold Dark and Light initial loads each made **11 observed requests**. Neither requested the scrapbook chunk, scrapbook imagery, Caveat font or a Spotify iframe. Professional hero imagery loaded as intended. The on-demand Spotify player introduces third-party requests only after opening it; originals for credentials are loaded when previewed, with thumbnails in the gallery.

The public directory is approximately **7.47 MB** and the complete build approximately **8.09 MB**; this is the whole site's asset set, not the initial transfer. The 29 optimized scrapbook images total approximately **3.17 MB**. Removing unused case-study CSS reduced main CSS by approximately 2.17 kB compared with the initial audited build. The two README WebPs total approximately 496 kB and are outside `dist`.

No Lighthouse score, Core Web Vitals field result or hosted load-time result was measured. Existing Google Fonts remain external, with preconnect and `display=swap`; no third-party analytics script was added.

## 9. SEO, social and browser assets

- Production title, description, author, robots, canonical URL, Open Graph and Twitter large-card metadata are present.
- Canonical and social URLs use **`https://yousefe1bana.github.io/my-portfolio/`**, including the final project path; no localhost value ships.
- Added a readable original **1200×630** YE / Cybersecurity Engineering social preview at `public/images/social/portfolio-preview.png`.
- Added matching SVG/32px browser icons, a 180px Apple touch icon and 192/512px manifest icons. No unrelated brand was introduced.
- Manifest uses relative start URL/scope, `display: browser` and the site's existing colors. No service worker or install-focused PWA behavior was added.
- Added a single-page sitemap and a project-scoped robots file. A robots file beneath a GitHub Pages project path does not control the origin-wide crawler policy; canonical/robots metadata and the sitemap remain the useful project-level signals.
- Built metadata, icon, manifest and social-image URLs were checked beneath `/my-portfolio/` and resolve in the local production preview.

## 10. Security and privacy sanity checks

Inspected source, publication documents and production text files for local filesystem paths, local browser addresses, secret/key patterns, phone patterns and debug artifacts. Extracted the CV text separately. No matching phone number, embedded credential, private path or debug artifact was found in shipped runtime content. Local path/preview/archive strings remaining in maintenance scripts are intentional development checks and are not bundled.

No `.env`, source map, backup, private prompt or QA log is included in `dist`. Existing static React content does not use dynamic HTML injection. New-tab link attributes were verified. No contact submission backend, tracking script or extra public identifier was introduced.

`npm audit` reported **zero known vulnerabilities** in the installed dependency tree. This does not establish comprehensive application security.

## 11. GitHub Pages and workflow readiness

- Vite `base` remains `/my-portfolio/`; shared asset URLs respect `import.meta.env.BASE_URL`.
- CV, originals/thumbnails, supplied project screenshots, transparent logos, generated artwork, fonts, browser icons and social assets exist in the build and resolve beneath the project base.
- Anchor-only navigation needs no extra router or 404 redirect workaround.
- `.github/workflows/pages.yml` remains **manual dispatch only**, with no push-triggered publication. Its pinned action revisions were checked against their official repositories.
- Node 24, deterministic `npm ci`, a single `npm run verify` build, `dist` artifact upload, dependency caching, Pages environment and minimal build/deployment permissions were reviewed. `dist` remains ignored and is not intended for a branch upload.
- The workflow has not run on GitHub. Pages has not been enabled. Production-host permissions, first CI execution, cache headers and final hosted URLs can only be verified after explicit release approval.

## 12. README, licensing and publication hygiene

Rewrote the README with the pending production URL, two optimized production previews, three-theme identities, factual highlights, Node 24 development/build commands, manual Pages steps, concise structure, contact links and asset provenance. The public root now contains the expected project/configuration files rather than raw intake images.

Expanded `.gitignore` for environment files, local agent/workbench artifacts, build/cache/test output and the private archive. Source media needed by CI, runtime assets, the lockfile, workflow and curated documentation remain included.

[ASSETS.md](ASSETS.md) records supplied project evidence, original generated scenes, club marks, fonts, icons and Spotify. The Caveat license remains available. No blanket open-source license was added to personal content or assets. The owner may choose a code-only license later; that decision is not required for the current unlicensed publication set.

## 13. Checks executed

| Check | Result |
| --- | --- |
| Fresh `npm ci` | Passed; installed from the lockfile |
| `npm run typecheck` | Passed |
| `npm run lint` | Passed; zero warnings |
| `npm run build` | Passed |
| `npm run verify` | Passed; includes the three checks above and build integrity |
| Build integrity | Passed: base, SEO, manifest/icons, CV, 29 scrapbook assets, seven unique projects, supplied hashes, nine originals/thumbnails and privacy guards |
| `npm audit` | Zero known vulnerabilities |
| `npm run check:links` | All required repository/demo URLs and all 76 built files passed; external verification limitations listed below |
| Production browser console | No captured application errors or warnings during the final review |
| Responsive / normal and reduced motion | All requested widths passed the settled-layout checks |
| Keyboard, dialogs, copy controls, anchors and persistence | Passed inspected interactions |
| Two-page CV rendering / text extraction | Passed |
| Club transparency / proportions / screenshot inspection | Passed |

There is no dedicated unit-test or end-to-end test suite in this repository. The meaningful automated release checks are strict typing, lint, build and content/asset integrity, supplemented by the production browser audit.

## 14. External link results and unresolved limitations

- Six implemented public repository URLs, the reserved repository, GitHub profile and Al-Tayyibat demo returned HTTP 200.
- Spotify playlist and official embed returned HTTP 200 and loaded the actual playlist in-browser.
- Palo Alto's issuer verification page returned HTTP 200. The printed validation code is preserved; an issuer form submission was not performed.
- TryHackMe rate-limited the automated request (429); its actual `ELbanna` profile loaded correctly in the browser.
- LinkedIn rejected the automated request (999) and presented an authentication wall in the browser. The supplied profile URL was retained; the full profile could not be independently inspected without signing in.
- **The printed Udemy `ude.my` verification URL timed out in both HTTP and browser checks.** It remains unchanged because no verified replacement was established. The original certificate/full-size action works. The owner can confirm the issuer link from an authenticated Udemy account if desired. This external verification limitation does not block the site's local build or publication.
- Email address/link correctness and copying were tested; email delivery was not tested. Discord copying was tested; no Discord message was sent.

No local release-blocking defect remains. External issuer availability, hosted CI/Pages acceptance and cross-browser/device coverage are limitations, not invented passes.

## 15. Final screenshots

Curated images suitable for the public README:

- [Three experiences](images/three-experiences.webp) — production desktop hero comparison.
- [After Hours hero](images/after-hours-hero.webp) — production desktop view.

Private evidence retains full desktop section captures, 390px mobile captures, 360px certificate/player captures, football disclosures, both CV pages, request traces and width measurements. The final valid browser captures use `*-production-desktop.png` / `*-production-mobile.png`; intermediate capture-framing experiments are excluded from the publication set.

## 16. Changed-file record and final gate

Modified: `index.html`, `.gitignore`, `package.json`, `package-lock.json`, `start.bat`, `README.md`; `src/data/portfolio.ts`, `src/data/projectInventory.json`, `src/data/credentials.json`; `src/sections/Training.tsx`, `src/components/scrapbook/Notebook.tsx`, `src/components/scrapbook/RoadAhead.tsx`; `src/lib/motion.ts`, `src/styles/experience.css`; `scripts/check-build.mjs`, `scripts/check-links.mjs`, `scripts/optimize-supplied.py`, `scripts/update-public-cv.py`; public CV and asset/source manifests.

Added: `.node-version`, browser icons, social preview, manifest, sitemap/robots, `assets/source/clubs/` export masters, `docs/ASSETS.md`, this report and the two README previews. Removed obsolete source/CSS and relocated raw intake/internal working evidence only after preserving copies privately.

**Go:** approve this audit, then authorize repository initialization, deliberate staging/first commit and first push. Separately authorize GitHub Actions as the Pages source and the manual workflow run. After deployment, check the hosted root, social image, CV, credential originals and all three themes before changing the README from “deployment pending.”

**Current stop:** local release preparation is complete. No publication action was taken.
