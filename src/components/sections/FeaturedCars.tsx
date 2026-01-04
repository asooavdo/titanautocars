import { useState } from 'react';
import { ArrowRight, Fuel, Gauge, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Car {
  id: number;
  name: string;
  brand: string;
  price: string;
  image: string;
  specs: {
    engine: string;
    power: string;
    transmission: string;
  };
  category: string;
}

const cars: Car[] = [
  {
    id: 1,
    name: 'Urus Performante',
    brand: 'Lamborghini',
    price: '$280,000',
    image: 'https://images.unsplash.com/photo-1636866674899-e03657c1ffc0?w=600&q=80',
    specs: { engine: 'V8 Twin-Turbo', power: '666 HP', transmission: 'Automatic' },
    category: 'SUV',
  },
  {
    id: 2,
    name: 'Cullinan',
    brand: 'Rolls Royce',
    price: '$420,000',
    image: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=600&q=80',
    specs: { engine: 'V12 Twin-Turbo', power: '563 HP', transmission: 'Automatic' },
    category: 'SUV',
  },
  {
    id: 3,
    name: '911 GT3 RS',
    brand: 'Porsche',
    price: '$245,000',
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=600&q=80',
    specs: { engine: 'Flat-6', power: '518 HP', transmission: 'PDK' },
    category: 'Sports',
  },
  {
    id: 4,
    name: 'AMG GT 63 S',
    brand: 'Mercedes-Benz',
    price: '$185,000',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80',
    specs: { engine: 'V8 Biturbo', power: '630 HP', transmission: 'Automatic' },
    category: 'Sedan',
  },
  {
    id: 5,
    name: 'DBX707',
    brand: 'Aston Martin',
    price: '$310,000',
    image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=600&q=80',
    specs: { engine: 'V8 Twin-Turbo', power: '707 HP', transmission: 'Automatic' },
    category: 'SUV',
  },
  {
    id: 6,
    name: 'SF90 Spider',
    brand: 'Ferrari',
    price: '$560,000',
    image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=600&q=80',
    specs: { engine: 'V8 Hybrid', power: '986 HP', transmission: 'DCT' },
    category: 'Sports',
  },
];

const categories = ['All', 'SUV', 'Sports', 'Sedan'];

const FeaturedCars = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCars = activeCategory === 'All' 
    ? cars 
    : cars.filter(car => car.category === activeCategory);

  return (
    <section id="showroom" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-titan-gold font-medium mb-2">VIRTUAL SHOWROOM</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Featured <span className="text-gradient-gold">Collection</span>
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-titan-gold text-titan-dark'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-titan-gold/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car, index) => (
            <div
              key={car.id}
              className="group relative bg-card rounded-xl overflow-hidden border border-border/50 hover:border-titan-gold/50 transition-all duration-500 hover:shadow-xl hover:shadow-titan-gold/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.name}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-titan-gold/90 text-titan-dark">
                    {car.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-titan-gold font-medium mb-1">{car.brand}</p>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{car.name}</h3>
                
                {/* Specs */}
                <div className="flex gap-4 mb-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Fuel size={14} className="text-titan-gold" />
                    <span>{car.specs.engine}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Gauge size={14} className="text-titan-gold" />
                    <span>{car.specs.power}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Settings size={14} className="text-titan-gold" />
                    <span>{car.specs.transmission}</span>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div>
                    <p className="text-xs text-muted-foreground">Starting from</p>
                    <p className="font-display text-xl font-bold text-gradient-gold">{car.price}</p>
                  </div>
                  <Button variant="titanOutline" size="sm" className="group/btn">
                    View Details
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Metallic shine effect */}
              <div className="absolute inset-0 metallic-shine pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="titan" size="lg">
            View Full Showroom
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
