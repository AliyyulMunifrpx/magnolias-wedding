"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// 1. Parent Variant: Mengontrol pemicu viewport dan stagger delay antar elemen
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// 2. Child Variant: Format clipPath konsisten
const itemVariants = {
  hidden: {
    clipPath: "inset(100% 0% 0% 0%)",
    y: 24,
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export default function PackagesSection() {
  const packages = [
    {
      name: "WO ONLY PACKAGE",
      tier: "Essential Tier",
      price: "IDR 3.5 Million",
      originalPrice: "IDR 4 Million",
      subtitle:
        "Affordable and practical solution specifically for Wedding Organizer team coordination on the event day.",
      isPopular: false,
      features: [
        "Maximum 500 guests or 250 invitations",
        "Maximum event duration of 8 hours",
        "5-6 Crew members",
        "Unlimited Event Consultation",
        "Free Handbouquet, Guest Book, & Confetti",
      ],
    },
    {
      name: "LAVENDER PACKAGE",
      tier: "Signature Tier",
      price: "IDR 6.6 Million",
      originalPrice: "IDR 7.6 Million",
      subtitle:
        "Complete WO package featuring acoustic entertainment & event supporting equipment.",
      isPopular: true,
      features: [
        "5-6 Crew Wedding Organizer",
        "Entertainment (1 Singer + 1 Keyboardist)",
        "MC (Holy Matrimony / Akad - Reception)",
        "Free (WCC) Wedding Content Creator",
        "Free IDR 1 Million Cashback",
      ],
    },
    {
      name: "JASMINE PACKAGE",
      tier: "Bespoke Tier",
      price: "IDR 10 Million",
      originalPrice: "IDR 11 Million",
      subtitle:
        "Premium complete package with Full Band entertainment and complimentary gift boxes.",
      isPopular: false,
      features: [
        "5-6 Crew Wedding Organizer",
        "Entertainment (Full Band 6-7 personnel)",
        "MC (Holy Matrimony / Akad - Reception)",
        "Free (WCC) Wedding Content Creator",
        "Free Gift / Dowry Box (max 8 boxes)",
        "Free IDR 1 Million Cashback",
      ],
    },
  ];

  return (
    <motion.div
      className="w-full bg-primary text-second2 px-4 md:px-8 pt-24 pb-8 flex flex-col gap-8 md:gap-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      {/* HEADER SECTION */}
      <motion.h2
        variants={itemVariants}
        className="text-3xl md:text-5xl font-normal text-second text-center"
      >
        Curated Packages
      </motion.h2>

      {/* PACKAGES GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-stretch">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`relative flex flex-col justify-between p-4 md:p-8 bg-second border transition-all duration-500 gap-8 overflow-hidden ${
              pkg.isPopular
                ? "border-second2 shadow-2xl lg:-translate-y-4"
                : "border-second2"
            }`}
          >
            {/* TAG HIGHLIGHT UNTUK PAKET FAVORIT */}
            {pkg.isPopular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-second2 text-second font-sans text-xs font-bold uppercase tracking-widest px-4 py-2 z-10">
                Most Preferred
              </div>
            )}

            {/* KONTEN ATAS */}
            <div className="flex flex-col gap-8 pt-8">
              <div className="flex flex-col gap-4">
                <span className="font-serif text-xs text-second2 uppercase tracking-widest">
                  {pkg.tier}
                </span>
                <h3 className="font-serif text-2xl text-second2 font-normal tracking-wide">
                  {pkg.name}
                </h3>
              </div>

              {/* HARGA PAKET */}
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-3xl font-bold text-second2">
                  {pkg.price}
                </span>
                <span className="font-sans text-sm line-through text-second2">
                  {pkg.originalPrice}
                </span>
              </div>

              <p className="font-sans text-sm text-second2 leading-relaxed min-h-[48px]">
                {pkg.subtitle}
              </p>

              <div className="w-full h-px bg-second2" />

              {/* FITUR PAKET */}
              <ul className="flex flex-col gap-4 font-sans text-xs lg:text-sm text-second2">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-4">
                    <span className="text-second2 mt-1 text-xs">✦</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* TOMBOL INQUIRE / CTA */}
            <Link
              href="#contact"
              className={`w-full py-4 text-center font-sans text-xs uppercase tracking-widest transition-all duration-300 block ${
                pkg.isPopular
                  ? "bg-second2 text-second font-semibold hover:opacity-50"
                  : "border border-second2 text-second2 hover:opacity-50"
              }`}
            >
              Inquire Package
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
