import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-white text-black min-h-screen">

      {/* HEADER */}
      <section className="bg-black text-white py-20 text-center">
        <h1 className="text-5xl font-bold text-yellow-400">About Company</h1>
        <p className="mt-4 text-xl">Discover who we are and what drives us</p>
      </section>

      <div className="max-w-6xl mx-auto p-10 space-y-20">

        {/* ABOUT SECTION */}
        <section className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold border-b-4 border-yellow-400 inline-block pb-2">
              Who We Are
            </h2>
            <p className="text-lg leading-relaxed font-semibold text-yellow-600">
              ECALVIN ETRICIAN is a proudly South African electrical services company dedicated to delivering reliable, efficient, and safe electrical solutions for residential, commercial and industrial clients.
            </p>
            <p className="text-lg leading-relaxed">
              With a team of qualified electricians and a commitment to excellence, we have built a reputation for quality workmanship and dependable service.
            </p>
            <p className="text-lg leading-relaxed border-l-4 border-yellow-400 pl-4 italic">
              At ECALVIN ETRICIAN we ensure that all our projects meet national standards and are completed on time and within budget.
            </p>
          </div>
          <div className="md:w-1/2 bg-yellow-400 p-8 rounded-lg shadow-xl text-black font-bold text-center text-4xl">
            A B O U T &nbsp;&nbsp; U S
          </div>
        </section>

        {/* WELCOME MESSAGE */}
        <section className="bg-black text-white p-10 md:p-16 rounded-xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-bl-full z-0 opacity-20"></div>
          <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/3 text-center space-y-4">
              <div className="w-48 h-48 mx-auto bg-gray-800 rounded-full border-4 border-yellow-400 flex items-center justify-center overflow-hidden shadow-lg">
                <span className="text-gray-400 text-sm">Mr. Nethononda</span>
              </div>
              <div>
                <h3 className="text-yellow-400 text-2xl font-bold">ECALVIN ETRICIAN</h3>
                <p className="text-white text-base font-semibold mt-1">Mr. Nethononda Mphaya</p>
                <p className="text-yellow-300 text-sm font-medium tracking-wide uppercase mt-1">Managing Director</p>
              </div>
            </div>

            <div className="md:w-2/3 space-y-6">
              <h2 className="text-4xl font-bold text-yellow-400">Welcome Message</h2>
              <p className="text-xl font-semibold border-b border-gray-700 pb-4">
                Welcome to ECALVIN ETRICIAN — Where Professionalism Meets Power.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                As the Managing Director, I am proud to lead a company committed to delivering reliable, safe and
                high-quality electrical services to homes, businesses and industries across South Africa.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                Our team is driven by integrity, technical expertise and a passion for excellence. Every project we
                undertake reflects our commitment to safety, quality and customer satisfaction.
              </p>
              <p className="text-lg text-yellow-500 font-semibold italic">
                Thank you for trusting ECALVIN ETRICIAN as your electrical services partner.
              </p>
            </div>
          </div>
        </section>

        {/* VISION AND MISSION */}
        <section className="grid md:grid-cols-2 gap-10">

          {/* Vision */}
          <div className="border border-gray-200 p-10 rounded-xl shadow-lg hover:shadow-xl transition duration-300 bg-white group">
            <div className="w-16 h-16 bg-yellow-400 text-white rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <span className="text-black">Our</span> <span className="text-yellow-500">Vision</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 border-l-4 border-yellow-400 pl-4">
              To become a leading and trusted provider of innovative, safe and sustainable electrical solutions across South Africa, empowering communities and businesses through expertise.
            </p>
          </div>

          {/* Mission */}
          <div className="border border-gray-200 p-10 rounded-xl shadow-lg hover:shadow-xl transition duration-300 bg-white group">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <span className="text-black">Our</span> <span className="text-yellow-500">Mission</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              To provide high quality, reliable and affordable electrical services to residential, commercial and industrial clients.
            </p>
            <p className="font-bold text-black mb-2">We are committed to:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4 marker:text-yellow-500">
              <li>Ensuring safety and compliance in every project.</li>
              <li>Building long-term relationships based on trust, integrity and customer satisfaction.</li>
            </ul>
            <p className="text-gray-700 italic border-l-4 border-black pl-4">
              We aim to progress while upholding the highest standards of professionalism and service.
            </p>
          </div>

        </section>

        {/* OUR CORE VALUES */}
        <section className="bg-black text-white p-10 md:p-16 rounded-xl shadow-2xl relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-400 rounded-tl-full z-0 opacity-10"></div>
          <div className="relative z-10 text-center mb-10">
            <h2 className="text-4xl font-bold text-yellow-400">OUR CORE VALUES</h2>
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-x-12 gap-y-10">

            {/* 1. Integrity */}
            <div className="space-y-2">
              <h3 className="text-yellow-400 text-2xl font-bold border-b border-gray-700 pb-2">1. Integrity</h3>
              <p className="text-lg leading-relaxed text-gray-300">
                We uphold honesty, transparency and ethical practices in every aspect of our work.
              </p>
            </div>

            {/* 2. Accountability */}
            <div className="space-y-2">
              <h3 className="text-yellow-400 text-2xl font-bold border-b border-gray-700 pb-2">2. Accountability</h3>
              <p className="text-lg leading-relaxed text-gray-300">
                We take full responsibility for our work and commitments, ensuring transparency and trust in every project.
              </p>
            </div>

            {/* 3. Customer Focus */}
            <div className="space-y-2">
              <h3 className="text-yellow-400 text-2xl font-bold border-b border-gray-700 pb-2">3. Customer Focus</h3>
              <p className="text-lg leading-relaxed text-gray-300">
                Our clients are at the heart of everything we do. We strive to understand their needs and exceed their expectations.
              </p>
            </div>

            {/* 4. Team Work */}
            <div className="space-y-2">
              <h3 className="text-yellow-400 text-2xl font-bold border-b border-gray-700 pb-2">4. Team Work</h3>
              <p className="text-lg leading-relaxed text-gray-300">
                We believe in collaboration and respect within our team and with our clients to achieve shared goals.
              </p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
