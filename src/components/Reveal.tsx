import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useContext, type ElementType, type ReactNode } from "react";
import { stagger, viewportOnce } from "@/lib/motion";
import { MotionPreset } from "@/lib/motion-context";

type Tag = "div" | "section" | "article" | "ul" | "ol" | "li" | "header" | "footer" | "span" | "p" | "h2" | "h3" | "figure";

const motionTags: Record<Tag, ElementType> = {
  div: motion.div, section: motion.section, article: motion.article,
  ul: motion.ul, ol: motion.ol, li: motion.li, header: motion.header,
  footer: motion.footer, span: motion.span, p: motion.p,
  h2: motion.h2, h3: motion.h3, figure: motion.figure,
};

interface BaseProps {
  as?: Tag;
  className?: string;
  children?: ReactNode;
  id?: string;
  "aria-labelledby"?: string;
  "aria-label"?: string;
}

/** Reveals children once when scrolled into view. Respects prefers-reduced-motion. */
export function Reveal({
  as = "div",
  variants,
  delay = 0,
  className,
  children,
  ...rest
}: BaseProps & { variants?: Variants; delay?: number }) {
  const reduce = useReducedMotion();
  const preset = useContext(MotionPreset);
  if (reduce) {
    const Plain = as as ElementType;
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }
  const Comp = motionTags[as];
  return (
    <Comp
      className={className}
      variants={variants ?? preset}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

/** Container that staggers its RevealItem children. */
export function RevealGroup({
  as = "div",
  className,
  children,
  staggerChildren = 0.08,
  delayChildren = 0,
  ...rest
}: BaseProps & { staggerChildren?: number; delayChildren?: number }) {
  const reduce = useReducedMotion();
  if (reduce) {
    const Plain = as as ElementType;
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }
  const Comp = motionTags[as];
  return (
    <Comp
      className={className}
      variants={stagger(staggerChildren, delayChildren)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      {...rest}
    >
      {children}
    </Comp>
  );
}

export function RevealItem({
  as = "div",
  className,
  children,
  variants,
  ...rest
}: BaseProps & { variants?: Variants }) {
  const reduce = useReducedMotion();
  const preset = useContext(MotionPreset);
  if (reduce) {
    const Plain = as as ElementType;
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }
  const Comp = motionTags[as];
  return (
    <Comp className={className} variants={variants ?? preset} {...rest}>
      {children}
    </Comp>
  );
}
