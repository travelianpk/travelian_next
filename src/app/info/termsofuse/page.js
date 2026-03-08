import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Use - Travelian",
  description: "Travelian Platform and Booking Terms of Use",
};

export default function TermsOfUsePage() {
  return (
    <div className="info-page">
      <Header />
      <main className="info-main">
        <div className="info-container">
          <nav className="info-nav" data-selenium="content-page-nav">
            <ul>
              <li><Link href="/info/help">Help center</Link></li>
              <li><Link href="/info/privacy">Privacy policy</Link></li>
              <li className="current">Terms of use</li>
            </ul>
          </nav>

          <div className="info-content">
            <div className="info-panel" data-selenium="content-page-details">
              <p className="info-title blue">TRAVELIAN PLATFORM AND BOOKING TERMS OF USE</p>
              <p>Version 1.0, effective from 8 March 2026</p>

              <p>Welcome to the Travelian Platform Terms of Use (&quot;Terms&quot;). These Terms apply to your use of the Travelian Platform and the services offered through it. Your use of the Travelian Platform indicates your acceptance of these Terms, including the policies incorporated into them by reference.</p>

              <p>These Terms and the documents referred to in them, including but not limited to our <Link href="/info/privacy">Privacy Policy</Link> and <Link href="/info/help">Help Center</Link>, constitute a legally binding agreement between you and Travelian. If you do not agree to any part of these Terms, you should stop using the Platform immediately.</p>

              <p>These Terms describe:</p>
              <ul>
                <li>the rules, terms and conditions that apply to your use of and bookings on the Travelian Platform; and</li>
                <li>how to resolve any disputes that may arise from your use of the Travelian Platform.</li>
              </ul>

              <p><strong>BEFORE SUBMITTING A BOOKING AND/OR USING ANY OF THE SERVICES ON THE PLATFORM, PLEASE READ THESE TERMS CAREFULLY.</strong></p>

              <p><strong>Quick Links</strong></p>
              <ul>
                <li><a href="#section-a">Section A: Platform Terms</a></li>
                <li><a href="#section-b">Section B: Booking and Payment Terms</a></li>
                <li><a href="#section-c">Section C: Flights</a></li>
                <li><a href="#section-d">Section D: General Terms</a></li>
              </ul>

              <p>When we refer to &quot;Travelian&quot;, &quot;we&quot;, &quot;our&quot; or &quot;us&quot;, we mean Travelian and its related entities. Travelian operates a platform that enables you to search, book and pay for travel products and services supplied by third parties (&quot;Travel Suppliers&quot;), which may include flights, accommodation, and related services.</p>

              <p>When we use &quot;you&quot;, &quot;your&quot; or &quot;User&quot;, we refer to anyone who accesses or uses our Platform and Services.</p>

              <p>If you have any questions, please contact our <Link href="/contact">Customer Service</Link>.</p>

              <a id="section-a" />
              <p className="section-title"><strong>SECTION A: PLATFORM TERMS</strong></p>
              <p><strong>1. YOUR USE OF THE PLATFORM</strong></p>
              <p>1.1 Our Platform is the property of Travelian. We grant you a non-exclusive, non-transferable, revocable and limited license to access our Platform for personal, non-commercial use in accordance with these Terms.</p>
              <p>1.2 You must be at least 18 years of age (or the age of majority in your jurisdiction) to use our Platform and have full legal capacity to enter into contracts.</p>
              <p>1.3 You agree not to use the Platform for any unlawful purpose, to make false or fraudulent bookings, to resell services without authorization, or to scrape, copy or misuse our content.</p>

              <p><strong>2. YOUR ACCOUNT</strong></p>
              <p>2.1 When you register an account, you agree to provide true, current and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</p>

              <p><strong>3. CONTENT</strong></p>
              <p>3.1 We make no guarantees as to the accuracy or completeness of content on our Platform. Prices are dynamic and may change. Content about travel products is provided by Travel Suppliers. We are not liable for any loss arising from your use of or reliance on such content.</p>

              <a id="section-b" />
              <p className="section-title"><strong>SECTION B: GENERAL BOOKING AND PAYMENT TERMS</strong></p>
              <p><strong>4. BOOKINGS</strong></p>
              <p>4.1 When you make a booking through our Platform, the booking is made with the Travel Supplier(s) named on the booking page. We act as a facilitator. We do not own or operate the travel products.</p>
              <p>4.2 A valid payment method is required to make a booking. When you submit a booking, you make an offer to book subject to these Terms. A confirmed booking (&quot;Confirmed Booking&quot;) is created when the Travel Supplier accepts your offer and we send you a confirmation.</p>
              <p>4.3 Travel Suppliers may impose additional terms. You should read and accept all applicable terms before completing your booking.</p>

              <p><strong>5. PAYMENT</strong></p>
              <p>5.1 You authorize Travelian to charge your payment instrument for the full booking amount. Prices may include taxes, fees and service charges. Your final charge will be shown before you confirm.</p>

              <p><strong>6. CANCELLATIONS AND REFUNDS</strong></p>
              <p>6.1 Cancellations and refunds are subject to the applicable booking conditions and Travel Supplier terms. Some reservations may be non-refundable or non-changeable. Please read the cancellation policy for your booking before confirming.</p>

              <a id="section-c" />
              <p className="section-title"><strong>SECTION C: FLIGHTS</strong></p>
              <p><strong>7. FLIGHT BOOKINGS</strong></p>
              <p>7.1 Flight bookings are subject to airline terms and conditions of carriage. Airlines may reschedule or cancel flights. We are not responsible for airline changes.</p>
              <p>7.2 Modification or cancellation of flight bookings may incur an additional charge of up to USD 50 per person, plus any airline fees.</p>
              <p>7.3 You are responsible for ensuring you have valid travel documents, visas and health requirements for your destination.</p>

              <a id="section-d" />
              <p className="section-title"><strong>SECTION D: GENERAL TERMS</strong></p>
              <p><strong>8. LIABILITY</strong></p>
              <p>8.1 To the maximum extent permitted by law, Travelian disclaims all warranties and shall not be liable for any indirect, incidental, special or consequential damages arising from your use of the Platform or any travel products.</p>
              <p>8.2 Our liability shall not exceed the amount you paid for the relevant booking.</p>

              <p><strong>9. PRIVACY</strong></p>
              <p>9.1 Our collection and use of your personal data is governed by our <Link href="/info/privacy">Privacy Policy</Link>.</p>

              <p><strong>10. CHANGES</strong></p>
              <p>10.1 We may amend these Terms at any time. Amendments are effective when posted on the Platform. Your continued use constitutes acceptance of the amended Terms.</p>

              <p><strong>11. CONTACT</strong></p>
              <p>For questions or complaints, please contact our <Link href="/contact">Customer Service</Link>.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
