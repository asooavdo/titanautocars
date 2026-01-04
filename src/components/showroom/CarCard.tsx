import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Car } from '@/types/car';
import { Eye, RotateCcw, Fuel, Gauge, Calendar } from 'lucide-react';

interface CarCardProps {
  car: Car;
  onViewDetails: (car: Car) => void;
  index: number;
}

const CarCard = ({ car, onViewDetails, index }: CarCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-AE', {
      style: 'currency',
      currency: 'AED',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handle360View = () => {
    setIsRotating(true);
    let imageIndex = 0;
    const interval = setInterval(() => {
      imageIndex = (imageIndex + 1) % car.images.length;
      setCurrentImageIndex(imageIndex);
    }, 500);

    setTimeout(() => {
      clearInterval(interval);
      setIsRotating(false);
      setCurrentImageIndex(0);
    }, car.images.length * 500);
  };

  return (
    <div 
      className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-titan-gold/50 transition-all duration-500 animate-fade-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
        <img
          src={car.images[currentImageIndex]}
          alt={car.name}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
            isRotating ? 'animate-pulse' : ''
          }`}
        />
        
        {/* 360° View Button */}
        <button
          onClick={handle360View}
          disabled={isRotating}
          className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-titan-gold hover:text-titan-dark transition-all duration-300 group/btn"
        >
          <RotateCcw 
            size={20} 
            className={`${isRotating ? 'animate-spin' : ''} group-hover/btn:rotate-180 transition-transform duration-500`} 
          />
        </button>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <Badge className="bg-titan-gold text-titan-dark font-semibold">
            {car.year}
          </Badge>
          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm border-foreground/20">
            0 KM
          </Badge>
        </div>

        {/* Image Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {car.images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentImageIndex 
                  ? 'bg-titan-gold w-6' 
                  : 'bg-foreground/30 hover:bg-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title & Brand */}
        <div>
          <p className="text-xs text-titan-gold font-medium uppercase tracking-wider mb-1">
            {car.brand}
          </p>
          <h3 className="font-display text-xl font-bold group-hover:text-titan-gold transition-colors">
            {car.name}
          </h3>
        </div>

        {/* Quick Specs */}
        <div className="grid grid-cols-3 gap-4 py-4 border-y border-border">
          <div className="text-center">
            <Gauge size={18} className="mx-auto mb-1 text-titan-gold" />
            <p className="text-xs text-muted-foreground">{car.horsepower} HP</p>
          </div>
          <div className="text-center">
            <Fuel size={18} className="mx-auto mb-1 text-titan-gold" />
            <p className="text-xs text-muted-foreground">{car.fuelType}</p>
          </div>
          <div className="text-center">
            <Calendar size={18} className="mx-auto mb-1 text-titan-gold" />
            <p className="text-xs text-muted-foreground">{car.type}</p>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Starting from</p>
            <p className="text-2xl font-display font-bold text-gradient-gold">
              {formatPrice(car.price)}
            </p>
          </div>
          <Button 
            variant="titan" 
            size="sm"
            onClick={() => onViewDetails(car)}
            className="gap-2"
          >
            <Eye size={16} />
            View Details
          </Button>
        </div>
      </div>

      {/* Metallic Shine Effect */}
      <div className="absolute inset-0 pointer-events-none metallic-shine opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export default CarCard;
