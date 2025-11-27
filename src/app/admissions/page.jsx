import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Calendar, CheckCircle, Download } from 'lucide-react';

export default function Admissions() {
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
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Admissions</h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            Join the Gurukula family. Admissions open for the academic year 2025-26.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Process */}
            <section>
              <h2 className="text-3xl font-bold text-stone-900 mb-6 font-serif flex items-center gap-3">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-lg">1</div>
                Admission Process
              </h2>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1"><FileText className="text-primary" /></div>
                  <div>
                    <h3 className="font-bold text-lg text-stone-900">Step 1: Application</h3>
                    <p className="text-stone-600">Obtain the application form from the school office or download it from our website. Submit the filled form along with necessary documents.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><Calendar className="text-primary" /></div>
                  <div>
                    <h3 className="font-bold text-lg text-stone-900">Step 2: Interaction/Test</h3>
                    <p className="text-stone-600">For KG, there will be a friendly interaction with the child and parents. For Grade 1 onwards, a basic entrance test may be conducted.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><CheckCircle className="text-primary" /></div>
                  <div>
                    <h3 className="font-bold text-lg text-stone-900">Step 3: Confirmation</h3>
                    <p className="text-stone-600">Selected candidates will be notified. Admission is confirmed upon payment of fees and submission of original documents.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Documents Required */}
            <section>
              <h2 className="text-3xl font-bold text-stone-900 mb-6 font-serif flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center text-lg">2</div>
                Documents Required
              </h2>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                <ul className="space-y-3 text-stone-700">
                  <li className="flex items-center gap-3"><CheckCircle size={18} className="text-secondary" /> Birth Certificate (Original + Copy)</li>
                  <li className="flex items-center gap-3"><CheckCircle size={18} className="text-secondary" /> Transfer Certificate (for Grade 2 onwards)</li>
                  <li className="flex items-center gap-3"><CheckCircle size={18} className="text-secondary" /> Previous School Report Card</li>
                  <li className="flex items-center gap-3"><CheckCircle size={18} className="text-secondary" /> Passport size photographs of child (4)</li>
                  <li className="flex items-center gap-3"><CheckCircle size={18} className="text-secondary" /> Passport size photographs of parents (2 each)</li>
                  <li className="flex items-center gap-3"><CheckCircle size={18} className="text-secondary" /> Aadhar Card copy of child and parents</li>
                  <li className="flex items-center gap-3"><CheckCircle size={18} className="text-secondary" /> Caste Certificate (if applicable)</li>
                </ul>
              </div>
            </section>

            {/* Age Criteria */}
            <section>
              <h2 className="text-3xl font-bold text-stone-900 mb-6 font-serif flex items-center gap-3">
                <div className="w-10 h-10 bg-stone-800 text-white rounded-full flex items-center justify-center text-lg">3</div>
                Age Criteria
              </h2>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                <p className="text-stone-600 mb-4">Age as of June 1st of the academic year:</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200">
                        <th className="py-3 font-bold text-stone-900">Class</th>
                        <th className="py-3 font-bold text-stone-900">Minimum Age</th>
                      </tr>
                    </thead>
                    <tbody className="text-stone-700">
                      <tr className="border-b border-stone-100"><td className="py-3">Pre-KG</td><td className="py-3">3 Years</td></tr>
                      <tr className="border-b border-stone-100"><td className="py-3">LKG</td><td className="py-3">4 Years</td></tr>
                      <tr className="border-b border-stone-100"><td className="py-3">UKG</td><td className="py-3">5 Years</td></tr>
                      <tr><td className="py-3">Grade 1</td><td className="py-3">6 Years</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Download Forms */}
            <div className="bg-primary text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold font-serif mb-6">Downloads</h3>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between bg-white/20 hover:bg-white/30 p-4 rounded-lg transition-colors">
                  <span className="font-medium">Application Form</span>
                  <Download size={20} />
                </button>
                <button className="w-full flex items-center justify-between bg-white/20 hover:bg-white/30 p-4 rounded-lg transition-colors">
                  <span className="font-medium">Fee Structure</span>
                  <Download size={20} />
                </button>
                <button className="w-full flex items-center justify-between bg-white/20 hover:bg-white/30 p-4 rounded-lg transition-colors">
                  <span className="font-medium">School Prospectus</span>
                  <Download size={20} />
                </button>
              </div>
            </div>

            {/* Contact for Admissions */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
              <h3 className="text-xl font-bold text-stone-900 font-serif mb-4">Admission Enquiry</h3>
              <p className="text-stone-600 mb-6 text-sm">
                Have questions? Contact our admission office directly.
              </p>
              <div className="space-y-3 text-stone-700">
                <p className="font-bold">Mr. Ravi Kumar</p>
                <p>Administrative Officer</p>
                <p className="text-primary font-bold">+91 98765 43210</p>
                <p className="text-sm">admissions@gurukulavidyamandira.edu</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}
