import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';

const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Trayectoria', href: '#experience' },
    { name: 'Contacto', href: '#contact' }
];

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const headerRef = useRef<HTMLElement>(null);

    // GSAP Animation for header entrance
    useEffect(() => {
        gsap.fromTo(headerRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
        );
    }, []);

    // Smooth scroll
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        setIsOpen(false);

        const targetElement = document.querySelector(href);
        if (targetElement) {
            const topPos = targetElement.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: topPos - 80, // Offset for fixed header
                behavior: 'smooth'
            });
        }
    };

    return (
        <header ref={headerRef} className="fixed top-0 left-0 w-full z-50 glass transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo / Name */}
                    <div className="flex-shrink-0">
                        <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="text-2xl font-bold tracking-tighter">
                            <span className="text-[var(--color-brand-coffee-light)]">PCH</span>
                            <span className="text-[var(--color-brand-gray-light)]">.dev</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex space-x-8">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleScroll(e, link.href)}
                                        className="text-sm uppercase tracking-widest text-[var(--color-brand-gray-lighter)] hover:text-[var(--color-brand-coffee-light)] transition-colors duration-300 relative group"
                                    >
                                        {link.name}
                                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[var(--color-brand-coffee-light)] transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-[var(--color-brand-gray-lighter)] hover:text-white p-2 rounded-md transition-colors"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden absolute top-20 left-0 w-full glass bg-opacity-95 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <ul className="px-4 pt-2 pb-6 space-y-4">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href)}
                                className="block text-center text-lg uppercase tracking-wide text-[var(--color-brand-gray-lighter)] hover:text-[var(--color-brand-coffee-light)] transition-colors py-2"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;
