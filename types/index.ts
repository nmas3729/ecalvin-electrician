// Navigation
export interface NavLink {
  href: string;
  label: string;
}

// Services
export interface Service {
  id: number;
  title: string;
  description: string;
  image?: string;
}

// Team Members
export interface TeamMember {
  name: string;
  title: string;
  image?: string;
}

// Gallery Items
export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GalleryVideo {
  src: string;
  title: string;
}

// Certifications
export interface Certification {
  id: string;
  title: string;
  badge: string;
  description: string;
  logo?: string;
}

// Contact Form
export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

// Benefits / Why Choose Us
export interface Benefit {
  title: string;
  description: string;
}

// Core Values
export interface CoreValue {
  title: string;
  description: string;
}
