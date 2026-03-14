export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20">

      <div className="max-w-6xl mx-auto p-10 grid md:grid-cols-3 gap-8">

        {/* Company Info */}
        <div>
          <h2 className="text-yellow-400 text-xl font-bold mb-3">
            ECALVIN ETRICIAN
          </h2>

          <p>
            Reliable electrical and solar services for residential,
            commercial and industrial clients across
            South Africa.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-yellow-400 font-bold mb-3">
            Quick Links
          </h2>

          <ul className="space-y-2">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-yellow-400 font-bold mb-3">
            Contact
          </h2>

          <p>46 Thomas Street</p>
          <p>Clayville</p>
          <p>Olifantsfontein</p>
          <p>1666</p>
          <p>South Africa</p>

          <p className="mt-3">
            📞 +27 82 740 6634
          </p>

          <p>
            ✉ matsenene9403@gmail.com
          </p>
        </div>

      </div>

      <div className="text-center border-t border-gray-700 py-4 flex flex-col gap-1 text-sm">
        <p>
          © {new Date().getFullYear()} ECALVIN ETRICIAN. All rights reserved.
        </p>
        <p className="text-gray-400">
          Powered by NMAS WebCraft
        </p>
      </div>

    </footer>
  );
}