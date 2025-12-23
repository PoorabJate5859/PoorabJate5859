import React from 'react';
import { Scissors, Palette, Sparkles, Flower, Crown, User } from 'lucide-react';
import { services } from '../../mock';

const iconMap = {
  scissors: Scissors,
  palette: Palette,
  sparkles: Sparkles,
  flower: Flower,
  crown: Crown,
  user: User
};

const Services = () => {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ color: '#1e1919' }}>
            Our Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4" style={{ color: '#736c64' }}>
            Premium beauty and grooming services tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group bg-white rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 border-2 transition-all duration-300 hover:shadow-xl active:scale-95 md:hover:scale-105"
                style={{ borderColor: '#f7f5f2' }}
              >
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-5 transition-colors"
                  style={{ backgroundColor: '#f7f5f2' }}
                >
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: '#61525a' }} />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3" style={{ color: '#1e1919' }}>
                  {service.name}
                </h3>
                <p className="mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed" style={{ color: '#736c64' }}>
                  {service.description}
                </p>
                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t" style={{ borderColor: '#f7f5f2' }}>
                  <span className="text-xs sm:text-sm font-medium" style={{ color: '#736c64' }}>
                    Starting from
                  </span>
                  <span className="text-xl sm:text-2xl font-bold" style={{ color: '#61525a' }}>
                    ${service.startingPrice}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Below Services */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <a
            href="#booking"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold text-white text-base sm:text-lg transition-all hover:opacity-90 hover:shadow-xl active:scale-95 md:hover:scale-105"
            style={{ backgroundColor: '#61525a' }}
          >
            View Full Price List
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;