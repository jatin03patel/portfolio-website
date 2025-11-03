import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { EmailIcon, GithubIcon, InstagramIcon, LinkedinIcon } from './icons';
import Typewriter from './Typewriter';
import InteractiveCube from './InteractiveCube';

gsap.registerPlugin(ScrollToPlugin);

interface HeroProps {
  theme: string;
}

const Hero: React.FC<HeroProps> = ({ theme }) => {
  const heroRef = useRef<HTMLElement>(null);
  const [isLoaded, setIsLoaded] = useState(false); // 🔥 Added: loading state

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1.5,
      scrollTo: '#contact',
      ease: 'power3.inOut',
    });
  };

  useEffect(() => {
    // Small delay before showing content (like a preloader fade)
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoaded) return; // wait until loaded

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.from('.hero-3d-object', {
        scale: 0,
        rotationY: -270,
        opacity: 0,
        duration: 1.4,
        ease: 'power3.out',
      })
        .from('.hero-dev-text', { opacity: 0, x: 20 }, '-=1.1')
        .from('.hero-greeting', { y: -30, opacity: 0, duration: 0.8 }, '-=1.2')
        .from(
          '.hero-name-char',
          {
            y: 30,
            opacity: 0,
            skewY: 10,
            stagger: 0.05,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.6'
        )
        .from('.name-underline', { width: 0, duration: 1, ease: 'power2.out' }, '-=0.5')
        .from('.hero-subtitle-container', { opacity: 0, y: 20, duration: 0.8 }, '>-0.5')
        .from('.hero-socials a', { y: 20, opacity: 0, stagger: 0.1, duration: 0.5 }, '<')
        .from('.hero-cta', { scale: 0, opacity: 0, duration: 0.8, ease: 'back.out(1.7)' }, '<');
    }, heroRef);

    return () => ctx.revert();
  }, [isLoaded]);

  const name = 'Jatin Patel'.split('');

  return (
    <section
      ref={heroRef}
      id="home"
      className={`min-h-screen flex items-center relative overflow-hidden px-4 py-24 md:py-0 transition-opacity duration-700 ${
        isLoaded ? 'opacity-100' : 'opacity-0' // 🔥 Fade-in effect on load
      }`}
      tabIndex={-1}
    >
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left Side */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="hero-greeting text-lg md:text-xl font-mono text-blue-600 dark:text-sky-400 mb-2">
              Hi, my name is
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              {name.map((char, index) => (
                <span key={index} className="hero-name-char inline-block">
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h1>
            <div className="name-underline h-1.5 w-48 mt-4 bg-blue-600 dark:bg-sky-400 rounded-full"></div>

            <div className="hero-subtitle-container mt-8">
              <Typewriter
                texts={[
                  'I create aesthetic and modern apps.',
                  'A passionate Frontend Developer.',
                  "Let's build something amazing.",
                ]}
              />
            </div>

            <div className="hero-socials flex items-center space-x-6 mt-8">
              <a
                href="mailto:jatin.patel@example.com"
                aria-label="Email"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-sky-400 transition-transform duration-300 hover:scale-125"
                data-cursor-hover
              >
                <EmailIcon className="w-7 h-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/jatin-patel-320a5831a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-sky-400 transition-transform duration-300 hover:scale-125"
                data-cursor-hover
              >
                <LinkedinIcon className="w-7 h-7" />
              </a>
              <a
                href="https://github.com/jatin03patel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-sky-400 transition-transform duration-300 hover:scale-125"
                data-cursor-hover
              >
                <GithubIcon className="w-7 h-7" />
              </a>
              <a
                href="https://www.instagram.com/jatinn_.003/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-sky-400 transition-transform duration-300 hover:scale-125"
                data-cursor-hover
              >
                <InstagramIcon className="w-7 h-7" />
              </a>
            </div>

            <div className="mt-12 hero-cta">
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="py-3 px-8 border-2 border-gray-800 dark:border-gray-200 rounded-lg font-mono text-lg tracking-wide transition-all duration-300 hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black hover:shadow-lg"
                data-cursor-hover
              >
                Let's Talk
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 relative flex justify-center items-center">
            <div className="hero-3d-object">
              <InteractiveCube />
            </div>
            <div
              className="hero-dev-text absolute top-1/2 -right-4 md:-right-9 text-5xl md:text-7xl font-black text-gray-200 dark:text-gray-800 opacity-80"
              style={{ writingMode: 'vertical-rl' }}
            >
              {/* Optional vertical text if needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
