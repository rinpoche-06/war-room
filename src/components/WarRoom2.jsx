import { Zap, Target, TrendingUp, AlertTriangle, Users, Presentation } from 'lucide-react'
import { useEffect, useState } from 'react'

const WarRoom2 = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('warroom2-title')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI & Emerging Technologies",
      description: "Participants leverage AI and cutting-edge technologies to develop innovative, market-ready solutions."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Startup-to-Market Challenge",
      description: "Teams transform technical ideas into viable businesses with sustainable revenue models."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "High-Pressure Business Simulation",
      description: "Participants compete for limited investment funding, making strategic decisions under real-world constraints."
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Live Crisis & Market Disruptions",
      description: "Unexpected challenges force teams to adapt, pivot, and solve problems in real time."
    },
    {
      icon: <Presentation className="w-8 h-8" />,
      title: "Investor Pitch Showcase",
      description: "Teams present to an expert jury, demonstrating innovation, business strategy, and execution."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Talent Discovery Platform",
      description: "A unique opportunity for sponsors to engage with high-potential innovators, future founders, and industry-ready talent."
    }
  ]

  const stats = [
    { number: "15+", label: "Teams" },
    { number: "45+", label: "Participants" },
    { number: "8", label: "Hour Simulation" }
  ]

  return (
    <section id="warroom2" className="py-24 relative bg-wr-dark">
      <div className="absolute inset-0 grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              id="warroom2-title"
              className={`text-5xl md:text-7xl lg:text-8xl font-black mb-8 transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'opacity-100 scale-100 translate-y-0' 
                  : 'opacity-0 scale-90 translate-y-8'
              }`}
            >
              <span className="text-wr-orange orange-brace text-6xl md:text-8xl lg:text-9xl">{'{'}</span>
              <span className="gradient-text mx-2">WAR ROOM</span>
              <span className="text-white">2.0</span>
              <span className="text-wr-orange orange-brace text-6xl md:text-8xl lg:text-9xl">{'}'}</span>
            </h2>
            <div className="w-24 h-1 bg-wr-orange mx-auto mb-8"></div>
            <p className="text-xl text-wr-gray max-w-4xl mx-auto leading-relaxed">
              War Room 2.0 is an immersive start-up simulation designed to transform ideas into real-world ventures. Building on the success of War Room 1.0, this edition challenges participants to navigate dynamic market conditions, develop sustainable business models, acquire customers, and make strategic decisions under pressure.
            </p>
          </div>

          {/* Main Description */}
          <div className="bg-wr-card border border-wr-orange/30 rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-wr-orange/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-wr-orange/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <p className="text-lg text-wr-gray leading-relaxed mb-4">
                With a strong emphasis on AI, innovation, and entrepreneurship, the event equips aspiring builders with practical problem-solving skills, resilience, and collaborative thinking.
              </p>
              <p className="text-lg text-wr-white font-semibold leading-relaxed">
                More than a competition, War Room 2.0 prepares participants to adapt, innovate, and lead in today's fast-evolving technology landscape.
              </p>
            </div>
          </div>

          {/* Why War Room 2.0 */}
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why <span className="gradient-text">War Room 2.0?</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-wr-card border border-wr-border rounded-xl p-6 card-lift hover:border-wr-orange/50 transition-all duration-300"
                >
                  <div className="text-wr-orange mb-4">{feature.icon}</div>
                  <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                  <p className="text-wr-gray leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-wr-dark to-wr-card border border-wr-orange/30 rounded-xl p-8 text-center relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-wr-orange/0 to-wr-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-5xl md:text-6xl font-black gradient-text mb-2">{stat.number}</div>
                  <div className="text-lg text-wr-gray uppercase tracking-wide">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <p className="text-2xl font-bold mb-6 gradient-text">
              Think fast. Decide smart. Build to survive.
            </p>
            <a
              href="https://forms.gle/vFeM37mkf93KEkEHA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-wr-orange text-white text-lg font-bold rounded-xl hover:bg-wr-orange-light transition-all duration-300 hover:scale-105 glow-orange"
            >
              Join War Room 2.0
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WarRoom2
