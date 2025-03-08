"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tab } from "@headlessui/react";
import { Clock, ShoppingCart, Microscope, Brain } from "lucide-react";

export function FeatureTabs() {
  const [selectedTab, setSelectedTab] = useState("scanner");

  const features = [
    {
      id: 1,
      title: "Ingredient Transparency",
      description: "Know exactly what you're applying to your skin and why.",
      color: "bg-pink-200",
      icon: Clock,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Backed by Science",
      description:
        "Analysis based on a database of over 1.5 million medical research studies and dermatology publications.",
      color: "bg-lime-200",
      icon: Microscope,
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Savvy Choices for Better, Safer Skincare",
      description: "Get unbiased, research-backed information you can trust.",
      color: "bg-blue-200",
      icon: Brain,
      image: "/placeholder.svg",
    },
    {
      id: 4,
      title: "Products Just a Tap Away",
      description:
        "Shop curated recommendations directly through our platform.",
      color: "bg-orange-200",
      icon: ShoppingCart,
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="py-16">
      <div className="flex justify-center space-x-4 mb-12">
        <button
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedTab === "scanner"
              ? "bg-lime-200 text-gray-900"
              : "bg-gray-100 text-gray-500 hover:bg-gray-200"
          }`}
          onClick={() => setSelectedTab("scanner")}
        >
          Product Scanner
        </button>
        <button
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedTab === "analysis"
              ? "bg-lime-200 text-gray-900"
              : "bg-gray-100 text-gray-500 hover:bg-gray-200"
          }`}
          onClick={() => setSelectedTab("analysis")}
        >
          Skin Analysis
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-marbley text-purple-400 text-center mb-8">
          {selectedTab === "scanner" ? (
            <>
              Play Detective and Find Out
              <br />
              What's in Your Skincare Mix
            </>
          ) : (
            <>
              Unlock the Secrets of
              <br />
              Your Skin 🔓
            </>
          )}
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {selectedTab === "scanner"
            ? "Unlock the secrets of your skincare products and understand exactly what you're applying to your skin."
            : "Our platform analyzes your unique skin profile and educates you on the scientific effects of each ingredient, ensuring you achieve your skincare goals with precision and understanding."}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`${feature.color} rounded-3xl p-6 transition-transform hover:scale-105`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-sm font-medium text-gray-600">
                  {String(feature.id).padStart(2, "0")}.
                </span>
                <feature.icon className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
