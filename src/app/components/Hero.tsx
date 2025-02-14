import { Button } from "../components/Button";
import { useState, useEffect } from "react";

export default function Hero() {
  const images = [
    "/images/Hero-1.jpg", // Add your actual image paths here
    "/images/Hero-2.jpg",
    "/images/Hero-3.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-[500px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out
            ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center h-full flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Transform Your Outdoor Space
        </h1>
        <p className="text-xl mb-8">
          Professional landscaping services to bring your vision to life
        </p>
        <Button className="bg-red-600 text-white">Get a Free Quote</Button>
      </div>
    </section>
  );
}
