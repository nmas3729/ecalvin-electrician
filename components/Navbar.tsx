import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        <h1 className="text-yellow-400 font-bold text-xl">
          ECALVIN ETRICIAN
        </h1>

        <div className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/certifications">Certifications</Link>
          <Link href="/safety">Safety</Link>
          <Link href="/contact">Contact</Link>
        </div>

      </div>
    </nav>
  );
}