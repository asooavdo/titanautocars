import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Our team will contact you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Showroom',
      details: ['Showroom 228, Dubai Auto Zone', 'Ras Al Khor, Dubai, UAE'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+971 52 793 9125'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@ttn-dxb.com'],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Sat - Thu: 9:00 AM - 9:00 PM', 'Friday: 2:00 PM - 9:00 PM'],
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-card via-background to-card">
      {/* Decorative top line */}
      <div className="h-px bg-gradient-to-r from-transparent via-titan-red/30 to-transparent mb-24" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-titan-red font-medium mb-2">GET IN TOUCH</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Start Your <span className="text-gradient-red">Journey</span> Today
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to own your dream car? Contact our team for personalized assistance 
            and exclusive deals on the finest vehicles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-card border border-border/50">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Full Name</label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background border-border/50 focus:border-titan-red"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background border-border/50 focus:border-titan-red"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Phone Number</label>
                <Input
                  type="tel"
                  placeholder="+971 XX XXX XXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background border-border/50 focus:border-titan-red"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Message</label>
                <Textarea
                  placeholder="Tell us about your dream car..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background border-border/50 focus:border-titan-red min-h-[120px]"
                  required
                />
              </div>

              <Button type="submit" variant="titan" className="w-full">
                Send Message
                <Send size={18} />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <div 
                key={info.title}
                className="flex gap-4 p-5 rounded-xl bg-card/50 border border-border/30 hover:border-titan-red/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-titan-red/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-titan-red" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                  {info.details.map((detail) => (
                    <p key={detail} className="text-sm text-muted-foreground">{detail}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="p-5 rounded-xl bg-card/50 border border-border/30">
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com/titanautodubai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-titan-red/10 flex items-center justify-center hover:bg-titan-red hover:text-white transition-all duration-300"
                >
                  <Instagram size={22} className="text-titan-red hover:text-white" />
                </a>
                <a 
                  href="https://facebook.com/titanautodubai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-titan-red/10 flex items-center justify-center hover:bg-titan-red hover:text-white transition-all duration-300"
                >
                  <Facebook size={22} className="text-titan-red hover:text-white" />
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-48 rounded-xl bg-card border border-border/50 overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5781959814447!2d55.37!3d25.1818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEwJzU0LjUiTiA1NcKwMjInMTIuMCJF!5e0!3m2!1sen!2sae!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
