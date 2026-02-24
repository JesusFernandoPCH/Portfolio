import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
    {
        id: 1,
        title: 'E-Commerce Premium',
        category: 'Fullstack Development',
        image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Plataforma de comercio electrónico de alto rendimiento con transacciones seguras y una UX deslumbrante.',
        tech: ['React', 'Node.js', 'Stripe', 'Tailwind']
    },
    {
        id: 2,
        title: 'Fintech Dashboard',
        category: 'UI/UX & Frontend',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Panel de control financiero con visualización de datos en tiempo real y arquitectura escalable.',
        tech: ['Next.js', 'TypeScript', 'D3.js']
    },
    {
        id: 3,
        title: 'AI Chat Interface',
        category: 'Frontend Development',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Interfaz fluida y futurista para un asistente de inteligencia artificial, priorizando la accesibilidad.',
        tech: ['Vue', 'GSAP', 'Firebase']
    },
    {
        id: 4,
        title: 'Sistema de Reservas',
        category: 'Backend & Architecture',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Un motor de reservas para restaurantes operando bajo una estricta arquitectura orientada a microservicios.',
        tech: ['Java', 'Spring Boot', 'PostgreSQL']
    }
];

const Projects: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        // Animación del Header de la sección
        gsap.fromTo(el.querySelector('.projects-header'),
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

        // Animación de las tarjetas en Stagger
        cardsRef.current.forEach((card, i) => {
            gsap.fromTo(card,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: i * 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 70%',
                    }
                }
            );
        });

    }, []);

    return (
        <section id="projects" className="relative min-h-screen py-24 bg-[var(--color-brand-dark)] border-b border-[var(--color-brand-black)] overflow-hidden" ref={sectionRef}>

            {/* Background Decorativo */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[var(--color-brand-coffee)] opacity-10 blur-[150px] rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[var(--color-brand-black)] opacity-40 blur-[100px] rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="projects-header mb-16 md:mb-24 text-center md:text-left">
                    <h2 className="text-sm md:text-base uppercase tracking-[0.3em] text-[var(--color-brand-coffee-light)] mb-4 font-semibold">
                        Portafolio
                    </h2>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
                        Proyectos Destacados.
                    </h3>
                    <p className="mt-6 text-lg text-[var(--color-brand-gray-light)] max-w-2xl">
                        Una selección de mi trabajo más reciente, combinando diseño de alta gama con ingeniería de software sofisticada.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {projectsData.map((project, index) => (
                        <div
                            key={project.id}
                            ref={el => { if (el) cardsRef.current[index] = el; }}
                            className="group relative rounded-2xl overflow-hidden bg-[var(--color-brand-black)] border border-white/5 hover:border-[var(--color-brand-coffee-light)]/50 transition-colors duration-500 shadow-2xl"
                        >
                            {/* Contenedor de Imagen con Efecto Hover */}
                            <div className="relative h-64 sm:h-80 overflow-hidden">
                                <div className="absolute inset-0 bg-[var(--color-brand-black)]/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                            </div>

                            {/* Contenido de la Tarjeta */}
                            <div className="relative p-8 z-20 bg-gradient-to-t from-[var(--color-brand-black)] via-[var(--color-brand-black)] to-transparent -mt-20 pt-24">
                                <span className="text-[var(--color-brand-coffee-light)] text-sm font-bold tracking-wider uppercase mb-2 block">
                                    {project.category}
                                </span>
                                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--color-brand-coffee-light)] transition-colors duration-300">
                                    {project.title}
                                </h4>
                                <p className="text-[var(--color-brand-gray)] mb-6 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(tech => (
                                        <span key={tech} className="px-3 py-1 text-xs font-medium text-[var(--color-brand-gray-lighter)] bg-white/5 rounded-full border border-white/10">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Enlace o Botón falso para la interacción */}
                            <a href={`#project-${project.id}`} className="absolute inset-0 z-30" aria-label={`Ver detalles de ${project.title}`}></a>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); alert('Botón para ver más proyectos en un futuro'); }}
                        className="inline-block px-10 py-4 border border-[var(--color-brand-coffee)] text-[var(--color-brand-coffee-light)] hover:bg-[var(--color-brand-coffee)] hover:text-white font-medium tracking-widest uppercase text-sm transition-all duration-300"
                    >
                        Ver Archivo Completo
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
