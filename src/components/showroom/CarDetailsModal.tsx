import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Car } from '@/types/car';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Fuel, 
  Gauge, 
  Settings, 
  Palette, 
  Zap,
  RotateCcw,
  Phone,
  MessageCircle,
  Check
} from 'lucide-react';

interface CarDetailsModalProps {
  car: Car | null;
  isOpen: boolean;
  onClose: () => void;
}

const CarDetailsModal = ({ car, isOpen, onClose }: CarDetailsModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  if (!car) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-AE', {
      style: 'currency',
      currency: 'AED',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % car.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + car.images.length) % car.images.length);
  };

  const handle360View = () => {
    setIsRotating(true);
    let imageIndex = 0;
    const interval = setInterval(() => {
      imageIndex = (imageIndex + 1) % car.images.length;
      setCurrentImageIndex(imageIndex);
    }, 400);

    setTimeout(() => {
      clearInterval(interval);
      setIsRotating(false);
    }, car.images.length * 400 * 2);
  };

  const specs = [
    { icon: Zap, label: 'Engine', value: car.engine },
    { icon: Gauge, label: 'Power', value: `${car.horsepower} HP` },
    { icon: Settings, label: 'Transmission', value: car.transmission },
    { icon: Fuel, label: 'Fuel Type', value: car.fuelType },
    { icon: Palette, label: 'Exterior', value: car.color },
    { icon: Palette, label: 'Interior', value: car.interiorColor },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-card border-border p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>{car.name}</DialogTitle>
        </DialogHeader>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-titan-gold hover:text-titan-dark transition-all duration-300"
        >
          <X size={20} />
        </button>

        {/* Image Gallery */}
        <div className="relative aspect-video bg-secondary">
          <img
            src={car.images[currentImageIndex]}
            alt={car.name}
            className={`w-full h-full object-cover ${isRotating ? 'animate-pulse' : ''}`}
          />

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-3 rounded-full hover:bg-titan-gold hover:text-titan-dark transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-3 rounded-full hover:bg-titan-gold hover:text-titan-dark transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>

          {/* 360° View Button */}
          <button
            onClick={handle360View}
            disabled={isRotating}
            className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 hover:bg-titan-gold hover:text-titan-dark transition-all duration-300"
          >
            <RotateCcw size={18} className={isRotating ? 'animate-spin' : ''} />
            <span className="text-sm font-medium">360° View</span>
          </button>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            {car.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  idx === currentImageIndex 
                    ? 'border-titan-gold scale-105' 
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Badge className="bg-titan-gold text-titan-dark">{car.year}</Badge>
                <Badge variant="outline" className="border-foreground/20">0 KM</Badge>
                <Badge variant="outline" className="border-foreground/20">{car.type}</Badge>
              </div>
              <p className="text-sm text-titan-gold font-medium uppercase tracking-wider mb-1">
                {car.brand}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                {car.name}
              </h2>
            </div>
            <div className="text-left md:text-right">
              <p className="text-sm text-muted-foreground">Starting from</p>
              <p className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">
                {formatPrice(car.price)}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-lg leading-relaxed">
            {car.description}
          </p>

          {/* Specifications Grid */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
              <Settings className="text-titan-gold" size={20} />
              Specifications
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {specs.map((spec, idx) => (
                <div 
                  key={idx}
                  className="bg-secondary/50 border border-border rounded-lg p-4 hover:border-titan-gold/50 transition-colors"
                >
                  <spec.icon className="text-titan-gold mb-2" size={20} />
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    {spec.label}
                  </p>
                  <p className="font-semibold">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
              <Check className="text-titan-gold" size={20} />
              Features & Equipment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {car.features.map((feature, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-3 bg-secondary/30 rounded-lg px-4 py-3"
                >
                  <Check className="text-titan-gold shrink-0" size={16} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
            <Button variant="titan" size="lg" className="flex-1 gap-2" asChild>
              <a href="https://wa.me/971527939125" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} />
                Inquire on WhatsApp
              </a>
            </Button>
            <Button variant="titanOutline" size="lg" className="flex-1 gap-2" asChild>
              <a href="tel:+971527939125">
                <Phone size={20} />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CarDetailsModal;
