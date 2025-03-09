import { useState, useRef, useEffect } from "react";

export function ProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  const productImages = [
    {
      id: 1,
      src: "/src/assets/sections/scanner/1.png",
      alt: "Skincare product image 1",
    },
    {
      id: 2,
      src: "/src/assets/sections/scanner/2.png",
      alt: "Skincare product image 2",
    },
    {
      id: 3,
      src: "/src/assets/sections/scanner/3.png",
      alt: "Skincare product image 3",
    },
    {
      id: 4,
      src: "/src/assets/sections/scanner/4.png",
      alt: "Skincare product image 4",
    },
    {
      id: 5,
      src: "/src/assets/sections/scanner/5.png",
      alt: "Skincare product image 5",
    },
    {
      id: 6,
      src: "/src/assets/sections/scanner/6.png",
      alt: "Skincare product image 6",
    },
    {
      id: 7,
      src: "/src/assets/sections/scanner/7.png",
      alt: "Skincare product image 7",
    },
    {
      id: 8,
      src: "/src/assets/sections/scanner/8.png",
      alt: "Skincare product image 8",
    },
    {
      id: 9,
      src: "/src/assets/sections/scanner/9.png",
      alt: "Skincare product image 9",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % productImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [productImages.length]);

  return (
    <div className="relative overflow-hidden py-8" ref={carouselRef}>
      <div
        className="flex gap-4 transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${activeIndex * (250 + 16)}px)`,
        }}
      >
        {productImages.map((image, index) => (
          <div
            key={image.id}
            className="relative flex-shrink-0 w-[250px] aspect-square rounded-3xl overflow-hidden bg-white shadow-sm transition-all duration-300 group"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />

            {hoverIndex === index && (
              <img
                src="/src/assets/sections/scanner/ScanProduct1.png"
                alt="Scan overlay"
                className="absolute inset-0 w-[110%] h-[110%] object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
