import { useState, useRef, useEffect } from "react";

export function ProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
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
