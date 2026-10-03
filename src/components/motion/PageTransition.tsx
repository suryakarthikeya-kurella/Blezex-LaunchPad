import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }: { children: ReactNode }) => {
  const { pathname, hash } = useLocation();
  const reduce = useReducedMotion();
  const hashRef = useRef(hash);
  hashRef.current = hash;
  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => { if (!hashRef.current) window.scrollTo(0, 0); }}
    >
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: reduce ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
export default PageTransition;
