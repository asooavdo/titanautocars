import { Ship, FileCheck, CreditCard, Truck, Shield, Clock } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Ship,
      title: 'International Shipping',
      description: 'Door-to-door delivery to over 50 countries with full tracking and insurance coverage.',
    },
    {
      icon: FileCheck,
      title: 'Customs Clearance',
      description: 'Complete handling of all import documentation, duties, and regulatory compliance.',
    },
    {
      icon: CreditCard,
      title: 'Flexible Financing',
      description: 'Competitive financing options tailored to your needs with quick approval process.',
    },
    {
      icon: Truck,
      title: 'Secure Transport',
      description: 'Enclosed transport vehicles ensure your car arrives in pristine condition.',
    },
    {
      icon: Shield,
      title: 'Extended Warranty',
      description: 'Optional extended warranty packages for complete peace of mind.',
    },
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Streamlined purchase process from selection to delivery in record time.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-card via-background to-card">
      {/* Decorative top line */}
      <div className="h-px bg-gradient-to-r from-transparent via-titan-gold/30 to-transparent mb-24" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-titan-gold font-medium mb-2">OUR SERVICES</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete <span className="text-gradient-gold">End-to-End</span> Service
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From the moment you choose your vehicle until it's safely delivered to your location, 
            we handle everything with precision and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-xl bg-background/50 border border-border/30 hover:border-titan-gold/30 transition-all duration-500"
            >
              {/* Icon with glow */}
              <div className="relative mb-6 inline-block">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-titan-gold/20 to-transparent flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <service.icon className="w-8 h-8 text-titan-gold" />
                </div>
                <div className="absolute inset-0 bg-titan-gold/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-titan-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-xl">
                <div className="absolute top-0 right-0 w-32 h-1 bg-gradient-to-l from-titan-gold/50 to-transparent transform rotate-45 translate-x-8 -translate-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="mt-24">
          <h3 className="font-display text-2xl font-bold text-center text-foreground mb-12">
            Your Journey With <span className="text-gradient-gold">Titan Auto</span>
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-titan-gold/30 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { step: '01', title: 'Select', desc: 'Choose your dream vehicle' },
                { step: '02', title: 'Quote', desc: 'Get transparent pricing' },
                { step: '03', title: 'Confirm', desc: 'Secure your purchase' },
                { step: '04', title: 'Ship', desc: 'Track your delivery' },
                { step: '05', title: 'Enjoy', desc: 'Drive your new car' },
              ].map((item, index) => (
                <div key={item.step} className="relative text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-card border-2 border-titan-gold/50 flex items-center justify-center font-display text-lg font-bold text-titan-gold relative z-10">
                    {item.step}
                  </div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
