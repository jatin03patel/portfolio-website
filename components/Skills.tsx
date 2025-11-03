import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Skill } from "../types";
import {
  ReactIcon,
  NodeIcon,
  MongoIcon,
  GithubIcon,
  HtmlIcon,
  CssIcon,
  JsIcon,
  ExpressIcon,
  SqlIcon,
} from "./icons";

gsap.registerPlugin(ScrollTrigger);

const skills: Skill[] = [
  { name: "HTML", level: 95, Icon: HtmlIcon },
  { name: "CSS", level: 90, Icon: CssIcon },
  { name: "JavaScript", level: 92, Icon: JsIcon },
  { name: "React", level: 94, Icon: ReactIcon },
  { name: "Node.js", level: 88, Icon: NodeIcon },
  { name: "Express.js", level: 85, Icon: ExpressIcon },
  { name: "MongoDB", level: 86, Icon: MongoIcon },
  { name: "SQL", level: 80, Icon: SqlIcon },
  { name: "GitHub", level: 90, Icon: GithubIcon },
];

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Scroll animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-card", {
        opacity: 0,
        y: 60,
        z: -100,
        scale: 0.9,
        stagger: 0.1,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Hover animations
  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".skill-card");
    cards.forEach((card) => {
      const glow = card.querySelector(".card-glow") as HTMLElement;

      const handleCardMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateY = gsap.utils.mapRange(0, rect.width, -15, 15, x);
        const rotateX = gsap.utils.mapRange(0, rect.height, 15, -15, y);

        gsap.to(card, {
          rotationX: rotateX,
          rotationY: rotateY,
          x: (x - rect.width / 2) / 10,
          y: (y - rect.height / 2) / 10,
          duration: 0.6,
          ease: "power3.out",
        });

        card.style.setProperty("--mask-x", `${x}px`);
        card.style.setProperty("--mask-y", `${y}px`);
      };

      const handleCardEnter = () => {
        gsap.to(card, {
          z: 40,
          scale: 1.05,
          borderColor: "rgba(0, 200, 255, 0.6)",
          boxShadow: "0 0 25px rgba(0, 200, 255, 0.4)",
          duration: 0.4,
          ease: "power3.out",
        });
        gsap.to(glow, {
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
        });
      };

      const handleCardLeave = () => {
        gsap.to(card, {
          rotationX: 0,
          rotationY: 0,
          x: 0,
          y: 0,
          z: 0,
          scale: 1,
          borderColor: "rgba(255,255,255,0.1)",
          boxShadow: "0 0 0 rgba(0, 200, 255, 0)",
          duration: 0.6,
          ease: "elastic.out(1, 0.5)",
        });
        gsap.to(glow, {
          opacity: 0,
          duration: 0.6,
          ease: "power3.in",
        });
      };

      card.addEventListener("mousemove", handleCardMove);
      card.addEventListener("mouseenter", handleCardEnter);
      card.addEventListener("mouseleave", handleCardLeave);

      return () => {
        card.removeEventListener("mousemove", handleCardMove);
        card.removeEventListener("mouseenter", handleCardEnter);
        card.removeEventListener("mouseleave", handleCardLeave);
      };
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative container mx-auto py-20 md:py-32 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
      style={{ perspective: "1200px" }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        <span className="text-sky-400">Technical Skills</span>
      </h2>

      <div ref={gridRef} className="relative max-w-2xl mx-auto">
        <div className="grid grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="skill-card relative aspect-square bg-white/5 dark:bg-black/20 backdrop-blur-lg rounded-xl border border-white/10 flex flex-col items-center justify-center gap-2 text-center p-2 overflow-hidden transition-transform duration-300"
              style={
                {
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                  "--mask-x": "50%",
                  "--mask-y": "50%",
                } as React.CSSProperties
              }
            >
              {/* Glow Effect */}
              <div
                className="card-glow absolute inset-0 bg-sky-400/40 opacity-0"
                style={{
                  maskImage:
                    "radial-gradient(150px at var(--mask-x) var(--mask-y), white, transparent)",
                  WebkitMaskImage:
                    "radial-gradient(150px at var(--mask-x) var(--mask-y), white, transparent)",
                }}
              />

              {/* Icon */}
              <div className="w-1/3 h-1/3 max-w-12 max-h-12 text-sky-400 relative z-10">
                <skill.Icon className="w-full h-full" />
              </div>

              {/* Name */}
              <p className="font-mono text-xs md:text-sm relative z-10 text-sky-100">
                {skill.name}
              </p>

              {/* Reflection */}
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-sky-400/10 to-transparent blur-sm pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
