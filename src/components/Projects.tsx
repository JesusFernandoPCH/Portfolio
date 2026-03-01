import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectModal from './ProjectModal';
import type { ProjectData } from './ProjectModal';

gsap.registerPlugin(ScrollTrigger);

const projectsData: ProjectData[] = [
    {
        id: 1,
        title: 'SonaPlay',
        category: 'App movil reproductor de musica para Android',
        image: 'imagenes/sonaplay/sonaplay2.webp',
        description: 'Aplicación móvil Android, un reproductor de música con una interfaz fluida y una experiencia de usuario intuitiva, sin anuncios.',
        fullDescription: 'SonaPlay es una aplicación nativa diseñada para ofrecer la mejor experiencia auditiva local en dispositivos Android. \n\n Cansado de los anuncion decidi crear un reproductor de música para Android que no contenga anuncios, fue un proyecto en el cual desarrolle mis habilidades en Flutter, Dart, Kotlin y Firebase con Crashlytics',
        link: 'https://www.mediafire.com/file/b0u8i79c52h4i9f/SonaPlay.apk/file',
        gallery: [
            '/imagenes/sonaplay/principal.webp',
            '/imagenes/sonaplay/playlist.webp',
            '/imagenes/sonaplay/playlist_info.webp',
            '/imagenes/sonaplay/favoritos.webp',
            '/imagenes/sonaplay/buscador.webp',
            '/imagenes/sonaplay/reproductor.webp'
        ],
        tech: [
            { name: 'Flutter', icon: '/tecnologias/Flutter.webp' },
            { name: 'Dart', icon: '/tecnologias/Dart.webp' },
            { name: 'Kotlin', icon: '/tecnologias/Kotlin.webp' },
            { name: 'Firebase', icon: '/tecnologias/firebase.webp' }
        ]
    },
    {
        id: 2,
        title: 'Recorrido virtual de una empresa',
        category: 'Recorrido virtual 360°',
        image: 'imagenes/fiesta/fiesta.webp',
        description: 'Recorrido virtual 360° de una empresa, permitiendo a los usuarios explorar las instalaciones de forma interactiva.',
        fullDescription: 'Este proyecto consistió en levantar un entorno panorámico 360° interactivo para una empresa local. \n\nEl sistema permite la libre visualización inmersiva de los espacios corporativos directamente desde el navegador, empleando HTML5 y CSS3 puros renderizados encima de la librería Marzipano en JavaScript, lo que garantiza desempeño en tiempo real y compatibilidad alta entre plataformas.',
        link: 'https://jesusfernandopch.github.io/CTuristico/',
        gallery: [
            '/imagenes/fiesta/fiesta.webp',
            '/imagenes/fiesta/fiesta1.webp',
            '/imagenes/fiesta/fiesta2.webp',
            '/imagenes/fiesta/fiesta3.webp',
            '/imagenes/fiesta/fiesta4.webp',
            '/imagenes/fiesta/fiesta5.webp',
            '/imagenes/fiesta/fiesta6.webp'

        ],
        tech: [
            { name: 'HTML5', icon: '/tecnologias/HTML5-logo.webp' },
            { name: 'CSS3', icon: '/tecnologias/css2.webp' },
            { name: 'JavaScript', icon: '/tecnologias/jav1.webp' },
            { name: 'Marzipano', icon: '/tecnologias/marzipano.webp' }
        ]
    },
    {
        id: 3,
        title: 'Minimalist Interactive Portfolio',
        category: 'Résumé',
        image: 'imagenes/minimalist/Inicio.webp',
        description: 'Crea tu propio Résumé de forma interactiva para sistemas ATS.',
        fullDescription: 'Este proyecto consistió en crear un Résumé de forma interactiva para sistemas ATS. \n\nHoy en dia tener un cv capaz de pasar los filtros de los sistemas ATS es fundamental para conseguir empleo, por lo que decidí crear un Résumé de forma interactiva para sistemas ATS.',
        link: 'https://jesusfernandopch.github.io/CTuristico/',
        gallery: [
            '/imagenes/minimalist/demo.webp',
            '/imagenes/minimalist/Inicio.webp',
            '/imagenes/minimalist/final.webp',
            '/imagenes/minimalist/imprimir.webp',
            '/imagenes/minimalist/resultado.webp'
        ],
        tech: [
            { name: 'HTML5', icon: '/tecnologias/HTML5-logo.webp' },
            { name: 'CSS3', icon: '/tecnologias/css2.webp' },
            { name: 'JavaScript', icon: '/tecnologias/jav1.webp' },
            { name: 'Marzipano', icon: '/tecnologias/marzipano.webp' }
        ]
    }
];

const Projects: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

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
                        Portfolio
                    </h2>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
                        Proyectos Destacados.
                    </h3>
                    <p className="mt-6 text-lg text-[var(--color-brand-gray-light)] max-w-1xl">
                        Una selección de mi trabajo, espero pronto poder compartir nuestro trabajo juntos.
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
                                        <div key={tech.name} className="flex flex-row items-center gap-2 px-3 py-1.5 text-xs font-medium text-[var(--color-brand-gray-lighter)] bg-white/5 rounded-full border border-white/10 hover:border-[var(--color-brand-coffee-light)] transition-colors duration-300">
                                            {tech.icon && (
                                                <img src={`${import.meta.env.BASE_URL}${tech.icon}`} alt={tech.name} className="w-4 h-4 object-contain pointer-events-none" />
                                            )}
                                            <span>{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Enlace o Botón falso para la interacción */}
                            <button
                                onClick={() => setSelectedProject(project)}
                                className="absolute inset-0 z-30 w-full h-full text-left focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-coffee-light)] rounded-2xl cursor-pointer"
                                aria-label={`Ver detalles de ${project.title}`}
                            ></button>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="https://github.com/JesusFernandoPCH"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-10 py-4 border border-[var(--color-brand-coffee)] text-[var(--color-brand-coffee-light)] hover:bg-[var(--color-brand-coffee)] hover:text-white font-medium tracking-widest uppercase text-sm transition-all duration-300"
                    >
                        Ver Archivo Completo
                    </a>
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={selectedProject !== null}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

export default Projects;
