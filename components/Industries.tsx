const industries = [
  "Research Laboratories",
  "Universities",
  "Industrial R&D",
  "Scientific Institutions",
  "Semiconductor Industry",
  "Healthcare & Radiation",
];

export default function Industries() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            Industries We Serve
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Supporting scientific research and industrial innovation through
            precision engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {industries.map((item) => (
            <div
              key={item}
              className="bg-slate-50 rounded-xl shadow p-8 text-center hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{item}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}