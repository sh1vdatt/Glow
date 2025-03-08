import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function SkinAnalysisSlider() {
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
              src=""
              alt="Phone showing facial skin analysis"
              className="object-cover w-full h-full rounded-[32px]"
            />
          </div>
        </div>
      </div>
      <div className="md:w-1/2 transition-opacity duration-700 fade-in-section">
        <h2 className="text-3xl md:text-4xl font-light text-purple-400 mb-6">
          How does our fabulous
          <br />
          facial and body skin
          <br />
          analysis work?
        </h2>
        <div className="mb-8">
          <h3 className="text-xl text-purple-400 mb-4">
            1. Upload Your Photos or Take a Snap
          </h3>
          <p className="text-gray-700">
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
