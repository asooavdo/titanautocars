import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/titan-bg.png';

const HeroSection = () => {
  const scrollToShowroom = () => {
    const element = document.querySelector('#showroom');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Animated lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-titan-red/30 to-transparent animate-pulse" />
        <div className="absolute top-2/3 right-0 w-1/4 h-px bg-gradient-to-l from-transparent via-titan-red/20 to-transparent animate-pulse delay-500" />
        <div className="absolute bottom-1/3 left-1/4 w-px h-1/4 bg-gradient-to-b from-transparent via-titan-red/20 to-transparent animate-pulse delay-700" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-titan-red/30 bg-titan-red/10 backdrop-blur-sm mb-8 animate-fade-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            <span className="w-2 h-2 rounded-full bg-titan-red animate-pulse" />
            <span className="text-sm font-medium text-titan-red">Dubai's Premium Auto Dealership</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight animate-fade-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            <span className="block">CRAFTED BY</span>
            <span className="text-gradient-red block">TITANS</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-up opacity-0" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            Driven by <span className="text-foreground font-semibold">You</span>
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-xl mb-10 animate-fade-up opacity-0" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
            Experience luxury redefined. Zero-kilometer vehicles from the world's most prestigious brands, 
            delivered to your doorstep anywhere in the world.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0" style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}>
            <Button variant="hero" onClick={scrollToShowroom}>
              Explore Showroom
            </Button>
            <Button variant="heroOutline" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get a Quote
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/30 animate-fade-up opacity-0" style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient-red">500+</p>
              <p className="text-sm text-muted-foreground mt-1">Cars Delivered</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient-red">50+</p>
              <p className="text-sm text-muted-foreground mt-1">Countries Served</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient-red">100%</p>
              <p className="text-sm text-muted-foreground mt-1">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-sm text-muted-foreground">Scroll to explore</span>
        <ChevronDown className="text-titan-red animate-bounce" size={24} />
      </div>
    </section>
  );
};

export default HeroSection;
