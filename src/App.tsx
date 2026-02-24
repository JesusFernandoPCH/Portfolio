import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import './App.css';

function App() {
  return (
    <div className="bg-[var(--color-brand-black)] text-[var(--color-brand-gray-lighter)] min-h-screen font-sans selection:bg-[var(--color-brand-coffee-light)] selection:text-white">
      <Header />

      <main>
        {/* Placeholder sections for scrolling anchors */}

        <Hero />
        <About />
        <Projects />
        <Experience />

        <section id="contact" className="min-h-[60vh] flex items-center justify-center border-b border-[var(--color-brand-dark)]">
          <h2 className="text-3xl font-semibold text-[var(--color-brand-coffee-light)]">Contacto (Fase 6)</h2>
        </section>
      </main>

      <footer className="py-8 text-center text-[var(--color-brand-gray)] border-t border-[var(--color-brand-dark)]">
        <p>© {new Date().getFullYear()} - PCH.dev. Todos los derechos reservados.</p>
      </footer>
    </div >
  );
}

export default App;
