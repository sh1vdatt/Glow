"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slide1 from "../../assets/sections/discover/1slide.png";
import slide2Main from "../../assets/sections/discover/2SlideA.png";
import slide2Badge from "../../assets/sections/discover/2SlideB.png";
import slide2Summary from "../../assets/sections/discover/2SlideC.png";
import slide3 from "../../assets/sections/discover/3SlideA.png";
import slide3b from "../../assets/sections/discover/3SlideB.png";
import slide4 from "../../assets/sections/discover/4SlideA.png";
import slide4b from "../../assets/sections/discover/4SlideB.png";
import slide5 from "../../assets/sections/discover/5Slide.gif";

function PhoneFrame({ imageUrl, altText, overlays }) {
  return (
    <div className="relative w-[280px] h-[560px] mx-auto">
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-full rounded-[32px] transition-opacity duration-500"
      />
      {overlays &&
        overlays.map((overlay, index) => (
          <div
            key={index}
            className={`${overlay.className} transition-opacity duration-500`}
          >
            {overlay.type === "image" ? (
              <img
                src={overlay.src}
                alt={overlay.alt || "overlay"}
                className={`${
                  overlay.imageClassName || "w-full h-auto"
                } transition-opacity duration-500`}
              />
            ) : (
              <div className={overlay.contentClassName}>{overlay.content}</div>
            )}
          </div>
        ))}
    </div>
  );
}

function SliderNavigation({ activeSlide, totalSlides, onPrev, onNext }) {
  const isFirstSlide = activeSlide === 0;
  const isLastSlide = activeSlide === totalSlides - 1;

  return (
    <div className="flex gap-2">
      <button
        onClick={onPrev}
        disabled={isFirstSlide}
        className={`h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
          isFirstSlide
            ? "bg-gray-100 cursor-not-allowed"
            : "bg-lime-100 hover:bg-lime-200"
        }`}
      >
        <ChevronLeft
          size={20}
          className={isFirstSlide ? "text-gray-400" : "text-gray-700"}
        />
      </button>
      <button
        onClick={onNext}
        disabled={isLastSlide}
        className={`h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
          isLastSlide
            ? "bg-gray-100 cursor-not-allowed"
            : "bg-lime-100 hover:bg-lime-200"
        }`}
      >
        <ChevronRight
          size={20}
          className={isLastSlide ? "text-gray-400" : "text-gray-700"}
        />
      </button>
    </div>
  );
}

export function SkincareScannerSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalSlides = 5;

  const slides = [
    {
      id: 1,
      title: "1. Snap Your Product Labels",
      content:
        "Quickly capture your skincare labels with your device and get instant feedback on ingredients and their effects. It's like having a skincare genie in your pocket, helping you make smart choices for your glowing skin!",
      src: slide1,
      altText: "Phone showing skincare product label scanning",
      overlays: [],
    },
    {
      id: 2,
      title: "2. Peek Before You Pamper: Know Your Product Before You Apply",
      content:
        "Grab your fun-filled report! It includes your skincare product's score and a neat summary analysis, helping you figure out just how right it is for your skin care needs.",
      src: slide2Main,
      altText: "Phone showing scan result",
      overlays: [
        {
          type: "image",
          src: slide2Badge,
          alt: "Product score badge",
          className: "absolute bottom-36 left-20",
          imageClassName: "w-[200px] h-auto",
        },
        {
          type: "image",
          src: slide2Summary,
          alt: "Product summary",
          className: "",
          imageClassName:
            "w-[200px] h-full relative bottom-16 left-6 -translate-y-2 border rounded-xl",
        },
      ],
    },
    {
      id: 3,
      title: "3. Peep your product's ingredient analysis now",
      content:
        "Discover the secrets behind your favorite products with our ingredient analysis...",
      src: null,
      altText: null,
      overlays: [
        {
          type: "image",
          src: slide3,
          alt: "Ingredient analysis card",
          className: "rounded-xl",
          imageClassName:
            "w-[250px] h-auto inline-block align-top absolute bottom-20 z-10  ",
        },
        {
          type: "image",
          src: slide3b,
          alt: "More ingredient details",
          imageClassName:
            "w-[250px] h-auto inline-block align-top relative bottom-[0px] left-[230px]",
        },
      ],
    },
    {
      id: 4,
      title: "4. Find Your Perfect Match!",
      content:
        "Get personalized product suggestions that cater specifically to your needs, ensuring you effortlessly discover the ideal skincare goodies that align with your preferences and enhance your beauty routine.",
      src: slide4,
      altText: "Phone showing skincare product matching",
      overlays: [
        {
          type: "image",
          src: slide4b,
          alt: "Product score badge",
          className: " ",
          imageClassName:
            "w-[250px] h-auto rounded-xl absolute bottom-4 left-16 transform -translate-x-1/2",
        },
      ],
    },
    {
      id: 5,
      title: "5. Share the result with your favourite people",
      content:
        "See how you can effortlessly share the product analysis with your friends and family! What you waiting for?",
      src: slide5,
      className: "absolute w-full h-full",
      altText: "Phone showing sharing skincare analysis",
      overlays: [],
    },
  ];

  const nextSlide = () => {
    if (activeSlide >= totalSlides - 1) return; // Prevent going beyond last slide
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSlide((prev) => prev + 1);
      setIsTransitioning(false);
    }, 300);
  };

  const prevSlide = () => {
    if (activeSlide <= 0) return; // Prevent going before first slide
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSlide((prev) => prev - 1);
      setIsTransitioning(false);
    }, 300);
  };

  const currentSlide = slides[activeSlide];

  return (
    <section className="py-16 flex flex-col md:flex-row gap-8 items-center">
      <div className="md:w-1/2">
        <div
          className={`relative mx-auto transition-opacity duration-500 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          {currentSlide.src && (
            <PhoneFrame
              imageUrl={currentSlide.src}
              altText={currentSlide.altText}
              overlays={[]}
            />
          )}
          {currentSlide.overlays &&
            currentSlide.overlays.map((overlay, index) => (
              <div
                key={index}
                className={`${
                  overlay.className
                } transition-opacity duration-500 ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                <img
                  src={overlay.src}
                  alt={overlay.alt}
                  className={`${overlay.imageClassName} transition-opacity duration-500`}
                />
              </div>
            ))}
        </div>
      </div>
      <div
        className={`md:w-1/2 transition-opacity duration-500 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {activeSlide === 0 && (
          <h2 className="text-3xl md:text-4xl font-marbley text-purple-400 mb-6">
            Curious about how the
            <br />
            skincare product scanner
            <br />
            works its magic? ✨🔍
          </h2>
        )}
        <div className="mb-8">
          <h3 className="text-xl text-purple-400 mb-4 font-schibsted">
            {currentSlide.title}
          </h3>
          <p className="text-gray-700 font-schibsted leading-relaxed">
            {currentSlide.content}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <SliderNavigation
            activeSlide={activeSlide}
            totalSlides={totalSlides}
            onPrev={prevSlide}
            onNext={nextSlide}
          />
        </div>
      </div>
    </section>
  );
}
