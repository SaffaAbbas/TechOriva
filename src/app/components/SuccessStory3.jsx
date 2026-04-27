'use client';
import CaseCard from "./CaseCard";

export default function SuccessStory3() {
  const cases = [
    {
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop&q=80',
      title: 'Mobile App MVP Shipped in Weeks',
      description:
        'We designed a clean onboarding flow, shipped core features, and set up analytics so the team could iterate with confidence post-launch.',
      link: '/blog2',
    },
    {
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=800&fit=crop&q=80',
      title: 'AI Support Copilot for Faster Resolutions',
      description:
        'We shipped an internal RAG copilot that answers support questions with citations, reducing time-to-answer and improving consistency across the team.',
      link: '/blog3',
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
