import Spline from "@splinetool/react-spline";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2wz4X3zdM3U9CpbY/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-gray-700 mb-4">
            <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Live for India’s athletes
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900">
            Build verified athletic credibility. Unlock real opportunities.
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            NExURA is the trusted digital identity for athletes — showcase achievements, verify documents, and connect with sponsors, recruiters, and fans across India.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#get-started" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 shadow hover:shadow-md transition">
              Get started free
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#how-it-works" className="px-5 py-3 rounded-lg font-semibold text-gray-800 bg-white border border-black/10 hover:border-black/20 shadow-sm">How it works</a>
          </div>
          <div className="mt-6 text-sm text-gray-500">Trusted by athletes, coaches, and federations</div>
        </div>
      </div>
    </section>
  );
}
