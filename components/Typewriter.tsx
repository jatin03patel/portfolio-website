import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

interface TypewriterProps {
  texts: string[];
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ texts, className }) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const textEl = textRef.current;
    const cursorEl = cursorRef.current;
    if (!textEl || !cursorEl || texts.length === 0) return;

    // Set min-height to prevent layout shifts
    const container = textEl.parentElement;
    if (container) {
      container.style.minHeight = `${container.offsetHeight}px`;
    }

    const masterTl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    texts.forEach((text) => {
      masterTl
        .to(textEl, {
          duration: Math.max(1.5, text.length * 0.08), // Typing speed
          text,
          ease: "none",
        })
        .to(
          textEl,
          {
            duration: Math.max(1, text.length * 0.05), // Deleting speed
            text: "",
            ease: "none",
          },
          "+=1.5" // pause before delete
        );
    });

    const cursorTl = gsap.to(cursorEl, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.6,
      ease: "power2.inOut",
    });

    return () => {
      masterTl.kill();
      cursorTl.kill();
    };
  }, [texts]);

  return (
    <div
      className={`font-mono text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 flex items-center justify-center gap-1 ${className || ""
        }`}
    >
      <span
        ref={textRef}
        className="whitespace-nowrap tracking-wide"
        aria-live="polite"
      ></span>
      <span
        ref={cursorRef}
        className="inline-block w-[2px] h-6 sm:h-7 md:h-8 bg-current animate-pulse"
      ></span>
    </div>
  );
};

export default Typewriter;
