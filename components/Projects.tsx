import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Project } from '../types';
import { ExternalLinkIcon, GithubIcon } from './icons';

gsap.registerPlugin(ScrollTrigger);

const projects: Project[] = [
  {
    id: 1,
    title: '🎬 Movie Explore Web App',
    description: 'A dynamic MERN stack application that allows users to search and explore movies with real-time API integration and responsive UI.',
    longDescription: '',
    imageUrl:
      'https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js'],
    liveUrl: '', // No live URL (not deployed)
    githubUrl: 'https://github.com/jatin03patel/Movie-Search-Web-App',
  },
  {
    id: 2,
    title: '⚡ Animated  Website',
    description: 'A modern Website built using React and GSAP with smooth scroll-triggered animations and interactive UI components.',
    longDescription: '',
    imageUrl:
      '\Screenshot 2025-11-03 200258.png',
    techStack: ['React', 'GSAP', 'Tailwind CSS'],
    liveUrl: 'https://award-winning-website-henna.vercel.app/', // Replace with your actual live URL
    githubUrl: 'https://github.com/jatin03patel/award-winning-website', // Replace with your repo
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {
        const image = card.querySelector('img');
        const content = card.querySelector('.project-content');
        if (!image || !content) return;

        gsap.set(content, { yPercent: 65 });

        const handleMouseEnter = () => {
          gsap.to(card, { scale: 1.05, duration: 0.5, ease: 'power3.out' });
          gsap.to(image, { scale: 1.1, duration: 0.5, ease: 'power3.out' });
          gsap.to(content, { yPercent: 0, duration: 0.5, ease: 'power3.out' });
        };

        const handleMouseMove = (e: MouseEvent) => {
          const { left, top, width, height } = card.getBoundingClientRect();
          const x = e.clientX - left;
          const y = e.clientY - top;
          const rotateX = gsap.utils.mapRange(0, height, -10, 10, y);
          const rotateY = gsap.utils.mapRange(0, width, 10, -10, x);
          gsap.to(card, { rotationX: rotateX, rotationY: rotateY, duration: 0.7, ease: 'power3.out' });
        };

        const handleMouseLeave = () => {
          gsap.to(card, { rotationX: 0, rotationY: 0, scale: 1, duration: 0.7, ease: 'elastic.out(1, 0.5)' });
          gsap.to(image, { scale: 1, duration: 0.5, ease: 'power3.out' });
          gsap.to(content, { yPercent: 65, duration: 0.5, ease: 'power3.out' });
        };

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          card.removeEventListener('mouseenter', handleMouseEnter);
          card.removeEventListener('mousemove', handleMouseMove);
          card.removeEventListener('mouseleave', handleMouseLeave);
        };
      });
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className="project-card relative rounded-2xl overflow-hidden bg-gray-300 dark:bg-gray-800 border border-white/20 invisible aspect-[4/3]"
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
    >
      <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

      <div className="project-content absolute bottom-0 left-0 p-4 md:p-6 text-white w-full">
        <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
        <p className="mt-2 text-gray-300 hidden md:block">{project.description}</p>
        <div className="flex flex-wrap items-center justify-start gap-x-6 gap-y-2 mt-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm font-mono uppercase tracking-wider hover:text-sky-400 transition-colors duration-300"
            >
              <ExternalLinkIcon aria-hidden="true" className="w-5 h-5" />
              <span>Live Demo</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm font-mono uppercase tracking-wider hover:text-sky-400 transition-colors duration-300"
            >
              <GithubIcon aria-hidden="true" className="w-5 h-5" />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.project-card');

      cards.forEach((card, index) => {
        gsap.from(card, {
          autoAlpha: 0,
          xPercent: index % 2 === 0 ? -50 : 50,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play reverse play reverse',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="container mx-auto py-20 md:py-32 px-4" tabIndex={-1}>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        <span className="text-blue-600 dark:text-sky-400">My Projects</span>
      </h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
