import React, { useState } from 'react';
import { galleryImages } from '../../mock';
import { ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ color: '#1e1919' }}>
            Our Work
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4" style={{ color: '#736c64' }}>
            See the transformations that make our clients smile
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg sm:rounded-xl cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-active:scale-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="w-6 h-6 sm:w-8 sm:h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Selected gallery"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <button
              className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-lg sm:text-xl hover:bg-white/30 transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;