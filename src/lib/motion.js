// ─── Shared Framer Motion easing + variant library ───────────────────────────
// Import from here in every component. Never define inline.

export const ease = {
  expo:  [0.16, 1, 0.3, 1],   // snappy premium entrance
  quart: [0.25, 1, 0.5, 1],   // smooth fades
  back:  [0.34, 1.56, 0.64, 1], // gentle overshoot (badge pop, button)
  circ:  [0, 0.55, 0.45, 1],  // hover lifts
};

export const fadeUp = (delay = 0, y = 24) => ({
  hidden:  { opacity: 0, y },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: ease.expo, delay } },
});

export const fadeIn = (delay = 0) => ({
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: ease.quart, delay } },
});

export const scalePop = (delay = 0) => ({
  hidden:  { opacity: 0, scale: 0.82 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: ease.back, delay } },
});

export const slideLeft = (delay = 0) => ({
  hidden:  { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: ease.expo, delay } },
});

export const slideRight = (delay = 0) => ({
  hidden:  { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: ease.expo, delay } },
});

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0.1) => ({
  hidden:  {},
  visible: { transition: { staggerChildren, delayChildren } },
});
