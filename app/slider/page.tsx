"use client"

import { useState, useRef, useEffect } from "react";

const Slider = ({
  beforeImage,
  afterImage,
}: {
  beforeImage: string;
  afterImage: string;
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const touchX = e.touches[0].clientX - rect.left;
      const position = Math.max(0, Math.min(100, (touchX / rect.width) * 100));
      setSliderPosition(position);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("touchmove", handleTouchMove);
    }
    return () => {
      if (container) {
        container.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, []);

  return (
    <div
      className="relative w-full max-w-lg h-72 overflow-hidden"
      ref={containerRef}
    >
      {/* Before Image */}
      <img
        src={beforeImage}
        alt="Before"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      {/* After Image */}
      <img
        src={afterImage}
        alt="After"
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
      />
      {/* Slider Input */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="absolute bottom-2 left-0 right-0 w-full appearance-none bg-transparent pointer-events-auto z-10"
      />
      {/* Vertical Divider Line */}
      <div
        className="absolute top-0 bottom-0"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="h-full w-[2px] bg-white z-20"></div>
      </div>
    </div>
  );
};

const BlogPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-10">
      {/* Blog Title */}
      <h1 className="text-4xl font-bold text-center mb-10">
        The Beauty of Transformation
      </h1>

      {/* First Section - Slider Left */}
      <div className="flex flex-col lg:flex-row items-center mb-16">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <Slider
            beforeImage="/assets/food.jpg"
            afterImage="/assets/event.jpg"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8">
          <p className="text-justify">
            This image shows the transformative power of color correction and
            lighting adjustment. The natural landscape reveals a whole new depth
            when post-processing techniques are applied.
          </p>
        </div>
      </div>

      {/* Second Section - Slider Right */}
      <div className="flex flex-col lg:flex-row-reverse items-center mb-16">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <Slider
            beforeImage="/assets/food.jpg"
            afterImage="/assets/event.jpg"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:pr-8">
          <p className="text-justify">
            Portrait photography is elevated to new levels when skin tones and
            contrast are enhanced. Subtle tweaks can make the subject glow while
            keeping the original essence intact.
          </p>
        </div>
      </div>

      {/* Third Section - Slider Left */}
      <div className="flex flex-col lg:flex-row items-center mb-16">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <Slider
            beforeImage="/assets/food.jpg"
            afterImage="/assets/event.jpg"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8">
          <p className="text-justify">
            Even a seemingly ordinary photo can be transformed into an
            extraordinary piece with the right tools. This shows how
            professional-grade editing can bring new life to a simple
            composition.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
