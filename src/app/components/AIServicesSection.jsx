'use client'
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const AIServicesSection = () => {
    const router = useRouter();
  const services = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80",
      logo: null,
      title: "B2B SaaS redesign + SEO foundation that increased demo requests",
      category: "Web Development • SEO • Conversion",
      services: "UX/UI redesign, Next.js build, technical SEO, analytics + tracking",
      link: "/blog1"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=800&fit=crop&q=80",
      logo: null,
      title: "SEO content system for a services business to grow qualified inbound",
      category: "SEO • Content • Reporting",
      services: "Keyword architecture, templates, internal linking, on-page improvements",
      link: "/blog2"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=800&fit=crop&q=80",
      logo: null,
      title: "Internal AI support copilot that reduced time-to-answer for agents",
      category: "AI • Automation • Knowledge systems",
      services: "RAG search, tool calling, evaluation, monitoring + guardrails",
      link: "/blog3"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop&q=80",
      logo: null,
      title: "Mobile app MVP launch with improved activation and retention",
      category: "Mobile App • Product • Analytics",
      services: "UX flows, UI system, API integration, analytics + iteration plan",
      link: "/blog4"
    }
  ];

  const handleReadMore = (link) => {
    router.push(link);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="space-y-6">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition shadow-[0_0_30px_rgba(0,0,0,0.15)]"
          >
            <div className="flex flex-col md:flex-row gap-6 p-6">
              {/* Image Section */}
              <div className="flex-shrink-0 w-full md:w-80">
                <div className="relative bg-gray-900 rounded-lg overflow-hidden h-48 md:h-full flex items-center justify-center">
                  {service.logo ? (
                    <img 
                      src={service.logo} 
                      alt="Company Logo" 
                      className="max-w-full max-h-full object-contain p-4"
                    />
                  ) : (
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {service.title}
                  </h3>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-bold text-gray-900">Category: </span>
                      <span className="text-sm text-gray-600">{service.category}</span>
                    </div>
                    
                    <div>
                      <span className="text-sm font-bold text-gray-900">Services: </span>
                      <span className="text-sm text-gray-600">{service.services}</span>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <div className="mt-6">
                  <button
                    onClick={() => handleReadMore(service.link)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIServicesSection;