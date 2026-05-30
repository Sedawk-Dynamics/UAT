"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export default function FloatingButtons() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with UAT on WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_18px_50px_rgba(27,67,196,0.18)] transition-transform hover:scale-105"
      >
        <MessageCircle className="size-7" />
        <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] motion-safe:animate-ping2" />
      </a>

      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-5 right-[5.5rem] z-50 grid size-12 place-items-center rounded-full bg-blue text-white shadow-[0_18px_50px_rgba(27,67,196,0.18)] transition-colors hover:bg-blue-deep"
          >
            <ArrowUp className="size-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
