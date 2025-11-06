import { Rocket, Globe, Users, Shield } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 flex items-center justify-center text-white shadow-md">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight text-gray-900 text-lg">NExURA</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a className="flex items-center gap-2 hover:text-gray-900 transition" href="#vision"><Globe className="h-4 w-4"/>Vision</a>
            <a className="flex items-center gap-2 hover:text-gray-900 transition" href="#community"><Users className="h-4 w-4"/>Community</a>
            <a className="flex items-center gap-2 hover:text-gray-900 transition" href="#trust"><Shield className="h-4 w-4"/>Trust</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Log in</button>
            <a href="#get-started" className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 shadow hover:shadow-md transition">Get Started</a>
          </div>
        </div>
      </div>
    </header>
  );
}
