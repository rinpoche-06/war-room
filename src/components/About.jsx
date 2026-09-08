import { Target } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      {/* Dotted grid background */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle, #F35B04 1.5px, transparent 1.5px)',
          backgroundSize: '30px 30px',
          opacity: 0.6
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight mb-6 sm:mb-8 md:mb-10 px-2">
            <span className="font-black text-gray-900">What is</span> <span className="font-heading text-[#F35B04]">WAR ROOM 2.0</span><span className="font-black text-gray-900">?</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-600 leading-relaxed font-medium px-3 sm:px-4">
            An immersive startup simulation designed to transform ideas into real-world ventures. Building on the success of War Room 1.0, this edition challenges participants to navigate dynamic market conditions, develop sustainable business models, acquire customers, and make strategic decisions under pressure.
          </p>

          {/* Event Details */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-10 md:mt-12 px-3">
            <div className="flex items-center gap-3 bg-white px-4 sm:px-5 md:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 w-full sm:w-auto">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#F35B04] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider">Event Date</div>
                <div className="text-base sm:text-lg font-black text-gray-900">13th September 2026</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white px-4 sm:px-5 md:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 w-full sm:w-auto">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#F35B04] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider">Team Size</div>
                <div className="text-base sm:text-lg font-black text-gray-900">3 Members</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white px-4 sm:px-5 md:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 w-full sm:w-auto">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#F35B04] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider">Registration Fee</div>
                <div className="text-base sm:text-lg font-black text-gray-900">₹300 per Team</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
