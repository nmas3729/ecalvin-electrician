export default function Home() {
  return (
    <main>

      {/* HERO SECTION */}

      <section className="bg-black text-white py-28 text-center">

        <h1 className="text-5xl font-bold text-yellow-400">
          ECALVIN ETRICIAN
        </h1>

        <p className="mt-4 text-lg font-semibold tracking-wide uppercase text-yellow-300">
          Professional Electrical &amp; Solar Services
        </p>

        <p className="mt-5 text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
          Reliable Electrical Solutions for Homes, Businesses
          and Industrial Facilities Across South Africa.
        </p>

        <div className="mt-8 flex justify-center gap-6 flex-wrap">

          <a
            href="/contact"
            className="bg-yellow-400 text-black px-6 py-3 rounded font-bold hover:bg-yellow-300 transition-colors"
          >
            Request a Quote
          </a>

          <a
            href="https://wa.me/27827406634"
            target="_blank"
            className="border-2 border-white px-6 py-3 rounded flex items-center gap-3 hover:bg-[#25D366] hover:border-[#25D366] transition-all group font-bold"
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <svg className="fill-white group-hover:fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.821 7.454c-1.679 0-3.325-.449-4.753-1.29l-.341-.202-3.536.928.944-3.447-.221-.352a9.611 9.611 0 0 1-1.474-5.111c0-5.32 4.329-9.65 9.655-9.65 2.577 0 5.001 1.005 6.824 2.828 1.823 1.823 2.828 4.246 2.828 6.822 0 5.321-4.329 9.65-9.65 9.65m0-21.016C6.733 0 1.398 5.336 1.398 12c0 2.128.554 4.205 1.604 6.04L0 24l6.163-1.617C7.961 23.447 9.945 24 12 24c6.627 0 12-5.373 12-12 0-3.203-1.247-6.216-3.515-8.485C18.218 1.248 15.204 0 12 0z" />
              </svg>
            </div>
            WhatsApp Us
          </a>

        </div>

        {/* Quick Benefits */}
        <div className="mt-10 flex justify-center gap-6 flex-wrap text-sm font-medium">
          <span className="flex items-center gap-2 text-green-400">
            <span>✔</span> Certified Electrical Contractors
          </span>
          <span className="flex items-center gap-2 text-green-400">
            <span>✔</span> Fast &amp; Reliable Service
          </span>
          <span className="flex items-center gap-2 text-green-400">
            <span>✔</span> Safety &amp; Compliance Guaranteed
          </span>
        </div>

      </section>


      {/* ABOUT SECTION */}

      <section className="max-w-4xl mx-auto p-12 text-center">

        <h2 className="text-3xl font-bold mb-6">
          About Our Company
        </h2>

        <p className="text-lg text-gray-700 mb-4">
          ECALVIN ETRICIAN is a proudly South African electrical services company
          dedicated to delivering reliable, efficient and safe electrical
          solutions for residential, commercial and industrial clients.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Our team of qualified electricians is committed to excellence,
          ensuring every installation, repair and maintenance project
          meets national electrical standards and safety regulations.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Through professionalism, technical expertise and a customer-first
          approach, ECALVIN ETRICIAN has built a reputation for dependable
          service and high-quality workmanship.
        </p>

        <p className="text-lg text-gray-700">
          We aim to provide electrical solutions that are safe,
          efficient and built to last.
        </p>

      </section>


      {/* SERVICES SECTION */}

      <section className="bg-gray-100 py-16">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-10">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 px-6">

            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-bold text-xl mb-3">
                Electrical Maintenance
              </h3>
              <p>
                Routine inspections and maintenance to keep
                electrical systems safe and reliable.
              </p>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-bold text-xl mb-3">
                New Installations
              </h3>
              <p>
                Professional wiring, lighting installations and DB board setups
                for residential and commercial buildings.
              </p>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-bold text-xl mb-3">
                Solar Installations
              </h3>
              <p>
                Efficient solar system installations designed
                to reduce energy costs.
              </p>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-bold text-xl mb-3">
                Fault Diagnostics
              </h3>
              <p>
                Fast detection and repair of electrical faults
                to maintain safe electrical systems.
              </p>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-bold text-xl mb-3">
                Energy Audits
              </h3>
              <p>
                Energy usage assessments to improve efficiency
                and reduce electricity consumption.
              </p>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-bold text-xl mb-3">
                COC Services
              </h3>
              <p>
                Issuing Electrical Certificates of Compliance
                for residential and commercial properties.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose ECALVIN ETRICIAN
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded shadow border-t-4 border-yellow-400">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-green-500">✔</span> Qualified Electricians
            </h3>
            <p className="text-gray-700">
              Our team consists of trained and experienced professionals.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow border-t-4 border-yellow-400">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-green-500">✔</span> Reliable Service
            </h3>
            <p className="text-gray-700">
              We complete projects efficiently and professionally.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow border-t-4 border-yellow-400">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-green-500">✔</span> Safety Compliance
            </h3>
            <p className="text-gray-700">
              All electrical work meets South African safety regulations.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow border-t-4 border-yellow-400">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-green-500">✔</span> Quality Workmanship
            </h3>
            <p className="text-gray-700">
              We use high-quality materials and proven installation methods.
            </p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-yellow-400 text-black py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">
            Need Professional Electrical Services?
          </h2>
          <p className="text-lg font-semibold mb-8">
            Our qualified electricians are ready to assist you.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="tel:+27827406634" className="bg-black text-white px-6 py-3 rounded font-bold hover:bg-gray-800 transition-colors flex items-center gap-2">
              📞 Call: +27 82 740 6634
            </a>
            <a href="/contact" className="border-2 border-black text-black px-6 py-3 rounded font-bold hover:bg-black hover:text-white transition-colors flex items-center gap-2">
              📝 Request a Quote
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}