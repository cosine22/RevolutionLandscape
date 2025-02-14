import Image from "next/image";
import { Button } from "../components/Button";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/images/about.jpg"
              alt="Landscaping work"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-6">About Revolution Design</h2>
            <p className="text-gray-600 mb-6">
              At Revolution Design, we&apos;re passionate about creating
              beautiful, sustainable landscapes. With years of experience and a
              dedicated team of experts, we bring your outdoor dreams to life.
            </p>
            <Button className="bg-[#5da62d] text-white hover:bg-red-600">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
