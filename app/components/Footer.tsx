import Link from "next/link";
import { memo } from "react";

const Footer = () => {
  return (
   <footer className="bg-gray-900 text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold text-yellow-500 mb-3">
            AAG<span className="text-white"> Associate</span>
          </h2>
          <p className="text-sm leading-relaxed">
            A trusted construction partner delivering residential,
            commercial, and infrastructure projects with quality and safety.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-yellow-400">About Us</Link></li>
            <li><Link href="/services" className="hover:text-yellow-400">Services</Link></li>
            <li><Link href="/projects" className="hover:text-yellow-400">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>🏗 Residential Construction</li>
            <li>🏢 Commercial Buildings</li>
            <li>🛣 Roads & Infrastructure</li>
            <li>🔧 Renovation & Repair</li>
            <li>📹 Security Surveillance</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-sm">📍 Greater Noida, India</p>
          <p className="text-sm mt-2">📞 +91 8585925856</p>
          <p className="text-sm mt-2">✉️ info@aagassociate.com</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <span className="cursor-pointer hover:text-yellow-400">🌐</span>
            <span className="cursor-pointer hover:text-yellow-400">🐦</span>
            <span className="cursor-pointer hover:text-yellow-400">📘</span>
            <span className="cursor-pointer hover:text-yellow-400">📸</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} AAG Associate. All rights reserved.
      </div>
    </footer>

  );
};

export default memo(Footer);
