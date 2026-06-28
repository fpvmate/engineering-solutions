const projects = [
  {
    title: "Handheld CZT Pocket Dosimeter",
    description:
      "Design and supply of a compact CZT-based radiation pocket dosimeter for scientific and laboratory applications.",
  },
  {
    title: "Carbon Coating Setup",
    description:
      "Development of carbon coating equipment for quartz tube applications used in research laboratories.",
  },
  {
    title: "Custom High Vacuum Chamber",
    description:
      "Design and fabrication of high vacuum chambers for research and industrial applications.",
  },
  {
    title: "Quartz Tube Supply",
    description:
      "Supply of precision quartz tubes for crystal growth and laboratory research.",
  },
  {
    title: "Laboratory Transformer",
    description:
      "Custom-designed transformers developed specifically for laboratory equipment and testing.",
  },
  {
    title: "Vacuum Pumps & Fittings",
    description:
      "Supply and integration of vacuum pumps, vacuum fittings and associated laboratory accessories.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            Featured Projects
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Selected engineering solutions successfully delivered for scientific
            research and industrial applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <div className="h-48 bg-slate-200 flex items-center justify-center text-slate-500">
                Image Placeholder
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {project.description}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}