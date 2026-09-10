import { Handshake, Download, Mail, Sparkles, ExternalLink } from 'lucide-react'
import ProfileCard from './ProfileCard'
import Grainient from './Grainient'

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-16 sm:py-20 md:py-28 relative overflow-hidden">
      
      {/* Grainient Background */}
      <div className="absolute inset-0">
        <Grainient
          color1="#FFF5EC"
          color2="#FFEAD7"
          color3="#FFFFFF"
          timeSpeed={0.15}
          colorBalance={0.2}
          warpStrength={0.8}
          warpFrequency={4.0}
          warpSpeed={1.5}
          warpAmplitude={40.0}
          blendAngle={45.0}
          blendSoftness={0.1}
          rotationAmount={300.0}
          noiseScale={1.5}
          grainAmount={0.05}
          grainScale={3.0}
          grainAnimated={false}
          contrast={1.2}
          gamma={1.1}
          saturation={0.8}
          centerX={0.0}
          centerY={0.0}
          zoom={1.0}
          lightMode={true}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 tracking-tight">
            <span className="font-normal">Powered by</span> <span className="font-black text-[#F35B04]">IncrementumX</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-gray-600 font-medium">
            War Room 2.0 is proudly sponsored by IncrementumX, an operator-led growth firm for early-stage startups.
          </p>
        </div>

        {/* Sponsor ProfileCard */}
        <div className="flex justify-center mb-8 sm:mb-12 px-2">
          <div onClick={() => window.open('https://www.incrementumx.com/', '_blank')} className="cursor-pointer">
            <ProfileCard
              name="IncrementumX"
              title="Operator-led growth firm"
              handle="incrementumx"
              status="Growth Partner"
              contactText="Visit"
              avatarUrl="/incx.png"
              miniAvatarUrl="/incx.png"
              showUserInfo={false}
              enableTilt={true}
              enableMobileTilt={false}
              behindGlowEnabled={true}
              behindGlowColor="rgba(243, 91, 4, 0.2)"
              behindGlowSize="40%"
              innerGradient="linear-gradient(145deg, rgba(255, 234, 215, 0.9) 0%, rgba(255, 245, 236, 0.95) 50%, rgba(255, 234, 215, 0.9) 100%)"
              lightMode={true}
            />
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center justify-center gap-4 mb-12 sm:mb-16">
          <a 
            href="https://www.instagram.com/incx.official?stkn=MzI2N2NrbXdhdmF1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white border-2 border-gray-200 hover:border-[#F35B04] flex items-center justify-center transition-all hover:scale-110 shadow-sm hover:shadow-md"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="#E4405F" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a 
            href="https://www.linkedin.com/company/incrementumx/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white border-2 border-gray-200 hover:border-[#F35B04] flex items-center justify-center transition-all hover:scale-110 shadow-sm hover:shadow-md"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="#0A66C2" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>

        {/* Sponsor Pitch */}
        <div className="max-w-4xl mx-auto px-3 sm:px-4">
          <div className="bg-white rounded-2xl border-2 border-orange-100 p-6 sm:p-8 md:p-10 shadow-sm">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-center">
              Founders, Operators, and Strategists who've built, scaled, and backed <span className="font-bold text-[#F35B04]">135+ startups</span>. They partner with ambitious early-stage businesses to unlock growth with:
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto mb-6">
              <div className="text-center p-4 bg-orange-50 rounded-xl border border-orange-100">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#F35B04] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-sm font-bold text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>End-to-end digital strategy-to-execution support</h4>
              </div>
              
              <div className="text-center p-4 bg-orange-50 rounded-xl border border-orange-100">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#F35B04] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-sm font-bold text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>Deep category experience</h4>
              </div>
            </div>

            <p className="text-center text-base sm:text-lg font-semibold text-[#F35B04]">
              Your all-in-one growth engine for startups.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Sponsors
