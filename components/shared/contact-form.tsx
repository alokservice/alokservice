"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/data/site-config";
import { services } from "@/data/services";

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://formsubmit.co/ajax/alokservicebd@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New Inquiry from ${formData.name} - ${siteConfig.name}`,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service || "Not specified",
          message: formData.message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", phone: "", email: "", service: "", message: "" });
      }
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-brand-800 mb-2">
          Thank You!
        </h3>
        <p className="text-gray-500 mb-6">
          We&apos;ve received your inquiry. Our team will contact you shortly.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input
          id="name"
          name="name"
          label="Full Name *"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          id="phone"
          name="phone"
          label="Phone Number *"
          type="tel"
          placeholder="+880 1601 701865"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input
          id="email"
          name="email"
          label="Email Address"
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
        />
        <div className="space-y-1.5">
          <label
            htmlFor="service"
            className="block text-sm font-medium text-brand-800"
          >
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-brand-400 transition-all duration-200"
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <Textarea
        id="message"
        name="message"
        label="Your Message *"
        placeholder="Tell us about your requirements..."
        value={formData.message}
        onChange={handleChange}
        required
      />

      <Button
        type="submit"
        variant="accent"
        size="lg"
        className="w-full"
        disabled={loading}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send className="w-4 h-4" />
            Send Message
          </span>
        )}
      </Button>

      <p className="text-xs text-gray-400 text-center">
        Your information is secure. We&apos;ll never share your details.
      </p>
    </form>
  );
}
