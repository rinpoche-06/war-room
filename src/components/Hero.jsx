import { useEffect, useState } from 'react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex flex-col bg-white overflow-hidden">
      {/* Main content area - top section with white background */}
      <div className="flex-1 flex flex-col items-center justify-center px-3 sm:px-4 py-16 sm:py-20 relative z-10">
        {/* Small logo badge centered with animation */}
        <div className={`mb-8 sm:mb-10 md:mb-12 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-90 translate-y-8'
        }`}>
          <img 
            src="/logo_with_sub.svg" 
            alt="War Room 2.0" 
            className="h-32 sm:h-40 md:h-48 lg:h-64 mx-auto object-contain"
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 w-full max-w-md px-4 sm:px-0">
          <a
            href="https://forms.gle/vFeM37mkf93KEkEHA"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange px-8 sm:px-10 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold uppercase tracking-wider shadow-lg w-full sm:w-auto text-center"
          >
            Register Now
          </a>
          <a
            href="#about"
            className="btn-outline-orange px-8 sm:px-10 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold uppercase tracking-wider bg-white w-full sm:w-auto text-center"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Mountain background - anchored at absolute bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <img 
          src="/mountain_bg.png" 
          alt="Mountain terrain" 
          className="w-full h-auto object-cover object-bottom"
        />
      </div>
    </section>
  )
}

export default Hero
