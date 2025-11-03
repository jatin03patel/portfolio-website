import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const mainContentRef = useRef<HTMLDivElement>(null);

  // Apply theme class on <html>
  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Animate sections after Preloader finishes
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = 'auto';

    const ctx = gsap.context(() => {
      const sections = mainContentRef.current?.querySelectorAll('section');

      sections?.forEach((section) => {
        gsap.fromTo(
          section,
          { 
            y: 80, 
            opacity: 0, 
            rotationX: -10, 
            scale: 0.95,
            transformOrigin: 'center center'
          },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            scale: 1,
            duration: 1.2,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              end: 'bottom 10%',
              toggleActions: 'play reverse play reverse',
            },
          }
        );
      });
    }, mainContentRef);

    return () => ctx.revert();
  }, [isLoading]);

  return (
    <>
      <CustomCursor />

      {isLoading ? (
        <Preloader onLoaded={() => setIsLoading(false)} />
      ) : (
        <div
          className="font-sans bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 
                     transition-colors duration-500 overflow-x-hidden"
        >
          {/* Header */}
          <Header theme={theme} toggleTheme={toggleTheme} />

          {/* Main Sections */}
          <main ref={mainContentRef} style={{ perspective: '1500px' }}>
            <Hero theme={theme} />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
