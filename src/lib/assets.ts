/** Public files follow Vite's base for GitHub Pages project sites. */
export function assetUrl(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}
