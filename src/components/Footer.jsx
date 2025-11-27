import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-stone-900 text-stone-300">
      {/* Contact Strip */}
      <div className="border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:info@gurukulavidyamandira.edu" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={16} />
                <span>info@gurukulavidyamandira.edu</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-primary transition-colors"><Facebook size={18} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram size={18} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter size={18} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">G</div>
              <span className="font-serif text-lg font-bold text-white">Gurukula Vidya Mandira</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Dedicated to providing a holistic education that blends traditional values with modern academic excellence.
            </p>
            <div className="flex items-start gap-3 text-stone-400 text-sm">
              <MapPin size={18} className="mt-1 flex-shrink-0" />
              <p>
                Gurukula Vidya Mandira,<br />
                Kuduru, Magadi Taluk,<br />
                Ramanagara District - 561101
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold font-serif mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/admissions" className="hover:text-primary transition-colors">Admissions</Link></li>
              <li><Link href="/academics" className="hover:text-primary transition-colors">Academics</Link></li>
              <li><Link href="/facilities" className="hover:text-primary transition-colors">Facilities</Link></li>
              <li><Link href="/news" className="hover:text-primary transition-colors">News & Events</Link></li>
              <li><Link href="/visit-us" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h3 className="text-white font-bold font-serif mb-6">Admissions</h3>
            <p className="text-stone-400 text-sm mb-4">
              Admissions are open for the academic year 2025-26. Apply now to secure a bright future for your child.
            </p>
            <button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md font-medium transition-colors w-full md:w-auto">
              Apply Online
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-stone-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Gurukula Vidya Mandira. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
