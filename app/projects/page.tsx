import Link from 'next/link';
import { memo } from 'react';

const projects = [
  {
    title: "Residential Housing Project",
    category: "Residential",
    location: "Greater Noida",
    year: "2023",
  },
  {
    title: "Commercial Office Complex",
    category: "Commercial",
    location: "Noida",
    year: "2022",
  },
  {
    title: "Highway Infrastructure Project",
    category: "Infrastructure",
    location: "Uttar Pradesh",
    year: "2024",
  },
  {
    title: "Industrial Warehouse",
    category: "Industrial",
    location: "Gurugram",
    year: "2023",
  },
  {
    title: "Government School Building",
    category: "Government",
    location: "Delhi NCR",
    year: "2021",
  },
  {
    title: "Hospital Construction",
    category: "Healthcare",
    location: "Faridabad",
    year: "2022",
  },
];
const Projects = () => {
  return (
  <>
      {/* HERO */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Our <span className="text-yellow-500">Projects</span>
          </h1>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg">
            A showcase of our completed and ongoing projects across residential,
            commercial, and government sectors.
          </p>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gray-300 flex items-center justify-center text-gray-600">
                  Project Image
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-sm text-yellow-500 font-semibold">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-600 mt-3">
                    📍 {project.location}
                  </p>
                  <p className="text-sm text-gray-600">
                    📅 {project.year}
                  </p>

                  <Link
                    href="/contact"
                    className="inline-block mt-4 text-yellow-500 font-semibold hover:underline"
                  >
                    Enquire →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT STATS */}
      <section className="bg-yellow-500 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-black">
          <div>
            <h3 className="text-4xl font-bold">250+</h3>
            <p>Projects Completed</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">40+</h3>
            <p>Ongoing Projects</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">15+</h3>
            <p>Years Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">20+</h3>
            <p>Government Clients</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Have a Project in <span className="text-yellow-500">Mind</span>?
        </h2>
        <p className="text-gray-300 mb-8">
          Let’s discuss your requirements and deliver excellence together.
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
};

export default memo(Projects);