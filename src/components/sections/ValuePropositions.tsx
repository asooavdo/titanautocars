import { Shield, Globe, Award, Headphones } from 'lucide-react';

const ValuePropositions = () => {
  const values = [
    {
      icon: Shield,
      title: 'Guaranteed Quality',
      description: 'Every vehicle is brand new with zero kilometers, backed by full manufacturer warranty.',
    },
    {
      icon: Globe,
      title: 'Worldwide Shipping',
      description: 'Seamless delivery to over 50 countries with complete customs clearance support.',
    },
    {
      icon: Award,
      title: 'Premium Selection',
      description: 'Exclusive access to luxury and exotic vehicles from the world\'s top brands.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Dedicated concierge service from inquiry to delivery and beyond.',
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-background via-card to-background">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-titan-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-titan-gold/30 to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-gradient-gold">Titan Auto</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We don't just sell cars – we deliver dreams. Experience the difference of working with 
            Dubai's most trusted luxury auto dealership.
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:border-titan-gold/50 transition-all duration-500 hover:shadow-lg hover:shadow-titan-gold/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-titan-gold/20 to-titan-gold/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-7 h-7 text-titan-gold" />
                </div>
                <div className="absolute -inset-1 bg-titan-gold/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-titan-gold transition-colors">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-titan-gold to-titan-gold-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;
