import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;
    if (window.innerWidth < 768) return; // 👈 disables cursor on mobile

    if (!cursorDot || !cursorOutline) return;
    if (window.innerWidth < 768) return;


    let isMagneticActive = false;

    // Use GSAP's quickSetter for smoother animations
    const xTo = gsap.quickTo(cursorOutline, "x", { duration: 0.6, ease: "power3.out" });
    const yTo = gsap.quickTo(cursorOutline, "y", { duration: 0.6, ease: "power3.out" });
    const xDotTo = gsap.quickTo(cursorDot, "x", { duration: 0.2, ease: "power3.out" });
    const yDotTo = gsap.quickTo(cursorDot, "y", { duration: 0.2, ease: "power3.out" });

    // Standard cursor movement
    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      xDotTo(clientX);
      yDotTo(clientY);
      // Only move the outline if not snapped to an element
      if (!isMagneticActive) {
        xTo(clientX);
        yTo(clientY);
      }
    };
    window.addEventListener('mousemove', moveCursor);

    // --- Enhanced Magnetic & Hover Effects ---
    const interactiveElements = document.querySelectorAll<HTMLElement>('a, button, [data-cursor-hover]');

    const handleMouseEnter = (e: MouseEvent) => {
        isMagneticActive = true;
        const el = e.currentTarget as HTMLElement;
        const rect = el.getBoundingClientRect();
        
        const isDarkMode = document.documentElement.classList.contains('dark');

        // Animate cursor to snap and morph around the element
        gsap.to(cursorOutline, {
            duration: 0.5,
            ease: 'power3.out',
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
            width: rect.width * 1.3,
            height: rect.height * 1.3,
            borderRadius: '15px',
            backgroundColor: isDarkMode ? 'rgba(56, 189, 248, 0.2)' : 'rgba(59, 130, 246, 0.2)',
        });
        gsap.to(cursorDot, { scale: 0, duration: 0.3 });
    };

    const handleMouseMove = (e: MouseEvent) => {
        const el = e.currentTarget as HTMLElement;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Move the element towards the cursor
        gsap.to(el, { 
            x: x * 0.4, 
            y: y * 0.4, 
            duration: 1, 
            ease: 'power4.out' 
        });
        
        // Move the snapped cursor outline along for a wobble effect
        gsap.to(cursorOutline, {
            x: (rect.left + rect.width / 2) + x * 0.2,
            y: (rect.top + rect.height / 2) + y * 0.2,
            duration: 1,
            ease: 'power4.out'
        });
    };

    const handleMouseLeave = (e: MouseEvent) => {
        isMagneticActive = false;
        const el = e.currentTarget as HTMLElement;

        // Animate element back to its original position
        gsap.to(el, { 
            x: 0, 
            y: 0, 
            duration: 1, 
            ease: 'elastic.out(1, 0.4)' 
        });

        // Animate cursor back to its default circular state
        gsap.to(cursorOutline, { 
            duration: 0.6, 
            ease: 'power3.out', 
            width: 40,
            height: 40,
            borderRadius: '50%',
            backgroundColor: 'rgba(59, 130, 246, 0)',
        });
        gsap.to(cursorDot, { scale: 1, duration: 0.3 });
        // The main moveCursor function will now resume positioning the outline
    };
    
    // Attach listeners to all interactive elements
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
        el.addEventListener('mousemove', handleMouseMove);
    });

    // Cleanup function
    return () => {
        window.removeEventListener('mousemove', moveCursor);
        interactiveElements.forEach(el => {
            el.removeEventListener('mouseenter', handleMouseEnter);
            el.removeEventListener('mouseleave', handleMouseLeave);
            el.removeEventListener('mousemove', handleMouseMove);
        });
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorDotRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-blue-500 dark:bg-sky-400 rounded-full pointer-events-none z-[101] transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
      ></div>
      <div 
        ref={cursorOutlineRef} 
        className="fixed top-0 left-0 w-10 h-10 border-2 border-blue-500 dark:border-sky-400 rounded-full pointer-events-none z-[101] transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
      ></div>
    </>
  );
};

export default CustomCursor;