import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-[#0c0c0c] min-h-screen">
      {/* 1. Page Header */}
      <section className="py-16 bg-gradient-to-b from-[#181817] to-background border-b border-white/5 relative">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <span className="font-body text-xs uppercase tracking-[0.25em] text-primary">Legal</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface">
            Privacy Policy
          </h1>
          <div className="w-16 h-[1px] bg-primary/50 mx-auto mt-4" />
        </div>
      </section>

      {/* 2. Page Content */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-left text-[#e5e2e0]/80 font-body space-y-10 leading-relaxed font-light text-sm md:text-base">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-widest text-primary font-bold">Last Updated: July 2026</p>
          <p>
            The Cakes Floor ("we," "our," "us") operates this website to share information about our bakery and allow customers to enquire about orders. This Privacy Policy explains what information we collect and how we use it.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-2xl font-semibold text-on-surface">Information We Collect</h2>
          <p>When you use our Contact/Enquiry form, we collect:</p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>Your name</li>
            <li>Your phone number</li>
            <li>Any message details you provide</li>
          </ul>
          <p>
            If you use our "Get Directions" feature, your device may share your location with Google Maps to calculate directions. This location data is processed by Google, not stored by us.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-2xl font-semibold text-on-surface">How We Use Your Information</h2>
          <p>We use the information you provide solely to:</p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>Respond to your cake orders and enquiries</li>
            <li>Contact you regarding your order details</li>
            <li>Improve our products and customer service</li>
          </ul>
          <p>We do not sell, rent, or trade your personal information to third parties.</p>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-2xl font-semibold text-on-surface">Third-Party Services</h2>
          <p>Our website uses the following third-party services, which have their own privacy policies:</p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>Google Maps — for location and directions</li>
            <li>Instagram and WhatsApp — if you choose to contact us through these platforms, their respective privacy policies apply</li>
          </ul>
          <p>
            We do not currently use analytics or advertising tracking tools on this site. (If you add Google Analytics or similar later, this section should be updated.)
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-2xl font-semibold text-on-surface">Data Retention</h2>
          <p>
            We retain enquiry information only as long as necessary to respond to and fulfill your request, or as required by applicable law.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-2xl font-semibold text-on-surface">Your Rights</h2>
          <p>
            You may contact us at any time to request that we delete or update the information you've shared with us.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-2xl font-semibold text-on-surface">Cookies</h2>
          <p>
            This website does not currently use tracking cookies. (Update this if you add analytics, ads, or a cart/login system later.)
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-2xl font-semibold text-on-surface">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-2xl font-semibold text-on-surface">Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us:</p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>Phone: +91 78873 24373</li>
            <li>Branch 1 (Bhandara): Zilla Parishad Square, Takiya Ward, Near Sai Mandir, Near, Ganeshpur, Bhandara, Maharashtra - 441904</li>
            <li>Branch 2 (Lakhani): Gangotri Building, Murmadi, Lakhani, Maharashtra</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
