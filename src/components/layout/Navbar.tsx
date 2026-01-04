import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import titanLogo from '@/assets/titan-logo.jpg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'Showroom', href: '/showroom', isRoute: true },
    { name: 'How to Buy', href: '/purchase-process', isRoute: true },
    { name: 'Shipping', href: '/shipping', isRoute: true },
    { name: 'About', href: '#about', isRoute: false },
    { name: 'Contact', href: '#contact', isRoute: false },
  ];

  const handleNavClick = (link: { href: string; isRoute: boolean }) => {
    if (link.isRoute) {
      navigate(link.href);
    } else {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(link.href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(link.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-titan-dark/95 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="hidden md:flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-6 text-muted-foreground">
              <a href="tel:+971527939125" className="flex items-center gap-2 hover:text-titan-red transition-colors">
                <Phone size={14} />
                <span>+971 52 793 9125</span>
              </a>
              <a href="mailto:info@ttn-dxb.com" className="flex items-center gap-2 hover:text-titan-red transition-colors">
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
      <nav className={`fixed left-0 right-0 z-40 transition-all duration-500 ${isScrolled ? 'top-0 md:top-10 bg-background/95 backdrop-blur-md shadow-lg shadow-titan-dark/50' : 'top-0 md:top-10 bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button onClick={handleLogoClick} className="flex items-center">
              <img src={titanLogo} alt="Titan Auto" className="h-14 w-auto rounded-full shadow-none" />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className={`relative text-foreground/80 hover:text-titan-red font-medium transition-colors duration-300 group ${
                    link.isRoute && location.pathname === link.href ? 'text-titan-red' : ''
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-titan-red to-titan-red-light group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button variant="titan" onClick={() => handleNavClick({ href: '#contact', isRoute: false })}>
                Get a Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground hover:text-titan-red transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className={`text-left text-lg text-foreground/80 hover:text-titan-red font-medium transition-colors py-2 border-b border-border/30 ${
                    link.isRoute && location.pathname === link.href ? 'text-titan-red' : ''
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <Button variant="titan" className="mt-4" onClick={() => handleNavClick({ href: '#contact', isRoute: false })}>
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
