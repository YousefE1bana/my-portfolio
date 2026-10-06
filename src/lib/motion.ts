import type { Transition, Variants } from "framer-motion";

export const EASE: Transition["ease"] = [0.2, 0.8, 0.2, 1];

export const technicalReveal: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: .28, ease: EASE } },
};
export const editorialReveal: Variants = {
  hidden: { opacity: 0, x: -16, y: 8 },
  show: { opacity: 1, x: 0, y: 0, transition: { duration: .65, ease: EASE } },
};

export const viewportOnce = { once: true, margin: "-60px 0px -60px 0px" } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: EASE } },
};

export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});
