import React from 'react';

export const TermsOfService: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-[#0c0c0c] min-h-screen">
      {/* 1. Page Header */}
      <section className="py-16 bg-gradient-to-b from-[#181817] to-background border-b border-white/5 relative">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <span className="font-body text-xs uppercase tracking-[0.25em] text-primary">Legal</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface">
            Terms of Service
          </h1>
          <div className="w-16 h-[1px] bg-primary/50 mx-auto mt-4" />
        </div>
      </section>

      {/* 2. Page Content */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-left text-[#e5e2e0]/80 font-body space-y-10 leading-relaxed font-light text-sm md:text-base">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-widest text-primary font-bold">Last Updated: July 2026</p>
          <p>
            Welcome to The Cakes Floor website. By accessing or using our website, you agree to the following terms.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-2xl font-semibold text-on-surface">About Our Website</h2>
          <p>
            This website provides information about The Cakes Floor, including our menu, locations, gallery, and customer reviews. It is intended for informational purposes and to help customers get in touch with us regarding cake orders and enquiries.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-2xl font-semibold text-on-surface">Enquiries and Orders</h2>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>
              Submitting the Contact/Enquiry form does not constitute a confirmed order. All orders are confirmed only after direct communication (phone, WhatsApp, or in-person) with our team.
            </li>
            <li>
              Prices, availability, and designs shown on this website (including the Menu and Gallery pages) are indicative and subject to change without prior notice. Final pricing is confirmed at the time of order.
            </li>
            <li>
              Custom cake designs are subject to feasibility and availability of ingredients at the time of order.
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-2xl font-semibold text-on-surface">Our Branches</h2>
          <p>The Cakes Floor operates three branches:</p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>Bhandara — Zilla Parishad Square: near Sai Mandir, Khat Road, Bhandara, Maharashtra</li>
            <li>Bhandara — Shastrinagar: near Bank of India ATM, Khat Road, Shastrinagar, Bhandara, Maharashtra 441904</li>
            <li>Lakhani: Gangotri Building, Murmadi, Lakhani, Maharashtra</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-2xl font-semibold text-on-surface">Intellectual Property</h2>
          <p>
            All content on this website — including our logo, photographs, text, and design — is the property of The Cakes Floor and may not be copied, reproduced, or used without our written permission.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-2xl font-semibold text-on-surface">Accuracy of Information</h2>
          <p>
            While we make every effort to keep information on this website accurate and up to date (menu items, prices, hours), we do not guarantee that all content is free of errors at all times. Please contact us directly to confirm details before placing an order.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-2xl font-semibold text-on-surface">Limitation of Liability</h2>
          <p>
            The Cakes Floor is not liable for any indirect, incidental, or consequential damages arising from the use of this website. This does not affect any statutory rights you have as a consumer under applicable Indian law.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-2xl font-semibold text-on-surface">Third-Party Links</h2>
          <p>
            Our website contains links to third-party platforms (Instagram, WhatsApp, Google Maps). We are not responsible for the content, policies, or practices of these external platforms.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-2xl font-semibold text-on-surface">Governing Law</h2>
          <p>
            These Terms of Service are governed by the laws of India, and any disputes shall be subject to the jurisdiction of the courts in Bhandara, Maharashtra.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-2xl font-semibold text-on-surface">Changes to These Terms</h2>
          <p>
            We may update these Terms of Service from time to time. Continued use of the website after changes are posted constitutes acceptance of the updated terms.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-2xl font-semibold text-on-surface">Contact Us</h2>
          <p>For questions regarding these Terms of Service, please contact us:</p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>Phone: +91 98765 43210</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
