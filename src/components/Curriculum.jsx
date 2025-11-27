export default function Curriculum() {
  return (
    <section id="curriculum" className="py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 font-serif">Curriculum Overview</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">
            A comprehensive learning journey from Pre-KG to 10th Grade, blending state board syllabus with holistic development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-primary hover:shadow-lg transition-all">
            <h3 className="text-2xl font-bold text-stone-800 mb-4 font-serif">Kindergarten</h3>
            <p className="text-stone-600 mb-4">Pre-KG to UKG</p>
            <p className="text-stone-500 leading-relaxed text-sm">
              Play-based learning focusing on social skills, basic literacy, and numeracy in a nurturing environment.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-secondary hover:shadow-lg transition-all">
            <h3 className="text-2xl font-bold text-stone-800 mb-4 font-serif">Primary School</h3>
            <p className="text-stone-600 mb-4">Grade 1 to 5</p>
            <p className="text-stone-500 leading-relaxed text-sm">
              Building strong foundations in core subjects while encouraging curiosity and creative expression.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-primary hover:shadow-lg transition-all">
            <h3 className="text-2xl font-bold text-stone-800 mb-4 font-serif">High School</h3>
            <p className="text-stone-600 mb-4">Grade 6 to 10</p>
            <p className="text-stone-500 leading-relaxed text-sm">
              Rigorous academic preparation for board exams alongside leadership development and career guidance.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button className="text-primary font-bold hover:text-primary-dark transition-colors inline-flex items-center gap-2">
            View Detailed Syllabus <span>&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
