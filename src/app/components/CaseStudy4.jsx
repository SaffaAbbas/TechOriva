'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

export default function CaseStudy4() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white ">
      {/* Hero */}
      <div className="bg-[#EEF1FA] py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                Mobile app MVP launch —{' '}
                <span className="text-blue-600">fast onboarding, clean UX, and measurable retention.</span>
              </h1>

              <div className="space-y-4">
                <div>
                  <span className="text-blue-600 font-semibold text-lg">Category:</span>
                  <p className="text-gray-700 mt-1">
                    Mobile App Development, Product Design, Analytics
                  </p>
                </div>

                <div>
                  <span className="text-blue-600 font-semibold text-lg">Services:</span>
                  <p className="text-gray-700 mt-1">
                    UX flows, UI design system, API integration, analytics + iteration plan
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 w-full lg:w-1/2 max-w-xl">
              <div className="relative">
                <div className="bg-black rounded-t-2xl p-2 shadow-2xl">
                  <div className="bg-gray-900 rounded-t-xl p-3">
                    <div className="bg-black rounded-lg aspect-video flex items-center justify-center overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop&q=80"
                        alt="Mobile app MVP preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="h-4 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-2xl"></div>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/20 blur-2xl rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-blue-600 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">3–5w</div>
              <div className="text-sm opacity-90">MVP to launch</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">+22%</div>
              <div className="text-sm opacity-90">Activation rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">-31%</div>
              <div className="text-sm opacity-90">Drop-off in onboarding</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">v1</div>
              <div className="text-sm opacity-90">Analytics-ready</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenge</h2>
          <p className="text-gray-700 mb-6">
            The team needed a launchable MVP without sacrificing UX quality. Early prototypes had long onboarding, unclear navigation, and no reliable analytics to guide iteration.
          </p>

          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">High onboarding drop-off and unclear first-session value</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">Inconsistent UI patterns across screens</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">No analytics events to measure activation and retention</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#EEF1FA] rounded-lg shadow-sm border p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Solution</h2>
          <p className="text-gray-700 mb-6">
            We redesigned onboarding into a shorter, value-first flow, created a small design system for consistency, integrated the core API endpoints, and shipped analytics events for activation, retention, and key actions.
          </p>

          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">Faster onboarding with clearer “aha moment”</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">Reusable UI components for speed and consistency</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">Analytics + iteration plan for the next releases</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Related */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Related Case Studies</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-teal-700 h-48 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&h=800&fit=crop&q=80"
                  alt="SaaS website case study"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3">
                  B2B SaaS website rebuild that increased demo requests
                </h3>
                <button
                  onClick={() => router.push('/blog1')}
                  className="text-blue-600 border-2 border-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all"
                >
                  Read More →
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-teal-700 h-48 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=800&fit=crop&q=80"
                  alt="AI copilot case study"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3">
                  Internal AI support copilot for faster resolutions
                </h3>
                <button
                  onClick={() => router.push('/blog3')}
                  className="text-blue-600 border-2 border-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all"
                >
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

