import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export interface ProjectData {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    fullDescription: string;
    link: string;
    gallery: string[];
    tech: { name: string; icon: string | null }[];
}

interface ProjectModalProps {
    project: ProjectData | null;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);

    // Reset index when changing project
    useEffect(() => {
        if (isOpen) {
            setCurrentImageIndex(0);
            setIsZoomed(false);
            // Lock body scroll
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen, project]);

    if (!project) return null;

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? project.gallery.length - 1 : prev - 1));
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 0.8, y: 20 }} //size 0.8
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                        className="relative w-full max-w-6xl max-h-[90vh] bg-[var(--color-brand-black)] border border-[var(--color-brand-dark)] rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                    >
                        {/* Header */}
                        <div className="flex justify-between items-start p-6 border-b border-[var(--color-brand-dark)]/50">
                            <div className="pr-12">
                                <span className="text-[var(--color-brand-coffee-light)] text-sm font-bold tracking-wider uppercase mb-1 block">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight break-words">{project.title}</h3>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 bg-white/5 hover:bg-white/10 text-[var(--color-brand-gray-light)] hover:text-white rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                {/* Left Side: Details */}
                                <div className="space-y-8">
                                    <div className="prose prose-invert border-l border-[var(--color-brand-coffee)]/30 pl-4 py-2">
                                        <p className="text-[var(--color-brand-gray-lighter)] leading-relaxed whitespace-pre-wrap break-words">
                                            {project.fullDescription}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-4">Tecnologías Utilizadas</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {project.tech.map(t => (
                                                <div key={t.name} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-[var(--color-brand-gray-lighter)] shadow-sm">
                                                    {t.icon && <img src={`${import.meta.env.BASE_URL}${t.icon}`} alt={t.name} className="w-5 h-5 object-contain" />}
                                                    <span>{t.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--color-brand-coffee)] to-[var(--color-brand-coffee-light)] text-white font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(182,143,101,0.4)] transition-all duration-300 hover:scale-[1.02]"
                                        >
                                            Ver Proyecto en Vivo <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                {/* Right Side: Carousel */}
                                <div className="space-y-4">
                                    <h4 className="text-lg font-semibold text-white mb-2 lg:hidden">Galería</h4>
                                    <div className="relative group rounded-xl overflow-hidden border border-[var(--color-brand-dark)] bg-black/50 aspect-video flex-shrink-0">
                                        <AnimatePresence mode="wait">
                                            <motion.img
                                                key={currentImageIndex}
                                                src={`${import.meta.env.BASE_URL}${project.gallery[currentImageIndex]}`}
                                                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                                                initial={{ opacity: 0, scale: 1.05 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="w-full h-full object-contain cursor-zoom-in"
                                                onClick={() => setIsZoomed(true)}
                                            />
                                        </AnimatePresence>

                                        {project.gallery.length > 1 && (
                                            <>
                                                <button
                                                    onClick={prevImage}
                                                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-[var(--color-brand-coffee)] text-white rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
                                                >
                                                    <ChevronLeft size={24} />
                                                </button>
                                                <button
                                                    onClick={nextImage}
                                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-[var(--color-brand-coffee)] text-white rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
                                                >
                                                    <ChevronRight size={24} />
                                                </button>
                                            </>
                                        )}

                                        {/* Zoom indication */}
                                        <div className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-lg backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                            <Maximize2 size={20} />
                                        </div>
                                    </div>

                                    {/* Thumbnails */}
                                    {project.gallery.length > 1 && (
                                        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                            {project.gallery.map((img, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setCurrentImageIndex(idx)}
                                                    className={`relative w-24 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${currentImageIndex === idx ? 'border-[var(--color-brand-coffee-light)] scale-105' : 'border-transparent opacity-50 hover:opacity-100'}`}
                                                >
                                                    <img src={`${import.meta.env.BASE_URL}${img}`} alt="thumbnail" className="w-full h-full object-cover" />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}

            {/* Fullscreen Zoom Overlay */}
            {isZoomed && isOpen && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsZoomed(false)}
                        className="absolute inset-0 bg-black/95 backdrop-blur-lg cursor-zoom-out"
                    />
                    <motion.img
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        src={`${import.meta.env.BASE_URL}${project.gallery[currentImageIndex]}`}
                        className="relative z-10 max-w-full max-h-full object-contain pointer-events-none shadow-2xl"
                    />
                    <button
                        onClick={() => setIsZoomed(false)}
                        className="absolute top-6 right-6 z-20 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors"
                    >
                        <X size={28} />
                    </button>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
