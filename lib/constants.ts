// Company Information - Single source of truth
export const COMPANY = {
  name: "ECALVIN ETRICIAN",
  tagline: "Professional Electrical & Solar Services",
  description:
    "Reliable Electrical Solutions for Homes, Businesses and Industrial Facilities Across South Africa.",
  phone: "+27 82 740 6634",
  phoneAlt: "+27 79 833 8349",
  email: "matsenene@ecalvinetrician.co.za",
  whatsapp: "27827406634",
  address: {
    street: "46 Thomas Street",
    suburb: "Clayville",
    city: "Olifantsfontein",
    postalCode: "1666",
    country: "South Africa",
  },
  director: {
    name: "Mr. Nethononda Mphaya",
    title: "Managing Director",
  },
  manager: {
    name: "Carole Lindo Mtizi",
  },
} as const;

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/ecalvinetrician",
  tiktok: "https://www.tiktok.com/@ecalvinetrician",
  twitter: "https://x.com/ecalvinetrician",
} as const;

// Navigation Links
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/certifications", label: "Certifications" },
  { href: "/safety", label: "Safety" },
  { href: "/contact", label: "Contact" },
] as const;

// Services List
export const SERVICES = [
  {
    id: 1,
    title: "Electrical Maintenance",
    description:
      "Routine inspections and maintenance to keep electrical systems safe and reliable.",
    image: "/images/services/electrical-maintenance.png",
  },
  {
    id: 2,
    title: "New Installations",
    description:
      "Professional wiring, lighting installations and DB board setups for residential and commercial buildings.",
    image: "/images/services/electrical-distribution-board.png",
  },
  {
    id: 3,
    title: "Solar Installations",
    description:
      "Efficient solar system installations designed to reduce energy costs.",
    image: "/images/services/deye-hybrid-inverter.png",
  },
  {
    id: 4,
    title: "Solar Power Systems",
    description: "Complete Deye solar power system with battery storage.",
    image: "/images/services/deye-solar-power-system.png",
  },
  {
    id: 5,
    title: "PV Panel Installation",
    description: "Residential photovoltaic solar panel installation.",
    image: "/images/services/residential-photovoltaic-solar-panel.png",
  },
  {
    id: 6,
    title: "Hybrid Inverters",
    description: "Sunsynk 8kW hybrid inverter for home solar systems.",
    image: "/images/services/sunsynk-8kw-hybrid-inverter.png",
  },
  {
    id: 7,
    title: "Fault Diagnostics",
    description:
      "Fast detection and repair of electrical faults to maintain safe electrical systems.",
    image: "/images/services/fault-diagnostics.png",
  },
  {
    id: 8,
    title: "COC Services",
    description:
      "Issuing Electrical Certificates of Compliance for residential and commercial properties.",
    image: "/images/services/coc-services.png",
  },
] as const;

// Why Choose Us Benefits
export const BENEFITS = [
  {
    title: "Qualified Electricians",
    description:
      "Our team consists of trained and experienced professionals.",
  },
  {
    title: "Reliable Service",
    description: "We complete projects efficiently and professionally.",
  },
  {
    title: "Safety Compliance",
    description: "All electrical work meets South African safety regulations.",
  },
  {
    title: "Quality Workmanship",
    description:
      "We use high-quality materials and proven installation methods.",
  },
] as const;

// Core Values
export const CORE_VALUES = [
  {
    title: "Integrity",
    description:
      "We uphold honesty, transparency and ethical practices in every aspect of our work.",
  },
  {
    title: "Accountability",
    description:
      "We take full responsibility for our work and commitments, ensuring transparency and trust in every project.",
  },
  {
    title: "Customer Focus",
    description:
      "Our clients are at the heart of everything we do. We strive to understand their needs and exceed their expectations.",
  },
  {
    title: "Team Work",
    description:
      "We believe in collaboration and respect within our team and with our clients to achieve shared goals.",
  },
] as const;

// Gallery Images
export const GALLERY_IMAGES = [
  {
    src: "/images/gallery/deye-solar-power2.png",
    alt: "Deye solar power system installation by ECALVIN ETRICIAN",
  },
  {
    src: "/images/gallery/residential-electrical-distribution-board.png",
    alt: "Residential electrical distribution board wiring",
  },
  {
    src: "/images/gallery/residential-rooftop-solar.png",
    alt: "Completed residential rooftop solar project",
  },
  {
    src: "/images/gallery/rooftop-solar-pv2.png",
    alt: "Solar PV panels installed on residential roof",
  },
  {
    src: "/images/gallery/sunsynk-hybrid-inverter2.png",
    alt: "Sunsynk hybrid inverter installation",
  },
] as const;

// Gallery Videos
export const GALLERY_VIDEOS = [
  {
    src: "/videos/projects/solar-install-video-1.mp4",
    title: "Solar panel installation process",
  },
  {
    src: "/videos/projects/inverter-setup-video.mp4",
    title: "Inverter setup and configuration",
  },
] as const;

// Services Page Video
export const SERVICES_VIDEO = {
  src: "/videos/projects/full-system-walkthrough.mp4",
  title: "Complete solar system installation walkthrough",
} as const;

// Hero Images
export const HERO_IMAGES = {
  home: "/images/hero/residential-rooftop-solar3.png",
} as const;

// About Page Images
export const ABOUT_IMAGES = {
  inline: "/images/about/rooftop-residential-solar1.png",
} as const;

// Team Images
export const TEAM_IMAGES = {
  director: "/images/team/director-nethononda-mphaya.png",
  workers: "/images/team/workers1.png",
} as const;

// Safety Page Images
export const SAFETY_IMAGES = {
  workers: "/images/safety/workers2.png",
} as const;

// Certification Images
export const CERTIFICATION_IMAGES = {
  cipc: "/images/certifications/cipc.png",
  coida: "/images/certifications/coida.png",
  eca: "/images/certifications/eca.png",
  sunsynk: "/images/certifications/sunsynk-hybrid-inverters.png",
} as const;

// Certifications
export const CERTIFICATIONS = [
  {
    id: "cipc",
    title: "Company Registration",
    badge: "CIPC",
    description:
      "ECALVIN ETRICIAN is a South African-based company committed to delivering high-quality building solutions across residential, commercial, and industrial sectors.",
  },
  {
    id: "coida",
    title: "COIDA",
    badge: "Letter of Good Standing",
    description:
      "We are in good standing with the Department of Employment and Labour, and possess a valid Letter Of Good Standing.",
  },
  {
    id: "eca",
    title: "Electrical Contractors Association",
    badge: "ECA",
    description:
      "We are proud and active member of the Electrical Contractors Association of South Africa.",
  },
] as const;
