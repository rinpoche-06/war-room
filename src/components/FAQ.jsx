import { useState } from 'react'
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      q: "What is War Room 2.0?",
      a: "War Room 2.0 is an immersive 8-hour start-up simulation organized by GDG on Campus CEC. Instead of a typical hackathon, teams build a start-up from scratch — identifying a real-world problem, developing a business model, acquiring customers, and pitching to an investor jury, all while adapting to live market disruptions and challenges."
    },
    {
      q: "When and where is the event?",
      a: "War Room 2.0 will be held on 16th August 2026 at the College of Engineering, Chengannur (CEC)."
    },
    {
      q: "Who can participate, and do I need a team?",
      a: "Yes, participants compete in teams. War Room 1.0 saw 10+ teams from across the state, and War Room 2.0 expects 15+ teams and 45+ participants. Team formation details (size limits, registration process) will be shared closer to the event — check with the organizers for specifics."
    },
    {
      q: "What can participants win or gain from the event?",
      a: "Beyond the prize pool (₹20,000 in War Room 1.0), participants get hands-on experience in AI, innovation, and entrepreneurship, mentorship opportunities, exposure to sponsors for potential hiring or networking, and a chance to pitch their idea to an expert jury."
    }
  ]

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight px-2">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion list */}
        <div className="space-y-3 sm:space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div 
                key={idx}
                className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 md:p-6 text-left font-bold text-gray-900 text-sm sm:text-base md:text-lg flex justify-between items-center gap-3 sm:gap-4 hover:text-[#F35B04] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-50 text-[#F35B04] flex items-center justify-center flex-shrink-0">
                    {isOpen ? <ChevronUp size={16} className="sm:w-[18px] sm:h-[18px]" /> : <ChevronDown size={16} className="sm:w-[18px] sm:h-[18px]" />}
                  </div>
                </button>
                
                {isOpen && (
                  <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 pt-2 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default FAQ
