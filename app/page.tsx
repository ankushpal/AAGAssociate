import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text */}
          <div>
            <h1 className="text-5xl font-extrabold leading-tight">
              Building the <span className="text-yellow-500">Future</span>,<br />
              Restoring the <span className="text-yellow-500">Past</span>
            </h1>
            <p className="mt-6 text-gray-300 text-lg">
              Trusted construction solutions for residential, commercial,
              and government infrastructure projects across India.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/quote"
                className="bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition"
              >
                Get Free Quote
              </Link>
              <Link
                href="/projects"
                className="border border-yellow-500 px-6 py-3 rounded-md text-yellow-400 hover:bg-yellow-500 hover:text-black transition"
              >
                View Projects
              </Link>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="hidden md:block">
            <div className="h-80 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400">
              Construction Image
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our <span className="text-yellow-500">Services</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Residential", icon: "🏠" },
              { title: "Commercial", icon: "🏢" },
              { title: "Infrastructure", icon: "🛣" },
              { title: "Renovation", icon: "🔧" },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-semibold text-lg">{service.title}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  High-quality construction services delivered on time.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Why <span className="text-yellow-500">Choose Us</span>
            </h2>

            <ul className="space-y-4 text-gray-700">
              <li>✅ 15+ Years of Industry Experience</li>
              <li>✅ Government & Private Projects</li>
              <li>✅ ISO Certified & Safety Compliant</li>
              <li>✅ On-Time Delivery Guarantee</li>
            </ul>
          </div>

          <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            Project Preview
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-yellow-500 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-black">
          <div>
            <h3 className="text-4xl font-bold">250+</h3>
            <p>Projects Completed</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">120+</h3>
            <p>Happy Clients</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">15+</h3>
            <p>Years Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">50+</h3>
            <p>Expert Engineers</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Start Your <span className="text-yellow-500">Project</span>?
        </h2>
        <p className="text-gray-300 mb-8">
          Contact us today for a free consultation and estimate.
        </p>
        <Link
          href="/contact"
          className="bg-yellow-500 text-black px-8 py-4 rounded-md font-semibold hover:bg-yellow-400 transition"
        >
          Contact Us
        </Link>
      </section>
    </>
  );
}
