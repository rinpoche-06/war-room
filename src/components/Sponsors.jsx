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
        <div className="flex justify-center mb-12 sm:mb-16 px-2">
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
            onContactClick={() => window.open('https://www.linkedin.com/company/incrementumx/', '_blank')}
            behindGlowEnabled={true}
            behindGlowColor="rgba(243, 91, 4, 0.2)"
            behindGlowSize="40%"
            innerGradient="linear-gradient(145deg, rgba(255, 234, 215, 0.9) 0%, rgba(255, 245, 236, 0.95) 50%, rgba(255, 234, 215, 0.9) 100%)"
            lightMode={true}
          />
        </div>

      </div>
    </section>
  )
}

export default Sponsors
