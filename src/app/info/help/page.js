"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FLIGHTS_CATEGORIES = [
  { id: "flights-booking", name: "Booking Details" },
  { id: "flights-cancel", name: "Cancellation & Refunds" },
  { id: "flights-payment", name: "Payment" },
];

const ACCOMMODATION_CATEGORIES = [
  { id: "accom-booking", name: "Booking Details" },
  { id: "accom-cancel", name: "Cancellation" },
  { id: "accom-payment", name: "Payment/Refund" },
];

const FLIGHTS_FAQS = [
  {
    cat: "flights-booking",
    q: "How do I book a flight?",
    a: "Search for flights on our homepage, select your preferred option, enter passenger details, and complete payment. You will receive a confirmation email with your booking reference (PNR).",
  },
  {
    cat: "flights-booking",
    q: "Where can I check my booking details?",
    a: "You can view your booking details online via the confirmation email or by contacting our Customer Service with your booking reference (PNR).",
  },
  {
    cat: "flights-cancel",
    q: "Can I cancel or change my booking?",
    a: "Cancellation and modification depend on the fare rules and airline policy. Some tickets are non-refundable. Please check the booking conditions at the time of booking or contact our Customer Service.",
  },
  {
    cat: "flights-cancel",
    q: "When will I get my refund?",
    a: "If your booking is refundable, refunds are processed according to our Return & Refund Policy. Processing typically takes 7–14 business days depending on your bank.",
  },
  {
    cat: "flights-payment",
    q: "What payment methods are accepted?",
    a: "We accept credit cards, debit cards, and other payment methods as displayed on the payment page. Payment is processed securely.",
  },
];

const ACCOMMODATION_FAQS = [
  {
    cat: "accom-booking",
    q: "How do I book a hotel?",
    a: "Search for hotels on our Platform, select your preferred option, enter guest details, and complete payment. You will receive a confirmation email with your booking details.",
  },
  {
    cat: "accom-cancel",
    q: "How can I cancel my hotel booking?",
    a: "Cancellation depends on the property policy. Contact our Customer Service or use the self-service option if available. Some rates are non-refundable.",
  },
  {
    cat: "accom-payment",
    q: "When will I get my refund?",
    a: "Refunds are processed in accordance with the applicable cancellation policy. Processing typically takes 7–14 business days.",
  },
];

export default function HelpCenterPage() {
  const [activeTab, setActiveTab] = useState("flights");
  const [openId, setOpenId] = useState(null);

  const categories = activeTab === "flights" ? FLIGHTS_CATEGORIES : ACCOMMODATION_CATEGORIES;
  const faqs = activeTab === "flights" ? FLIGHTS_FAQS : ACCOMMODATION_FAQS;

  const scrollToCategory = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="info-page helpcenter-page">
      <Header />
      <main className="info-main helpcenter-main">
        <div className="info-container helpcenter-container">
          <nav className="info-nav">
            <ul>
              <li className="current">Help center</li>
              <li><Link href="/info/privacy">Privacy policy</Link></li>
              <li><Link href="/info/termsofuse">Terms of use</Link></li>
            </ul>
          </nav>

          <section className="helpcenter-hero">
            <h1 className="helpcenter-title">Need help? We&apos;re here for you!</h1>
            <div className="helpcenter-tabs" role="tablist">
              <button
                role="tab"
                aria-selected={activeTab === "flights"}
                className={`helpcenter-tab ${activeTab === "flights" ? "active" : ""}`}
                onClick={() => setActiveTab("flights")}
              >
                <span className="helpcenter-tab-icon" aria-hidden>✈</span>
                Flights
              </button>
              <button
                role="tab"
                aria-selected={activeTab === "accommodation"}
                className={`helpcenter-tab ${activeTab === "accommodation" ? "active" : ""}`}
                onClick={() => setActiveTab("accommodation")}
              >
                <span className="helpcenter-tab-icon" aria-hidden>🏨</span>
                Accommodation
              </button>
            </div>
          </section>

          <div className="helpcenter-layout">
            <aside className="helpcenter-sidebar">
              <ul className="helpcenter-categories">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      type="button"
                      className="helpcenter-cat-btn"
                      onClick={() => scrollToCategory(cat.id)}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </aside>

            <div className="helpcenter-content">
              <div className="helpcenter-cta">
                <div className="helpcenter-cta-inner">
                  <div className="helpcenter-cta-text">
                    <p className="helpcenter-cta-title">Need help? We&apos;re here for you!</p>
                    <p className="helpcenter-cta-desc">
                      Get quick answers, contact info, and more with our self-service help features.
                    </p>
                  </div>
                  <Link href="/contact" className="helpcenter-cta-btn">
                    Contact Travelian Customer Service
                  </Link>
                </div>
              </div>

              {categories.map((cat) => (
                <section key={cat.id} id={cat.id} className="helpcenter-category-section">
                  <h2 className="helpcenter-cat-heading">{cat.name}</h2>
                  {faqs
                    .filter((f) => f.cat === cat.id)
                    .map((faq, i) => {
                      const faqId = `${cat.id}-${i}`;
                      const isOpen = openId === faqId;
                      return (
                        <div key={faqId} className="helpcenter-accordion">
                          <button
                            type="button"
                            className={`helpcenter-accordion-btn ${isOpen ? "open" : ""}`}
                            aria-expanded={isOpen}
                            aria-controls={`${faqId}-answer`}
                            id={`${faqId}-heading`}
                            onClick={() => setOpenId(isOpen ? null : faqId)}
                          >
                            <span>{faq.q}</span>
                            <span className="helpcenter-accordion-icon" aria-hidden>
                              {isOpen ? "▲" : "▼"}
                            </span>
                          </button>
                          <div
                            id={`${faqId}-answer`}
                            role="region"
                            aria-labelledby={`${faqId}-heading`}
                            className={`helpcenter-accordion-content ${isOpen ? "open" : ""}`}
                            hidden={!isOpen}
                          >
                            <p>{faq.a}</p>
                          </div>
                        </div>
                      );
                    })}
                </section>
              ))}

              <div className="helpcenter-contact-bottom">
                <p>Still have questions?</p>
                <Link href="/contact">Contact Travelian Customer Service</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
