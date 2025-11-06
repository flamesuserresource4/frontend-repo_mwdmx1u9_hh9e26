export default function CallToAction() {
  return (
    <section id="get-started" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-[1px] shadow-lg">
          <div className="rounded-3xl bg-white p-8 sm:p-12">
            <div className="max-w-3xl">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                Start building your verified athletic identity today
              </h3>
              <p className="mt-3 text-gray-600">
                Create your profile, upload documents, and get discovered by sponsors and federations across India.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 shadow hover:shadow-md transition">
                  Create free account
                </a>
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-semibold text-gray-800 bg-white border border-black/10 hover:border-black/20 shadow-sm">
                  Talk to our team
                </a>
              </div>
              <p className="mt-4 text-xs text-gray-500">No credit card required. Secure and private by design.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
