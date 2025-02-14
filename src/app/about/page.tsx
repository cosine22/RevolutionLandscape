import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
// import Image from "next/image";
import { Button } from "../components/Button";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <div className="bg-[#5da62d] text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">
              About Revolution Landscape
            </h1>
            <p className="text-xl mb-6">
              Transforming outdoor spaces with passion and expertise
            </p>
          </div>
        </div>
        <About />
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Person 1", "Person 2", "Person 3"].map((name, index) => (
                <div key={index} className="text-center">
                  {/* <Image
                    src={`/placeholder.svg?height=200&width=200&text=Team+Member+${
                      index + 1
                    }`}
                    alt={name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  /> */}
                  <h3 className="text-xl font-semibold mb-2">{name}</h3>
                  <p className="text-gray-600">Landscape Designer</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to start your project?
            </h2>
            <Button className="bg-[#5da62d]">Contact Us Today</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
