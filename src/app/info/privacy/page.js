import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy - Travelian",
  description: "Travelian Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="info-page">
      <Header />
      <main className="info-main">
        <div className="info-container">
          <nav className="info-nav" data-selenium="content-page-nav">
            <ul>
              <li><Link href="/info/help">Help center</Link></li>
              <li className="current">Privacy policy</li>
              <li><Link href="/info/termsofuse">Terms of use</Link></li>
            </ul>
          </nav>

          <div className="info-content">
            <div className="info-panel" data-selenium="content-page-details">
              <p className="info-title blue">TRAVELIAN PRIVACY POLICY</p>
              <p>Last updated: 8 March 2026</p>

              <p>Travelian (&quot;we&quot;, &quot;our&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose and safeguard your information when you use our Platform and services.</p>

              <p><strong>1. Information We Collect</strong></p>
              <p>We may collect personal information such as your name, email address, phone number, payment information, travel preferences and booking history when you use our Platform or contact our customer service.</p>

              <p><strong>2. How We Use Your Information</strong></p>
              <p>We use your information to process bookings, communicate with you about your reservations, improve our services, comply with legal obligations, and for marketing purposes (where you have consented).</p>

              <p><strong>3. Sharing of Information</strong></p>
              <p>We may share your information with Travel Suppliers (airlines, hotels, etc.) to fulfil your bookings, with payment processors, and with authorities when required by law.</p>

              <p><strong>4. Data Security</strong></p>
              <p>We implement appropriate technical and organisational measures to protect your personal data.</p>

              <p><strong>5. Contact</strong></p>
              <p>For questions about this Privacy Policy, please contact our <Link href="/contact">Customer Service</Link>.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
