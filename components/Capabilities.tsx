export default function Capabilities() {
  const capabilities = [
    "Vacuum Engineering",
    "Crystal Growth Equipment",
    "Scientific Instrumentation",
    "Custom R&D Equipment",
    "High Vacuum Chambers",
    "Laboratory Components",
  ];

  return (
    <section id="capabilities" className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            Core Capabilities
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Delivering precision engineering solutions for scientific research,
            laboratories and industrial applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {capabilities.map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition"
            >
              <div className="w-14 h-14 rounded-full bg-cyan-600 text-white flex items-center justify-center text-2xl mb-6">
                ✓
              </div>

              <h3 className="text-xl font-semibold text-slate-900">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}