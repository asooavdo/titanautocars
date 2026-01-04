import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import titanLogo from '@/assets/titan-logo.jpg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Showroom', href: '#showroom' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-titan-dark/95 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="hidden md:flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-6 text-muted-foreground">
              <a href="tel:+971527939125" className="flex items-center gap-2 hover:text-titan-gold transition-colors">
                <Phone size={14} />
                <span>+971 52 793 9125</span>
              </a>
              <a href="mailto:info@ttn-dxb.com" className="flex items-center gap-2 hover:text-titan-gold transition-colors">
                <Mail size={14} />
                <span>info@ttn-dxb.com</span>
              </a>
            </div>
            <div className="text-muted-foreground">
              Showroom 228, Dubai Auto Zone, Ras Al Khor
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav 
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'top-0 md:top-10 bg-background/95 backdrop-blur-md shadow-lg shadow-titan-dark/50' 
            : 'top-0 md:top-10 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#hero" onClick={() => scrollToSection('#hero')} className="flex items-center">
              <img 
                src={titanLogo} 
                alt="Titan Auto" 
                className="h-14 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="relative text-foreground/80 hover:text-titan-gold font-medium transition-colors duration-300 group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-titan-gold to-titan-gold-light group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button variant="titan" onClick={() => scrollToSection('#contact')}>
                Get a Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground hover:text-titan-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-lg text-foreground/80 hover:text-titan-gold font-medium transition-colors py-2 border-b border-border/30"
                >
                  {link.name}
                </button>
              ))}
              <Button variant="titan" className="mt-4" onClick={() => scrollToSection('#contact')}>
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
