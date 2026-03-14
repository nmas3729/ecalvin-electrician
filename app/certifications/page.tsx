export default function CertificationsPage() {
    return (
        <div className="bg-black text-white min-h-screen pb-20">

            {/* HEADER */}
            <section className="pt-20 pb-12 text-center relative">
                <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-2 tracking-wide">
                    Certifications &
                </h1>
                <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 tracking-wide">
                    Accreditation
                </h1>
            </section>

            <div className="max-w-5xl mx-auto p-10 space-y-16">

                {/* CIPC */}
                <section className="flex flex-col md:flex-row items-center gap-10">
                    <div className="md:w-2/3 space-y-4">
                        <h2 className="text-3xl font-bold uppercase tracking-wide">
                            Company Registration <span className="text-yellow-400">(CIPC)</span>
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-300">
                            <strong className="text-yellow-400">ECALVIN ETRICIAN</strong> is a South African-based company committed to delivering high-quality building solutions across residential, commercial, and industrial sectors. Our focus is on integrity, innovation, and excellence in every project we undertake.
                        </p>
                    </div>
                    <div className="md:w-1/3 bg-white p-6 rounded-2xl flex justify-center shadow-lg border-4 border-gray-200 h-48 w-full items-center">
                        {/* Placeholder for the CIPC logo */}
                        <div className="text-center">
                            <div className="text-green-600 font-bold text-6xl">C</div>
                            <p className="text-xs text-gray-500 mt-2">[CIPC Logo]</p>
                        </div>
                    </div>
                </section>

                {/* COIDA */}
                <section className="flex flex-col-reverse md:flex-row items-center gap-10">
                    <div className="md:w-1/3 bg-white p-6 rounded-2xl flex justify-center shadow-lg border-4 border-gray-200 h-48 w-full items-center">
                        {/* Placeholder for the COIDA logo */}
                        <div className="text-center text-green-700">
                            <span className="font-bold text-xl block">labour</span>
                            <span className="text-xs font-semibold">Compensation Fund</span>
                            <p className="text-xs text-gray-500 mt-2">[COIDA Logo]</p>
                        </div>
                    </div>
                    <div className="md:w-2/3 space-y-4 text-left md:text-right">
                        <h2 className="text-3xl font-bold uppercase tracking-wide text-yellow-400">
                            COIDA (Letter of Good Standing)
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-300">
                            We are in good standing with the Department of Employment and Labour, and possess a valid Letter Of Good Standing, Ensuring our employees are covered in the event of work-related injuries or illness.
                        </p>
                    </div>
                </section>

                {/* ECA */}
                <section className="flex flex-col md:flex-row items-center gap-10">
                    <div className="md:w-2/3 space-y-4">
                        <h2 className="text-3xl font-bold uppercase tracking-wide">
                            Electrical Contractors Association
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-400">
                            We are proud and active member of the Electrical Contractors Association of South Africa. We are recognised as a professional and compliant electrical contractor.
                        </p>
                    </div>
                    <div className="md:w-1/3 bg-white p-6 rounded-2xl flex justify-center shadow-lg border-4 border-gray-200 h-48 w-full items-center">
                        {/* Placeholder for the ECA logo */}
                        <div className="text-center text-blue-900 font-bold">
                            <span className="text-4xl block font-black">ECA</span>
                            <span className="text-[10px] text-red-600">ELECTRICAL CONTRACTORS' ASSOCIATION</span>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
