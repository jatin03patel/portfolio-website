import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ReactIcon, NodeIcon, TSIcon, TailwindIcon, GSAPIcon, FigmaIcon } from './icons';

const InteractiveCube: React.FC = () => {
    const cubeRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState(256); // Default size

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        
        const observer = new ResizeObserver(entries => {
            const entry = entries[0];
            if (entry) {
                setSize(entry.contentRect.width);
            }
        });
        observer.observe(container);
        
        setSize(container.offsetWidth);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const cube = cubeRef.current;
        if (!cube) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            const x = e.clientX;
            const y = e.clientY;

            const rotateY = gsap.utils.mapRange(0, innerWidth, -40, 40, x);
            const rotateX = gsap.utils.mapRange(0, innerHeight, 40, -40, y);

            gsap.to(cube, {
                rotationY: rotateY,
                rotationX: rotateX,
                duration: 0.8,
                ease: 'power3.out',
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const faces = [
        { face: 'front', Icon: ReactIcon },
        { face: 'back', Icon: NodeIcon },
        { face: 'right', Icon: TSIcon },
        { face: 'left', Icon: TailwindIcon },
        { face: 'top', Icon: GSAPIcon },
        { face: 'bottom', Icon: FigmaIcon },
    ];
    
    const translateZ = size / 2;

    const faceStyles: { [key: string]: React.CSSProperties } = {
        front: { transform: `rotateY(0deg) translateZ(${translateZ}px)` },
        back: { transform: `rotateY(180deg) translateZ(${translateZ}px)` },
        right: { transform: `rotateY(90deg) translateZ(${translateZ}px)` },
        left: { transform: `rotateY(-90deg) translateZ(${translateZ}px)` },
        top: { transform: `rotateX(90deg) translateZ(${translateZ}px)` },
        bottom: { transform: `rotateX(-90deg) translateZ(${translateZ}px)` },
    };

    return (
        <div ref={containerRef} className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64" style={{ perspective: '1200px' }}>
            <div ref={cubeRef} className="w-full h-full relative" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(-15deg) rotateY(25deg)' }}>
                {faces.map(({ face, Icon }) => (
                    <div
                        key={face}
                        className="absolute w-full h-full flex items-center justify-center bg-white/5 dark:bg-black/10 backdrop-blur-sm border border-blue-500/20 dark:border-sky-400/20"
                        style={faceStyles[face]}
                    >
                        <Icon className="w-2/5 h-2/5 text-blue-600 dark:text-sky-400 opacity-70" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InteractiveCube;