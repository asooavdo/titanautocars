import { CheckCircle2, Star } from 'lucide-react';

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
    },
    {
      name: 'John Williams',
      location: 'United Kingdom',
      rating: 5,
      text: 'The team handled all customs paperwork flawlessly. Best car buying experience I\'ve ever had.',
    },
    {
      name: 'Chen Wei',
      location: 'China',
      rating: 5,
      text: 'Professional, transparent, and incredibly efficient. Will definitely use Titan Auto again.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-titan-gold font-medium mb-2">ABOUT US</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Trusted Partner in <span className="text-gradient-gold">Luxury Automotive</span>
            </h2>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Located in the heart of Dubai Auto Zone, Titan Auto has established itself as 
              the premier destination for discerning clients seeking the world's finest automobiles. 
              Our commitment to excellence and customer satisfaction sets us apart in the luxury 
              automotive market.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              We specialize in sourcing and delivering brand-new vehicles from prestigious 
              manufacturers, ensuring each client receives nothing but the best. Our international 
              shipping expertise means we can deliver your dream car anywhere in the world.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-titan-gold flex-shrink-0" />
                  <span className="text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats & Testimonials */}
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-card border border-border/50 text-center">
                <p className="font-display text-4xl font-bold text-gradient-gold mb-2">10+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/50 text-center">
                <p className="font-display text-4xl font-bold text-gradient-gold mb-2">500+</p>
                <p className="text-sm text-muted-foreground">Cars Delivered</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/50 text-center">
                <p className="font-display text-4xl font-bold text-gradient-gold mb-2">50+</p>
                <p className="text-sm text-muted-foreground">Countries Served</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/50 text-center">
                <p className="font-display text-4xl font-bold text-gradient-gold mb-2">4.9</p>
                <p className="text-sm text-muted-foreground">Customer Rating</p>
              </div>
            </div>

            {/* Testimonials */}
            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold text-foreground">What Our Clients Say</h3>
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.name}
                  className="p-5 rounded-xl bg-card/50 border border-border/30 hover:border-titan-gold/30 transition-colors duration-300"
                >
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-titan-gold text-titan-gold" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 italic">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground text-sm">{testimonial.name}</span>
                    <span className="text-xs text-titan-gold">{testimonial.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
