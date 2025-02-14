import { TreesIcon as Tree, Shovel, Droplets } from "lucide-react";

const services = [
  {
    icon: Tree,
    title: "Landscape Design",
    description: "Custom designs tailored to your space and preferences",
  },
  {
    icon: Shovel,
    title: "Garden Maintenance",
    description: "Regular upkeep to keep your garden looking its best",
  },
  {
    icon: Droplets,
    title: "Irrigation Systems",
    description: "Efficient watering solutions for your landscape",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <service.icon className="h-12 w-12 text-[#5da62d] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
