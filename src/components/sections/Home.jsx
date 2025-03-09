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
import { DiscoverSection } from "./DiscoverSection";
import { Logo } from "../common/Logo";

export function Home() {
  return (
    <main className="min-h-screen">
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
              It's Scanning Time
            </button>
          </div>
        </header>

        <section className="py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-purple-400 mb-4">
            Give your skincare products
            <br />a Scan-tastic makeover! 🎉
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 mb-6">
            With Our Advanced AI Product Scanner, Snap, Scan, and See What's
            Really In Your Products! Are they safe and sound for your skin?
            Let's find out!
          </p>
          <button className="bg-lime-200 hover:bg-lime-300 transition-colors px-6 py-2 rounded-full text-gray-700 font-medium">
            Scan Product Ingredients Now
          </button>
        </section>

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

function SkincareScannerPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="py-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button className="px-6 py-2 rounded-full bg-lime-200 text-sm font-medium">
            Commercial
          </button>
          <button className="px-6 py-2 rounded-full text-sm font-medium">
            Business
          </button>
        </div>
        <div className="flex items-center">
          <div className="text-3xl font-bold">
            <span className="font-marbley">glow</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full border flex items-center justify-center">
            <span className="text-xl">🌐</span>
          </div>
          <button className="px-6 py-2 rounded-full bg-lime-200 text-sm font-medium">
            It's Scanning Time
          </button>
        </div>
      </header>

      <section className="py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-marbley text-purple-400 mb-4">
          Give your skincare products
          <br />a Scan-tastic makeover! 🎉
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 mb-6 font-schibsted">
          With Our Advanced AI Product Scanner, Snap, Scan, and See What's
          Really In Your Products! Are they safe and sound for your skin? Let's
          find out!
        </p>
        <button className="bg-lime-200 hover:bg-lime-300 transition-colors px-6 py-2 rounded-full text-gray-700 font-medium">
          Scan Product Ingredients Now
        </button>
      </section>

      <ProductCarousel />

      <section className="py-16 relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="h-24 w-24 bg-lime-200 rounded-full absolute -z-10"></div>
            <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center relative left-4 top-4">
              <img
                src="/placeholder.svg?height=60&width=60"
                alt="Profile"
                className="rounded-full w-full h-full"
              />
            </div>
          </div>
        </div>
        <h2 className="text-5xl md:text-6xl font-marbley text-purple-400 mb-4 transition-opacity duration-700 fade-in-section">
          Discover Your
          <br />
          Youthful Glow
          <br />
          with Personalised Skincare
        </h2>
        <div className="mt-4 text-purple-300">
          <p className="font-schibsted">Powered by AI.</p>
          <p className="font-schibsted">Backed by Science.</p>
        </div>
      </section>

      <SkincareScannerSlider />
      <SkinAnalysisSlider />
    </div>
  );
}
