'use client';
import CaseCard from "./CaseCard";

export default function SuccessStory2() {
  const cases = [
    {
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=800&fit=crop&q=80',
      title: 'AI Support Copilot for Faster Resolutions',
      description:
        'We shipped an internal RAG copilot that answers support questions with citations, reducing time-to-answer and improving consistency across the team.',
      link: '/blog3',
    },
    {
      image: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=1200&h=800&fit=crop&q=80',
      title: 'SEO System that Increased Qualified Inbound',
      description:
        'We rebuilt the site structure, shipped on-page templates, and created a repeatable content cadence — producing inbound leads tied to high-intent queries.',
      link: '/blog2',
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
