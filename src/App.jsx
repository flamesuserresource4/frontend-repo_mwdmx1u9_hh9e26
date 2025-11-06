import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CallToAction from "./components/CallToAction";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        {/* Anchor sections for navigation */}
        <section id="community" className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Built for every level</h2>
            <p className="mt-3 text-gray-600">From grassroots to elite, NExURA connects athletes, coaches, sponsors, and federations in one trusted network.</p>
          </div>
        </section>
        <section id="trust" className="py-16 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Trust by design</h2>
            <p className="mt-3 text-gray-600">Document verification, privacy controls, and transparent workflows ensure authenticity at every step.</p>
          </div>
        </section>
        <CallToAction />
      </main>
      <footer className="py-10 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} NExURA. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#vision" className="hover:text-gray-900">Vision</a>
            <a href="#community" className="hover:text-gray-900">Community</a>
            <a href="#trust" className="hover:text-gray-900">Trust</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
