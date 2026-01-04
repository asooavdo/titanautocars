import { useState } from 'react';
import { 
  Globe, Ship, Calculator, FileText, MapPin, Clock, Shield, 
  ChevronDown, Check, Info, Package
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const regions = [
  {
    name: 'Middle East',
    countries: ['Saudi Arabia', 'Kuwait', 'Qatar', 'Bahrain', 'Oman', 'Jordan', 'Iraq'],
    deliveryTime: '3-7 days',
    startingPrice: 2500,
  },
  {
    name: 'Europe',
    countries: ['UK', 'Germany', 'France', 'Italy', 'Spain', 'Netherlands', 'Belgium'],
    deliveryTime: '14-21 days',
    startingPrice: 5500,
  },
  {
    name: 'Asia',
    countries: ['China', 'Japan', 'South Korea', 'Singapore', 'Malaysia', 'Thailand', 'India'],
    deliveryTime: '14-28 days',
    startingPrice: 4500,
  },
  {
    name: 'Africa',
    countries: ['Nigeria', 'Kenya', 'South Africa', 'Egypt', 'Morocco', 'Ghana'],
    deliveryTime: '21-35 days',
    startingPrice: 6000,
  },
  {
    name: 'Americas',
    countries: ['USA', 'Canada', 'Brazil', 'Mexico'],
    deliveryTime: '28-42 days',
    startingPrice: 7500,
  },
  {
    name: 'Oceania',
    countries: ['Australia', 'New Zealand'],
    deliveryTime: '28-35 days',
    startingPrice: 6500,
  },
];

const shippingCountries = [
  { name: 'Saudi Arabia', price: 2500, time: '3-5 days' },
  { name: 'Kuwait', price: 2200, time: '3-5 days' },
  { name: 'Qatar', price: 2000, time: '3-5 days' },
  { name: 'Bahrain', price: 1800, time: '3-5 days' },
  { name: 'Oman', price: 2800, time: '5-7 days' },
  { name: 'United Kingdom', price: 5500, time: '14-21 days' },
  { name: 'Germany', price: 5800, time: '14-21 days' },
  { name: 'United States', price: 7500, time: '28-42 days' },
  { name: 'China', price: 4500, time: '14-21 days' },
  { name: 'Australia', price: 6500, time: '28-35 days' },
];

const customsInfo = [
  {
    title: 'Document Preparation',
    description: 'We prepare all required export documents including commercial invoice, bill of lading, and certificate of origin.',
    icon: FileText,
  },
  {
    title: 'Customs Clearance',
    description: 'Our team handles UAE export customs clearance. Import duties vary by destination country.',
    icon: Shield,
  },
  {
    title: 'Vehicle Inspection',
    description: 'Each vehicle undergoes thorough inspection and documentation before shipping.',
    icon: Check,
  },
  {
    title: 'Insurance Coverage',
    description: 'Full marine insurance covers your vehicle from our showroom to your destination.',
    icon: Package,
  },
];

const Shipping = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [vehicleValue, setVehicleValue] = useState(500000);
  const [expandedRegion, setExpandedRegion] = useState<string | null>(null);

  const selectedShipping = shippingCountries.find(c => c.name === selectedCountry);
  const estimatedTotal = selectedShipping ? selectedShipping.price + (vehicleValue * 0.01) : 0;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-AE', {
      style: 'currency',
      currency: 'AED',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-titan relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-titan-gold/20 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-titan-gold/30 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-titan-gold/40 rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-fade-up">
            <div className="w-20 h-20 rounded-2xl bg-titan-gold/10 flex items-center justify-center mx-auto mb-6">
              <Globe className="w-10 h-10 text-titan-gold" />
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              International <span className="text-gradient-gold">Shipping</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We deliver luxury vehicles to over 50 countries worldwide. 
              Experience seamless international shipping with full documentation and insurance.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive World Map / Regions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Delivery <span className="text-gradient-gold">Destinations</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Click on a region to see available countries and estimated delivery times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {regions.map((region) => (
              <div key={region.name} className="rounded-2xl bg-card border border-border/50 overflow-hidden">
                <button
                  onClick={() => setExpandedRegion(expandedRegion === region.name ? null : region.name)}
                  className="w-full p-6 flex items-center justify-between hover:bg-titan-gold/5 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-titan-gold/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-titan-gold" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-foreground">{region.name}</h3>
                      <p className="text-sm text-muted-foreground">{region.countries.length} countries</p>
                    </div>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      expandedRegion === region.name ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {expandedRegion === region.name && (
                  <div className="px-6 pb-6 border-t border-border/50 pt-4 animate-fade-up">
                    <div className="flex gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {region.deliveryTime}
                      </div>
                      <div className="flex items-center gap-1 text-titan-gold">
                        <Ship className="w-4 h-4" />
                        From {formatCurrency(region.startingPrice)}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {region.countries.map((country) => (
                        <span 
                          key={country}
                          className="px-3 py-1 rounded-full bg-background text-sm text-foreground/80"
                        >
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Calculator */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 rounded-2xl bg-titan-gold/10 flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-titan-gold" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Shipping <span className="text-gradient-gold">Calculator</span>
              </h2>
              <p className="text-muted-foreground">
                Get an instant estimate for shipping your vehicle.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-background border border-border/50">
              <div className="space-y-6">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Destination Country</label>
                  <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                    <SelectTrigger className="w-full bg-card border-border/50">
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      {shippingCountries.map((country) => (
                        <SelectItem key={country.name} value={country.name}>
                          {country.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Vehicle Value (AED)</label>
                  <input
                    type="number"
                    value={vehicleValue}
                    onChange={(e) => setVehicleValue(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border/50 text-foreground focus:border-titan-gold focus:outline-none"
                    placeholder="Enter vehicle value"
                  />
                </div>

                {selectedShipping && (
                  <div className="pt-6 border-t border-border/50 space-y-4 animate-fade-up">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Shipping Cost</span>
                      <span className="font-semibold text-foreground">{formatCurrency(selectedShipping.price)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Insurance (1%)</span>
                      <span className="font-semibold text-foreground">{formatCurrency(vehicleValue * 0.01)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Estimated Delivery</span>
                      <span className="font-semibold text-titan-gold">{selectedShipping.time}</span>
                    </div>
                    <div className="p-4 rounded-xl bg-titan-gold/10">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">Estimated Total</span>
                        <span className="font-display text-2xl font-bold text-titan-gold">
                          {formatCurrency(estimatedTotal)}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 text-xs text-muted-foreground">
                      <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <p>Import duties and taxes are not included. These vary by destination country.</p>
                    </div>

                    <Button variant="titan" className="w-full">
                      Request Detailed Quote
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customs Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Customs & <span className="text-gradient-gold">Documentation</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We handle all the paperwork so you can focus on enjoying your new vehicle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {customsInfo.map((item) => (
              <div 
                key={item.title}
                className="p-6 rounded-2xl bg-card border border-border/50 hover:border-titan-gold/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-titan-gold/10 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-titan-gold" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Shipping;
