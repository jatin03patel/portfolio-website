import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SunIcon, MoonIcon, LogoIcon, MenuIcon, CloseIcon } from "./icons";

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isMenuOpen) {
      body.style.overflow = "hidden";
      gsap.to(mobileMenuRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.fromTo(
        ".mobile-nav-link",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          delay: 0.3,
          duration: 0.5,
          ease: "power3.out",
        }
      );
    } else {
      body.style.overflow = "auto";
      gsap.to(mobileMenuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isMenuOpen]);

  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close menu on link click
    const targetEl = document.querySelector(target);
    if (targetEl instanceof HTMLElement) {
      targetEl.focus({ preventScroll: true });
    }
    gsap.to(window, {
      duration: 1.5,
      scrollTo: target,
      ease: "power3.inOut",
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay: 0.5,
        defaults: { opacity: 0, ease: "power3.out", duration: 0.8 },
      });
      tl.from(headerRef.current?.querySelector("nav"), { y: -40 });
      tl.from(".header-logo", { x: -20 }, "-=0.6")
        .from(".header-nav-link", { y: -20, stagger: 0.1 }, "-=0.5")
        .from(".header-actions", { x: 20 }, "<");
    }, headerRef);
    return () => ctx.revert();
  }, []);

  const navLinks = ["About", "Projects", "Skills", "Experience", "Contact"];

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 w-full z-50 p-4 md:p-6"
      >
       <nav aria-label="Main navigation" className="container mx-auto flex justify-between items-center bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-2xl px-4 py-3 sm:px-6 border border-white/20">

          <div className="header-logo text-gray-900 dark:text-white">
            <a
              href="#home"
              onClick={(e) => handleNavLinkClick(e, "#home")}
              aria-label="Go to homepage"
              className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
            >
              <LogoIcon className="w-10 h-10" />
            </a>
          </div>
          <ul className="hidden md:flex md:space-x-8 lg:space-x-12">

            {navLinks.map((link) => (
              <li key={link} className="header-nav-link">
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) =>
                    handleNavLinkClick(e, `#${link.toLowerCase()}`)
                  }
                  className="text-lg hover:text-blue-600 dark:hover:text-sky-400 transition-colors duration-300 relative group"
                >
                  {link}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-sky-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
          <div className="header-actions flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              className="p-2 rounded-full hover:bg-white/20 dark:hover:bg-black/30 transition-colors"
            >
              {theme === "dark" ? (
                <SunIcon className="w-6 h-6" />
              ) : (
                <MoonIcon className="w-6 h-6" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2.5 rounded-full hover:bg-white/30 dark:hover:bg-black/40 transition-all duration-300"

              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      <div
        ref={mobileMenuRef}
        className="md:hidden fixed inset-0 bg-white dark:bg-black/95 z-[60] transform translate-x-full opacity-0"
        style={{ willChange: "transform, opacity" }}
        role="dialog"
        aria-modal="true"
      >
        <div className="container mx-auto h-full flex flex-col items-center justify-center relative p-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 right-8 p-2"
            aria-label="Close navigation menu"
          >
            <CloseIcon className="w-8 h-8" />
          </button>
          <ul className="flex flex-col space-y-8 text-center">
            {navLinks.map((link) => (
              <li key={link} className="mobile-nav-link opacity-0">
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) =>
                    handleNavLinkClick(e, `#${link.toLowerCase()}`)
                  }
                  className="text-3xl font-bold hover:text-blue-600 dark:hover:text-sky-400 transition-colors duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
