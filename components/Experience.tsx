import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ExperienceItem } from '../types';

gsap.registerPlugin(ScrollTrigger);

const experience: ExperienceItem[] = [
  { 
    year: '2019 - 2020', 
    title: 'SSC (Class 10th)', 
    company: 'Aadesh Vidhyalay, Idar (GSEB)', 
    description: 'Completed Secondary Education with 84.33%. Built foundational knowledge in mathematics and computer science, sparking curiosity for technology.'
  },
  { 
    year: '2021 - 2022', 
    title: 'HSC (Class 12th)', 
    company: 'Aadesh Vidhyalay, Idar (GHSEB)', 
    description: 'Completed Higher Secondary Education with 68.61% under Gujarat Higher Secondary Education Board. Developed a strong interest in programming and problem-solving.'
  },
  { 
    year: 'Jun 2022 - Jun 2026', 
    title: 'Bachelor of Engineering in Computer Engineering', 
    company: 'A. D. Patel Institute of Technology (ADIT), CVMU, Anand, Gujarat', 
    description: 'Currently pursuing B.E. in Computer Engineering with a CGPA of 8.45. Gaining hands-on experience in web development, data structures, algorithms, and emerging technologies like React and GSAP.'
  },
  { 
    year: '2023 - Present', 
    title: 'Personal & Academic Projects', 
    company: 'Self Learning & College Work', 
    description: 'Developing projects using React, Tailwind CSS, and GSAP. Focused on building interactive, responsive, and animated UIs to improve frontend development skills.'
  }
];

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.timeline-item-content');
      const line = timelineRef.current;
      
      if (line) {
        gsap.fromTo(line, 
          { scaleY: 0 }, 
          {
            scaleY: 1, 
            transformOrigin: 'top center',
            duration: items.length * 0.5, 
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top center',
              end: 'bottom bottom',
              scrub: true
            }
          }
        );
      }

      items.forEach((item) => {
        const isRight = (item as HTMLElement).classList.contains('md:order-3');
        gsap.fromTo(item as HTMLElement,
          { xPercent: isRight ? 100 : -100, opacity: 0 },
          {
            xPercent: 0, opacity: 1, duration: 1, ease: 'power3.out',
            scrollTrigger: {
              trigger: item as HTMLElement,
              start: 'top 80%',
              toggleActions: 'play reverse play reverse',
            }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="container mx-auto py-16 sm:py-20 md:py-32 px-4" tabIndex={-1}>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        <span className="text-blue-600 dark:text-sky-400">My Academic Journey</span>
      </h2>

      <div role="list" className="relative max-w-4xl mx-auto">
        <div ref={timelineRef} className="absolute md:left-1/2 left-[2px] top-0 w-[2px] md:w-1 bg-blue-500/30 dark:bg-sky-400/30 h-full md:-ml-0.5"></div>

        {experience.map((item, index) => (
          <div key={index} role="listitem" className="timeline-item mb-12 flex flex-col md:flex-row justify-between items-center w-full">

            <div className={`timeline-item-content bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 rounded-lg shadow-xl w-full md:w-5/12 p-6 mb-6 md:mb-0 ${index % 2 !== 0 ? 'md:order-3' : 'md:order-1'}`}>
              <p className="text-sm text-blue-600 dark:text-sky-400 font-semibold">{item.year}</p>
              <h3 className="mb-3 font-bold text-xl text-gray-900 dark:text-gray-100">{item.title}</h3>
              <p className="mb-2 font-semibold text-gray-800 dark:text-gray-200">{item.company}</p>
              <p className="text-sm leading-snug tracking-wide text-gray-700 dark:text-gray-400">
                {item.description}
              </p>
            </div>
            
            <div className="z-20 flex items-center bg-gray-800 shadow-xl w-6 h-6 md:w-8 md:h-8 rounded-full md:order-2 mb-4 md:mb-0">
              <div className="mx-auto w-4 h-4 bg-blue-500 dark:bg-sky-400 rounded-full"></div>
            </div>

            <div className={`w-5/12 hidden md:block ${index % 2 !== 0 ? 'md:order-1' : 'md:order-3'}`}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
