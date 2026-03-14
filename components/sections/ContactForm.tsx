"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { COMPANY } from "@/lib/constants";
import Button from "@/components/ui/Button";

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    // Create mailto link with form data
    const subject = encodeURIComponent(`Quote Request from ${data.fullName}`);
    const body = encodeURIComponent(
      `Name: ${data.fullName}\nEmail: ${data.email}\nPhone: ${data.phone || "Not provided"}\n\nMessage:\n${data.message}`
    );
    
    // Open email client with pre-filled data
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
    
    setIsSubmitting(false);
    setSubmitStatus("success");
    
    // Reset form after successful submission
    e.currentTarget.reset();
    
    // Reset status after 5 seconds
    setTimeout(() => setSubmitStatus("idle"), 5000);
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

        {submitStatus === "success" && (
          <div className="bg-green-100 text-green-800 p-3 rounded-lg text-sm">
            Your email client has been opened. Please send the email to complete your request.
          </div>
        )}

        <Button 
          type="submit" 
          variant="dark" 
          className="w-full uppercase tracking-wide"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Opening Email..." : "Submit Request"}
        </Button>
      </form>
    </div>
  );
}
