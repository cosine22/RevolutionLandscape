"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your server or a third-party service
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    alert("Thank you for your inquiry. We will get back to you soon!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-[#FAFAF0]">
        <div className="bg-[#5da62d] text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Get a Free Quote</h1>
            <p className="text-xl">
              Fill out the form below and we&apos;ll get back to you with a
              custom quote for your project.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 py-12">
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5da62d]"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5da62d]"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block mb-2 font-semibold">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5da62d]"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="service" className="block mb-2 font-semibold">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5da62d]"
              >
                <option value="">Select a service</option>
                <option value="landscape-care">
                  Landscape Care & Erosion Control
                </option>
                <option value="construction">Landscape Construction</option>
                <option value="hardscaping">Masonry Hardscaping</option>
                <option value="maintenance">Property Maintenance</option>
                <option value="snow-removal">Snow Removal</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5da62d]"
              ></textarea>
            </div>
            <Button
              type="submit"
              className="bg-red-600 text-white hover:bg-[#5da62d] w-full"
            >
              Submit Quote Request
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
