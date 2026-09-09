import { useState } from 'react'
import { X } from 'lucide-react'
import IMG_0033 from '../assets/IMG_0033.webp'
import IMG_0165 from '../assets/IMG_0165.webp'
import IMG_0186 from '../assets/IMG_0186.webp'
import IMG_0618 from '../assets/IMG_0618.webp'
import IMG_9941 from '../assets/IMG_9941.webp'
import heroImg from '../assets/hero.png'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    { src: IMG_0033, alt: 'War Room 1.0 - Team Collaboration', caption: 'Teams working together' },
    { src: IMG_0165, alt: 'War Room 1.0 - Pitch Presentation', caption: 'Pitch presentations' },
    { src: IMG_0186, alt: 'War Room 1.0 - Mentorship', caption: 'Mentorship sessions' },
    { src: IMG_0618, alt: 'War Room 1.0 - Intense Discussions', caption: 'Strategic discussions' },
    { src: IMG_9941, alt: 'War Room 1.0 - Group Photo', caption: 'All participants' },
    { src: heroImg, alt: 'War Room 1.0 - Event Banner', caption: 'Event moments' }
  ]

  return (
    <section id="gallery" className="py-16 sm:py-20 md:py-24 relative bg-wr-black">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4">
              <span className="gradient-text">Gallery</span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-wr-orange mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg md:text-xl text-wr-gray px-2">
              Moments from War Room 1.0
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg sm:rounded-xl border border-wr-border card-lift"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-video bg-wr-card relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23161616" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" fill="%23FF6B00" text-anchor="middle" dy=".3em" font-size="20"%3EWar Room 1.0%3C/text%3E%3C/svg%3E'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold">{image.caption}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedImage && (
            <div 
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-wr-card rounded-full hover:bg-wr-orange transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="max-w-5xl w-full">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto rounded-xl"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Crect fill="%23161616" width="800" height="600"/%3E%3Ctext x="50%25" y="50%25" fill="%23FF6B00" text-anchor="middle" dy=".3em" font-size="30"%3EWar Room 1.0%3C/text%3E%3C/svg%3E'
                  }}
                />
                <p className="text-white text-center mt-4 text-lg">{selectedImage.caption}</p>
              </div>
            </div>
          )}

          {/* Bottom Message */}
          <div className="mt-16 text-center">
            <p className="text-xl text-wr-gray mb-4">
              Want to be part of the next chapter?
            </p>
            <p className="text-2xl font-bold gradient-text">
              Join us for War Room 2.0 and create your own memories! 📸
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
