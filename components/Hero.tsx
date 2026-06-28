export default function Hero() {
  return (
    <section
      id="home"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <p className="uppercase tracking-widest text-cyan-400 mb-3">
            Engineering Solutions
          </p>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Precision Engineering for
            <br />
            Research & Innovation
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            Vacuum Engineering • Crystal Growth Equipment •
            Scientific Instrumentation • Custom R&D Solutions
          </p>

          <div className="flex gap-4">
            <a
              href="#contact"
              className="bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg font-semibold"
            >
              Contact Us
            </a>

            <a
              href="#projects"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-slate-900"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl h-96 flex items-center justify-center border border-slate-700">
          <div className="text-center">
            <p className="text-2xl">Image Placeholder</p>
            <p className="text-gray-400 mt-2">
              Vacuum Chamber / Laboratory Image
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}