import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const title1Ref = useRef<HTMLDivElement>(null);
    const title2Ref = useRef<HTMLDivElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const btnRef = useRef<HTMLAnchorElement>(null);
    const arrowRef = useRef<HTMLDivElement>(null);

    // Helper para dividir el texto en letras (Spans)
    const splitTextToChars = (text: string) => {
        return text.split('').map((char, index) => (
            <span key={index} className="inline-block opacity-0 translate-y-12">
                {char === ' ' ? '\u00A0' : char}
            </span>
        ));
    };

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

        const chars1 = title1Ref.current?.children;
        const chars2 = title2Ref.current?.children;

        if (chars1 && chars2) {
            // Retardo inicial para que termine la animación del Navbar
            tl.to(chars1, {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.04,
                delay: 0.4
            })
                .to(chars2, {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.04,
                }, "-=0.6")
                .fromTo(descRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                    "-=0.4"
                )
                .fromTo(btnRef.current,
                    { scale: 0.9, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
                    "-=0.2"
                )
                .fromTo(arrowRef.current,
                    { opacity: 0 },
                    { opacity: 1, duration: 1 },
                    "-=0.2"
                );

            // Animación infinita para la flecha de scroll
            gsap.to(arrowRef.current, {
                y: 12,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            });
        }
    }, []);

    // Función para redirigir al siguiente ID mediante scroll suave controlado si la navbar no existe
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const topPos = targetElement.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: topPos - 80,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" ref={containerRef}>
            {/* Luz de fondo/Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[var(--color-brand-coffee)] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 leading-none">
                    <div ref={title1Ref} className="overflow-hidden inline-flex flex-wrap justify-center text-[var(--color-brand-gray-lighter)]">
                        {splitTextToChars("TRANSFORMANDO")}
                    </div>
                    <br />
                    <div ref={title2Ref} className="overflow-hidden inline-flex flex-wrap justify-center text-[var(--color-brand-coffee-light)] mt-2">
                        {splitTextToChars("IDEAS")}
                    </div>
                </h1>

                <p ref={descRef} className="mt-8 text-base sm:text-lg md:text-xl text-[var(--color-brand-gray-light)] max-w-2xl mx-auto leading-relaxed">
                    Ingeniero de Software enfocado en crear experiencias interactivas, interfaces fluidas con diseño minimalista, y código optimizado que eleva cualquier proyecto web.
                </p>

                <div className="mt-12">
                    <a
                        ref={btnRef}
                        href="#projects"
                        onClick={(e) => handleScroll(e, '#projects')}
                        className="inline-block px-10 py-4 bg-transparent border-2 border-[var(--color-brand-coffee-light)] text-[var(--color-brand-gray-lighter)] hover:bg-[var(--color-brand-coffee-light)] hover:text-white font-semibold text-sm md:text-base uppercase tracking-[0.2em] transition-all duration-300 pointer-events-auto"
                    >
                        Ver Proyectos
                    </a>
                </div>
            </div>

            <div ref={arrowRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none text-[var(--color-brand-gray-light)] flex flex-col items-center">
                <span className="text-[10px] uppercase tracking-[0.3em] block mb-2 opacity-50">Descubrir</span>
                <ArrowDown size={20} className="opacity-70" />
            </div>
        </section>
    );
};

export default Hero;
