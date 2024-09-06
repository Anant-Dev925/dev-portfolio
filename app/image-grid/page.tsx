"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Download, Heart } from "lucide-react";

export default function Component() {
  const images = [
    {
      id: 1,
      src: "/assets/Baby.jpg",
      width: 300,
      height: 200,
      alt: "Mountain landscape",
      title: "Majestic Mountains",
      description: "A breathtaking view of snow-capped peaks at sunrise.",
    },
    {
      id: 2,
      src: "/assets/Baby.jpg",
      width: 400,
      height: 600,
      alt: "Dense forest",
      title: "Enchanted Forest",
      description:
        "Sunlight filtering through the leaves of an ancient woodland.",
    },
    // Add more image objects here
    {
      id: 3,
      src: "/assets/Baby.jpg",
      width: 600,
      height: 400,
      alt: "Ocean view",
      title: "Calm Waters",
      description: "A serene view of the ocean during golden hour.",
    },
    {
      id: 4,
      src: "/assets/Baby.jpg",
      width: 800,
      height: 600,
      alt: "Desert landscape",
      title: "Desert Dunes",
      description: "Vast, golden dunes stretching towards the horizon.",
    },
    // Add as many as needed
  ];

  const [likedImages, setLikedImages] = useState<number[]>([]);

  useEffect(() => {
    const storedLikes = localStorage.getItem("likedImages");
    if (storedLikes) {
      setLikedImages(JSON.parse(storedLikes));
    }
  }, []);

  const toggleLike = (id: number) => {
    const newLikedImages = likedImages.includes(id)
      ? likedImages.filter((imageId) => imageId !== id)
      : [...likedImages, id];
    setLikedImages(newLikedImages);
    localStorage.setItem("likedImages", JSON.stringify(newLikedImages));
  };

  const downloadImage = (src: string, title: string) => {
    fetch(src)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = `${title}.jpg`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(() => console.error("Error downloading image"));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">
        Mixed Orientation Nature Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className={`group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:z-10 hover:scale-105
              ${image.width > image.height ? "md:col-span-2" : ""}`}
          >
            {/* Updated Image Container */}
            <div className="relative w-full h-0 pb-[56.25%]">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h2 className="text-xl font-bold mb-2">{image.title}</h2>
                <p className="text-sm">{image.description}</p>
              </div>
            </div>

            {/* Download and Like Buttons */}
            <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex flex-col space-y-2">
                <button
                  className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors duration-300"
                  aria-label="Download image"
                  onClick={() => downloadImage(image.src, image.title)}
                >
                  <Download className="w-5 h-5 text-white" />
                </button>
                <button
                  className={`p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors duration-300 ${
                    likedImages.includes(image.id)
                      ? "text-red-500"
                      : "text-white"
                  }`}
                  aria-label={
                    likedImages.includes(image.id)
                      ? "Unlike image"
                      : "Like image"
                  }
                  onClick={() => toggleLike(image.id)}
                >
                  <Heart
                    className="w-5 h-5"
                    fill={
                      likedImages.includes(image.id) ? "currentColor" : "none"
                    }
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
