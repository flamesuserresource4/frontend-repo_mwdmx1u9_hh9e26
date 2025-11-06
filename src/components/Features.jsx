import { BadgeCheck, Files, Store, Wallet, Languages, BarChart3 } from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Verified Profiles",
    desc: "Secure KYC and document verification to build authentic athlete identities.",
  },
  {
    icon: Files,
    title: "Document Vault",
    desc: "Upload certificates, results, and selection letters with one-click sharing.",
  },
  {
    icon: Store,
    title: "Merch & D2C",
    desc: "Launch personal stores with Stripe and Razorpay integrations.",
  },
  {
    icon: Wallet,
    title: "Sponsorship Requests",
    desc: "Connect with sponsors and recruiters with transparent proposals.",
  },
  {
    icon: Languages,
    title: "Multilingual",
    desc: "Access NExURA in major Indian languages for inclusive reach.",
  },
  {
    icon: BarChart3,
    title: "Engagement Analytics",
    desc: "Real-time insights to track profile views, reach, and conversions.",
  },
];

export default function Features() {
  return (
    <section id="vision" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">A verified social platform for athletes</h2>
          <p className="mt-4 text-gray-600">We combine credibility, community, and commerce to turn potential into real opportunity.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 rounded-xl bg-indigo-600/10 text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-105 transition">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
