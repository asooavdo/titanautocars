import { CheckCircle2, Star, ExternalLink } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    'Authorized dealer for premium brands',
    '100% brand new, zero-kilometer vehicles',
    'Transparent pricing with no hidden fees',
    'Dedicated multilingual support team',
    'Full documentation and warranty included',
    'Trusted by clients in 50+ countries',
  ];

  const testimonials = [
    {
      name: 'Ahmed Al-Rashid',
      location: 'Saudi Arabia',
      rating: 5,
      text: 'Exceptional service from start to finish. My Lamborghini arrived in perfect condition within 2 weeks.',
      source: 'Google Maps',
    },
    {
      name: 'John Williams',
      location: 'United Kingdom',
      rating: 5,
      text: 'The team handled all customs paperwork flawlessly. Best car buying experience I\'ve ever had.',
      source: 'Google Maps',
    },
    {
      name: 'Chen Wei',
      location: 'China',
      rating: 5,
      text: 'Professional, transparent, and incredibly efficient. Will definitely use Titan Auto again.',
      source: 'Google Maps',
    },
  ];

  const partnerBrands = [
    { name: 'Mercedes-Benz', logo: 'M' },
    { name: 'BMW', logo: 'B' },
    { name: 'Porsche', logo: 'P' },
    { name: 'Ferrari', logo: 'F' },
    { name: 'Lamborghini', logo: 'L' },
    { name: 'Bentley', logo: 'Be' },
    { name: 'Rolls-Royce', logo: 'RR' },
    { name: 'Audi', logo: 'A' },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="text-titan-red font-medium mb-2">ABOUT US</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Trusted Partner in <span className="text-gradient-red">Luxury Automotive</span>
            </h2>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Located in the heart of Dubai Auto Zone, Titan Auto has established itself as 
              the premier destination for discerning clients seeking the world's finest automobiles.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              We specialize in sourcing and delivering brand-new vehicles from prestigious 
              manufacturers, ensuring each client receives nothing but the best.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-titan-red flex-shrink-0" />
                  <span className="text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-card border border-border/50 text-center">
                <p className="font-display text-4xl font-bold text-gradient-red mb-2">10+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/50 text-center">
                <p className="font-display text-4xl font-bold text-gradient-red mb-2">500+</p>
                <p className="text-sm text-muted-foreground">Cars Delivered</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/50 text-center">
                <p className="font-display text-4xl font-bold text-gradient-red mb-2">50+</p>
                <p className="text-sm text-muted-foreground">Countries Served</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/50 text-center">
                <p className="font-display text-4xl font-bold text-gradient-red mb-2">4.9</p>
                <p className="text-sm text-muted-foreground">Customer Rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Brands */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <p className="text-titan-red font-medium mb-2">OUR PARTNERS</p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Premium <span className="text-gradient-red">Brands</span> We Represent
            </h3>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {partnerBrands.map((brand) => (
              <div 
                key={brand.name}
                className="aspect-square rounded-xl bg-card border border-border/50 flex items-center justify-center hover:border-titan-red/50 hover:bg-titan-red/5 transition-all duration-300 group cursor-pointer"
                title={brand.name}
              >
                <span className="font-display text-xl font-bold text-muted-foreground group-hover:text-titan-red transition-colors">
                  {brand.logo}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-10">
            <p className="text-titan-red font-medium mb-2">TESTIMONIALS</p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              What Our <span className="text-gradient-red">Clients</span> Say
            </h3>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-titan-red transition-colors"
            >
              View all reviews on Google Maps
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.name}
                className="p-6 rounded-xl bg-card border border-border/50 hover:border-titan-red/30 transition-colors duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-titan-red text-titan-red" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground bg-background px-2 py-1 rounded-full">
                    {testimonial.source}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground text-sm">{testimonial.name}</span>
                  <span className="text-xs text-titan-red">{testimonial.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
