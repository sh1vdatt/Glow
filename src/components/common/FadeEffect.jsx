"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FadeEffect() {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    const fadeElements = document.querySelectorAll(".fade-in-section");
    fadeElements.forEach((element) => observer.observe(element));

    return () => {
      fadeElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return null;
}

function ProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const [showScanMark, setShowScanMark] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  const productImages = Array.from({ length: 9 }, (_, i) => ({
    id: i,
    alt: `Skincare product image ${i + 1}`,
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % productImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [productImages.length]);

  return (
    <div className="relative overflow-hidden" ref={carouselRef}>
      <div className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
        {productImages.map((image, index) => (
          <div
            key={image.id}
            className="relative flex-shrink-0 w-[200px] h-[160px] rounded-lg overflow-hidden border border-gray-200 snap-center"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <img
              src="/placeholder.svg?height=160&width=200"
              alt={image.alt}
              className="object-cover w-full h-full"
            />
            {hoverIndex === index && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="h-12 w-12 bg-white/80 rounded-full flex items-center justify-center">
                  <div className="h-8 w-8 border-2 border-gray-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">SCAN</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function SkincareScannerSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 5;

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="py-16 flex flex-col md:flex-row gap-8 items-center">
      <div className="md:w-1/2">
        <div className="relative w-[280px] h-[560px] mx-auto">
          <div className="absolute inset-0 bg-black rounded-[40px] overflow-hidden border-8 border-black">
            <div className="absolute top-0 left-0 right-0 h-6 bg-black flex items-center justify-center">
              <div className="w-20 h-4 bg-black rounded-b-lg"></div>
            </div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-07%20at%203.02.08%E2%80%AFPM-TkFB7FUTQVn3wND4YKaYK8ORcjNRJP.png"
              alt="Phone showing skincare product label scanning"
              width={280}
              height={560}
              className="object-cover w-full h-full rounded-[32px]"
            />
          </div>
        </div>
      </div>
      <div className="md:w-1/2 transition-opacity duration-700 fade-in-section">
        <h2 className="text-3xl md:text-4xl font-marbley text-purple-400 mb-6">
          Curious about how the
          <br />
          skincare product scanner
          <br />
          works its magic? ✨🔍
        </h2>
        <div className="mb-8">
          <h3 className="text-xl text-purple-400 mb-4 font-schibsted">
            1. Snap Your Product Labels
          </h3>
          <p className="text-gray-700 font-schibsted">
            Quickly capture your skincare labels with your device and get
            instant feedback on ingredients and their effects. It's like having
            a skincare genie in your pocket, helping you make smart choices for
            your glowing skin!
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="h-10 w-10 rounded-full bg-lime-100 flex items-center justify-center"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="h-10 w-10 rounded-full bg-lime-100 flex items-center justify-center"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        <div className="mt-4 flex gap-1">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full ${
                index === activeSlide ? "w-8 bg-purple-400" : "w-4 bg-gray-200"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkinAnalysisSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 3;

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="py-16 flex flex-col md:flex-row-reverse gap-8 items-center">
      <div className="md:w-1/2">
        <div className="relative w-[280px] h-[560px] mx-auto">
          <div className="absolute inset-0 bg-black rounded-[40px] overflow-hidden border-8 border-black">
            <div className="absolute top-0 left-0 right-0 h-6 bg-black flex items-center justify-center">
              <div className="w-20 h-4 bg-black rounded-b-lg"></div>
            </div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-07%20at%203.04.10%E2%80%AFPM-K3S2pc4OBLWo6CgHhg2weSZXkyBtu7.png"
              alt="Phone showing facial skin analysis"
              width={280}
              height={560}
              className="object-cover w-full h-full rounded-[32px]"
            />
          </div>
        </div>
      </div>
      <div className="md:w-1/2 transition-opacity duration-700 fade-in-section">
        <h2 className="text-3xl md:text-4xl font-marbley text-purple-400 mb-6">
          How does our fabulous
          <br />
          facial and body skin
          <br />
          analysis work?
        </h2>
        <div className="mb-8">
          <h3 className="text-xl text-purple-400 mb-4 font-schibsted">
            1. Upload Your Photos or Take a Snap
          </h3>
          <p className="text-gray-700 font-schibsted">
            Beauty and Brains! Our AI, trained on over 75,000 images, uses its
            smarty-pants tech to analyze your skin with 99% accuracy.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="h-10 w-10 rounded-full bg-lime-100 flex items-center justify-center"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="h-10 w-10 rounded-full bg-lime-100 flex items-center justify-center"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        <div className="mt-4 flex gap-1">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full ${
                index === activeSlide ? "w-8 bg-purple-400" : "w-4 bg-gray-200"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
