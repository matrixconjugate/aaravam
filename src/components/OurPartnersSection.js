import React, { useEffect, useRef } from "react";

const PartnerCard = ({ name, logo, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-6 flex flex-col items-center">
        <div className="h-20 w-full flex items-center justify-center mb-4">
          <img src={logo} alt={`${name} logo`} className="h-full max-w-full object-contain" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        {description && (
          <p className="text-gray-600 text-center text-sm">{description}</p>
        )}
      </div>
    </div>
  );
};

const OurPartnersSection = () => {
  const sectionRef = useRef(null);

  // Partners data
  const partners = [
    {
      name: "Malpani Ventures",
      logo: "/logos/malpani-ventures.png",
      description: "Supporting innovation in education"
    },
    {
      name: "The Circle",
      logo: "/logos/the-circle.png",
      description: "Reinventing India, School by School"
    },
    {
      name: "Teach for India",
      logo: "/logos/teach-for-india.png",
      description: "Educational equity for all children"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll(".partner-card");
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("show");
            }, index * 150);
          });
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#e16338]">Partners</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We're proud to partner with organizations that share our commitment to student agency and potential.
          </p>
        </div>

        <style jsx>{`
          .partner-card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
          }
          
          .partner-card.show {
            opacity: 1;
            transform: translateY(0);
          }
        `}</style>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="partner-card">
              <PartnerCard 
                name={partner.name} 
                logo={partner.logo} 
                description={partner.description} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartnersSection; 