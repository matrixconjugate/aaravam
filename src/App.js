import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Users, Award, ArrowRight, ChevronRight, X } from 'lucide-react';
import ContactModal from './components/ContactModal';
import OurPartnersSection from './components/OurPartnersSection';

const AaravamLandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showNavCTA, setShowNavCTA] = useState(false);
  const heroCTARef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroCTARef.current) {
        const heroCTABottom = heroCTARef.current.getBoundingClientRect().bottom;
        setShowNavCTA(heroCTABottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center py-6 px-8 md:px-16 border-b border-gray-100 bg-white z-50">
        <div className="flex items-center">
          <svg width="204" height="30" viewBox="0 0 204 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 md:w-48">
            <path d="M10.3979 30C8.56968 30 6.85575 29.6374 5.25607 28.9122C3.69449 28.187 2.41856 27.1565 1.42828 25.8206C0.476094 24.4466 0 22.8626 0 21.0687C0 19.1603 0.514181 17.5 1.54254 16.0878C2.5709 14.6756 4.03727 13.5878 5.94165 12.8244C7.84602 12.0229 10.0741 11.6221 12.626 11.6221C14.6827 11.6221 16.6442 11.8893 18.5105 12.4237V6.81298H2.17099V0.687025H24.795V29.313H19.4817L18.5105 26.1069H17.9963C17.5393 27.4046 16.6633 28.3779 15.3683 29.0267C14.1114 29.6756 12.4546 30 10.3979 30ZM6.34157 20.7824C6.34157 21.8511 6.77957 22.6908 7.65559 23.3015C8.56968 23.9122 9.80753 24.2176 11.3691 24.2176C12.6641 24.2176 13.8638 24.0267 14.9684 23.645C16.0729 23.2252 16.9299 22.6527 17.5393 21.9275C18.1868 21.2023 18.5105 20.3626 18.5105 19.4084V17.9198C16.6061 17.2328 14.5685 16.8893 12.3975 16.8893C10.5693 16.8893 9.10291 17.2328 7.99837 17.9198C6.89384 18.6069 6.34157 19.5611 6.34157 20.7824ZM39.662 30C37.8338 30 36.1199 29.6374 34.5202 28.9122C32.9586 28.187 31.6827 27.1565 30.6924 25.8206C29.7402 24.4466 29.2641 22.8626 29.2641 21.0687C29.2641 19.1603 29.7783 17.5 30.8067 16.0878C31.835 14.6756 33.3014 13.5878 35.2058 12.8244C37.1102 12.0229 39.3383 11.6221 41.8901 11.6221C43.9469 11.6221 45.9084 11.8893 47.7747 12.4237V6.81298H31.4351V0.687025H54.0591V29.313H48.7459L47.7747 26.1069H47.2605C46.8034 27.4046 45.9274 28.3779 44.6324 29.0267C43.3756 29.6756 41.7187 30 39.662 30ZM35.6057 20.7824C35.6057 21.8511 36.0437 22.6908 36.9197 23.3015C37.8338 23.9122 39.0717 24.2176 40.6332 24.2176C41.9282 24.2176 43.128 24.0267 44.2325 23.645C45.3371 23.2252 46.194 22.6527 46.8034 21.9275C47.4509 21.2023 47.7747 20.3626 47.7747 19.4084V17.9198C45.8703 17.2328 43.8326 16.8893 41.6616 16.8893C39.8334 16.8893 38.367 17.2328 37.2625 17.9198C36.158 18.6069 35.6057 19.5611 35.6057 20.7824ZM59.5566 0.687025H74.5821V6.81298H66.0125V29.313H59.5566V0.687025ZM87.1434 30C85.3152 30 83.6013 29.6374 82.0016 28.9122C80.44 28.187 79.1641 27.1565 78.1738 25.8206C77.2216 24.4466 76.7455 22.8626 76.7455 21.0687C76.7455 19.1603 77.2597 17.5 78.2881 16.0878C79.3164 14.6756 80.7828 13.5878 82.6872 12.8244C84.5916 12.0229 86.8197 11.6221 89.3715 11.6221C91.4283 11.6221 93.3898 11.8893 95.2561 12.4237V6.81298H78.9165V0.687025H101.541V29.313H96.2273L95.2561 26.1069H94.7419C94.2848 27.4046 93.4088 28.3779 92.1138 29.0267C90.857 29.6756 89.2002 30 87.1434 30ZM83.0871 20.7824C83.0871 21.8511 83.5251 22.6908 84.4011 23.3015C85.3152 23.9122 86.5531 24.2176 88.1147 24.2176C89.4096 24.2176 90.6094 24.0267 91.7139 23.645C92.8185 23.2252 93.6754 22.6527 94.2848 21.9275C94.9323 21.2023 95.2561 20.3626 95.2561 19.4084V17.9198C93.3517 17.2328 91.314 16.8893 89.143 16.8893C87.3148 16.8893 85.8484 17.2328 84.7439 17.9198C83.6394 18.6069 83.0871 19.5611 83.0871 20.7824ZM110.98 0.687025L118.35 18.6641H118.864L126.234 0.687025H133.033L121.207 29.313H115.951L104.181 0.687025H110.98ZM143.942 30C142.114 30 140.4 29.6374 138.8 28.9122C137.239 28.187 135.963 27.1565 134.973 25.8206C134.02 24.4466 133.544 22.8626 133.544 21.0687C133.544 19.1603 134.058 17.5 135.087 16.0878C136.115 14.6756 137.582 13.5878 139.486 12.8244C141.39 12.0229 143.618 11.6221 146.17 11.6221C148.227 11.6221 150.188 11.8893 152.055 12.4237V6.81298H135.715V0.687025H158.339V29.313H153.026L152.055 26.1069H151.541C151.084 27.4046 150.208 28.3779 148.913 29.0267C147.656 29.6756 145.999 30 143.942 30ZM139.886 20.7824C139.886 21.8511 140.324 22.6908 141.2 23.3015C142.114 23.9122 143.352 24.2176 144.913 24.2176C146.208 24.2176 147.408 24.0267 148.513 23.645C149.617 23.2252 150.474 22.6527 151.084 21.9275C151.731 21.2023 152.055 20.3626 152.055 19.4084V17.9198C150.15 17.2328 148.113 16.8893 145.942 16.8893C144.114 16.8893 142.647 17.2328 141.543 17.9198C140.438 18.6069 139.886 19.5611 139.886 20.7824ZM193.716 -4.40008e-07C197.03 -4.40008e-07 199.563 1.08779 201.315 3.26336C203.105 5.40076 204 8.47328 204 12.4809V29.313H197.544V14.771C197.544 11.7176 197.163 9.48474 196.402 8.07252C195.678 6.62214 194.421 5.89695 192.631 5.89695C190.65 5.89695 189.241 6.5458 188.403 7.84351C187.565 9.10305 187.146 11.0305 187.146 13.626V29.313H180.69V14.771C180.69 11.7176 180.31 9.48474 179.548 8.07252C178.824 6.62214 177.567 5.89695 175.777 5.89695C173.797 5.89695 172.387 6.5458 171.549 7.84351C170.712 9.10305 170.293 11.0305 170.293 13.626V29.313H163.837V0.687025H169.207L169.95 3.37786H170.464C170.921 2.42367 171.702 1.62214 172.806 0.973282C173.911 0.324427 175.206 -4.40008e-07 176.691 -4.40008e-07C178.558 -4.40008e-07 180.081 0.362595 181.262 1.08779C182.481 1.81298 183.49 2.95801 184.29 4.5229H184.804C185.68 3.11069 186.899 2.00382 188.46 1.20229C190.06 0.400763 191.812 -4.40008e-07 193.716 -4.40008e-07Z" fill="#E16338"/>
          </svg>
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className={`bg-[#e16338] text-white py-2 px-4 sm:px-6 rounded-full text-sm font-medium hover:bg-[#d55328] transition ${
            !showNavCTA ? 'opacity-0' : 'opacity-100'
          }`}
        >
          Get in Touch
        </button>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 py-16 md:py-24 px-8 md:px-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Nurturing Independent Thinkers of Tomorrow
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Empower students to become problem-solvers with Aaravam Labs — a transformative program where children develop agency by tackling real-world challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              ref={heroCTARef}
              onClick={() => setIsModalOpen(true)}
              className="bg-[#e16338] text-white py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-base font-medium hover:bg-[#d55328] transition flex items-center justify-center"
            >
              Get in Touch 
            </button>
            <a 
              href="#approach"
              className="border border-[#e16338] text-[#e16338] py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-base font-medium hover:bg-orange-50 transition flex items-center justify-center"
            >
              Learn More <ArrowRight className="ml-2 w-4 h-4 flex-shrink-0" />
            </a>
          </div>
        </div>
    <div className="md:w-1/2 md:pl-12">
    <div className="bg-orange-50 overflow-hidden relative rounded-2xl">
      {/* Top edge gradient - hidden on mobile */}
      <div className="hidden md:block absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent z-10"></div>
      
      {/* Right edge gradient - hidden on mobile */}
      <div className="hidden md:block absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
      
      {/* Bottom edge gradient - hidden on mobile */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
      
      {/* Left edge gradient - hidden on mobile */}
      <div className="hidden md:block absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
      
      <img 
        src="hero.png" 
        alt="Students engaged in creative problem solving" 
        className="w-full h-auto relative z-0"
      />
    </div>
  </div>
      </section>

      {/* Stats Section */}
      {/* Approach Section */}
      <section id="approach" className="py-16 md:py-24 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">
          How it <span className="text-[#e16338]">works</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <img 
              src="section1.webp" 
              alt="Students working on projects" 
              className="w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Seamless Curriculum Integration</h3>
              <p className="text-gray-700">
                Aaravam Labs fits effortlessly into your existing curriculum, requiring just 2-3 hours weekly. Our program enhances core subjects while maintaining educational standards, creating natural bridges between traditional learning and hands-on exploration.
              </p>
            </div>
            
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Student-Driven Experience</h3>
              <p className="text-gray-700">
                Students take complete ownership of their learning journey with minimal teacher intervention. They tackle meaningful challenges independently, make decisions, and develop critical thinking skills while educators simply facilitate when needed.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Visible Results</h3>
              <p className="text-gray-700">
                Schools see meaningful improvements within months—increased engagement, stronger critical thinking, and better academic performance. Students develop confidence, communication skills, and practical knowledge application that creates both immediate and lasting benefits.
              </p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-[#e16338]">
              <p className="text-gray-700 italic">
                Have a dedicated space or planning to create one? We'll help you design and build an innovation hub where student potential can fully flourish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


      {/* Partners Section */}
      <section id="partners" className="bg-gray-50 py-16 md:py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <OurPartnersSection />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 md:px-16 bg-[#e16338]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-white/10 backdrop-blur p-8 rounded-xl border border-white/20">
              <p className="text-white italic mb-6 text-lg">
                "Aaravam Labs has transformed how our students approach challenges. They're now more confident, collaborative, and innovative in their thinking."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-white">Sarah Johnson</p>
                  <p className="text-white/80 text-sm">Principal, Greenfield Academy</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur p-8 rounded-xl border border-white/20">
              <p className="text-white italic mb-6 text-lg">
                "The program seamlessly integrated with our curriculum while adding tremendous value to our students' development of critical thinking skills."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-white">Rajiv Mehta</p>
                  <p className="text-white/80 text-sm">Education Director, Bright Futures School</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-white text-center pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-2xl font-bold">Ready to transform education at your school?</h2>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-[#e16338] py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-base font-medium hover:bg-gray-100 transition inline-flex items-center whitespace-nowrap"
              >
                Schedule a Consultation <ChevronRight className="ml-1 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-12 px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <svg width="204" height="30" viewBox="0 0 204 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3979 30C8.56968 30 6.85575 29.6374 5.25607 28.9122C3.69449 28.187 2.41856 27.1565 1.42828 25.8206C0.476094 24.4466 0 22.8626 0 21.0687C0 19.1603 0.514181 17.5 1.54254 16.0878C2.5709 14.6756 4.03727 13.5878 5.94165 12.8244C7.84602 12.0229 10.0741 11.6221 12.626 11.6221C14.6827 11.6221 16.6442 11.8893 18.5105 12.4237V6.81298H2.17099V0.687025H24.795V29.313H19.4817L18.5105 26.1069H17.9963C17.5393 27.4046 16.6633 28.3779 15.3683 29.0267C14.1114 29.6756 12.4546 30 10.3979 30ZM6.34157 20.7824C6.34157 21.8511 6.77957 22.6908 7.65559 23.3015C8.56968 23.9122 9.80753 24.2176 11.3691 24.2176C12.6641 24.2176 13.8638 24.0267 14.9684 23.645C16.0729 23.2252 16.9299 22.6527 17.5393 21.9275C18.1868 21.2023 18.5105 20.3626 18.5105 19.4084V17.9198C16.6061 17.2328 14.5685 16.8893 12.3975 16.8893C10.5693 16.8893 9.10291 17.2328 7.99837 17.9198C6.89384 18.6069 6.34157 19.5611 6.34157 20.7824ZM39.662 30C37.8338 30 36.1199 29.6374 34.5202 28.9122C32.9586 28.187 31.6827 27.1565 30.6924 25.8206C29.7402 24.4466 29.2641 22.8626 29.2641 21.0687C29.2641 19.1603 29.7783 17.5 30.8067 16.0878C31.835 14.6756 33.3014 13.5878 35.2058 12.8244C37.1102 12.0229 39.3383 11.6221 41.8901 11.6221C43.9469 11.6221 45.9084 11.8893 47.7747 12.4237V6.81298H31.4351V0.687025H54.0591V29.313H48.7459L47.7747 26.1069H47.2605C46.8034 27.4046 45.9274 28.3779 44.6324 29.0267C43.3756 29.6756 41.7187 30 39.662 30ZM35.6057 20.7824C35.6057 21.8511 36.0437 22.6908 36.9197 23.3015C37.8338 23.9122 39.0717 24.2176 40.6332 24.2176C41.9282 24.2176 43.128 24.0267 44.2325 23.645C45.3371 23.2252 46.194 22.6527 46.8034 21.9275C47.4509 21.2023 47.7747 20.3626 47.7747 19.4084V17.9198C45.8703 17.2328 43.8326 16.8893 41.6616 16.8893C39.8334 16.8893 38.367 17.2328 37.2625 17.9198C36.158 18.6069 35.6057 19.5611 35.6057 20.7824ZM59.5566 0.687025H74.5821V6.81298H66.0125V29.313H59.5566V0.687025ZM87.1434 30C85.3152 30 83.6013 29.6374 82.0016 28.9122C80.44 28.187 79.1641 27.1565 78.1738 25.8206C77.2216 24.4466 76.7455 22.8626 76.7455 21.0687C76.7455 19.1603 77.2597 17.5 78.2881 16.0878C79.3164 14.6756 80.7828 13.5878 82.6872 12.8244C84.5916 12.0229 86.8197 11.6221 89.3715 11.6221C91.4283 11.6221 93.3898 11.8893 95.2561 12.4237V6.81298H78.9165V0.687025H101.541V29.313H96.2273L95.2561 26.1069H94.7419C94.2848 27.4046 93.4088 28.3779 92.1138 29.0267C90.857 29.6756 89.2002 30 87.1434 30ZM83.0871 20.7824C83.0871 21.8511 83.5251 22.6908 84.4011 23.3015C85.3152 23.9122 86.5531 24.2176 88.1147 24.2176C89.4096 24.2176 90.6094 24.0267 91.7139 23.645C92.8185 23.2252 93.6754 22.6527 94.2848 21.9275C94.9323 21.2023 95.2561 20.3626 95.2561 19.4084V17.9198C93.3517 17.2328 91.314 16.8893 89.143 16.8893C87.3148 16.8893 85.8484 17.2328 84.7439 17.9198C83.6394 18.6069 83.0871 19.5611 83.0871 20.7824ZM110.98 0.687025L118.35 18.6641H118.864L126.234 0.687025H133.033L121.207 29.313H115.951L104.181 0.687025H110.98ZM143.942 30C142.114 30 140.4 29.6374 138.8 28.9122C137.239 28.187 135.963 27.1565 134.973 25.8206C134.02 24.4466 133.544 22.8626 133.544 21.0687C133.544 19.1603 134.058 17.5 135.087 16.0878C136.115 14.6756 137.582 13.5878 139.486 12.8244C141.39 12.0229 143.618 11.6221 146.17 11.6221C148.227 11.6221 150.188 11.8893 152.055 12.4237V6.81298H135.715V0.687025H158.339V29.313H153.026L152.055 26.1069H151.541C151.084 27.4046 150.208 28.3779 148.913 29.0267C147.656 29.6756 145.999 30 143.942 30ZM139.886 20.7824C139.886 21.8511 140.324 22.6908 141.2 23.3015C142.114 23.9122 143.352 24.2176 144.913 24.2176C146.208 24.2176 147.408 24.0267 148.513 23.645C149.617 23.2252 150.474 22.6527 151.084 21.9275C151.731 21.2023 152.055 20.3626 152.055 19.4084V17.9198C150.15 17.2328 148.113 16.8893 145.942 16.8893C144.114 16.8893 142.647 17.2328 141.543 17.9198C140.438 18.6069 139.886 19.5611 139.886 20.7824ZM193.716 -4.40008e-07C197.03 -4.40008e-07 199.563 1.08779 201.315 3.26336C203.105 5.40076 204 8.47328 204 12.4809V29.313H197.544V14.771C197.544 11.7176 197.163 9.48474 196.402 8.07252C195.678 6.62214 194.421 5.89695 192.631 5.89695C190.65 5.89695 189.241 6.5458 188.403 7.84351C187.565 9.10305 187.146 11.0305 187.146 13.626V29.313H180.69V14.771C180.69 11.7176 180.31 9.48474 179.548 8.07252C178.824 6.62214 177.567 5.89695 175.777 5.89695C173.797 5.89695 172.387 6.5458 171.549 7.84351C170.712 9.10305 170.293 11.0305 170.293 13.626V29.313H163.837V0.687025H169.207L169.95 3.37786H170.464C170.921 2.42367 171.702 1.62214 172.806 0.973282C173.911 0.324427 175.206 -4.40008e-07 176.691 -4.40008e-07C178.558 -4.40008e-07 180.081 0.362595 181.262 1.08779C182.481 1.81298 183.49 2.95801 184.29 4.5229H184.804C185.68 3.11069 186.899 2.00382 188.46 1.20229C190.06 0.400763 191.812 -4.40008e-07 193.716 -4.40008e-07Z" fill="#E16338"/>
              </svg>
            </div>
            <p className="mb-4">Nurturing independent thinkers of tomorrow through experiential learning.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>hello@aaravamlabs.com</li>
              <li>+91 98765 43210</li>
              <li>Bangalore, India</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/houses-of-curiosity/" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#e16338] transition">
                <span className="sr-only">Twitter</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M22 4.01C21 4.5 20.02 4.84 19 5C18.06 4.15 16.79 3.65 15.42 3.65C12.77 3.65 10.64 5.78 10.64 8.43C10.64 8.84 10.68 9.25 10.77 9.63C6.77 9.43 3.2 7.54 0.83 4.63C0.38 5.44 0.13 6.33 0.13 7.28C0.13 9.08 1.08 10.68 2.5 11.65C1.83 11.63 1.15 11.43 0.5 11.13V11.18C0.5 13.5 2.11 15.43 4.25 15.9C3.81 16.01 3.35 16.07 2.88 16.07C2.58 16.07 2.28 16.04 1.98 15.99C2.58 17.88 4.32 19.26 6.36 19.3C4.73 20.57 2.77 21.36 0.62 21.36C0.2 21.36 0 21.33 0 21.3C2.08 22.64 4.54 23.45 7.13 23.45C15.42 23.45 20.11 16.23 20.11 9.95L20.1 9.32C21.1 8.65 22 7.79 22.75 6.79C21.75 7.2 20.68 7.48 19.56 7.58C20.69 6.91 21.56 5.85 22 4.01Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/houses-of-curiosity/" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#e16338] transition">
                <span className="sr-only">LinkedIn</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M20.25 2.25H3.75C2.92 2.25 2.25 2.92 2.25 3.75V20.25C2.25 21.08 2.92 21.75 3.75 21.75H20.25C21.08 21.75 21.75 21.08 21.75 20.25V3.75C21.75 2.92 21.08 2.25 20.25 2.25ZM8.25 18.75H5.25V9.75H8.25V18.75ZM6.75 8.25C5.85 8.25 5.25 7.65 5.25 6.75C5.25 5.85 5.85 5.25 6.75 5.25C7.65 5.25 8.25 5.85 8.25 6.75C8.25 7.65 7.65 8.25 6.75 8.25ZM18.75 18.75H15.75V14.25C15.75 13.35 15.75 12.75 14.25 12.75C12.75 12.75 12.75 13.35 12.75 14.25V18.75H9.75V9.75H12.75V11.25C13.35 10.35 14.25 9.75 15.75 9.75C18.75 9.75 18.75 11.25 18.75 13.65V18.75Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/houses-of-curiosity/" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#e16338] transition">
                <span className="sr-only">Instagram</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M12 2.16C15.2 2.16 15.58 2.16 16.9 2.24C19.68 2.4 21.6 4.4 21.76 7.1C21.84 8.42 21.84 8.8 21.84 12C21.84 15.2 21.84 15.58 21.76 16.9C21.6 19.6 19.68 21.6 16.9 21.76C15.58 21.84 15.2 21.84 12 21.84C8.8 21.84 8.42 21.84 7.1 21.76C4.32 21.6 2.4 19.6 2.24 16.9C2.16 15.58 2.16 15.2 2.16 12C2.16 8.8 2.16 8.42 2.24 7.1C2.4 4.4 4.32 2.4 7.1 2.24C8.42 2.16 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33 0 7.05 0.08C3.17 0.32 0.32 3.17 0.08 7.05C0 8.33 0 8.74 0 12C0 15.26 0 15.67 0.08 16.95C0.32 20.83 3.17 23.68 7.05 23.92C8.33 24 8.74 24 12 24C15.26 24 15.67 24 16.95 23.92C20.83 23.68 23.68 20.83 23.92 16.95C24 15.67 24 15.26 24 12C24 8.74 24 8.33 23.92 7.05C23.68 3.17 20.83 0.32 16.95 0.08C15.67 0 15.26 0 12 0ZM12 5.84C8.6 5.84 5.84 8.6 5.84 12C5.84 15.4 8.6 18.16 12 18.16C15.4 18.16 18.16 15.4 18.16 12C18.16 8.6 15.4 5.84 12 5.84ZM12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12C16 14.2 14.2 16 12 16ZM18.4 5.6C18.4 4.72 17.68 4 16.8 4C15.92 4 15.2 4.72 15.2 5.6C15.2 6.48 15.92 7.2 16.8 7.2C17.68 7.2 18.4 6.48 18.4 5.6Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-8 mt-8 border-t border-gray-800 text-center text-sm">
          <p>© 2025 Aaravam Labs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AaravamLandingPage;