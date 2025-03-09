"use client";

import { useState } from "react";
import { ProductCarousel } from "../common/ProductCarousel";
import { SkincareScannerSlider } from "../common/SkincareScannerSlider";
import { SkinAnalysisSlider } from "../common/SkinAnalysisSlider";
import { SkinConditions } from "../common/SkinConditions";
import { FeatureTabs } from "../common/FeatureTabs";
import { ProgressGraph } from "../common/ProgressGraph";
import { FAQSection } from "./FAQSection";
import { SkincareMythsSection } from "./SkincareMythsSection";
import { SatisfactionSurvey } from "./SatisfactionSurvey";
import { BlogSection } from "./BlogSection";
import { Footer } from "../layout/Footer";
import { Logo } from "../common/Logo";
import { DiscoverSection } from "./DiscoverSection";

export function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="py-6 flex justify-between items-center">
          {/* Left buttons */}
          <div className="flex gap-2 p-1 bg-white rounded-full border">
            <button className="px-8 py-3 rounded-full bg-lime-200 text-base transition-colors">
              Commercial
            </button>
            <button className="px-8 py-3 rounded-full text-base hover:bg-gray-50 transition-colors">
              Business
            </button>
          </div>

          {/* Center logo */}
          <div className="flex-1 flex justify-center">
            <Logo />
          </div>

          {/* Right section */}
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full border flex items-center justify-center">
              <span className="text-xl">🌐</span>
            </div>
            <button className="px-8 py-3 rounded-full bg-lime-200 text-base">
              It's Scan-tastic Time
            </button>
          </div>
        </header>
        {/* Scan-tastic Section */}
        <section className="py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-marbley text-purple-400 mb-6">
            Give your skincare products
            <br />a Scan-tastic makeover! 🎉
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8 font-schibsted">
            With Our Advanced AI Product Scanner, Snap, Scan, and See What's
            Really In Your Products! Are they safe and sound for your skin?
            Let's find out!
          </p>
          <button className="bg-lime-200 hover:bg-lime-300 transition-colors px-8 py-3 rounded-full text-gray-700 font-medium">
            Scan Product Ingredients Now
          </button>
        </section>
        {/* Product Carousel */}
        <ProductCarousel />
        <DiscoverSection />
        <SkincareScannerSlider />
        <SkinAnalysisSlider />
        <SkinConditions />
        <FeatureTabs />
        <ProgressGraph />
        <FAQSection />
        <SkincareMythsSection />
        <SatisfactionSurvey />
        <BlogSection />
        <Footer />
      </div>
    </main>
  );
}
