export default function ContactPage() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Dynamic Header Section */}
      <section className="relative overflow-hidden pb-10">
        {/* Hexagon background pattern aesthetic */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rotate-45 transform translate-x-32 -translate-y-32"></div>
        <div className="absolute top-20 left-10 w-32 h-32 border-[12px] border-yellow-500 rounded-lg transform rotate-12 opacity-80 z-0"></div>

        <div className="max-w-6xl mx-auto pt-24 px-10 relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-2">Our</h1>
            <h1 className="text-6xl md:text-8xl font-black text-yellow-500 mb-6">Contact</h1>
          </div>

          {/* Simulated Hexagonal image/graphic from the reference */}
          <div className="md:w-1/2 flex justify-center relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-green-500 rotate-45 flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.4)]">
              <div className="-rotate-45 text-center">
                <span className="text-7xl">☎</span>
                <span className="text-7xl ml-4">✉</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto p-10 mt-10 space-y-20">

        <div className="grid md:grid-cols-2 gap-16 relative">

          {/* Warning sign graphic absolute positioned */}
          <div className="absolute bottom-[-100px] right-[-50px] md:bottom-[-50px] md:right-[-20px] opacity-20 md:opacity-100 z-0 pointer-events-none">
            <div className="w-48 h-48 border-b-[100px] border-b-yellow-400 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent flex items-center justify-center transform scale-150">
              <span className="text-black font-black text-3xl mt-12">⚡</span>
            </div>
          </div>

          {/* Contact Information Cards */}
          <div className="space-y-8 relative z-10">

            {/* Phone / Management */}
            <div className="flex items-start gap-6 bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-yellow-400 transition">
              <div className="w-12 h-12 bg-yellow-500 text-black rounded-full flex items-center justify-center text-xl font-bold shrink-0">
                ☎
              </div>
              <div>
                <h2 className="font-bold text-lg text-white mb-1">Mr Nethononda Mphaya / Ms Mulalo Rapfumbedzani</h2>
                <p className="text-yellow-400 font-semibold text-xl tracking-wide">+27 82 740 6634 <br /> 067 127 8609</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-6 bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-yellow-400 transition">
              <div className="w-12 h-12 bg-gray-700 text-white rounded-full flex items-center justify-center text-xl shrink-0">
                ✉
              </div>
              <p className="text-gray-300 font-semibold text-lg hover:text-white transition cursor-pointer">
                matsenene9403@gmail.com
              </p>
            </div>

            {/* Address */}
            <div className="flex items-start gap-6 bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-yellow-400 transition">
              <div className="w-12 h-12 bg-yellow-500 text-black rounded-full flex items-center justify-center text-xl shrink-0">
                📍
              </div>
              <div>
                <p className="text-gray-300 font-bold text-lg leading-relaxed uppercase tracking-wider">
                  46 Thomas Street<br />
                  Clayville<br />
                  Olifants<br />
                  1666
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form Container (retained for functionality) */}
          <div className="bg-white text-black p-8 rounded-2xl shadow-2xl relative z-10 border-t-8 border-yellow-400">
            <h2 className="text-3xl font-black mb-6 border-b-2 border-gray-200 pb-4">
              Send a Request
            </h2>

            <form className="space-y-5 font-medium">
              <div>
                <label className="text-sm text-gray-500 mb-1 block">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-yellow-400 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500 mb-1 block">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-yellow-400 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500 mb-1 block">Phone Number</label>
                <input
                  type="text"
                  placeholder="+27 82 000 0000"
                  className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-yellow-400 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500 mb-1 block">Message</label>
                <textarea
                  placeholder="Describe your electrical work requirements..."
                  className="w-full border-2 border-gray-200 p-3 rounded-lg h-32 focus:border-yellow-400 focus:outline-none transition"
                />
              </div>

              <button
                type="button"
                className="bg-black hover:bg-gray-800 text-yellow-400 font-bold text-lg px-6 py-4 rounded-xl w-full transition uppercase tracking-wide shadow-lg"
              >
                Submit Request
              </button>
            </form>

          </div>

        </div>

      </div>
    </div>
  );
}