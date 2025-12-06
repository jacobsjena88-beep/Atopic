import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, Menu, X } from 'lucide-react';
import ParticleRing from './components/ParticleRing';
import SkinCube from './components/SkinCube';
import InfoModal from './components/InfoModal';
import { generateSectionContent } from './services/gemini';
import { ContentSection } from './types';

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<ContentSection | null>(null);
  const [generatedText, setGeneratedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections: ContentSection[] = [
    { title: 'Our Mission', key: 'mission', prompt: 'Our Mission' },
    { title: 'Our Vision', key: 'vision', prompt: 'Our Vision' },
    { title: 'Our Story', key: 'story', prompt: 'Our Story' },
  ];

  const handleSectionClick = async (section: ContentSection) => {
    setActiveSection(section);
    setModalOpen(true);
    setLoading(true);
    setGeneratedText('');
    
    const text = await generateSectionContent(section.prompt);
    
    setGeneratedText(text);
    setLoading(false);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0f1035] text-white selection:bg-orange-500 selection:text-white">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e1b4b] z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent z-0 pointer-events-none"></div>
      
      <ParticleRing />

      {/* --- Top Left: DR Logo --- */}
      <div className="absolute top-6 left-6 md:top-12 md:left-12 z-40">
        <div className="bg-orange-500 text-white font-bold text-3xl px-5 py-3 shadow-lg shadow-orange-900/20">
          DR
        </div>
      </div>

      {/* --- Top Right: Actions --- */}
      <div className="absolute top-6 right-6 md:top-12 md:right-12 z-40 flex flex-col items-end gap-3">
        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 bg-white/10 backdrop-blur rounded-lg mb-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col items-end gap-3 transition-all`}>
          {/* Button Row */}
          <div className="flex items-center gap-3">
             <button className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-full shadow-lg shadow-orange-900/30 text-sm md:text-base tracking-wide">
               REACH OUT
             </button>
             <div className="bg-orange-500 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-white shadow-lg shadow-orange-900/30">
               <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
             </div>
          </div>
          
          {/* Links Row */}
          <div className="flex items-center gap-2 mt-1">
             <a href="#" className="flex items-center gap-1 px-4 py-1 rounded-full border border-blue-400/30 bg-blue-900/30 text-blue-100 hover:bg-blue-800/40 transition-colors text-xs md:text-sm">
               @DermREACH
             </a>
             <a href="#" className="flex items-center gap-1 px-4 py-1 rounded-full border border-blue-400/30 bg-blue-900/30 text-blue-100 hover:bg-blue-800/40 transition-colors text-xs md:text-sm underline decoration-blue-300/50">
               Website
             </a>
          </div>
        </div>
      </div>

      {/* --- Center Hero: ATopic --- */}
      <main className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
        <div className="relative flex flex-col items-center transform -translate-y-8 md:-translate-y-0">
          
          {/* Main Typography */}
          <div className="flex items-center justify-center pointer-events-auto">
             {/* AT */}
             <span className="font-sans font-bold text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[13rem] leading-none tracking-tighter text-white drop-shadow-2xl">
               AT
             </span>
             
             {/* Cube Graphic replacing 'o' */}
             <div className="w-[4.5rem] h-[4.5rem] sm:w-[7rem] sm:h-[7rem] md:w-[9rem] md:h-[9rem] lg:w-[11rem] lg:h-[11rem] mx-1 md:mx-2 mt-2 md:mt-4 relative animate-in fade-in zoom-in duration-700">
                <SkinCube className="w-full h-full drop-shadow-2xl filter saturate-110" />
             </div>
             
             {/* pic */}
             <span className="font-sans font-bold text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[13rem] leading-none tracking-tighter text-white drop-shadow-2xl">
               pic
             </span>
          </div>
          
          {/* Skin Experts Subtext */}
          <div className="w-full flex justify-end pr-4 md:pr-12 mt-2 md:mt-4">
             <span className="font-bold tracking-[0.3em] text-gray-200 text-xs sm:text-base md:text-xl uppercase drop-shadow-md">
               Skin Experts
             </span>
          </div>

          {/* Nav Links (Moved below graphic to keep visual clean but accessible) */}
          <div className="mt-16 md:mt-24 pointer-events-auto flex flex-wrap justify-center gap-6 md:gap-12 opacity-80 hover:opacity-100 transition-opacity">
            {sections.map((section) => (
              <button
                key={section.key}
                onClick={() => handleSectionClick(section)}
                className="group flex flex-col items-center gap-2"
              >
                <span className="text-sm md:text-lg font-medium text-blue-100 group-hover:text-white tracking-widest uppercase transition-colors">
                  {section.title}
                </span>
                <span className="w-1 h-1 rounded-full bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

        </div>
      </main>

      {/* --- Bottom Left: Footer Text --- */}
      <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 z-40 max-w-md">
         <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">DermREACH</h2>
         <p className="text-gray-300 font-light italic text-base md:text-lg mt-1">
           Access to Quality Dermatology for All
         </p>
      </div>

      <InfoModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={activeSection?.title || ''}
        content={generatedText}
        isLoading={loading}
      />
    </div>
  );
};

export default App;
