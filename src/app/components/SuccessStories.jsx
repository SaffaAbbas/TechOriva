'use client';
import CaseCard from "./CaseCard";

export default function SuccessStories() {
  const cases = [
    {
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=800&fit=crop&q=80',
      title: 'AI Support Copilot for Faster Resolutions',
      description:
        'We shipped an internal RAG copilot that answers support questions with citations, reducing time-to-answer and improving consistency across the team.',
      link: '/blog3',
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80',
      title: 'SaaS Website Rebuild that Increased Demo Requests',
      description:
        'We redesigned messaging, improved information architecture, and rebuilt the site for performance + SEO — leading to a measurable lift in qualified demos.',
      link: '/blog1',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Success Stories
        </h2>

        {/* Case Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {cases.map((item, index) => (
            <CaseCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
