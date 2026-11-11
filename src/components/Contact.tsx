"use client";

import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  MessageCircle, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle,
  ArrowUpRight
} from "lucide-react";
import { personalInfo } from "@/data/projects";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    // Build WhatsApp URL with full form details
    const waText = encodeURIComponent(
      `*New Portfolio Inquiry - Muhammad Saad*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `🎯 *Subject:* ${formData.subject}\n\n` +
      `💬 *Message:*\n${formData.message}`
    );
    const directWhatsAppUrl = `https://wa.me/923225425081?text=${waText}`;

    try {
      // 1. Also record in backend API
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).catch(() => {});

      // 2. Open WhatsApp directly with all details pre-filled!
      window.open(directWhatsAppUrl, "_blank");

      setStatus("success");
      setFeedback("Opening WhatsApp with your details pre-filled! You can also chat directly.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      window.open(directWhatsAppUrl, "_blank");
      setStatus("success");
      setFeedback("Opening WhatsApp directly...");
    }
  };

  const triggerMailtoFallback = () => {
    const subjectEncoded = encodeURIComponent(formData.subject || "Creative Project Inquiry");
    const bodyEncoded = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
  };

  return (
    <section id="contact" className="py-24 relative bg-bgSecondary/40 border-t border-borderDark/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cardDark border border-borderDark text-xs font-mono font-bold text-accent uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>Get in Touch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primaryText tracking-tight">
            Have a Project or Opportunity in Mind?
          </h2>

          <p className="text-secondaryText text-base sm:text-lg">
            I&apos;m always interested in creative opportunities, collaborations, and projects where I can learn, contribute, and create meaningful digital content.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info Cards & WhatsApp (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-4">
              {/* Email Card */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="group p-5 rounded-2xl bg-cardDark border border-borderDark hover:border-accent transition-all duration-300 flex items-start gap-4 block"
              >
                <div className="w-12 h-12 rounded-xl bg-bgDark border border-borderDark group-hover:border-accent flex items-center justify-center text-accent shrink-0 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-secondaryText block">
                    Direct Email
                  </span>
                  <span className="text-sm sm:text-base font-bold text-primaryText group-hover:text-accent transition-colors block">
                    {personalInfo.email}
                  </span>
                  <span className="text-xs text-secondaryText">
                    Fast response within 24 hours
                  </span>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${personalInfo.phone}`}
                className="group p-5 rounded-2xl bg-cardDark border border-borderDark hover:border-accent transition-all duration-300 flex items-start gap-4 block"
              >
                <div className="w-12 h-12 rounded-xl bg-bgDark border border-borderDark group-hover:border-accent flex items-center justify-center text-accent shrink-0 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-secondaryText block">
                    Phone &amp; Call
                  </span>
                  <span className="text-sm sm:text-base font-bold text-primaryText group-hover:text-accent transition-colors block font-mono">
                    {personalInfo.phoneFormatted}
                  </span>
                  <span className="text-xs text-secondaryText">
                    Available during business hours (PKT)
                  </span>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-cardDark border border-borderDark hover:border-sky-500 transition-all duration-300 flex items-start justify-between p-5 block"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-bgDark border border-borderDark group-hover:border-sky-500 flex items-center justify-center text-sky-400 shrink-0 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-secondaryText block">
                      LinkedIn Profile
                    </span>
                    <span className="text-sm sm:text-base font-bold text-primaryText group-hover:text-sky-400 transition-colors block">
                      linkedin.com/in/muhammadsaad023
                    </span>
                    <span className="text-xs text-secondaryText">
                      Professional endorsements &amp; network
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-secondaryText group-hover:text-sky-400 transition-colors" />
              </a>

              {/* Location Card */}
              <div className="p-5 rounded-2xl bg-cardDark border border-borderDark flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-bgDark border border-borderDark flex items-center justify-center text-accent shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-secondaryText block">
                    Location
                  </span>
                  <span className="text-sm sm:text-base font-bold text-primaryText block">
                    {personalInfo.location}
                  </span>
                  <span className="text-xs text-secondaryText">
                    Open to remote worldwide &amp; local roles
                  </span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action Button */}
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-bgDark font-extrabold text-sm uppercase tracking-wider transition-all duration-200 shadow-lg shadow-emerald-950/50 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5 fill-bgDark" />
              <span>Chat on WhatsApp Directly</span>
            </a>

          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-cardDark border border-borderDark shadow-card">
              <div className="mb-6 space-y-1">
                <h3 className="text-xl font-bold text-primaryText">
                  Send a Direct Inquiry
                </h3>
                <p className="text-xs text-secondaryText">
                  Fill in your details below and I will respond to your message promptly.
                </p>
              </div>

              {status === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feedback}</span>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-rose-950/80 border border-rose-500/40 text-rose-200 text-xs flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>{feedback}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-mono uppercase tracking-wider text-secondaryText"
                    >
                      Your Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-bgDark border border-borderDark focus:border-accent text-primaryText placeholder:text-zinc-600 text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-mono uppercase tracking-wider text-secondaryText"
                    >
                      Your Email <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-bgDark border border-borderDark focus:border-accent text-primaryText placeholder:text-zinc-600 text-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="subject"
                    className="text-xs font-mono uppercase tracking-wider text-secondaryText"
                  >
                    Subject <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Content Executive Role / Promotional Video Project"
                    className="w-full px-4 py-3 rounded-xl bg-bgDark border border-borderDark focus:border-accent text-primaryText placeholder:text-zinc-600 text-sm focus:outline-none transition-colors"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-mono uppercase tracking-wider text-secondaryText"
                  >
                    Message Details <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your brand, requirements, campaign timeline, or position details..."
                    className="w-full px-4 py-3 rounded-xl bg-bgDark border border-borderDark focus:border-accent text-primaryText placeholder:text-zinc-600 text-sm focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Action Buttons: WhatsApp & Email */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex-1 inline-flex items-center justify-center gap-2.5 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-bgDark font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg shadow-emerald-950/40 disabled:opacity-50 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <MessageCircle className="w-4 h-4 fill-bgDark" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={triggerMailtoFallback}
                    className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-cardDark border border-borderDark text-primaryText hover:border-accent text-xs font-semibold uppercase tracking-wider transition-all hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Mail className="w-4 h-4 text-accent" />
                    <span>Send via Email</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
