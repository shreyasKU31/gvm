import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';

export default function VisitUs() {
  return (
    <main className="min-h-screen flex flex-col bg-stone-50">
      <Navbar />
      
      {/* Header */}
      <div className="bg-stone-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#EAB308" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Visit Us</h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            We welcome you to experience our campus and meet our faculty.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info & Hours */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-6 font-serif">Get in Touch</h2>
              <p className="text-stone-600 leading-relaxed mb-8">
                Whether you have questions about admissions, academics, or just want to say hello, we'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary-dark">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">Address</h3>
                    <p className="text-stone-600">
                      Gurukula Vidya Mandira,<br />
                      Kuduru, Magadi Taluk,<br />
                      Ramanagara District, Karnataka - 561101
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary-dark">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">Phone</h3>
                    <p className="text-stone-600">+91 98765 43210</p>
                    <p className="text-stone-600">+91 80 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary-dark">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">Email</h3>
                    <p className="text-stone-600">info@gurukulavidyamandira.edu</p>
                    <p className="text-stone-600">admissions@gurukulavidyamandira.edu</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
              <h3 className="text-xl font-bold text-stone-900 mb-4 font-serif flex items-center gap-2">
                <Clock size={20} className="text-primary" /> Office Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between text-stone-600 border-b border-stone-100 pb-2">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 4:30 PM</span>
                </div>
                <div className="flex justify-between text-stone-600 border-b border-stone-100 pb-2">
                  <span>Saturday</span>
                  <span className="font-medium">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Sunday</span>
                  <span className="text-red-500 font-medium">Closed</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-stone-200">
                <h3 className="text-xl font-bold text-stone-900 mb-4 font-serif flex items-center gap-2">
                  <Calendar size={20} className="text-primary" /> Visiting Hours
                </h3>
                <p className="text-stone-600 text-sm">
                  Parents can meet the Principal between 2:00 PM and 4:00 PM on weekdays with prior appointment.
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-full min-h-[400px] bg-stone-200 rounded-xl overflow-hidden shadow-md border border-stone-300 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.425078024428!2d77.1580468!3d13.1106397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bafd36e1a42260f%3A0x616166e1abd30c72!2sGurukula%20Vidhya%20Mandira!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Gurukula Vidya Mandira Location"
              className="absolute inset-0 w-full h-full"
            ></iframe>
             <iframe 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy" 
              allowFullScreen 
              referrerPolicy="no-referrer-when-downgrade" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.425078024428!2d77.1580468!3d13.1106397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bafd36e1a42260f%3A0x616166e1abd30c72!2sGurukula%20Vidhya%20Mandira!5e0!3m2!1sen!2sin!4v1700000000000"
              className="absolute inset-0 w-full h-full hidden"
            >
            </iframe>
            
            {/* Using the standard iframe embed for a search query without API key (often works for public places) */}
             <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.425078024428!2d77.1580468!3d13.1106397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bafd36e1a42260f%3A0x616166e1abd30c72!2sGurukula%20Vidhya%20Mandira!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Gurukula Vidya Mandira Location"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
