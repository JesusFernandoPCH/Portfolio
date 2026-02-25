import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="relative py-12 border-t border-[var(--color-brand-dark)] bg-[var(--color-brand-black)] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
                    <div className="flex flex-col items-center md:items-start">
                        <a href="#home" className="text-2xl font-bold tracking-tighter mb-2">
                            <span className="text-[var(--color-brand-coffee-light)]">PCH</span>
                            <span className="text-[var(--color-brand-gray-light)]">.dev</span>
                        </a>
                        <p className="text-[var(--color-brand-gray)] text-sm text-center md:text-left">
                            Construyendo experiencias digitales <br className="hidden md:block" /> escalables y emocionantes.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com/JesusFernandoPCH" target="_blank" rel="noopener noreferrer" className="text-[var(--color-brand-gray)] hover:text-white transition-colors p-2 bg-[var(--color-brand-dark)]/50 rounded-full hover:bg-[var(--color-brand-coffee)]">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/jes%C3%BAs-fernando-p%C3%A9rez-ch%C3%A1vez-3bab80361/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-brand-gray)] hover:text-white transition-colors p-2 bg-[var(--color-brand-dark)]/50 rounded-full hover:bg-[var(--color-brand-coffee)]">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:yesper233@gmail.com" className="text-[var(--color-brand-gray)] hover:text-white transition-colors p-2 bg-[var(--color-brand-dark)]/50 rounded-full hover:bg-[var(--color-brand-coffee)]">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[var(--color-brand-dark)]/50">
                    <p className="text-[var(--color-brand-gray-light)] text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} Jesús Pérez (PCH.dev). Todos los derechos reservados.
                    </p>
                    <div className="flex space-x-6 text-sm text-[var(--color-brand-gray-light)]">
                        <span className="hover:text-[var(--color-brand-coffee-light)] transition-colors cursor-pointer">Hecho con React, Vite y Tailwind, (Gracias por todo midudev)</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
