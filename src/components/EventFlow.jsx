import { Clock, CheckCircle, ShieldAlert, Sparkles, Play, Award } from 'lucide-react'

const EventFlow = () => {
  const schedule = [
    {
      time: "08:30 AM – 09:00 AM",
      title: "Reporting & Squad Check-in",
      desc: "Teams report to SDPK Hall, College of Engineering Chengannur. Verification of member badges, laptops, and setup.",
      status: "Check-in"
    },
    {
      time: "09:00 AM – 09:30 AM",
      title: "Phase 0: Command Briefing & Theme Reveal",
      desc: "Unveiling the core problem domains, simulation rules, valuation scoring metrics, and AI copilot guidelines.",
      status: "Briefing"
    },
    {
      time: "09:30 AM – 11:30 AM",
      title: "Phase 1: Market Research & Product Strategy",
      desc: "Teams identify customer pain points, outline product specifications, and construct initial revenue models.",
      status: "Ideation"
    },
    {
      time: "11:30 AM – 01:00 PM",
      title: "Phase 2: Live Market Disruption (Pivot Round)",
      desc: "CRISIS EVENT DROPS! A sudden algorithm change or market shock forces teams to pivot their model live on screen.",
      status: "Crisis Pivot",
      isHighlight: true
    },
    {
      time: "01:00 PM – 02:00 PM",
      title: "Tactical Lunch & Founder Networking",
      desc: "Fuel up, exchange notes with fellow squads, and prepare for MVP building.",
      status: "Networking"
    },
    {
      time: "02:00 PM – 03:30 PM",
      title: "Phase 3: MVP Prototyping & Unit Economics",
      desc: "Build prototype wireframes, simulate customer acquisition funnel, and calculate 3-year burn rate & cash runway.",
      status: "Execution"
    },
    {
      time: "03:30 PM – 04:30 PM",
      title: "Pitch Deck Lock & Mentor Speed-Dating",
      desc: "Finalize pitch deck slides. Undergo a 3-minute rapid grilling round with assigned startup mentors.",
      status: "Lockdown"
    },
    {
      time: "04:30 PM – 05:30 PM",
      title: "Phase 4: Grand Investor Pitch Showdown",
      desc: "Top finalist squads pitch live on stage to the VC & Angel Investor Panel. 4 mins pitch + 3 mins jury Q&A.",
      status: "Final Pitch",
      isHighlight: true
    },
    {
      time: "05:30 PM – 06:00 PM",
      title: "Valedictory & Prize Ceremony",
      desc: "Announcement of War Room 2.0 Champions, runners-up, best pitch award, and presentation of trophies.",
      status: "Awards"
    }
  ]

  return (
    <section id="timeline" className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-[#F35B04] text-xs font-extrabold uppercase tracking-widest rounded-full mb-4">
            <Clock size={14} />
            8-Hour Simulation Roadmap
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Event <span className="text-[#F35B04]">Timeline & Flow</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 font-medium">
            Every minute counts. Here is how your 8 hours inside War Room 2.0 will unfold on 13th September 2026.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-1 bg-gray-200 -translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-8">
            {schedule.map((item, idx) => (
              <div 
                key={idx} 
                className={`relative flex flex-col sm:flex-row items-start ${
                  idx % 2 === 0 ? 'sm:flex-row-reverse text-left' : 'text-left'
                }`}
              >
                
                {/* Center marker */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1.5 w-6 h-6 rounded-full bg-white border-4 border-[#F35B04] shadow-md z-10 hidden sm:block"></div>

                {/* Content Box */}
                <div className="w-full sm:w-[calc(50%-2rem)]">
                  <div 
                    className={`war-card rounded-2xl p-6 sm:p-7 border ${
                      item.isHighlight 
                        ? 'border-orange-400 bg-gradient-to-br from-white to-orange-50/60 shadow-md ring-2 ring-orange-200' 
                        : 'border-gray-200 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-black text-[#F35B04] bg-orange-100 px-3 py-1 rounded-full">
                        {item.time}
                      </span>
                      <span className="text-[10px] font-extrabold text-gray-500 uppercase tracking-wider">
                        {item.status}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

export default EventFlow
