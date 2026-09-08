import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import WhatsNew from './components/WhatsNew'
import LastYearHighlights from './components/LastYearHighlights'
import Sponsors from './components/Sponsors'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import RegistrationModal from './components/RegistrationModal'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-[#F35B04] selection:text-white">
      {/* Navbar */}
      <Navigation 
        scrolled={scrolled} 
        onOpenRegister={() => setIsRegisterOpen(true)} 
      />

      {/* Hero Landing Section */}
      <Hero 
        onOpenRegister={() => setIsRegisterOpen(true)} 
      />

      {/* About Section */}
      <About />

      {/* Last Year Highlights (War Room 1.0) */}
      <LastYearHighlights />

      {/* What's New This Year (War Room 2.0) */}
      <WhatsNew 
        onOpenRegister={() => setIsRegisterOpen(true)} 
      />

      {/* Sponsors & Partners */}
      <Sponsors />

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <Footer 
        onOpenRegister={() => setIsRegisterOpen(true)} 
      />

      {/* Interactive Registration Modal */}
      <RegistrationModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)} 
      />
    </div>
  )
}

export default App
