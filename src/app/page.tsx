"use client";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { Button } from "./components/Button";
import Image from "next/image";
import { TreesIcon as Tree, Shovel, Droplets, Star } from "lucide-react";
import Link from "next/link";

const featuredServices = [
  {
    icon: Tree,
    title: "Landscape Design",
    description: "Custom designs tailored to your space",
  },
  {
    icon: Shovel,
    title: "Garden Maintenance",
    description: "Keep your garden looking its best",
  },
  {
    icon: Droplets,
    title: "Irrigation Systems",
    description: "Efficient watering solutions",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />

        {/* Featured Services Section */}
        <section className="py-20 bg-[#FAFAF0]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Featured Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <div
                  key={index}
                  className="#FAFAF0 p-6 rounded-lg shadow-md border-l-4 border-red-600 hover:shadow-lg transition-shadow"
                >
                  <service.icon className="h-12 w-12 text-[#5da62d] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href="/services"
                    className="text-[#5da62d] hover:text-red-600 font-semibold"
                  >
                    Learn More &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-[#FAFAF0]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/images/RevIntroPhoto.jpg"
                  alt="Beautiful Landscape"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-3xl font-bold mb-6">
                  Transform Your Outdoor Space
                </h2>
                <p className="text-gray-600 mb-6">
                  At Revolution Landscape, we&apos;re passionate about creating
                  beautiful, sustainable landscapes. With years of experience
                  and a dedicated team of experts, we bring your outdoor dreams
                  to life.
                </p>
                <Button className="bg-[#5da62d] text-white hover:bg-red-600">
                  <Link href="/about">About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-[#5da62d] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
            <div className="max-w-3xl mx-auto">
              <blockquote className="text-xl italic mb-4">
                &quot;Revolution Landscape transformed our backyard into a
                beautiful oasis. Their team was professional, creative, and
                attentive to every detail. We couldn&apos;t be happier with the
                results!&quot;
              </blockquote>
              <div className="flex items-center justify-center">
                <Star className="text-yellow-400 mr-1" />
                <Star className="text-yellow-400 mr-1" />
                <Star className="text-yellow-400 mr-1" />
                <Star className="text-yellow-400 mr-1" />
                <Star className="text-yellow-400 mr-2" />
                <span className="font-semibold">- Sarah Johnson</span>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-[#FAFAF0]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Dream Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us today for a free consultation and let&apos;s bring your
              vision to life!
            </p>
            <Button className="bg-red-600 text-white hover:bg-[#5da62d]">
              Get a Free Quote
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
