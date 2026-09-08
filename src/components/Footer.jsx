import { MapPin, Mail, Phone, ArrowUp, MessageSquare } from 'lucide-react'

const Footer = ({ onOpenRegister }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-br from-[#F35B04] via-[#FF7426] to-[#D64900] text-white pt-12 sm:pt-16 pb-10 sm:pb-12 border-t-4 border-orange-600 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 tech-grid-pattern opacity-15"></div>
      <div className="absolute inset-0 dot-matrix-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-900/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-white/20">
          
          {/* Col 1 & 2: GDG CEC Brand & Overview */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <img 
                src="/gdg-logo.png" 
                alt="GDG Logo" 
                className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 object-contain"
              />
              <div>
                <span className="text-xs sm:text-sm font-extrabold text-white block leading-tight">Google Developer Group</span>
                <span className="text-[10px] sm:text-xs text-white/80 font-medium">College Of Engineering, Chengannur</span>
              </div>
            </div>

            <div className="max-w-[250px] sm:max-w-xs">
              <img 
                src="/footer-logo.png" 
                alt="War Room 2.0" 
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="flex items-center gap-2 sm:gap-3 pt-2">
              {/* Instagram */}
              <a href="https://www.instagram.com/gdg_oncampus_cec?igsh=MXI1b2JsNGszeG16cg==" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-[#F35B04] flex items-center justify-center transition-all">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/gdsc-cec/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-[#F35B04] flex items-center justify-center transition-all">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-[10px] sm:text-xs font-black text-white/70 uppercase tracking-widest mb-3 sm:mb-4">Navigation</h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs font-semibold text-white/90">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#warroom1" className="hover:text-white transition-colors">War Room 1.0</a></li>
              <li><a href="#whats-new" className="hover:text-white transition-colors">What's New</a></li>
              <li><a href="#sponsors" className="hover:text-white transition-colors">Sponsors</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Col 5: Location & Contact */}
          <div>
            <h4 className="text-[10px] sm:text-xs font-black text-white/70 uppercase tracking-widest mb-3 sm:mb-4">Contact</h4>
            <div className="space-y-2.5 sm:space-y-3 text-xs text-white/90 font-medium">
              <div>
                <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                  <Phone size={13} className="sm:w-[14px] sm:h-[14px] text-white flex-shrink-0" />
                  <span className="font-bold">Phone</span>
                </div>
                <div className="pl-5 sm:pl-6 space-y-0.5 sm:space-y-1">
                  <div>+91 91882 86360</div>
                  <div>+91 90375 14241</div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                  <Mail size={13} className="sm:w-[14px] sm:h-[14px] text-white flex-shrink-0" />
                  <span className="font-bold">Email</span>
                </div>
                <div className="pl-5 sm:pl-6">
                  <a href="mailto:gdgoncampuscec@gmail.com" className="hover:text-white/70 transition-colors break-all">gdgoncampuscec@gmail.com</a>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                  <MapPin size={13} className="sm:w-[14px] sm:h-[14px] text-white flex-shrink-0" />
                  <span className="font-bold">Location</span>
                </div>
                <div className="pl-5 sm:pl-6">
                  <span>College of Engineering Chengannur, Alappuzha, Kerala - 689121</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 sm:pt-8 text-center text-[10px] sm:text-xs text-white/70 font-medium">
          <div>
            © 2026 GDG on Campus CEC. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
