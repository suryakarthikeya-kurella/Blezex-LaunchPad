import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, type ReactNode } from "react";
import useFinePointer from "@/hooks/useFinePointer";

type Props = { children: ReactNode; depth?: number; delay?: number; className?: string };

const FloatCard = ({ children, depth = 20, delay = 0, className }: Props) => {
  const reduce = useReducedMotion();
  const fine = useFinePointer();
  const px = useSpring(useMotionValue(0), { stiffness: 80, damping: 20 });
  const py = useSpring(useMotionValue(0), { stiffness: 80, damping: 20 });
  useEffect(() => {
    if (!fine || reduce) return;
    const move = (e: MouseEvent) => {
      px.set((e.clientX / window.innerWidth - 0.5) * depth);
      py.set((e.clientY / window.innerHeight - 0.5) * depth);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [fine, reduce, depth, px, py]);
  return (
    <motion.div className={className} style={{ x: px, y: py }}>
      <motion.div
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
export default FloatCard;
