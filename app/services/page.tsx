import Link from 'next/link';
import { memo } from 'react';


const services = [
  {
    title: "Residential Construction",
    icon: "🏠",
    desc: "High-quality homes built with precision, durability, and modern design.",
  },
  {
    title: "Commercial Construction",
    icon: "🏢",
    desc: "Office buildings, malls, and complexes delivered on time and on budget.",
  },
  {
    title: "Infrastructure Projects",
    icon: "🛣",
    desc: "Roads, bridges, and public infrastructure with government compliance.",
  },
  {
    title: "Industrial Construction",
    icon: "🏭",
    desc: "Factories, warehouses, and industrial plants with safety-first approach.",
  },
  {
    title: "Renovation & Remodeling",
    icon: "🔧",
    desc: "Upgrading existing structures with modern standards and finishes.",
  },
  {
    title: "Project Management",
    icon: "📋",
    desc: "End-to-end planning, execution, and monitoring for seamless delivery.",
  },
];
const Services = () => {
  return (
   <>
      {/* HERO */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Our <span className="text-yellow-500">Services</span>
          </h1>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg">
            Comprehensive construction services designed to meet residential,
            commercial, and government infrastructure needs.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY OUR SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Why Choose Our <span className="text-yellow-500">Services</span>?
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li>✅ Experienced Engineers & Project Managers</li>
              <li>✅ Quality Materials & Modern Techniques</li>
              <li>✅ Safety, Compliance & Transparency</li>
              <li>✅ On-Time Delivery Guarantee</li>
            </ul>
          </div>

          <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            Services Preview Image
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-yellow-500 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6 text-black">
          Need a Reliable Construction Partner?
        </h2>
        <p className="mb-8 text-black">
          Let’s discuss your project requirements and timelines today.
        </p>
        <Link
          href="/quote"
          className="bg-gray-900 text-white px-8 py-4 rounded-md font-semibold hover:bg-gray-800 transition"
        >
          Request a Quote
        </Link>
      </section>
    </>
  );
};

export default memo(Services);