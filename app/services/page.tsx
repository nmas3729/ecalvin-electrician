export default function Services() {

  const services = [
    "1. Electrical Maintenance",
    "2. New Installations (Wiring, Lighting, DB boards)",
    "3. Prepaid metre Installations",
    "4. Solar System Installations",
    "5. Fault Diagnostics",
    "6. Load Balancing and Efficiency Assessments",
    "7. Energy Audits and Load Reduction",
    "8. COC Services",
  ];

  return (
    <div className="bg-white text-black min-h-screen pb-20">

      {/* HEADER */}
      <section className="bg-black text-white py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 transform rotate-45 translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-400 transform rotate-45 -translate-x-16 translate-y-16"></div>
        <h1 className="text-5xl font-bold text-yellow-400 relative z-10">
          Our Services
        </h1>
      </section>

      <div className="max-w-6xl mx-auto p-10 space-y-20">

        {/* INTRO */}
        <section className="text-center">
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            ECALVIN ETRICIAN offers professional electrical services
            for residential, commercial and industrial clients
            across South Africa.
          </p>
        </section>

        {/* SERVICES LIST */}
        <section>
          <div className="bg-black text-yellow-400 p-10 rounded-xl shadow-2xl">
            <h2 className="text-3xl font-bold mb-8 border-b border-gray-700 pb-4">Comprehensive Services List</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div
                  key={service}
                  className="font-bold text-xl hover:text-white transition duration-300"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLAR INVERTER REPAIR */}
        <section className="bg-gray-100 p-10 rounded-xl shadow-lg border-l-8 border-yellow-400 relative overflow-hidden">
          <div className="absolute top-0 right-0 text-gray-200 mt-2 mr-2">
            <span className="bg-black text-white px-3 py-1 rounded text-sm font-bold">100% Trusted</span>
          </div>
          <h2 className="text-4xl font-bold text-black mb-6">
            Solar Inverter <br /> <span className="text-yellow-500">Repair Services</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded shadow border-l-4 border-black">
                <h3 className="font-bold text-xl flex items-center gap-2 mb-2">
                  <span className="text-yellow-500 text-2xl">✓</span> Fast & Reliable Service
                </h3>
                <p className="text-gray-700">
                  At ECalvin, we pride ourselves on quick turnaround times to minimize downtime and get your system back to peak performance efficiently!
                </p>
              </div>

              <div className="bg-white p-6 rounded shadow border-l-4 border-yellow-400">
                <h3 className="font-bold text-xl flex items-center gap-2 mb-2">
                  <span className="text-black text-2xl">✓</span> Quality Repairs
                </h3>
                <p className="text-gray-700">
                  We use high-quality parts and follow industry standards to ensure long-lasting repairs.
                </p>
              </div>

              <div className="bg-yellow-100 p-6 rounded font-semibold italic">
                Restore Your Solar System's Performance!<br />
                Minimize Downtime with reliable solutions!<br />
                <span className="text-sm">backed by our satisfaction guarantee!</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {/* Placeholders for the repair images */}
              <div className="h-48 w-full bg-gray-800 rounded-xl flex items-center justify-center text-gray-500 shadow-inner border-4 border-yellow-400">
                [Inverter Repair Image 1]
              </div>
              <div className="h-48 w-full bg-gray-800 rounded-xl flex items-center justify-center text-gray-500 shadow-inner border-4 border-yellow-400">
                [Inverter Repair Image 2]
              </div>
            </div>
          </div>
        </section>

        {/* SOLAR PANEL INSTALLATION */}
        <section className="bg-black text-white p-10 rounded-xl shadow-2xl border-t-8 border-yellow-400 text-center space-y-10">

          <div className="flex justify-center gap-6">
            {/* Placeholders for the installation images */}
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-yellow-400 bg-gray-800 flex items-center justify-center text-sm shadow-xl z-20">
              [Install Image 1]
            </div>
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white bg-gray-800 flex items-center justify-center text-sm shadow-xl z-10 transform -translate-y-4">
              [Install Image 2]
            </div>
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-yellow-400 bg-gray-800 flex items-center justify-center text-sm shadow-xl z-20">
              [Install Image 3]
            </div>
          </div>

          <div>
            <h2 className="text-5xl md:text-6xl font-black mb-2 tracking-wide">
              SOLAR PANEL
            </h2>
            <h2 className="text-5xl md:text-6xl font-black text-yellow-400 tracking-wide mb-6">
              INSTALLATION
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto uppercase letter-spacing-wider font-semibold">
              Transform your energy consumption with our solar panel installation services!
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}