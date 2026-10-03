import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const WHATSAPP_NUMBER = "919059634555";

const MESSAGE_TEXT = `Hi BlezeX Team 👋

I visited your website and would like to know more about your services.

Name: 
Company: 
Requirement: 

Please contact me.`;

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE_TEXT)}`;

const FLOAT = { duration: 4, ease: "easeInOut", repeat: Infinity } as const;

/**
 * Floating BlezeX mascot that opens WhatsApp. On mobile it sits above the
 * sticky contact bar (~65px tall, rendered in Contact.tsx below md).
 */
const FloatingAssistant = () => {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(false);
  const show = () => setActive(true);
  const hide = () => setActive(false);

  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with BlezeX on WhatsApp"
      className="group fixed right-4 bottom-[calc(env(safe-area-inset-bottom)+5rem)] z-30 block w-[80px] rounded-2xl md:bottom-6 md:right-6 md:w-[110px]"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      whileHover={reduce ? undefined : { scale: 1.06 }}
      whileFocus={reduce ? undefined : { scale: 1.06 }}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      {/* Tooltip (md+ only; link's aria-label is the accessible name) */}
      <AnimatePresence>
        {active && (
          <motion.span
            aria-hidden="true"
            initial={{ opacity: 0, x: 6 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="pointer-events-none absolute right-full top-[38%] mr-2 hidden whitespace-nowrap rounded-full border border-border bg-white px-3.5 py-1.5 font-display text-sm font-semibold text-foreground shadow-[0_6px_20px_-8px_rgba(17,17,17,.25)] md:block"
            style={{ y: "-50%" }}
          >
            Chat With BlezeX
            <span className="absolute -right-[5px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-r border-t border-border bg-white" />
          </motion.span>
        )}
      </AnimatePresence>

      {/* Ground shadow: shrinks/fades as the mascot floats up */}
      <motion.span
        aria-hidden="true"
        className="absolute -bottom-1.5 left-[20%] h-2.5 w-[60%] rounded-full bg-black/25 blur-md"
        animate={reduce ? undefined : { scale: [1, 0.8, 1], opacity: [1, 0.6, 1] }}
        transition={FLOAT}
      />

      <motion.span
        className="relative block"
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={FLOAT}
      >
        <picture>
          <source srcSet="/mascot/blezex-assistant.webp" type="image/webp" />
          <img
            src="/mascot/blezex-assistant.png"
            alt=""
            width={518}
            height={522}
            decoding="async"
            {...{ fetchpriority: "low" }}
            draggable={false}
            className="block h-auto w-full select-none"
          />
        </picture>
      </motion.span>
    </motion.a>
  );
};

export default FloatingAssistant;
