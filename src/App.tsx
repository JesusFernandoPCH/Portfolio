import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PixelTrail from './components/PixelTrail';
import './App.css';

function App() {
  return (
    <div className="bg-[var(--color-brand-black)] text-[var(--color-brand-gray-lighter)] min-h-screen font-sans selection:bg-[var(--color-brand-coffee-light)] selection:text-white relative">
      <PixelTrail
        pixelSize={24}
        fadeDuration={500}
        pixelClassName="bg-white/5"
        className="fixed inset-0 z-0 pointer-events-none"
      />

      <Header />

      <main className="relative z-10">
        {/* Placeholder sections for scrolling anchors */}

        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />

        <Contact />
      </main>

      <Footer />
    </div >
  );
}

export default App;
