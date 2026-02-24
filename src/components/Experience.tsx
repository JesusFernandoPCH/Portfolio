import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Extraído directamente desde el CV proporcionado por el usuario
const educationData = [
    {
        period: 'Agosto 2021 – Actualmente',
        degree: 'Ingeniería en Sistemas Computacionales',
        institution: 'Tecnológico Nacional de México – Campus Cuautla',
        details: 'Especialidad: Tecnologías emergentes web y móvil | Inglés B1'
    },
    {
        period: 'Enero 2018 – Julio 2021',
        degree: 'Técnico en Programación',
        institution: 'CBTIS No. 194',
        details: 'Fundamentos de lógica de programación y desarrollo inicial de software.'
    }
];

const experienceData = [
    {
        period: '22 de Agosto 2025 - 22 de Diciembre 2025',
        title: 'Auxiliar de Sistemas',
        company: 'Hotel Fiesta Americana Hacienda San Antonio El Puente',
        responsibilities: [
            'Soporte técnico a usuarios internos y externos, así como atención a incidencias de primer y segundo nivel.',
            'Instalación, mantenimiento y diagnóstico de equipos de cómputo e impresoras.',
            'Configuración básica de redes y apoyo en la instalación de cableado estructurado.',
            'Gestión de inventario de equipos y licencias.',
            'Configuración de la VPN Autenticación por OKTA (Global Protect).',
            'Levantamiento de tickets en Service Now según se requerían.'
        ]
    },
    {
        period: 'Agosto 2020 - Junio 2021',
        title: 'Apoyo Técnico y Administrativo (Prácticas Profesionales)',
        company: 'Laboratorio de Cómputo – CBTIS No. 194',
        responsibilities: [
            'Soporte técnico durante prácticas profesionales dentro de las instalaciones del plantel.',
            'Control de inventario de software y hardware para laboratorios de cómputo.',
            'Atención a usuarios y resolución de problemas básicos dentro del laboratorio de cómputo.'
        ]
    }
];

const skillsData = [
    {
        category: 'Lenguajes', items: [
            { name: 'JavaScript', icon: '/tecnologias/JavaScript.webp' },
            { name: 'Java', icon: null },
            { name: 'HTML5', icon: '/tecnologias/HTML5-logo.webp' },
            { name: 'CSS3', icon: '/tecnologias/CSS.webp' }
        ]
    },
    {
        category: 'Frameworks / Tecnologías', items: [
            { name: 'Node.js', icon: '/tecnologias/Nodejs.webp' },
            { name: 'React Native', icon: null },
            { name: 'Dart', icon: '/tecnologias/Dart.webp' },
            { name: 'Flutter', icon: '/tecnologias/Flutter.webp' }
        ]
    },
    {
        category: 'Bases de datos', items: [
            { name: 'MySQL', icon: '/tecnologias/mysql.webp' }
        ]
    },
    {
        category: 'Herramientas', items: [
            { name: 'GitHub', icon: '/tecnologias/GIThub-mini-logo.webp' },
            { name: 'Visual Studio Code', icon: null },
            { name: 'Antigravity', icon: '/tecnologias/Antigravity.webp' },
            { name: 'Claude', icon: '/tecnologias/Claude.webp' }
        ]
    },
    {
        category: 'Sistemas Operativos', items: [
            { name: 'Windows', icon: null },
            { name: 'Linux Básico', icon: null }
        ]
    },
    {
        category: 'Idiomas', items: [
            { name: 'Español (Nativo)', icon: null },
            { name: 'Inglés (B1)', icon: null }
        ]
    }
];

