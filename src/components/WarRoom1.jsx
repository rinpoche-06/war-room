import { Clock, Users, Award, Quote } from 'lucide-react'

const WarRoom1 = () => {
  const stats = [
    { icon: <Clock />, number: "8 Hour", label: "Startup Simulation" },
    { icon: <Users />, number: "10+ Teams", label: "From Across The State" },
    { icon: <Award />, number: "₹20,000", label: "Prize Pool" }
  ]

  const testimonials = [
    {
      quote: "We came in with just a conceptual framework, but the sudden market crises forced us to figure out a real, scalable business model on the spot. It is the ultimate test of resilience.",
      author: "Christo Thomas",
      role: "Participant, War Room 1.0"
    },
    {
      quote: "War Room completely shifted my mindset from just writing code to actually building a survival-ready business under intense pressure. Pitching to strict investors was the ultimate high-octane crash course in tech entrepreneurship.",
      author: "Adhinarayan",
      role: "Participant, War Room 1.0"
    }
  ]

  return (
    <section id="warroom1" className="py-16 sm:py-20 md:py-24 relative bg-wr-dark">
      <div className="absolute inset-0 grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4">
              <span className="gradient-text">WAR ROOM</span> <span className="text-white">1.0</span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-wr-orange mx-auto mb-6 sm:mb-8"></div>
            <p className="text-sm sm:text-base lg:text-lg text-wr-gray uppercase tracking-wide px-2">
              Season 1 Recap — July 26, 2025
            </p>
          </div>

          {/* Main Description */}
          <div className="bg-wr-card border border-wr-border rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-12 mb-10 sm:mb-12">
            <p className="text-sm sm:text-base lg:text-lg text-wr-gray leading-relaxed mb-3 sm:mb-4">
              War Room 1.0 redefined the traditional hackathon by transforming it into an immersive start-up simulation that challenged participants to think beyond coding. Bringing together passionate student innovators from across the state, the event fostered collaboration, creativity, leadership, and strategic decision-making.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-wr-gray leading-relaxed mb-3 sm:mb-4">
              Participants identified real-world problems, developed innovative solutions, built prototypes, and pitched their business models while adapting to dynamic challenges and market conditions.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-wr-white font-semibold leading-relaxed">
              By combining innovation, entrepreneurship, and teamwork, War Room 1.0 empowered participants to turn ideas into practical solutions and build impactful ventures.
            </p>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-wr-card to-wr-dark border border-wr-orange/30 rounded-lg sm:rounded-xl p-6 sm:p-8 text-center"
              >
                <div className="text-wr-orange mb-3 sm:mb-4 flex justify-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-black gradient-text mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm text-wr-gray uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 px-2">
              What <span className="gradient-text">Participants Said</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-wr-card border border-wr-border rounded-lg sm:rounded-xl p-5 sm:p-8 relative card-lift"
                >
                  <Quote className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 text-wr-orange opacity-20" />
                  <div className="relative z-10">
                    <p className="text-sm sm:text-base text-wr-gray italic leading-relaxed mb-5 sm:mb-6">
                      "{testimonial.quote}"
                    </p>
                    <div className="border-t border-wr-border pt-3 sm:pt-4">
                      <div className="text-sm sm:text-base font-bold text-white">{testimonial.author}</div>
                      <div className="text-xs sm:text-sm text-wr-gray">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Winners Section */}
          <div className="bg-gradient-to-br from-wr-card to-wr-dark border border-wr-orange/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-center mb-8">
              <span className="gradient-text">Winners</span> — War Room 1.0
            </h3>
            <div className="space-y-6">
              {[
                { 
                  rank: "1st Place", 
                  team: "Team Ignites", 
                  members: "Ananya P Santh, Amaya Jayan, Adithya Sajith", 
                  college: "College of Engineering, Chengannur",
                  icon: "🥇"
                },
                { 
                  rank: "2nd Place", 
                  team: "Team Trailblazers", 
                  members: "Abhijith R Nair, Abhinav Suresh, Arjun R", 
                  college: "College of Engineering, Kalloopara",
                  icon: "🥈"
                },
                { 
                  rank: "3rd Place", 
                  team: "Team Strawhats", 
                  members: "Amanul Farhan, Nithin Jayakumar, Karthik Santhosh", 
                  college: "College of Engineering, Chengannur",
                  icon: "🥉"
                }
              ].map((winner, index) => (
                <div 
                  key={index}
                  className="bg-wr-dark border border-wr-border rounded-xl p-6 flex items-start gap-4"
                >
                  <div className="text-4xl">{winner.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-wr-orange font-bold">{winner.rank}</span>
                      <span className="text-white font-bold text-lg">{winner.team}</span>
                    </div>
                    <p className="text-wr-gray text-sm mb-1">{winner.members}</p>
                    <p className="text-wr-gray-dark text-xs">{winner.college}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legacy Message */}
          <div className="mt-16 text-center">
            <p className="text-2xl font-bold gradient-text mb-4">
              The Legacy Continues with War Room 2.0
            </p>
            <p className="text-lg text-wr-gray mb-8">
              Building on the success of Season 1, we're raising the stakes higher.
            </p>
            <a
              href="#warroom2"
              className="inline-block px-10 py-4 bg-wr-orange text-white text-lg font-bold rounded-xl hover:bg-wr-orange-light transition-all duration-300 hover:scale-105"
            >
              Learn About War Room 2.0
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WarRoom1
