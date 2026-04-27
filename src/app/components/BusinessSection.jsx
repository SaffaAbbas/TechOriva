'use client';
import useInViewOnce from "./useInViewOnce";

export default function BusinessSection() {
  const { ref, isVisible } = useInViewOnce();

  return (
  <section
    ref={ref}
    className={`relative bg-neutral-50 pt-[30rem] md:pt-48 pb-16 px-4 mt-32 transition-all duration-700 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    }`}
  >
      {/* Overlapping Images - Positioned absolutely to overlap top */}
      <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Sunglasses Image - Wider */}
          <div 
            className={`bg-white rounded-2xl overflow-hidden shadow-lg md:col-span-3 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <img 
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1400&h=760&fit=crop&q=80" 
              alt="Modern SaaS product design"
              className="w-full h-70 object-cover object-center"
            />
          </div>
          
          {/* Credit Card Image - Smaller */}
          <div 
            className={`bg-white rounded-2xl overflow-hidden shadow-lg md:col-span-2 transition-all duration-700 ease-out  ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1000&h=760&fit=crop&q=80" 
              alt="Modern workspace with product dashboards"
              className="w-full h-70 object-cover object-center"
            />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-4xl font-semibold text-center mb-12 mt-10">
          Built for outcomes — not deliverables
        </h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-semibold text-blue-600 mb-2">2–6w</div>
            <div className="text-neutral-600 text-sm">MVP launch window</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-semibold text-blue-600 mb-2">90+</div>
            <div className="text-neutral-600 text-sm">Performance targets</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-semibold text-blue-600 mb-2">SEO</div>
            <div className="text-neutral-600 text-sm">Compound traffic systems</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-semibold text-blue-600 mb-2">Weekly</div>
            <div className="text-neutral-600 text-sm">Shipping cadence</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-semibold text-blue-600 mb-2">Clear</div>
            <div className="text-neutral-600 text-sm">Scope + success metrics</div>
          </div>
        </div>
      </div>
    </section>
  );
}