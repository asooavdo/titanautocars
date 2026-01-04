import { useState } from 'react';
import { 
  Search, FileCheck, CreditCard, Ship, Key, 
  ArrowRight, CheckCircle2, Clock, Shield, Headphones
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { Button } from '@/components/ui/button';

const steps = [
  {
    id: 1,
    title: 'Vehicle Selection',
    description: 'Browse our exclusive collection and choose your dream car from our zero-kilometer inventory.',
    icon: Search,
    details: [
      'Explore virtual showroom with 360° views',
      'Compare specifications and features',
      'Get personalized recommendations',
      'Request additional photos or videos',
    ],
    duration: '1-2 days',
  },
  {
    id: 2,
    title: 'Documentation',
    description: 'Complete the required paperwork with our dedicated support team assisting you every step.',
    icon: FileCheck,
    details: [
      'Submit identification documents',
      'Complete purchase agreement',
      'Review terms and conditions',
      'Receive proforma invoice',
    ],
    duration: '2-3 days',
  },
  {
    id: 3,
    title: 'Payment & Financing',
    description: 'Choose from multiple payment options including financing plans tailored to your needs.',
    icon: CreditCard,
    details: [
      'Bank transfer or secure payment',
      'Flexible financing options available',
      'Letter of credit for international buyers',
      'Payment confirmation within 24 hours',
    ],
    duration: '1-3 days',
  },
  {
    id: 4,
    title: 'Shipping & Logistics',
    description: 'We handle all export documentation and coordinate shipping to your destination worldwide.',
    icon: Ship,
    details: [
      'Export documentation & customs clearance',
      'Vehicle inspection and preparation',
      'Container loading with full insurance',
      'Real-time tracking available',
    ],
    duration: '7-21 days',
  },
  {
    id: 5,
    title: 'Delivery & Handover',
    description: 'Receive your vehicle in perfect condition with all documentation and warranty papers.',
    icon: Key,
    details: [
      'Professional delivery coordination',
      'Complete documentation handover',
      'Manufacturer warranty included',
      'After-sales support available',
    ],
    duration: 'Upon arrival',
  },
];

const PurchaseProcess = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-titan">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Purchase <span className="text-gradient-red">Process</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From selection to delivery, we make owning your dream car a seamless experience. 
              Our 5-step process ensures transparency and peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Timeline Navigation */}
          <div className="relative mb-16">
            {/* Progress Line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-border/50">
              <div 
                className="h-full bg-gradient-to-r from-titan-red to-titan-red-light transition-all duration-500"
                style={{ width: `${((activeStep - 1) / (steps.length - 1)) * 100}%` }}
              />
            </div>

            {/* Step Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-0">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className="flex flex-col items-center relative z-10 group"
                >
                  <div 
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      step.id <= activeStep 
                        ? 'bg-titan-red text-white shadow-lg shadow-titan-red/30' 
                        : 'bg-card border border-border/50 text-muted-foreground group-hover:border-titan-red/50'
                    }`}
                  >
                    {step.id < activeStep ? (
                      <CheckCircle2 className="w-7 h-7" />
                    ) : (
                      <step.icon className="w-7 h-7" />
                    )}
                  </div>
                  <p className={`mt-3 text-sm font-medium text-center transition-colors ${
                    step.id === activeStep ? 'text-titan-red' : 'text-muted-foreground'
                  }`}>
                    {step.title}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Active Step Details */}
          <div className="max-w-4xl mx-auto">
            {steps.map((step) => (
              <div 
                key={step.id}
                className={`transition-all duration-500 ${
                  step.id === activeStep ? 'opacity-100 translate-y-0' : 'hidden'
                }`}
              >
                <div className="p-8 rounded-2xl bg-card border border-border/50">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-20 h-20 rounded-2xl bg-titan-red/10 flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-10 h-10 text-titan-red" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-titan-red font-display text-lg font-semibold">
                          Step {step.id}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-titan-red/10 text-titan-red text-xs flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {step.duration}
                        </span>
                      </div>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                        {step.title}
                      </h2>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {step.details.map((detail, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-3 p-4 rounded-xl bg-background/50"
                      >
                        <CheckCircle2 className="w-5 h-5 text-titan-red flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between items-center mt-8 pt-6 border-t border-border/50">
                    <Button
                      variant="titanOutline"
                      onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                      disabled={activeStep === 1}
                    >
                      Previous Step
                    </Button>
                    {activeStep < steps.length ? (
                      <Button
                        variant="titan"
                        onClick={() => setActiveStep(Math.min(steps.length, activeStep + 1))}
                      >
                        Next Step
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Button variant="titan">
                        Start Your Journey
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 p-6 rounded-xl bg-background border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-titan-red/10 flex items-center justify-center">
                <Shield className="w-7 h-7 text-titan-red" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Secure Transactions</h3>
                <p className="text-sm text-muted-foreground">Bank-grade security for all payments</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-xl bg-background border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-titan-red/10 flex items-center justify-center">
                <Headphones className="w-7 h-7 text-titan-red" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">Dedicated team at your service</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-xl bg-background border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-titan-red/10 flex items-center justify-center">
                <FileCheck className="w-7 h-7 text-titan-red" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Full Documentation</h3>
                <p className="text-sm text-muted-foreground">Complete paperwork handled for you</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default PurchaseProcess;
