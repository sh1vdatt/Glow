"use client";

import { motion } from "framer-motion";

export function SkinConditions() {
  const conditions = [
    "Acne",
    "Rosacea",
    "Eczema",
    "Dry skin",
    "Allergic Skin",
    "Moles",
    "Pigmentation",
  ];

  return (
    <section className="py-16 text-center">
      <h2 className="text-4xl md:text-5xl font-marbley text-purple-400 mb-12">
        Reveal the possible cheeky
        <br />
        skin mysteries
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {conditions.map((condition) => (
          <button
            key={condition}
            className="px-6 py-2 bg-purple-50 rounded-full text-purple-400 hover:bg-purple-100 transition-colors"
          >
            {condition}
          </button>
        ))}
      </div>
    </section>
  );
}
