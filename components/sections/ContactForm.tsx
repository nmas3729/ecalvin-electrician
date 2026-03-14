"use client";

import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className }: ContactFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic will be added here
  };

  return (
    <div
      className={cn(
        "bg-white text-black p-8 rounded-2xl shadow-2xl border-t-8 border-yellow-400",
        className
      )}
    >
      <h2 className="text-3xl font-black mb-6 border-b-2 border-gray-200 pb-4">
        Send a Request
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5 font-medium">
        <div>
          <label htmlFor="fullName" className="text-sm text-gray-500 mb-1 block">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            placeholder="John Doe"
            required
            className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-yellow-400 focus:outline-none transition"
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm text-gray-500 mb-1 block">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="john@example.com"
            required
            className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-yellow-400 focus:outline-none transition"
          />
        </div>

        <div>
          <label htmlFor="phone" className="text-sm text-gray-500 mb-1 block">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="+27 82 000 0000"
            className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-yellow-400 focus:outline-none transition"
          />
        </div>

        <div>
          <label htmlFor="message" className="text-sm text-gray-500 mb-1 block">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Describe your electrical work requirements..."
            required
            className="w-full border-2 border-gray-200 p-3 rounded-lg h-32 focus:border-yellow-400 focus:outline-none transition resize-none"
          />
        </div>

        <Button type="submit" variant="dark" className="w-full uppercase tracking-wide">
          Submit Request
        </Button>
      </form>
    </div>
  );
}
