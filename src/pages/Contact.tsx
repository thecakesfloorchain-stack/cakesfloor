import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { MapPin, Phone, Mail, Clock, Send, Compass } from 'lucide-react';

export const Contact: React.FC = () => {
  const [isOpenNow, setIsOpenNow] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  // Calculate live open/closed status (10:00 AM to 10:30 PM)
  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMin = now.getMinutes();
      const currentTime = currentHour * 60 + currentMin; // Current time in minutes from midnight

      const openTime = 10 * 60; // 10:00 AM in minutes
      const closeTime = 22 * 60 + 30; // 10:30 PM in minutes

      if (currentTime >= openTime && currentTime < closeTime) {
        setIsOpenNow(true);
      } else {
        setIsOpenNow(false);
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000); // Re-check every minute
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // GSAP ScrollTrigger reveals
    const items = gsap.utils.toArray('.reveal-item');
    const triggers = items.map((item: any) =>
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    );

    return () => {
      triggers.forEach((t) => t.scrollTrigger?.kill());
    };
  }, []);

  const handleGetDirections = (destinationAddress: string) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          window.open(
            `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${encodeURIComponent(destinationAddress)}`,
            '_blank'
          );
        },
        () => {
          // Fallback if permission denied
          window.open(
            `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destinationAddress)}`,
            '_blank'
          );
        }
      );
    } else {
      window.open(
        `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destinationAddress)}`,
        '_blank'
      );
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const whatsappNumber = '917887324373';
    const messageTemplate = 
`*New Cake Enquiry from Website*
----------------------------------
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Details / Message:* 
${formData.message || 'No additional details provided.'}`;

    const encodedMessage = encodeURIComponent(messageTemplate);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setFormSubmitted(true);
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="pt-24 pb-16">
      {/* 1. Page Header */}
      <section className="py-16 bg-gradient-to-b from-[#181817] to-background border-b border-white/5 relative">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <span className="font-body text-xs uppercase tracking-[0.25em] text-primary">Get in Touch</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-on-surface">
            Contact Us
          </h1>
          <div className="w-16 h-[1px] bg-primary/50 mx-auto mt-4" />
          <p className="font-body text-[#e5e2e0]/60 font-light text-sm max-w-lg mx-auto leading-relaxed">
            Have questions about customized birthday cakes or catering? Send us a message or visit us in Bhandara.
          </p>
        </div>
      </section>

      {/* 2. Contact details & form */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info Column */}
        <div className="text-left space-y-8 reveal-item">
          <div className="space-y-4">
            <h2 className="font-display text-3xl font-bold text-[#e5e2e0]">The Cakes Floor</h2>
            <p className="font-body text-sm font-light text-[#e5e2e0]/60 max-w-md leading-relaxed">
              We look forward to serving you Bhandara’s freshest cakes and savories. Drop by our storefront or contact us via phone/WhatsApp.
            </p>
          </div>

          <div className="space-y-6 font-body text-sm font-light text-[#e5e2e0]/70">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                <MapPin size={18} />
              </div>
              <div className="space-y-4 flex-1">
                <h4 className="font-semibold text-[#e5e2e0] mb-1">Our Branches</h4>
                <div className="space-y-5 font-body text-xs md:text-sm text-[#e5e2e0]/70 font-light">
                  <div>
                    <p className="font-semibold text-[#e5e2e0]">Bhandara — Zilla Parishad Square (Main Branch)</p>
                    <p className="leading-relaxed">Zilla Parishad Square, Takiya Ward, Near Sai Mandir, Near, Ganeshpur, Bhandara, Maharashtra - 441904</p>
                    <button
                      onClick={() => handleGetDirections("The Cakes Floor, Zilla Parishad Square, Takiya Ward, Near Sai Mandir, Near, Ganeshpur, Bhandara")}
                      className="text-primary hover:underline text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 mt-1.5 cursor-pointer"
                    >
                      <Compass size={12} /> Get Directions
                    </button>
                  </div>

                  <div>
                    <p className="font-semibold text-[#e5e2e0]">Lakhani</p>
                    <p className="leading-relaxed">Gangotri Building, Murmadi, Lakhani, Maharashtra</p>
                    <button
                      onClick={() => handleGetDirections("The Cakes Floor, Gangotri Building, Murmadi, Lakhani")}
                      className="text-primary hover:underline text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 mt-1.5 cursor-pointer"
                    >
                      <Compass size={12} /> Get Directions
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                <Phone size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-[#e5e2e0] mb-1">Call Enquiries</h4>
                <p className="leading-relaxed">
                  <a href="tel:+917887324373" className="hover:text-primary transition-colors">+91 78873 24373</a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                <Mail size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-[#e5e2e0] mb-1">Email Support</h4>
                <p className="leading-relaxed">
                  <a href="mailto:info@thecakesfloor.com" className="hover:text-primary transition-colors">info@thecakesfloor.com</a>
                </p>
              </div>
            </div>

            {/* Hours with Live status */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                <Clock size={18} />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h4 className="font-semibold text-[#e5e2e0]">Opening Hours</h4>
                  {isOpenNow ? (
                    <span className="px-2.5 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] uppercase tracking-wider font-semibold animate-pulse">
                      Open Now
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] uppercase tracking-wider font-semibold">
                      Closed Now
                    </span>
                  )}
                </div>
                <p className="leading-relaxed mt-1">Monday - Sunday: 10:00 AM - 10:30 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="reveal-item">
          <div className="glass-card p-8 rounded-3xl space-y-6">
            <h3 className="font-display text-2xl font-bold text-left text-on-surface">Cake Enquiry Form</h3>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary/15 border border-primary/20 text-primary flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h4 className="font-display text-lg font-bold text-[#e5e2e0]">Enquiry Sent!</h4>
                <p className="font-body text-xs text-[#e5e2e0]/60 max-w-sm mx-auto leading-relaxed">
                  Thank you for contacting The Cakes Floor. Our baking team will get back to you shortly on your phone number.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-primary hover:underline text-xs font-semibold uppercase tracking-wider mt-4"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left font-body text-sm">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider text-[#e5e2e0]/60 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#e5e2e0] placeholder-[#e5e2e0]/20 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-[#e5e2e0]/60 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#e5e2e0] placeholder-[#e5e2e0]/20 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Enter your mobile number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider text-[#e5e2e0]/60 mb-2">
                    Message / Cake Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#e5e2e0] placeholder-[#e5e2e0]/20 focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Explain your customized design requirements (flavor, weight, date)..."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-primary text-on-primary font-semibold py-3.5 rounded-full hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={14} />
                    Send Enquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 3. Maps Embed */}
      <section className="max-w-7xl mx-auto px-6 pt-10">
        <div className="h-[450px] w-full rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative bg-white/5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.467417066922!2d80.1874254!3d21.1736173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2b63ab3aa37227%3A0xe54d24f0e4701ee6!2sMadhur+Bakery!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Madhur Bakery Bhandara Map Location"
          />
        </div>
      </section>
    </div>
  );
};
