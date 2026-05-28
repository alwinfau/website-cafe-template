"use client";

import {
  ArrowRight01Icon,
  Facebook01Icon,
  InstagramIcon,
  Location01Icon,
  Mail01Icon,
  TelephoneIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Our Menu", href: "#menu" },
  { label: "About Us", href: "#about" },
  { label: "Locations", href: "#contact" },
  { label: "Wholesale", href: "#" },
];

const socials = [
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: TwitterIcon, label: "Twitter", href: "#" },
  { icon: Facebook01Icon, label: "Facebook", href: "#" },
  { icon: YoutubeIcon, label: "YouTube", href: "#" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  }

  return (
    <footer id="contact" className="bg-zinc-950 text-white">
      {/* Newsletter banner */}
      <div
        className="border-b border-white/10"
        style={{
          background:
            "linear-gradient(135deg, rgba(241,90,36,0.15) 0%, rgba(241,90,36,0.04) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-xl font-black tracking-tight">
              Get 15% off your first order
            </h3>
            <p className="text-sm text-white/50 mt-1">
              Join 10,000+ subscribers for weekly brews and exclusive offers.
            </p>
          </div>
          {subscribed ? (
            <div className="text-sm text-cafe font-semibold">
              ✓ You&apos;re subscribed! Check your inbox.
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex items-center gap-2 w-full md:w-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="h-10 flex-1 md:w-64 rounded-full bg-white/10 border border-white/20 px-4 text-sm text-white placeholder:text-white/30 outline-none focus:border-cafe transition-colors"
              />
              <Button
                type="submit"
                className="bg-cafe hover:bg-cafe-light text-white rounded-full h-10 px-5 text-xs font-bold shrink-0"
              >
                Subscribe
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={14}
                  strokeWidth={2.5}
                />
              </Button>
            </form>
          )}
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div>
              <div className="flex items-center text-xl font-black tracking-tight">
                Bold Brew
                <span className="text-cafe text-2xl leading-none ml-0.5">
                  •
                </span>
              </div>
              <p className="text-xs text-white/40 mt-2 leading-relaxed max-w-[200px]">
                Pure caffeine, nothing extra. Craft cold brew for those who
                demand more from their cup.
              </p>
            </div>
            <div className="flex items-center gap-3">
              {socials.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="size-8 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-colors"
                >
                  <HugeiconsIcon icon={icon} size={14} strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-white/40 mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-white/40 mb-5">
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <div className="text-cafe mt-0.5 shrink-0">
                  <HugeiconsIcon
                    icon={Location01Icon}
                    size={15}
                    strokeWidth={2}
                  />
                </div>
                <p className="text-sm text-white/60 leading-relaxed">
                  42 Brewhouse Lane,
                  <br />
                  San Francisco, CA 94103
                </p>
              </li>
              <li className="flex items-center gap-3">
                <div className="text-cafe shrink-0">
                  <HugeiconsIcon
                    icon={TelephoneIcon}
                    size={15}
                    strokeWidth={2}
                  />
                </div>
                <a
                  href="tel:+14155550142"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  +1 (415) 555-0142
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="text-cafe shrink-0">
                  <HugeiconsIcon icon={Mail01Icon} size={15} strokeWidth={2} />
                </div>
                <a
                  href="mailto:hello@boldbrew.co"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  hello@boldbrew.co
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-white/40 mb-5">
              Opening Hours
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { day: "Mon – Fri", time: "7:00 AM – 9:00 PM" },
                { day: "Saturday", time: "8:00 AM – 10:00 PM" },
                { day: "Sunday", time: "9:00 AM – 8:00 PM" },
              ].map(({ day, time }) => (
                <li key={day} className="flex flex-col gap-0.5">
                  <p className="text-xs font-semibold text-white/80">{day}</p>
                  <p className="text-xs text-white/40">{time}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/[0.07] px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[0.7rem] text-white/30">
            © 2026 Bold Brew. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Use", href: "/terms" },
              { label: "Cookie Policy", href: "/cookies" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-[0.7rem] text-white/30 hover:text-white/60 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
