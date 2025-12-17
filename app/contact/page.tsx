"use client";
import { memo, useState } from 'react';
import GoogleMap from '../components/GoogleMap';

const Contact = () => {
const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[6-9]\d{9}$/;

  const validate = () => {
    const e: any = {};

    if (!form.name.trim()) e.name = "Name is required";
    if (!emailRegex.test(form.email))
      e.email = "Enter a valid email address";
    if (!phoneRegex.test(form.phone))
      e.phone = "Enter a valid 10-digit phone number";
    if (!form.message.trim()) e.message = "Message is required";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Message sent successfully!");
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Get in <span className="text-yellow-500">Touch</span>
          </h1>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
            Let’s discuss your construction needs and build something
            exceptional together.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* LEFT INFO */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Contact <span className="text-yellow-500">Information</span>
            </h2>

            <p className="text-gray-700 mb-10">
              Reach out to us for residential, commercial, or government
              construction projects. Our team is ready to help.
            </p>

            <div className="space-y-6 text-gray-800">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-semibold">Office Address</p>
                  <p>Greater Noida, Uttar Pradesh, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="font-semibold">Email</p>
                  <p>info@aggassociate.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">🕒</span>
                <div>
                  <p className="font-semibold">Working Hours</p>
                  <p>Mon – Sat : 9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-xl shadow-xl p-10">
            <h3 className="text-2xl font-bold mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border p-3 rounded focus:ring-2 focus:ring-yellow-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border p-3 rounded focus:ring-2 focus:ring-yellow-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border p-3 rounded focus:ring-2 focus:ring-yellow-500"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border p-3 rounded focus:ring-2 focus:ring-yellow-500"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-500 text-black py-3 rounded font-semibold hover:bg-yellow-400 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Visit Our <span className="text-yellow-500">Office</span>
          </h2>

          <div className="h-96 bg-gray-300 rounded-lg flex items-center justify-center text-gray-600">
           <GoogleMap/>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Contact);