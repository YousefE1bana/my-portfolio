import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useTheme } from "@/hooks/useTheme";
import { About } from "@/sections/About";
import { Achievements } from "@/sections/Achievements";
import { Contact } from "@/sections/Contact";
import { Education } from "@/sections/Education";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { Snapshot } from "@/sections/Snapshot";
import { Training } from "@/sections/Training";
import { Personal } from "@/sections/Personal";
import { themes } from "@/data/themes";
import { MotionConfig } from "framer-motion";
import { MotionPreset } from "@/lib/motion-context";
import { lazy, Suspense } from "react";
const Scrapbook = lazy(() => import("@/sections/Scrapbook"));
export default function App() {
  const { theme, setTheme } = useTheme();
  return <MotionConfig reducedMotion="user"><MotionPreset.Provider value={themes.find((t) => t.id === theme)!.reveal}>
    <div className="relative min-h-screen">
      <Header theme={theme} onSelectTheme={setTheme} />
      <main id="main" tabIndex={-1}>
        {theme === "after-hours" ? <Suspense fallback={<div className="container-x py-20"><h1>Opening the book…</h1></div>}><Scrapbook /></Suspense> : <>
          <Hero /><Snapshot /><About /><Projects /><Skills /><Achievements /><Training /><Education />
          <Personal theme={theme} onSelectTheme={setTheme} /><Contact />
        </>}
      </main>
      {theme !== "after-hours" && <Footer />}
    </div>
  </MotionPreset.Provider></MotionConfig>;
}
