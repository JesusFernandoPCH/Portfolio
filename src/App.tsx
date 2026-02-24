import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="bg-[var(--color-brand-black)] text-[var(--color-brand-gray-lighter)] min-h-screen font-sans selection:bg-[var(--color-brand-coffee-light)] selection:text-white">
      <Header />

      <main>
        {/* Placeholder sections for scrolling anchors */}

        <section id="home" className="min-h-screen flex items-center justify-center border-b border-[var(--color-brand-dark)]">
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-brand-coffee-light)]">Inicio (Fase 2)</h1>
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center border-b border-[var(--color-brand-dark)]">
          <h2 className="text-3xl font-semibold">Sobre Mí (Fase 3)</h2>
        </section>

        <section id="projects" className="min-h-screen flex items-center justify-center border-b border-[var(--color-brand-dark)] bg-opacity-50 bg-[var(--color-brand-dark)]">
          <h2 className="text-3xl font-semibold">Proyectos (Fase 4)</h2>
        </section>

        <section id="skills" className="min-h-[50vh] flex items-center justify-center border-b border-[var(--color-brand-dark)]">
          <h2 className="text-3xl font-semibold">Habilidades (Fase 5)</h2>
        </section>

        <section id="experience" className="min-h-[50vh] flex items-center justify-center border-b border-[var(--color-brand-dark)] bg-opacity-50 bg-[var(--color-brand-dark)]">
          <h2 className="text-3xl font-semibold text-center">Experiencia & Educación (Fase 5)</h2>
        </section>

        <section id="contact" className="min-h-[60vh] flex items-center justify-center border-b border-[var(--color-brand-dark)]">
          <h2 className="text-3xl font-semibold text-[var(--color-brand-coffee-light)]">Contacto (Fase 6)</h2>
        </section>
      </main>

      <footer className="py-8 text-center text-[var(--color-brand-gray)] border-t border-[var(--color-brand-dark)]">
        <p>© {new Date().getFullYear()} - PCH.dev. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
