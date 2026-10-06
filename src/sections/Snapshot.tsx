import { snapshot } from "@/data/portfolio";
export function Snapshot() {
  return <section aria-label="Professional snapshot" className="snapshot-section"><div className="container-x"><ul className="snapshot-grid">
    {snapshot.map((item) => <li key={item.id}><strong>{item.value}</strong><span>{item.label}</span><p>{item.detail}</p></li>)}
  </ul></div></section>;
}