const Experience: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        // Header Animation
        gsap.fromTo(el.querySelector('.exp-header'),
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                }
            }
        );

        // Timeline Line Animation (Crece hacia abajo)
        const line = el.querySelector('.timeline-line');
        if (line) {
            gsap.fromTo(line,
                { height: 0 },
                {
                    height: '100%',
                    duration: 1.5,
                    ease: 'power2.inOut',
                    scrollTrigger: {
                        trigger: el.querySelector('.timeline-container'),
                        start: 'top 75%',
                        end: 'bottom 80%',
                        scrub: 1, // Se dibuja según haces scroll
                    }
                }
            );
        }

        // Animación de los nodos de la línea de tiempo (Educación y Experiencia)
        const nodes = el.querySelectorAll('.timeline-node');
        nodes.forEach((node, i) => {
            gsap.fromTo(node,
                { x: i % 2 === 0 ? -50 : 50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'back.out(1.2)',
                    scrollTrigger: {
                        trigger: node,
                        start: 'top 85%',
                    }
                }
            );
        });

        // Animación de las Badges de Habilidades
        const skillBadges = el.querySelectorAll('.skill-badge');
        gsap.fromTo(skillBadges,
            { scale: 0, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                stagger: 0.05,
                ease: 'back.out(2)',
                scrollTrigger: {
                    trigger: el.querySelector('.skills-container'),
                    start: 'top 85%',
                }
            }
        );

    }, []);

    return (
        <section id="experience" className="relative min-h-screen py-24 bg-[var(--color-brand-black)] border-b border-[var(--color-brand-dark)] overflow-hidden" ref={containerRef}>

            {/* Luces decorativas */}
            <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[var(--color-brand-coffee)] opacity-10 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Cabecera de la sección */}
                <div className="exp-header text-center mb-20">
                    <h2 className="text-sm md:text-base uppercase tracking-[0.3em] text-[var(--color-brand-coffee-light)] mb-4 font-semibold">
                        Trayectoria
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                        Experiencia & Habilidades.
                    </h3>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Lado Izquierdo: Línea de Tiempo (Educación & Experiencia) */}
                    <div className="w-full lg:w-2/3 timeline-container relative">

                        <h4 className="text-2xl font-bold text-white mb-12 flex items-center gap-3">
                            <span className="w-8 h-px bg-[var(--color-brand-coffee-light)]"></span> Historial Profesional
                        </h4>

                        {/* La línea central física */}
                        <div className="absolute left-[15px] md:left-[23px] top-[80px] bottom-0 w-[2px] bg-[var(--color-brand-dark)]">
                            <div className="timeline-line w-full bg-[var(--color-brand-coffee)] origin-top"></div>
                        </div>

                        <div className="flex flex-col gap-12" ref={timelineRef}>

                            {/* Bloques de Experiencia */}
                            {experienceData.map((exp, index) => (
                                <div key={`exp-${index}`} className="timeline-node relative pl-12 md:pl-16">
                                    {/* El punto decorativo en la línea */}
                                    <div className="absolute left-[11px] md:left-[19px] top-1.5 w-[10px] h-[10px] rounded-full bg-[var(--color-brand-coffee-light)] shadow-[0_0_10px_var(--color-brand-coffee-light)]"></div>

                                    <span className="block text-sm text-[var(--color-brand-coffee-light)] font-medium mb-1 tracking-wider uppercase">
                                        {exp.period}
                                    </span>
                                    <h5 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.title}</h5>
                                    <h6 className="text-[var(--color-brand-gray-lighter)] font-medium mb-4">{exp.company}</h6>

                                    <ul className="space-y-2">
                                        {exp.responsibilities.map((resp, i) => (
                                            <li key={i} className="text-[var(--color-brand-gray-light)] text-sm md:text-base flex items-start gap-2">
                                                <span className="text-[var(--color-brand-coffee)] mt-1 opacity-70">▹</span>
                                                <span>{resp}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            {/* Título intermedio Educación */}
                            <div className="timeline-node relative pl-12 md:pl-16 mt-6">
                                {/* Punto hueco decorativo para secciones secundarias */}
                                <div className="absolute left-[8px] md:left-[16px] top-3 w-[16px] h-[16px] rounded-full border-2 border-[var(--color-brand-coffee)] bg-[var(--color-brand-black)] z-10"></div>

                                <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                    Académico
                                </h4>
                            </div>

                            {/* Bloques de Educación */}
                            {educationData.map((edu, index) => (
                                <div key={`edu-${index}`} className="timeline-node relative pl-12 md:pl-16">
                                    <div className="absolute left-[11px] md:left-[19px] top-1.5 w-[10px] h-[10px] rounded-full bg-white/20"></div>

                                    <span className="block text-sm text-[var(--color-brand-gray)] mb-1 tracking-wider uppercase">
                                        {edu.period}
                                    </span>
                                    <h5 className="text-xl md:text-2xl font-bold text-white mb-1">{edu.degree}</h5>
                                    <h6 className="text-[var(--color-brand-gray-lighter)] font-medium mb-2">{edu.institution}</h6>
                                    <p className="text-[var(--color-brand-gray-light)] text-sm md:text-base">{edu.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Lado Derecho: Habilidades Técnicas (Grid de Badges) */}
                    <div className="w-full lg:w-1/3 skills-container">
                        <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-8 h-px bg-[var(--color-brand-coffee-light)]"></span> Stack Técnico
                        </h4>

                        <div className="bg-[var(--color-brand-dark)]/30 border border-white/5 rounded-2xl p-6 md:p-8 hover:border-white/10 transition-colors duration-500">
                            {skillsData.map((category, idx) => (
                                <div key={idx} className="mb-8 last:mb-0">
                                    <h6 className="text-sm uppercase tracking-widest text-[var(--color-brand-gray)] mb-4 font-semibold pb-2 border-b border-white/5">
                                        {category.category}
                                    </h6>
                                    <div className="flex flex-wrap gap-3">
                                        {category.items.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="skill-badge flex items-center gap-2 px-4 py-2 bg-[var(--color-brand-black)] border border-[var(--color-brand-coffee)]/30 text-[var(--color-brand-gray-lighter)] text-sm font-medium rounded-lg shadow-sm cursor-default hover:border-[var(--color-brand-coffee-light)] hover:text-white hover:-translate-y-1 transition-all duration-300"
                                            >
                                                {skill.icon && <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain" />}
                                                {skill.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
