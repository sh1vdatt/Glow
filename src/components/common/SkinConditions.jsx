"use client";

import React from "react";
import { motion } from "framer-motion";
import Psoriasis1 from "../../assets/sections/conditions/Psoriasis1.png";
import Psoriasis2 from "../../assets/sections/conditions/Psoriasis2.png";
import Psoriasis3 from "../../assets/sections/conditions/Psoriasis3.png";
import Psoriasis4 from "../../assets/sections/conditions/Psoriasis4.png";

export function SkinConditions() {
  const conditionsRow1 = [
    { type: "text", content: "Acne" },
    { type: "image", content: Psoriasis1 },
    { type: "text", content: "Rosacea" },
    { type: "image", content: Psoriasis2 },
  ];
  const conditionsRow2 = [
    { type: "text", content: "Scars" },
    { type: "text", content: "Eczema" },
    { type: "image", content: Psoriasis3 },
    { type: "text", content: "Dry skin" },
    { type: "text", content: "Whiteheads" },
  ];
  const conditionsRow3 = [
    { type: "text", content: "Inflamed Skin" },
    { type: "image", content: Psoriasis4 },
    { type: "text", content: "Allergic Skin" },
    { type: "text", content: "Moles" },
    { type: "text", content: "Pigmentation" },
  ];

  const renderConditionRow = (conditions, direction = "left") => {
    // Create enough copies for a smooth loop
    const duplicatedConditions = [
      ...conditions,
      ...conditions,
      ...conditions,
      ...conditions,
    ];

    return (
      <div className="relative h-16 mb-4 overflow-hidden">
        <motion.div
          className="flex gap-4 absolute"
          initial={{ x: direction === "left" ? "0%" : "-100%" }}
          animate={{ x: direction === "left" ? "-100%" : "0%" }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
          }}
        >
          {duplicatedConditions.map((condition, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 rounded-full flex items-center justify-center bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-colors cursor-pointer overflow-hidden"
              whileHover={{ scale: 1.05 }}
              style={{
                minWidth: condition.type === "text" ? "auto" : "180px",
                height: "60px",
              }}
            >
              {condition.type === "image" ? (
                <img
                  src={condition.content}
                  alt="Condition indicator"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <span className="text-gray-700 text-2xl font-light px-8 py-4 whitespace-nowrap">
                  {condition.content}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <section className="py-16 text-center bg-white">
      <h2 className="text-4xl md:text-5xl font-light text-purple-400 mb-12">
        Reveal the possible cheeky
        <br />
        skin mysteries
      </h2>
      <div className="relative max-w-full">
        {renderConditionRow(conditionsRow1, "left")}
        {renderConditionRow(conditionsRow2, "right")}
        {renderConditionRow(conditionsRow3, "left")}
      </div>
    </section>
  );
}
