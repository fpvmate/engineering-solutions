const services = [
  {
    title: "Vacuum Engineering",
    description:
      "Design and development of high vacuum systems, vacuum chambers, fittings and pumping solutions.",
  },
  {
    title: "Crystal Growth Equipment",
    description:
      "Custom equipment and accessories for crystal growth research and laboratory applications.",
  },
  {
    title: "Scientific Instrumentation",
    description:
      "Development of scientific instruments and precision laboratory equipment for research organizations.",
  },
  {
    title: "Custom R&D Equipment",
    description:
      "Design and fabrication of specialized equipment according to customer research requirements.",
  },
  {
    title: "Laboratory Components",
    description:
      "Supply of quartz tubes, laboratory transformers and custom engineered components.",
  },
  {
    title: "Engineering Consultation",
    description:
      "Technical consulting, prototype development and engineering support from concept to manufacturing.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            Our Services
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Specialized engineering services for research laboratories,
            universities and industrial organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-slate-50 rounded-xl p-8 border hover:border-cyan-600 hover:shadow-xl transition"
            >
              <div className="w-14 h-14 rounded-lg bg-cyan-600 text-white flex items-center justify-center text-2xl mb-6">
                ⚙
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}