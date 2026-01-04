import { Phone, MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/971527939125?text=Hello, I'm interested in your vehicles."
        target="_blank"
        rel="noopener noreferrer"
        className="group w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" fill="white" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-2 rounded-lg bg-card text-foreground text-sm font-medium whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-lg border border-border/50">
          Chat on WhatsApp
        </span>
      </a>

      {/* Phone Button */}
      <a
        href="tel:+971527939125"
        className="group w-14 h-14 rounded-full bg-titan-gold flex items-center justify-center shadow-lg shadow-titan-gold/30 hover:scale-110 hover:shadow-xl hover:shadow-titan-gold/40 transition-all duration-300 animate-pulse-glow"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6 text-titan-dark" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-2 rounded-lg bg-card text-foreground text-sm font-medium whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-lg border border-border/50">
          Call Now
        </span>
      </a>
    </div>
  );
};

export default FloatingButtons;
