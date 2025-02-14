"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/Button";
import Image from "next/image";
import {
  Leaf,
  Construction,
  BrickWallIcon as Brick,
  Wrench,
  Snowflake,
} from "lucide-react";

const services = {
  "landscape-care": {
    title: "CREATIVE LANDSCAPING DESIGN",
    description:
      "At Revolution Landscape, we provide professional services to enhance the value and aesthetics of your home or business. When you contact us for a consultation, we will meet with you to discuss the ideal outdoor space to complement your property. Our goal is to make all your landscaping dreams into realities.",
    image: "/images/erosion-control.jpg",
    services: [
      "Landscape design and build",
      "Excavation",
      "Contouring and grading",
      "Weed abatement",
      "Garden planning",
      "Sod installation",
      "Mulch and woodchip bed design",
      "Tree and garden planting",
      "And more...",
    ],
    eco: {
      title: "ECO-FRIENDLY SERVICE",
      description:
        "When you trust Revolution with your landscaping, you can count on us to beautify your home while doing our part to protect the environment. From irrigation to fertilization, we employ eco-friendly products and green practices to care for your lawn and garden. Our goal is to beautify your outdoor space while leaving the Earth a better place for our children and grandchildren.",
    },
  },
  construction: {
    title: "LANDSCAPE CONSTRUCTION",
    description:
      "Our construction services bring structure and beauty to your outdoor spaces. We specialize in creating lasting landscapes that combine functionality with aesthetic appeal.",
    image: "/images/landscape-construction.jpg",
    services: [
      "Retaining walls",
      "Outdoor kitchens",
      "Pergolas and arbors",
      "Decks and patios",
      "Water features",
      "Lighting installation",
      "Drainage solutions",
      "Custom structures",
    ],
  },
  hardscaping: {
    title: "MASONRY HARDSCAPING",
    description:
      "Our expert masonry services add structure and elegance to your landscape with durable, beautiful stonework that stands the test of time.",
    image: "/images/masonry-hardscaping.jpg",
    services: [
      "Stone pathways",
      "Brick patios",
      "Stone walls",
      "Fire pits",
      "Outdoor fireplaces",
      "Stone veneer",
      "Concrete work",
      "Custom masonry designs",
    ],
  },
  maintenance: {
    title: "PROPERTY MAINTENANCE",
    description:
      "Keep your landscape looking its best year-round with our comprehensive maintenance services.",
    image: "/images/property-maintenance.jpg",
    services: [
      "Lawn mowing",
      "Pruning and trimming",
      "Fertilization",
      "Pest control",
      "Seasonal cleanups",
      "Irrigation maintenance",
      "Mulch replacement",
      "Garden bed maintenance",
    ],
  },
  "snow-removal": {
    title: "SNOW REMOVAL",
    description:
      "Professional snow removal services to keep your property safe and accessible during winter months.",
    image: "/images/snow-removal.jpg",
    services: [
      "Residential snow removal",
      "Commercial snow removal",
      "Ice management",
      "Sidewalk clearing",
      "Salting services",
      "Storm preparation",
      "24/7 emergency service",
      "Seasonal contracts",
    ],
  },
};

const serviceCategories = [
  {
    id: "landscape-care",
    name: "Landscape Care & Erosion Control",
    icon: Leaf,
  },
  { id: "construction", name: "Landscape Construction", icon: Construction },
  { id: "hardscaping", name: "Masonry Hardscaping", icon: Brick },
  { id: "maintenance", name: "Property Maintenance", icon: Wrench },
  { id: "snow-removal", name: "Snow Removal", icon: Snowflake },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState("landscape-care");

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF0]">
      <Header />
      <main>
        {/* Service Navigation */}
        <div className="bg-[#5da62d] text-white">
          <div className="container mx-auto px-4 overflow-x-auto">
            <div className="flex justify-center space-x-1 py-2">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveService(category.id)}
                  className={`flex items-center px-4 py-2 whitespace-nowrap rounded transition-colors
                    ${
                      activeService === category.id
                        ? "bg-white text-[#5da62d]"
                        : "hover:bg-[#4c8f24]"
                    }`}
                >
                  <category.icon className="w-5 h-5 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Service Content */}
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-6">
            {services[activeService as keyof typeof services].title}
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            {services[activeService as keyof typeof services].description}
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <Image
                src={
                  services[activeService as keyof typeof services].image ||
                  "/placeholder.svg"
                }
                alt={services[activeService as keyof typeof services].title}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-6">
                We proudly provide the following services:
              </h2>
              <ul className="space-y-3">
                {services[activeService as keyof typeof services].services.map(
                  (service, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3" />
                      {service}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Eco-Friendly Section (only for landscape care) */}
          {activeService === "landscape-care" && (
            <div className="bg-[#DCDCDC] p-8 rounded-lg mt-12">
              <h2 className="text-3xl font-bold mb-4">
                {services[activeService].eco.title}
              </h2>
              <p className="text-gray-600 text-lg">
                {services[activeService].eco.description}
              </p>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">
              Experience a Revolution in Your Landscape
            </h3>
            <p className="text-gray-600 mb-6">
              We specialize in creating beautiful landscapes at budget-friendly
              prices. Contact us to join the landscaping Revolution today.
            </p>
            <Button className="bg-red-600 text-white hover:bg-[#5da62d]">
              Get a Free Consultation
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
