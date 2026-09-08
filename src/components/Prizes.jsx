import { Trophy, Gift, Award, CheckCircle2, Sparkles, Star } from 'lucide-react'

const Prizes = ({ onOpenRegister }) => {
  const prizeCategories = [
    {
      place: "1st Place Grand Winner",
      trophy: "🥇",
      reward: "Major Cash Prize + Championship Trophy",
      perks: [
        "Official Championship Trophy & Gold Certificates",
        "Direct fast-track entry to KSUM & Partner Incubation",
        "1-on-1 Mentorship session with VC Investors",
        "Exclusive Google Developer Swag Packs"
      ],
      highlight: true
    },
    {
      place: "2nd Place Winner",
      trophy: "🥈",
      reward: "Cash Prize + Runner-Up Trophy",
      perks: [
        "Runner-Up Trophy & Silver Certificates",
        "Incubation pitch deck review & guidance",
        "Google Developer Swag Kits for all members"
      ],
      highlight: false
    },
    {
      place: "3rd Place Winner",
      trophy: "🥉",
      reward: "Cash Prize + Trophy",
      perks: [
        "Second Runner-Up Trophy & Bronze Certificates",
        "Certificate of Excellence for all 3 members",
        "Google Developer Swag Kits"
      ],
      highlight: false
    }
  ]

  const specialAwards = [
    { title: "Best Investor Pitch Deck", desc: "Awarded to the team with the most compelling financial model, unit economics, and slide presentation." },
    { title: "Most Innovative AI Solution", desc: "Awarded to the team demonstrating the most creative and practical integration of AI tools." },
    { title: "Best Crisis Pivot Award", desc: "Awarded to the squad that adapted most effectively during the surprise Live Market Disruption round." }
  ]

  return (
    <section id="prizes" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-200 text-[#F35B04] text-xs font-extrabold uppercase tracking-widest rounded-full mb-4">
            <Gift size={14} />
            Rewards & Stakes
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Prizes & <span className="text-[#F35B04]">Perks</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 font-medium">
            Walk away with cash prizes, trophies, Google Developer swag, and direct connections to startup investors.
          </p>
        </div>

        {/* Podium Prize Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {prizeCategories.map((p, idx) => (
            <div 
              key={idx}
              className={`war-card rounded-3xl p-8 flex flex-col justify-between relative ${
                p.highlight 
                  ? 'border-2 border-[#F35B04] shadow-xl ring-4 ring-orange-100 bg-gradient-to-b from-white to-orange-50/40' 
                  : 'bg-white border-gray-200'
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-4xl">{p.trophy}</span>
                  {p.highlight && (
                    <span className="text-[10px] font-black px-3 py-1 bg-[#F35B04] text-white rounded-full uppercase tracking-wider">
                      TOP PODIUM
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-black text-gray-900 mb-2">{p.place}</h3>
                <div className="text-lg font-bold text-[#F35B04] mb-6">{p.reward}</div>

                <ul className="space-y-3 mb-6">
                  {p.perks.map((perk, perkIdx) => (
                    <li key={perkIdx} className="flex items-start gap-2.5 text-xs text-gray-700 font-semibold">
                      <CheckCircle2 size={16} className="text-[#F35B04] mt-0.5 flex-shrink-0" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Special Category Awards */}
        <div className="bg-gray-900 text-white rounded-3xl p-8 sm:p-10 border border-gray-800 shadow-xl max-w-5xl mx-auto">
          <h3 className="text-xl font-black text-white text-center mb-8 flex items-center justify-center gap-2">
            <Star className="text-amber-400 fill-amber-400" size={20} />
            <span>Special Category Awards</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {specialAwards.map((sa, idx) => (
              <div key={idx} className="bg-gray-800/80 rounded-2xl p-6 border border-gray-700">
                <h4 className="text-base font-bold text-orange-400 mb-2">{sa.title}</h4>
                <p className="text-xs text-gray-300 leading-relaxed">{sa.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-800 text-center">
            <p className="text-xs text-gray-400 font-medium">
              * Official Google Developer Group Certificates of Participation will be issued to all registered team members.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Prizes
