import React, { useEffect, useState, useRef } from 'react';
import Gravity, { MatterBody } from './Gravity';
import type { GravityRef } from './Gravity';
import { useInView } from 'framer-motion';

const techIcons = [
    { name: 'JavaScript', src: '/tecnologias/JavaScript.webp' },
    { name: 'HTML5', src: '/tecnologias/HTML5-logo.webp' },
    { name: 'CSS3', src: '/tecnologias/CSS.webp' },
    { name: 'Node.js', src: '/tecnologias/Nodejs.webp' },
    { name: 'Dart', src: '/tecnologias/Dart.webp' },
    { name: 'Flutter', src: '/tecnologias/Flutter.webp' },
    { name: 'MySQL', src: '/tecnologias/mysql.webp' },
    { name: 'GitHub', src: '/tecnologias/github2.webp' },
    { name: 'Antigravity', src: '/tecnologias/Antigravity.webp' },
    { name: 'Claude', src: '/tecnologias/claude-color.webp' }
];

const Skills: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const containerRef = useRef<HTMLElement>(null);
    const gravityRef = useRef<GravityRef>(null);
    const isInView = useInView(containerRef, { amount: 0.5, once: true });

    useEffect(() => {
        // Retrasar el montaje para evitar comportamientos inestables de Matter.js en re-renders iniciales estrictos
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted && isInView && gravityRef.current) {
            gravityRef.current.start();
        }
    }, [mounted, isInView]);

    return (
        <section ref={containerRef} id="habilidades" className="relative w-full h-[70vh] bg-transparent flex flex-col items-center justify-center border-b border-[var(--color-brand-dark)] overflow-hidden">

            {/* Background radial soft gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-brand-black)]/50 pointer-events-none"></div>

            <div className="absolute top-12 left-1/2 -translate-x-1/2 text-center z-10 pointer-events-none w-full px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-brand-gray-lighter)] mb-4 tracking-tight">
                    Mis <span className="text-[var(--color-brand-coffee-light)]">Habilidades</span>
                </h2>
                <p className="text-[var(--color-brand-gray)] text-sm md:text-base max-w-lg mx-auto">
                    Puedes arrastrar, soltar y colisionar con mi stack tecnológico.
                </p>
            </div>

            {mounted && (
                <Gravity
                    ref={gravityRef}
                    autoStart={false}
                    gravity={{ x: 0, y: 1 }}
                    className="w-full h-full"
                >
                    {techIcons.map((tech) => {
                        // Posiciones iniciales aleatorizadas para distribución caótica en la caída
                        const randomX = Math.floor(Math.random() * 60) + 20;
                        const randomY = Math.floor(Math.random() * 20) + 5;
                        const randomAngle = Math.floor(Math.random() * 45) - 22;

                        return (
                            <MatterBody
                                key={tech.name}
                                matterBodyOptions={{ friction: 0.8, restitution: 0.6, density: 0.05 }}
                                x={`${randomX}%`}
                                y={`${randomY}%`}
                                angle={randomAngle}
                                className="cursor-grab active:cursor-grabbing"
                            >
                                <div
                                    className="w-20 h-20 md:w-24 md:h-24 bg-[var(--color-brand-black)]/80 backdrop-blur-md border border-[var(--color-brand-coffee)]/40 rounded-2xl flex flex-col items-center justify-center shadow-2xl hover:border-[var(--color-brand-coffee-light)] transition-colors"
                                    title={tech.name}
                                >
                                    <img src={`${import.meta.env.BASE_URL}${tech.src}`} alt={tech.name} className="w-10 h-10 md:w-12 md:h-12 object-contain pointer-events-none select-none" />
                                    <span className="text-[10px] md:text-xs font-semibold text-[var(--color-brand-gray-lighter)] mt-2 pointer-events-none select-none">{tech.name}</span>
                                </div>
                            </MatterBody>
                        );
                    })}
                </Gravity>
            )}
        </section>
    );
};

export default Skills;
