import { useState } from 'react'

const Navigation = ({ scrolled, onOpenRegister }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#warroom1', label: 'WAR ROOM 1.0' },
    { href: '#whats-new', label: "What's New" },
    { href: '#sponsors', label: 'Sponsors' },
    { href: '#faq', label: 'FAQs' },
  ]

  // Menu Icon SVG
  const MenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  )

  // X Icon SVG
  const XIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  )

  // Arrow Right Icon SVG
  const ArrowRightIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  )

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out navbar-pattern ${
      scrolled 
        ? 'mx-2 sm:mx-4 mt-2 sm:mt-4 rounded-xl sm:rounded-2xl shadow-lg bg-white border-2 border-[#F35B04]' 
        : 'bg-white border-b-4 border-[#F35B04]'
    }`}>
      <div className={`transition-all duration-300 ${scrolled ? 'max-w-full px-3 sm:px-6' : 'max-w-7xl mx-auto px-3 sm:px-6 lg:px-8'}`}>
        <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? 'py-2 sm:py-2' : 'py-3 sm:py-4'}`}>
          {/* GDG Logo with Text */}
          <a href="#home" className="flex items-center gap-2 sm:gap-3 group">
            <img 
              src="/gdg-logo.png" 
              alt="GDG Logo" 
              className={`transition-all duration-300 ${scrolled ? 'h-7 sm:h-8' : 'h-9 sm:h-12'} w-auto object-contain group-hover:scale-105`}
            />
            {scrolled ? (
              // Compact version: GDG CEC
              <div className="flex items-center gap-1">
                <span className="text-base sm:text-lg font-extrabold text-black">GDG</span>
                <span className="text-base sm:text-lg font-extrabold text-[#F35B04]">CEC</span>
              </div>
            ) : (
              // Full version: Google Developer Groups On Campus / College of Engineering Chengannur
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-black leading-tight">
                  Google Developer Groups On Campus
                </span>
                <span className="text-[10px] sm:text-xs font-medium text-gray-600 leading-tight hidden xs:block">
                  College of Engineering Chengannur
                </span>
              </div>
            )}
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-[#D64900] hover:text-[#F35B04] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F35B04] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#D64900] hover:text-[#F35B04] hover:bg-white/50 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t-2 border-[#F35B04] px-3 sm:px-4 pt-3 pb-6 space-y-2 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 sm:px-4 text-sm sm:text-base font-bold text-[#D64900] hover:text-[#F35B04] hover:bg-[#FFEAD7] rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navigation
