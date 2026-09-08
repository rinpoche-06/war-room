import InfiniteSpiral from './InfiniteSpiral'
import IMG_0033 from '../assets/IMG_0033.webp'
import IMG_0165 from '../assets/IMG_0165.webp'
import IMG_0186 from '../assets/IMG_0186.webp'
import IMG_0618 from '../assets/IMG_0618.webp'
import IMG_9941 from '../assets/IMG_9941.webp'

const LastYearHighlights = () => {
  // Spiral gallery images from War Room 1.0
  const spiralImages = [
    { src: IMG_0033, alt: 'War Room 1.0 - Team Collaboration' },
    { src: IMG_0165, alt: 'War Room 1.0 - Pitch Presentation' },
    { src: IMG_0186, alt: 'War Room 1.0 - Mentorship Session' },
    { src: IMG_0618, alt: 'War Room 1.0 - Intense Discussions' },
    { src: IMG_9941, alt: 'War Room 1.0 - Group Photo' }
  ]

  return (
    <section id="warroom1" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - InfiniteSpiral Gallery */}
          <div className="relative" style={{ height: '600px' }}>
            <InfiniteSpiral
              items={spiralImages}
              animationMode="auto"
              speed={0.25}
              radius={180}
              cardWidth={240}
              cardHeight={180}
              verticalSpacing={60}
              perspective={1200}
              cardRadius={12}
              centerScale={1.2}
              edgeBlur={4}
              cardsPerTurn={5}
              pauseOnHover={false}
              imageFit="cover"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight mb-4">
                WAR ROOM <span className="text-[#F35B04]">1.0</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                An immersive 8-hour startup simulation that challenged 10 teams through real-world business scenarios, investor pitches, and crisis management rounds.
              </p>
            </div>

            {/* Event Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div className="text-3xl font-black text-[#F35B04] mb-1">10</div>
                <div className="text-xs font-bold text-gray-600 uppercase">Teams</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div className="text-3xl font-black text-[#F35B04] mb-1">8</div>
                <div className="text-xs font-bold text-gray-600 uppercase">Hours</div>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Event Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#F35B04]"></div>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>Real startup challenges</strong> - Teams navigated funding rounds, customer acquisition, PR crises, and legal disputes
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#F35B04]"></div>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>Multi-round format</strong> - Investor pitches, prototyping, crisis management, and customer validation rounds
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#F35B04]"></div>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>July 26, 2025</strong> - Held at SDPK Room, College of Engineering Chengannur
                  </p>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default LastYearHighlights
