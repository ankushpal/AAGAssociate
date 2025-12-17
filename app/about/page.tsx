import Link from 'next/link';
import { memo } from 'react';

const About = () => {
  return (
   <>
      {/* HERO */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            About <span className="text-yellow-500">AAG Associate</span>
          </h1>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg">
            Building strong foundations with trust, quality, and innovation
            for more than a decade.
          </p>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Our <span className="text-yellow-500">Story</span>
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              AAG Associate was founded with a clear mission — to deliver reliable,
              safe, and high-quality construction projects that stand the test
              of time.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From residential homes to large-scale commercial and government
              infrastructure projects, we combine engineering excellence with
              transparent project execution.
            </p>
          </div>

          <div className="h-72 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            Company Journey Image
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-4 text-yellow-500">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To deliver world-class construction solutions by maintaining the
              highest standards of safety, quality, and integrity while meeting
              project timelines.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-4 text-yellow-500">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To become a trusted leader in the construction industry by shaping
              sustainable infrastructure and long-lasting communities.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our <span className="text-yellow-500">Core Values</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { title: "Quality", icon: "🏗" },
              { title: "Safety", icon: "🦺" },
              { title: "Integrity", icon: "🤝" },
              { title: "Innovation", icon: "⚙️" },
            ].map((value) => (
              <div
                key={value.title}
                className="p-6 border rounded-lg hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-semibold text-lg">{value.title}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  We uphold the highest standards in every project we deliver.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-yellow-500 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-black">
          <div>
            <h3 className="text-4xl font-bold">15+</h3>
            <p>Years of Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">250+</h3>
            <p>Projects Delivered</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">100+</h3>
            <p>Skilled Professionals</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">50+</h3>
            <p>Government Projects</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Let’s Build Something <span className="text-yellow-500">Great</span>
        </h2>
        <p className="text-gray-300 mb-8">
          Partner with us for reliable and high-quality construction services.
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

export default memo(About);