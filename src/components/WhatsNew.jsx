import { Sparkles, Zap, Cpu, TrendingUp, AlertTriangle, Presentation, Rocket, Check, ArrowRight } from 'lucide-react'
import BorderGlow from './BorderGlow'

const WhatsNew = ({ onOpenRegister }) => {
  const newFeatures = [
    {
      icon: <Cpu className="w-8 h-8 text-[#F35B04]" />,
      title: "AI & Emerging Technologies",
      description: "Participants leverage AI and cutting-edge technologies to develop innovative, market-ready solutions."
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#F35B04]" />,
      title: "Startup-to-Market Challenge",
      description: "Teams transform technical ideas into viable businesses with sustainable revenue models."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#F35B04]" />,
      title: "High-Pressure Business Simulation",
      description: "Participants compete for limited investment funding, making strategic decisions under real-world constraints."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-[#F35B04]" />,
      title: "Live Crisis & Market Disruptions",
      description: "Unexpected challenges force teams to adapt, pivot, and solve problems in real time."
    },
    {
      icon: <Presentation className="w-8 h-8 text-[#F35B04]" />,
      title: "Investor Pitch Showcase",
      description: "Teams present to an expert jury, demonstrating innovation, business strategy, and execution."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#F35B04]" />,
      title: "Talent Discovery Platform",
      description: "A unique opportunity for sponsors to engage with high-potential innovators, future founders, and industry-ready talent."
    }
  ]

  return (
    <section id="whats-new" className="py-20 md:py-28 bg-white relative overflow-hidden">
      
      {/* Subtle background patterns */}
      <div className="absolute inset-0 tech-grid-pattern opacity-50"></div>
      <div className="absolute inset-0 dot-matrix-pattern opacity-40"></div>
      
      {/* Soft decorative gradients */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-orange-100/40 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-orange-100/40 to-transparent rounded-full blur-3xl"></div>
      
      {/* Corner accents */}
      <div className="absolute top-10 right-10 w-32 h-32 dot-matrix-pattern opacity-50 bg-orange-50/40 rounded-lg"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 dot-matrix-pattern opacity-50 bg-orange-50/40 rounded-lg"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight">
            <span className="font-black text-gray-900">What's New in</span> <span className="font-heading text-[#F35B04]">WAR ROOM 2.0?</span>
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-16 sm:mb-20 px-3 sm:px-0">
          {newFeatures.map((feat, index) => (
            <BorderGlow
              key={index}
              edgeSensitivity={20}
              glowColor="15 100 50"
              backgroundColor="#FFFFFF"
              borderRadius={16}
              glowRadius={50}
              glowIntensity={2.5}
              coneSpread={30}
              colors={['#F35B04', '#FF7426', '#FF8C42']}
              fillOpacity={0.6}
            >
              <div className="p-5 sm:p-6 md:p-8 relative flex flex-col justify-between group h-full">
                <div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform mb-4 sm:mb-6">
                    {feat.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{feat.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{feat.description}</p>
                </div>
              </div>
            </BorderGlow>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhatsNew
