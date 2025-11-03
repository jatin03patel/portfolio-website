import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface PreloaderProps {
  onLoaded: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onLoaded }) => {
  const [visible, setVisible] = useState(true);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const jetRef = useRef<SVGSVGElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preloader = preloaderRef.current;
    const jet = jetRef.current;
    const trail = trailRef.current;
    const logo = logoRef.current;
    if (!preloader || !jet || !trail || !logo) return;

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        gsap.to(preloader, {
          opacity: 0,
          duration: 0.8,
          onComplete: () => {
            setVisible(false);
            onLoaded();
          },
        });
      },
    });

    // initial state
    gsap.set(jet, { x: "-20vw", y: 50, scale: 0.8, rotate: -10, opacity: 0 });
    gsap.set(trail, { width: 0, opacity: 0.7 });
    gsap.set(logo, { opacity: 0, scale: 0.8, filter: "blur(8px)" });

    // jet entry (whoosh)
    tl.to(jet, { opacity: 1, duration: 0.1 })
      .to(jet, {
        x: "55vw",
        y: 0,
        rotate: 5,
        duration: 1.4,
        ease: "power4.out",
        onUpdate: () => {
          const p = tl.progress();
          gsap.to(trail, {
            width: `${p * 60}vw`,
            opacity: 1 - p / 2,
          });
        },
      })
      // whoosh vibration
      .to(
        jet,
        {
          x: "+=10",
          yoyo: true,
          repeat: 6,
          duration: 0.05,
          ease: "power1.inOut",
        },
        "-=0.8"
      );

    // logo reveal
    tl.to(
      logo,
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0)",
        textShadow: "0 0 25px #00eaff, 0 0 60px #00eaff",
        duration: 0.6,
      },
      "-=0.4"
    );

    // jet exit
    tl.to(jet, {
      x: "120vw",
      y: "-10vh",
      scale: 1.1,
      opacity: 0,
      duration: 0.9,
    });
    tl.to(trail, { opacity: 0, duration: 0.6 }, "-=0.6");

    // logo float + fade
    tl.to(logo, { y: -20, scale: 1.1, duration: 0.5 })
      .to(logo, { opacity: 0, duration: 0.6 });

    return () => tl.kill();
  }, [onLoaded]);

  if (!visible) return null;

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 bg-[#010b15] flex items-center justify-center z-[200] overflow-hidden"
    >
      {/* 🔥 Sonic Trail */}
      <div
        ref={trailRef}
        className="absolute h-[4px] bg-gradient-to-r from-cyan-400 via-sky-300 to-transparent blur-[3px] rounded-full"
        style={{ left: "10vw", top: "50%" }}
      />

      {/* ✈️ Realistic Fighter Jet */}
      <svg
        ref={jetRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="absolute w-16 h-16 text-cyan-300 drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]"
        fill="currentColor"
      >
        <path d="M502.7 9.3c-6.2-6.2-16.4-6.2-22.6 0L312.4 177 213.3 157.6l-70.7-70.7L106 123.5l48.4 48.4 19.4 99.1L9.3 502.7c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l231.7-231.7 99.1 19.4 48.4 48.4 36.6-36.6-70.7-70.7L335 199.6 502.7 31.9c6.2-6.2 6.2-16.4 0-22.6z" />
      </svg>

      {/* 💠 JP Logo */}
      <div
        ref={logoRef}
        className="text-white text-6xl md:text-8xl font-bold font-mono tracking-wider select-none z-10"
      >
        <span className="text-cyan-400">{`<JP/>`}</span>
      </div>

      {/* subtle bg pulse */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent animate-pulse"></div>
    </div>
  );
};

export default Preloader;
