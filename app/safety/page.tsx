export default function SafetyPage() {
    return (
        <div className="bg-white text-black min-h-screen">

            {/* HEADER */}
            <section className="bg-black text-white py-20 text-center relative overflow-hidden">
                {/* A stylised diagonal cut background effect */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-full h-full bg-yellow-400 transform origin-top-right scale-150 rotate-12 translate-y-20 opacity-10"></div>
                </div>
                <h1 className="text-5xl md:text-6xl font-black text-yellow-400 relative z-10 tracking-widest uppercase">
                    Health and Safety
                </h1>
            </section>

            <div className="max-w-4xl mx-auto p-10 mt-10 mb-20">

                {/* SAFETY COMMITMENT BOX */}
                <section className="bg-black text-white p-12 md:p-16 rounded-2xl shadow-2xl relative">

                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-400 rounded-full z-0 opacity-50 flex items-center justify-center shadow-lg">
                        <span className="text-black font-bold text-4xl">⚠</span>
                    </div>

                    <div className="relative z-10 space-y-8 text-center pt-8">
                        <h2 className="text-4xl md:text-5xl font-black text-yellow-400 uppercase tracking-widest border-b-4 border-gray-800 pb-6 inline-block">
                            Commitment
                        </h2>

                        <p className="text-xl md:text-2xl leading-relaxed text-gray-200 font-medium">
                            At <strong className="text-yellow-500 font-bold">ECALVIN ETRICIAN</strong>, Health and Safety are at the core of everything we do.
                        </p>

                        <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                            We are fully committed to ensuring a safe working environment for our employees, clients and the public by adhering to strict safety standards and legal requirements in all our electrical operations.
                        </p>

                    </div>

                    <div className="absolute bottom-0 right-0 w-full h-4 bg-yellow-400 rounded-b-2xl"></div>
                </section>

            </div>
        </div>
    );
}
