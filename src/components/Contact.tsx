import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            // Reemplaza YOUR_FORMSPREE_ID con tu ID real proporcionado por Formspree
            const response = await fetch("https://formspree.io/f/mdalbeae", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
                // Reset success message after 5 seconds
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 5000);
            }
        } catch (error) {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    return (
        <section id="contact" className="relative py-24 min-h-screen flex items-center justify-center overflow-hidden border-b border-[var(--color-brand-dark)]">
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-black)] to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-brand-gray-lighter)] mb-4 tracking-tight">
                        Ponte en <span className="text-[var(--color-brand-coffee-light)]">Contacto</span>
                    </h2>
                    <p className="text-[var(--color-brand-gray)] text-lg max-w-2xl mx-auto">
                        ¿Tienes un proyecto en mente o simplemente quieres saludar? Estaré encantado de platicar contigo.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Información de Contacto */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="bg-[var(--color-brand-dark)]/30 p-8 rounded-2xl glass border border-[var(--color-brand-coffee)]/20 shadow-xl">
                            <h3 className="text-2xl font-semibold text-[var(--color-brand-coffee-light)] mb-6">Información</h3>

                            <div className="flex items-center space-x-4 mb-6 group">
                                <div className="p-4 bg-[var(--color-brand-black)] rounded-full text-[var(--color-brand-coffee-light)] group-hover:bg-[var(--color-brand-coffee-light)] group-hover:text-white transition-colors duration-300">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-[var(--color-brand-gray)]">Email</p>
                                    <a href="mailto:yesper233@gmail.com" className="text-lg text-[var(--color-brand-gray-lighter)] hover:text-[var(--color-brand-coffee-light)] transition-colors">yesper233@gmail.com</a>
                                </div>
                            </div>

                            <p className="text-justify text-[var(--color-brand-gray)] leading-relaxed mt-8">
                                Estoy disponible para nuevas oportunidades de desarrollo, especialmente enfocadas en soluciones de software de alto impacto y arquitectura de sistemas complejos. Si posees otras peticiones o preguntas, no dudes en utilizar este formulario para conectar conmigo.
                            </p>
                        </div>
                    </motion.div>

                    {/* Formulario */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <form className="bg-[var(--color-brand-dark)]/20 p-8 rounded-2xl glass border border-[var(--color-brand-coffee)]/20 shadow-xl space-y-6" onSubmit={handleSubmit}>
                            {status === "success" && (
                                <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg flex items-center space-x-3 text-green-400">
                                    <CheckCircle size={24} />
                                    <p>¡Mensaje enviado con éxito! Te responderé pronto.</p>
                                </div>
                            )}

                            {status === "error" && (
                                <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg flex items-center space-x-3 text-red-400">
                                    <AlertCircle size={24} />
                                    <p>Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.</p>
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-[var(--color-brand-gray-light)] mb-2">Nombre</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-[var(--color-brand-black)]/50 border border-[var(--color-brand-dark)] rounded-lg px-4 py-3 text-[var(--color-brand-gray-lighter)] focus:outline-none focus:border-[var(--color-brand-coffee-light)] focus:ring-1 focus:ring-[var(--color-brand-coffee-light)] transition-colors"
                                        placeholder="Tu nombre completo"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-[var(--color-brand-gray-light)] mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-[var(--color-brand-black)]/50 border border-[var(--color-brand-dark)] rounded-lg px-4 py-3 text-[var(--color-brand-gray-lighter)] focus:outline-none focus:border-[var(--color-brand-coffee-light)] focus:ring-1 focus:ring-[var(--color-brand-coffee-light)] transition-colors"
                                        placeholder="tucorreo@ejemplo.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-[var(--color-brand-gray-light)] mb-2">Asunto</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-[var(--color-brand-black)]/50 border border-[var(--color-brand-dark)] rounded-lg px-4 py-3 text-[var(--color-brand-gray-lighter)] focus:outline-none focus:border-[var(--color-brand-coffee-light)] focus:ring-1 focus:ring-[var(--color-brand-coffee-light)] transition-colors"
                                    placeholder="¿En qué te puedo ayudar?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-[var(--color-brand-gray-light)] mb-2">Mensaje</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full bg-[var(--color-brand-black)]/50 border border-[var(--color-brand-dark)] rounded-lg px-4 py-3 text-[var(--color-brand-gray-lighter)] focus:outline-none focus:border-[var(--color-brand-coffee-light)] focus:ring-1 focus:ring-[var(--color-brand-coffee-light)] transition-colors resize-none"
                                    placeholder="Cuéntame sobre tu proyecto..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="w-full bg-gradient-to-r from-[var(--color-brand-coffee)] to-[var(--color-brand-coffee-light)] text-white font-semibold py-4 rounded-lg flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === "submitting" ? (
                                    <>
                                        <span>Enviando...</span>
                                        <Loader2 size={20} className="animate-spin" />
                                    </>
                                ) : (
                                    <>
                                        <span>Enviar Mensaje</span>
                                        <Send size={20} />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
