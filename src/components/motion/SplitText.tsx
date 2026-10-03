import { motion, useReducedMotion } from "framer-motion";
import { Fragment } from "react";

type Props = { text: string; as?: "h1" | "h2" | "h3" | "p" | "span"; className?: string; delay?: number };

const SplitText = ({ text, as = "h2", className, delay = 0 }: Props) => {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag className={className} aria-label={text}>
      {text.split(" ").map((w, i) => (
        <Fragment key={i}>
          {i > 0 && " "}
          <span aria-hidden className="inline-block overflow-hidden align-bottom pb-[0.12em]">
            <motion.span
              className="inline-block"
              initial={reduce ? false : { y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: delay + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              {w}
            </motion.span>
          </span>
        </Fragment>
      ))}
    </Tag>
  );
};
export default SplitText;
