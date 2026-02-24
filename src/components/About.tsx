import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    // 82 frames as per directory contents: Fondo_000.webp to Fondo_081.webp
    const frameCount = 82;
    const currentFrame = (index: number) =>
        `./fondo/Fondo_${index.toString().padStart(3, '0')}.webp`;

    useEffect(() => {
        // Animación deBackground Secuencial en Canvas
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');

        if (canvas && context) {
            canvas.width = 1920;
            canvas.height = 1080;

            const img = new Image();
            img.src = currentFrame(0);

            const images: HTMLImageElement[] = [];
            let loadCount = 0;

            // Precarga pasiva de imágenes
            for (let i = 0; i < frameCount; i++) {
                const imgObj = new Image();
                imgObj.src = currentFrame(i);
                images.push(imgObj);
                imgObj.onload = () => {
                    loadCount++;
                    // Draw first frame immediately when it loads
                    if (loadCount === 1) {
                        context.drawImage(images[0], 0, 0, canvas.width, canvas.height);
                    }
                };
            }

            let frame = { value: 0 };

            // Loop infinito mediante GSAP
            const playAnim = gsap.to(frame, {
                value: frameCount - 1,
                snap: "value",
                repeat: -1,
                duration: 8, // Ciclo de 8 segundos como se planeó
                ease: "none",
                onUpdate: () => {
                    if (images[frame.value] && images[frame.value].complete) {
                        context.clearRect(0, 0, canvas.width, canvas.height);
                        context.drawImage(images[frame.value], 0, 0, canvas.width, canvas.height);
                    }
                }
            });

            return () => {
                playAnim.kill();
            };
        }
    }, []);

    useEffect(() => {
        // Animación de aparición con ScrollTrigger
        const el = containerRef.current;
        if (!el) return;

        const q = gsap.utils.selector(el);

        gsap.fromTo(q('.about-content > *'),
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 75%',
                }
            }
        );

        gsap.fromTo(imgRef.current,
            { scale: 0.8, opacity: 0, rotation: -5 },
            {
                scale: 1,
                opacity: 1,
                rotation: 0,
                duration: 1.2,
                ease: 'back.out(1.5)',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 75%',
                }
            }
        );

        // Animación de flotación contínua para la imagen de perfil
        gsap.to(imgRef.current, {
            y: 15,
            yoyo: true,
            repeat: -1,
            duration: 3,
            ease: 'sine.inOut'
        });

    }, []);

    const handleContactScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const contactEl = document.querySelector('#contact');
        if (contactEl) {
            window.scrollTo({
                top: contactEl.getBoundingClientRect().top + window.scrollY - 80,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-brand-black)] border-b border-[var(--color-brand-dark)]" ref={containerRef}>
            {/* Background Canvas Secuencial */}
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full object-cover opacity-[0.15] pointer-events-none mix-blend-screen"
            />

            {/* Luz ambiental */}
            <div className="absolute center pointer-events-none opacity-20 bg-[var(--color-brand-coffee)] w-[500px] h-[500px] rounded-full blur-[120px] left-[-100px] top-1/2 -translate-y-1/2"></div>

            {/* Contenido Principal */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12 lg:gap-24">

                {/* Foto de Perfil */}
                <div className="w-full md:w-[45%] flex justify-center about-img shrink-0">
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(62,39,35,0.4)]" ref={imgRef}>
                        <img
                            src="./imagenes/Foto-Perfil.webp"
                            alt="Jesús Fernando P. - Perfil"
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay sutil para la foto */}
                        <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none"></div>
                    </div>
                </div>

                {/* Textos y Detalles */}
                <div className="w-full md:w-[55%] text-[var(--color-brand-gray-lighter)] about-content" ref={textRef}>
                    <h2 className="text-sm md:text-base uppercase tracking-[0.3em] text-[var(--color-brand-coffee-light)] mb-4 font-semibold">
                        Conóceme
                    </h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-8">
                        Pulsión por la Excelencia Tecnológica.
                    </h3>
                    <p className="text-base sm:text-lg text-[var(--color-brand-gray-light)] mb-6 leading-relaxed">
                        Soy un ingeniero <strong className="text-white font-semibold">apasionado por la arquitectura de software y el diseño meticuloso</strong>. Mi filosofía es que cada línea de código debe generar valor y cada aspecto del diseño debe ofrecer una experiencia intuitiva.
                    </p>
                    <p className="text-base sm:text-lg text-[var(--color-brand-gray-light)] mb-10 leading-relaxed">
                        Me concentro en la creación de interfaces optimizadas, animaciones fluidas que cuentan historias y arquitecturas sólidas que hacen magia por debajo del telón. Convertir las ideas complejas en experiencias web minimalistas y extraordinarias es mi objetivo de todos los días.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#contact"
                            onClick={handleContactScroll}
                            className="px-8 py-3 bg-[var(--color-brand-coffee)] text-white hover:bg-[var(--color-brand-coffee-light)] font-medium tracking-wide transition-colors duration-300 pointer-events-auto"
                        >
                            Hablemos de tus Ideas
                        </a>
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                alert('Curriculum estará disponible muy pronto.');
                            }}
                            className="px-8 py-3 border border-white/20 text-[var(--color-brand-gray-lighter)] hover:border-[var(--color-brand-coffee-light)] hover:text-[var(--color-brand-coffee-light)] font-medium tracking-wide transition-all duration-300 pointer-events-auto"
                        >
                            Descargar CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
