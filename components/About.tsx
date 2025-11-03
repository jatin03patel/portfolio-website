
import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

const About: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const title = '.about-title';
            const profileCard = '.profile-card-container';
            const textParagraphs = '.about-text p';

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 60%',
                    toggleActions: 'play reverse play reverse',
                },
            });

            // 1. Animate Title
            tl.from(title, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
            });

            // 2. Animate Profile Card with a simple slide-in
            tl.from(profileCard, {
                x: -100,
                opacity: 0,
                duration: 1.2,
                ease: 'power3.out',
            }, "-=0.7"); // Overlap with title animation

            // 3. Animate Text Paragraphs with a simple slide-in
            tl.from(textParagraphs, {
                x: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: 'power3.out',
            }, "<"); // Start at the same time as the profile card

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="about"
            className="container mx-auto py-20 md:py-32 px-4"
            tabIndex={-1}
        >
            <h2 className="about-title text-4xl md:text-5xl font-bold text-center mb-16">
                <span className="text-blue-600 dark:text-sky-400">About Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-16 items-center">
                {/* Profile Section */}
                <div className="profile-card-container relative md:col-span-2 flex justify-center">
                    <div className="profile-card p-6 sm:p-8 bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg w-full max-w-sm">
                        <div className="relative">
                            <img
                                src="public\past-forward-1940s.jpg"
                                alt="Headshot of Jatin Patel, the developer."
                                className="rounded-xl w-full h-auto shadow-2xl object-cover"
                            />
                            <div className="absolute -inset-2 rounded-xl border-2 border-blue-500/80 dark:border-sky-400 opacity-50"></div>
                        </div>
                    </div>
                </div>

                {/* Text Section */}
                <div className="about-text md:col-span-3 text-center md:text-left">
                    <p className="text-base sm:text-lg mb-4 leading-relaxed">
                        Hello! I'm Jatin Patel, a passionate Frontend Developer specializing in
                        creating dynamic, visually stunning, and highly interactive web
                        experiences. My journey into code began with a fascination for how
                        beautiful design and powerful technology can merge to create magic on
                        screen.
                    </p>
                    <p className="text-base sm:text-lg leading-relaxed">
                        I thrive on bringing ideas to life with fluid animations and clean,
                        scalable code. My toolkit is centered around the MERN stack, with a deep
                        love for React and the endless possibilities of animation libraries like
                        GSAP.
                    </p>
                </div>
            </div>
        </section>

    );
}

export default About;