export default function Contact() {
  return (
    <section id="contact" className="bg-slate-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Contact Engineering Solutions
          </h2>

          <p className="mt-4 text-lg text-gray-300">
            We welcome enquiries related to scientific equipment, vacuum
            engineering, crystal growth systems and custom R&D projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Details */}

          <div className="bg-slate-800 rounded-xl p-8 shadow-lg">

            <h3 className="text-2xl font-semibold mb-8">
              Company Information
            </h3>

            <div className="space-y-6">

              <div>
                <h4 className="text-cyan-400 font-semibold">Company Name</h4>
                <p>Engineering Solutions</p>
              </div>

              <div>
                <h4 className="text-cyan-400 font-semibold">Business</h4>
                <p>
                  Precision Vacuum Engineering,
                  Crystal Growth Equipment,
                  Scientific Instrumentation &
                  Custom Research Equipment
                </p>
              </div>

              <div>
                <h4 className="text-cyan-400 font-semibold">Address</h4>

                <p>
                  #73 (1st Floor), Bhuvaneswari Nagar
                  <br />
                  Near Dhawood Nagar
                  <br />
                  Pudupattinam
                  <br />
                  Kalpakkam – 603102
                  <br />
                  Tamil Nadu, India
                </p>

              </div>

              <div>
                <h4 className="text-cyan-400 font-semibold">Phone</h4>

                <p>
                  +91 79042 27352
                </p>
              </div>

              <div>
                <h4 className="text-cyan-400 font-semibold">Email</h4>

                <p>
                  engineeringsolutions25@gmail.com
                </p>
              </div>

              <div>
                <h4 className="text-cyan-400 font-semibold">GSTIN</h4>

                <p>
                  33AJWPC9055G1ZY
                </p>
              </div>

              <div>
                <h4 className="text-cyan-400 font-semibold">Business Hours</h4>

                <p>
                  Monday – Saturday
                  <br />
                  9:00 AM – 6:00 PM
                </p>
              </div>

            </div>

          </div>

          {/* Placeholder */}

          <div className="bg-slate-800 rounded-xl p-8 flex flex-col justify-center items-center border border-slate-700">

            <div className="h-64 w-full rounded-lg bg-slate-700 flex items-center justify-center mb-6">

              <p className="text-gray-300 text-lg">
                Google Map Placeholder
              </p>

            </div>

            <p className="text-center text-gray-300">
              A Google Maps location and contact form will be added in the
              next version of the website.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}