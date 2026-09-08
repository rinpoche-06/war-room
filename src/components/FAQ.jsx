import { useState } from 'react'
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      q: "What is War Room 2.0?",
      a: "War Room 2.0 is an 8-hour startup simulation where teams build and develop a venture while navigating real-world business challenges."
    },
    {
      q: "How many people can be in a team?",
      a: "Each team can have 1 to 3 participants."
    },
    {
      q: "Do I need to know coding?",
      a: "No. War Room focuses on technology, innovation, business, strategy, and entrepreneurship, so different skills can contribute to a team."
    },
    {
      q: "What happens during War Room?",
      a: "Teams develop a solution, build a business around it, adapt to changing situations, market their product, and finally pitch their venture."
    },
    {
      q: "When is War Room 2.0?",
      a: "War Room 2.0 will be held on 13 September 2026 at the College of Engineering Chengannur (CEC), from 8:00 AM to 4:00 PM."
    }
  ]

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 tracking-tight px-2">
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
