import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import titanLogo from '@/assets/titan-logo.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Showroom', href: '#showroom' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'International Shipping',
    'Customs Clearance',
    'Vehicle Financing',
    'Extended Warranty',
    'Trade-In Offers',
  ];

  return (
    <footer className="bg-titan-dark border-t border-border/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={titanLogo} alt="Titan Auto" className="h-16 w-auto mb-6" />
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Dubai's premier luxury automotive dealership. We deliver dreams on wheels to 
              clients worldwide with unmatched service and integrity.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/titanautodubai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card/50 flex items-center justify-center text-muted-foreground hover:text-titan-red hover:bg-titan-red/10 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://facebook.com/titanautodubai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card/50 flex items-center justify-center text-muted-foreground hover:text-titan-red hover:bg-titan-red/10 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card/50 flex items-center justify-center text-muted-foreground hover:text-titan-red hover:bg-titan-red/10 transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-titan-red transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-titan-red flex-shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p>Showroom 228, Dubai Auto Zone</p>
                  <p>Ras Al Khor, Dubai, UAE</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-titan-red" />
                <a 
                  href="tel:+971527939125" 
                  className="text-sm text-muted-foreground hover:text-titan-red transition-colors"
                >
                  +971 52 793 9125
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-titan-red" />
                <a 
                  href="mailto:info@ttn-dxb.com" 
                  className="text-sm text-muted-foreground hover:text-titan-red transition-colors"
                >
                  info@ttn-dxb.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Titan Auto FZE. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-titan-red transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-titan-red transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
