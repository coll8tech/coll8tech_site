import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Specializations } from './components/Specializations';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Process />
      <Testimonials />
      <Specializations />
      <CTA />
      <Footer />
    </div>
  );
}
