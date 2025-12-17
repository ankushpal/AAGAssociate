"use client";

import { useState } from "react";

export default function GetQuotePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    location: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[6-9]\d{9}$/;

  const validate = () => {
    const e: any = {};

    if (!form.name.trim()) e.name = "Name is required";
    if (!emailRegex.test(form.email)) e.email = "Valid email required";
    if (!phoneRegex.test(form.phone)) e.phone = "Valid phone number required";
    if (!form.projectType) e.projectType = "Select project type";
    if (!form.budget) e.budget = "Select budget range";
    if (!form.location.trim()) e.location = "Project location required";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Quote request submitted successfully!");
      setForm({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        location: "",
        message: "",
      });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Get a <span className="text-yellow-500">Free Quote</span>
          </h1>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg">
            Tell us about your project and receive a detailed cost estimate from
            our expert construction team.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-10">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Project Details
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

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
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
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
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
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
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            {/* Location */}
            <div>
              <input
                type="text"
                name="location"
                placeholder="Project Location"
                value={form.location}
                onChange={handleChange}
                className="w-full border p-3 rounded focus:ring-2 focus:ring-yellow-500"
              />
              {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
            </div>

            {/* Project Type */}
            <div>
              <select
                name="projectType"
                value={form.projectType}
                onChange={handleChange}
                className="w-full border p-3 rounded focus:ring-2 focus:ring-yellow-500"
              >
                <option value="">Select Project Type</option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Industrial</option>
                <option>Infrastructure</option>
                <option>Government</option>
              </select>
              {errors.projectType && (
                <p className="text-red-500 text-sm">{errors.projectType}</p>
              )}
            </div>

            {/* Budget */}
            <div>
              <select
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className="w-full border p-3 rounded focus:ring-2 focus:ring-yellow-500"
              >
                <option value="">Select Budget Range</option>
                <option>Below ₹10 Lakhs</option>
                <option>₹10–25 Lakhs</option>
                <option>₹25–50 Lakhs</option>
                <option>₹50 Lakhs – ₹1 Crore</option>
                <option>Above ₹1 Crore</option>
              </select>
              {errors.budget && (
                <p className="text-red-500 text-sm">{errors.budget}</p>
              )}
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <textarea
                name="message"
                rows={4}
                placeholder="Additional Details (Optional)"
                value={form.message}
                onChange={handleChange}
                className="w-full border p-3 rounded focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-500 text-black py-4 rounded font-semibold hover:bg-yellow-400 transition"
              >
                {loading ? "Submitting..." : "Request Quote"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
