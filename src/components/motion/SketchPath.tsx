import { motion, useReducedMotion } from "framer-motion";

type Props = { d: string; className?: string; delay?: number; duration?: number; strokeWidth?: number };

const SketchPath = ({ d, className, delay = 0, duration = 1.4, strokeWidth = 1.75 }: Props) => {
  const reduce = useReducedMotion();
  return (
    <motion.path
      d={d}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={reduce ? false : { pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: "easeInOut" }}
    />
  );
};
export default SketchPath;
