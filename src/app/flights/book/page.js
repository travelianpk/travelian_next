"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

function BookingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "LHE";
  const to = searchParams.get("to") || "DXB";
  const date = searchParams.get("date") || "2026-04-15";
  const airline = searchParams.get("airline") || "";
  const price = searchParams.get("price") || "0";
  const flightNumber = searchParams.get("flightNumber") || "";
  const depart = searchParams.get("depart") || "";
  const arrive = searchParams.get("arrive") || "";
  const duration = searchParams.get("duration") || "";
  const logo = searchParams.get("logo") || "";

  const dateFormatted = date ? new Date(date).toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric" }) : "";
  const dateShort = date ? new Date(date).toLocaleDateString("en-GB", { day: "2-digit", month: "short" }) : "";
  const departFormatted = date ? `Depart - ${dateFormatted}` : "";
  const airportNames = { LHE: "Lahore", DXB: "Dubai", KHI: "Karachi", ISB: "Islamabad" };
  const fromCity = airportNames[from] || from;
  const toCity = airportNames[to] || to;
  const totalPrice = Number(price) || 71848;
  const baseFare = Math.round(totalPrice * 0.36);
  const taxesAndFees = totalPrice - baseFare;

  const [secondsLeft, setSecondsLeft] = useState(15 * 60);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [detailsTab, setDetailsTab] = useState("route");

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 0) return 0;
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;
  const timerDisplay = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

  return (
    <div className="book-page">
      <Header />
      <div className="book-header-safe">
        <div className="book-header-progress">
          <div className="book-header-inner">
            <div className="book-stepper">
              <ul className="book-stepper-list">
                <li className="book-stepper-item active">
                  <div className="book-step-row">
                    <div className="book-stepper-circle filled">1</div>
                    <div className="book-stepper-line"><div className="book-stepper-bar half" /></div>
                  </div>
                  <span className="book-stepper-label">Customer information</span>
                </li>
                <li className="book-stepper-item">
                  <div className="book-step-row">
                    <div className="book-stepper-circle">2</div>
                    <div className="book-stepper-line"><div className="book-stepper-bar" /></div>
                  </div>
                  <span className="book-stepper-label">Payment information</span>
                </li>
                <li className="book-stepper-item">
                  <div className="book-step-row">
                    <div className="book-stepper-circle">3</div>
                  </div>
                  <span className="book-stepper-label">Booking is confirmed!</span>
                </li>
              </ul>
            </div>
            <div className="book-header-spacer" />
          </div>
        </div>
      </div>

      <div className="book-timer">
        <span className="book-timer-icon">⏱</span>
        <span>These deals may not last!</span>
        <span className="book-timer-count">{timerDisplay}</span>
      </div>

      <main className="book-main">
        <div className="book-grid">
          <div className="book-form-col">
            <div className="book-signin-panel" data-testid="sign-in-and-out-panel">
              <div className="book-signin-grid">
                <div className="book-signin-illustration">
                  <img src="/images/signin-illustration.svg" alt="" width="40" height="40" />
                </div>
                <div className="book-signin-content">
                  <div className="book-signin-row">
                    <span>Sign in for faster booking!</span>
                    <Link href="/sign-in" className="book-signin-btn" data-element-name="signin-panel">Sign in</Link>
                  </div>
                  <p>Signing into your Travelian account lets us pre-fill your forms and saved credit cards, so you can complete your booking with less typing!</p>
                </div>
              </div>
            </div>

            <form className="book-form" data-testid="unified-booking-details-form" onSubmit={(e) => { e.preventDefault(); const p = new URLSearchParams(searchParams.toString()); p.set("bookingId", "W77" + Math.random().toString(36).slice(2, 10).toUpperCase()); p.set("pnr", Math.random().toString(36).slice(2, 8).toUpperCase()); router.push(`/flights/confirmed?${p.toString()}`); }}>
              <div className="book-card">
                <span className="book-badge">For all bookings</span>
                <fieldset className="book-fieldset">
                  <legend><h3>Contact details</h3></legend>
                  <p className="book-subtitle">This is where your confirmation will be sent</p>
                  <p className="book-required">*Required field</p>
                  <div className="book-form-grid">
                    <div className="book-field">
                      <label htmlFor="firstName">First name *</label>
                      <input id="firstName" name="firstName" type="text" placeholder="First name" />
                    </div>
                    <div className="book-field">
                      <label htmlFor="lastName">Last name *</label>
                      <input id="lastName" name="lastName" type="text" placeholder="Last name" />
                    </div>
                    <div className="book-field full">
                      <label htmlFor="email">Email *</label>
                      <input id="email" name="email" type="email" placeholder="Email" />
                    </div>
                    <div className="book-field">
                      <label htmlFor="country">Country/region *</label>
                      <select id="country" name="country">
                        <option value="">Select</option>
                        <option value="PK">Pakistan</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="SA">Saudi Arabia</option>
                      </select>
                    </div>
                    <div className="book-field">
                      <label htmlFor="phone">Mobile number *</label>
                      <input id="phone" name="phone" type="tel" placeholder="Mobile number" />
                    </div>
                  </div>
                </fieldset>
              </div>

              <div className="book-card">
                <span className="book-badge flight-badge">Flight(s)</span>
                <fieldset className="book-fieldset">
                  <legend><h3>Passenger 1: (Adult, 18 years or older)</h3></legend>
                  <p className="book-subtitle">Passenger details must match your passport or photo ID</p>
                  <p className="book-required">*Required field</p>
                  <div className="book-form-grid">
                    <div className="book-field full">
                      <label>Gender *</label>
                      <div className="book-radio-row">
                        <label><input type="radio" name="gender" value="male" /> Male</label>
                        <label><input type="radio" name="gender" value="female" /> Female</label>
                      </div>
                    </div>
                    <div className="book-field">
                      <label htmlFor="passengerFirstName">First and middle name *</label>
                      <input id="passengerFirstName" name="passengerFirstName" type="text" />
                    </div>
                    <div className="book-field">
                      <label htmlFor="passengerLastName">Last name *</label>
                      <input id="passengerLastName" name="passengerLastName" type="text" />
                    </div>
                    <div className="book-field">
                      <label htmlFor="dob">Date of birth *</label>
                      <input id="dob" name="dob" type="date" />
                    </div>
                    <div className="book-field">
                      <label htmlFor="nationality">Nationality *</label>
                      <select id="nationality" name="nationality">
                        <option value="">Select</option>
                        <option value="PK">Pakistan</option>
                        <option value="AE">UAE</option>
                      </select>
                    </div>
                    <div className="book-field">
                      <label htmlFor="passport">Passport number *</label>
                      <input id="passport" name="passport" type="text" />
                    </div>
                  </div>
                </fieldset>
              </div>

              <div className="book-addons" data-component="flight-addons-container">
                <h2 className="book-addons-title">Add-ons</h2>
                <div className="book-addons-card">
                  <div className="book-addons-baggage">
                    <div className="book-addons-header">
                      <div className="book-addons-icon-wrap">
                        <img src="/images/baggage-icon.svg" alt="" width="24" height="24" className="book-addons-icon" />
                      </div>
                      <div>
                        <h3 className="book-addons-heading">Baggage</h3>
                        <p className="book-addons-desc">Add your check-in baggage now to avoid airport baggage counter prices.</p>
                      </div>
                    </div>
                    <div className="book-addons-route-card">
                      <div className="book-addons-route-header" aria-label={`${fromCity} (${from}) - ${toCity} (${to})`}>
                        <div className="book-addons-route-info">
                          {logo && <img src={logo} alt={airline} className="book-addons-airline-logo" />}
                          <span>{fromCity} ({from})</span>
                          <span className="book-addons-arrow">→</span>
                          <span>{toCity} ({to})</span>
                        </div>
                      </div>
                      <div className="book-addons-bags">
                        <div className="book-addons-bag-row">
                          <div className="book-addons-bag-icon-wrap">
                            <img src="/images/cabin-bag.svg" alt="" width="24" height="24" />
                          </div>
                          <div>
                            <p className="book-addons-bag-label">Carry-on bags</p>
                            <span className="book-addons-bag-note">Please contact airline on included allowance</span>
                          </div>
                        </div>
                        <div className="book-addons-bag-divider" role="separator" aria-orientation="horizontal" />
                        <div className="book-addons-bag-row">
                          <div className="book-addons-bag-icon-wrap">
                            <img src="/images/checked-bag.svg" alt="" width="24" height="24" />
                          </div>
                          <div className="book-addons-bag-content">
                            <div>
                              <p className="book-addons-bag-label">Checked bags</p>
                              <span className="book-addons-bag-badge">
                                <span className="book-addons-check">✓</span>
                                Not included / Adult
                              </span>
                            </div>
                            <button type="button" className="book-addons-add-btn" aria-label="Add bags" data-testid="flight-paid-bag-add-checked-bags-button-slice-1">+ Add bags</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="book-addon-tile-wrap" data-testid="add-on-container">
                  <div className="book-addon-tile" id="add-on-expandable-info-tile-FLIGHT_LUGGAGE_PROTECTION" data-testid="add-on-expandable-info-tile-FLIGHT_LUGGAGE_PROTECTION">
                    <div className="book-addon-tile-top">
                      <div className="book-addon-tile-content">
                        <h3>Lost baggage protection</h3>
                        <div className="book-addon-tile-features">
                          <div className="book-addon-tile-feature" data-testid="obligation-TrackAndReturn">
                            <span className="book-addon-check">✓</span>
                            <p data-testid="obligation-TrackAndReturn-title">Track and expedite the return of any lost checked baggage</p>
                          </div>
                          <div className="book-addon-tile-feature" data-testid="obligation-GuaranteePayment">
                            <span className="book-addon-check">✓</span>
                            <p data-testid="obligation-GuaranteePayment-title">Get USD 1,000 per bag if it&apos;s not at the original destination airport within 96 hours</p>
                          </div>
                        </div>
                        <button type="button" className="book-addon-details-link" data-testid="add-on-expandable-info-tile-FLIGHT_LUGGAGE_PROTECTION-open-modal-button">See more details</button>
                      </div>
                      <div className="book-addon-tile-image" data-testid="add-on-expandable-info-tile-FLIGHT_LUGGAGE_PROTECTION-image">
                        <img src="/images/luggage-protection.svg" alt="Luggage protection" width="54" height="54" loading="lazy" />
                      </div>
                    </div>
                    <div className="book-addon-tile-bottom">
                      <div className="book-addon-price">
                        <span className="book-addon-currency">PKR</span>
                        <span className="book-addon-amount">1,399.27</span>
                      </div>
                      <button type="button" className="book-addon-add-btn" data-testid="add-on-expandable-info-tile-FLIGHT_LUGGAGE_PROTECTION-cta-button">+ Add</button>
                    </div>
                  </div>
                </div>
              </div>

              <section className="book-continue-section" data-component="ContinueToPayment">
                <div className="book-continue-grid">
                  <div className="book-continue-left">
                    <div className="book-continue-terms">
                      <label className="book-newsletter-label" data-element-name="news-letter-subscription">
                        <span className="book-checkbox-wrap">
                          <input type="checkbox" className="book-newsletter-checkbox" defaultChecked />
                          <span className="book-newsletter-box" aria-hidden="true" />
                        </span>
                        <span className="book-newsletter-text">I agree to receive updates and promotions about Travelian and its affiliates or business partners via various channels, including WhatsApp. Opt out anytime. Read more in the Privacy Policy.</span>
                      </label>
                      <p className="book-continue-terms-text">
                        By proceeding with this booking, I agree to Travelian&apos;s <Link href="/info/termsofuse" target="_blank" className="book-terms-link">Terms of Use</Link> and <Link href="/info/privacy" target="_blank" className="book-terms-link">Privacy Policy</Link>.
                      </p>
                    </div>
                  </div>
                  <div className="book-continue-right">
                    <button type="submit" className="book-continue-btn" data-component="pacContactContinueToPaymentButton" data-testid="continue-to-payment-button">Continue to payment</button>
                  </div>
                </div>
              </section>

              <ul className="book-usp" data-element-name="unique-selling-point-container" data-testid="unique-selling-point-container" aria-label="Benefits of booking flights with Travelian">
                <li><span className="book-usp-icon">🔒</span><span>Secured Payment</span></li>
                <li><span className="book-usp-icon">📞</span><span>24/7 Customer Support</span></li>
                <li><span className="book-usp-icon">⭐</span><span>Unlock TravelianVIP Perks</span></li>
              </ul>
            </form>
          </div>

          <aside className="book-sidebar" data-testid="grid-item">
            <div className="book-package-detail">
              <div className="book-package-header">
                <h4>{from} to {to}</h4>
              </div>
              <div className="book-flight-detail">
                <h3 className="book-flight-title">
                  <span className="book-plane-icon" aria-hidden="true">✈</span>
                  FLIGHT<span className="book-adult-tag">1 adult</span>
                </h3>
                <div className="book-flight-wrap">
                  <div className="book-depart-block">
                    <span className="book-depart-label">{departFormatted}</span>
                    <div className="book-route-grid" data-testid="flight-route-info">
                      <div className="book-route-logo">
                        {logo ? <img src={logo} alt={airline} className="book-airline-logo" /> : <span className="book-logo-placeholder" />}
                      </div>
                      <div className="book-route-times">
                        <div className="book-route-line">
                          <span className="book-code-time">{from} {depart}</span>
                          <span className="book-arrow-icon" aria-hidden="true">→</span>
                          <span className="book-code-time">{to} {arrive}</span>
                        </div>
                        <div className="book-route-airline">{airline}</div>
                      </div>
                    </div>
                  </div>
                  <div className="book-view-details-wrap">
                    <button type="button" className="book-view-details-btn" data-testid="product-summary-details-button" onClick={() => setShowDetailsModal(true)}>
                      View flight details & policies
                      <span className="book-view-details-arrow">›</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="book-price-card">
              <div className="book-breakdown-section">
                <div className="book-breakdown-row book-breakdown-header"><span>Price breakdown</span></div>
                <div className="book-breakdown-row">
                  <span>Adult</span>
                  <span>PKR {totalPrice.toLocaleString()} x 1</span>
                </div>
                <div className="book-breakdown-row book-breakdown-sub">
                  <span>Base fare</span>
                  <span>PKR {baseFare.toLocaleString()}</span>
                </div>
                <div className="book-breakdown-row book-breakdown-sub">
                  <span>Taxes and fees</span>
                  <span>PKR {taxesAndFees.toLocaleString()}</span>
                </div>
              </div>
              <div className="book-breakdown-section book-breakdown-total-section">
                <div className="book-breakdown-row">
                  <span>Total</span>
                  <span className="book-total">PKR {totalPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="book-conditions-card">
              <section>
                <span className="book-conditions-header">Booking conditions</span>
                <div className="book-conditions-scroll">
                  <ul className="book-conditions-list" data-testid="booking-conditions-list-desktop">
                    <li>Passenger(s) are responsible for ensuring that all necessary travel documents are valid and available upon travel.</li>
                    <li>Please ensure that your contact information in your booking is correct. We cannot be held responsible for any issues resulting from inaccurate contact details.</li>
                    <li>If you make changes to your flights directly with the airline or the airline(s) makes changes to your flight(s), the airline(s) may reach out to you directly. If Travelian is informed by the airline(s) of any changes, we will notify you.</li>
                    <li>Once the booking is confirmed, any changes or cancellations are subject to the estimated ticket policies attached to your reservation, which may differ from the airline&apos;s. Certain tickets are non-changeable and non-refundable. All tickets are non-transferable under any circumstances, unless communicated otherwise.</li>
                    <li>Any changes or cancellations to your flight booking through Travelian may be subject to an additional charge of up to US$50 per passenger per change. Note that this is in addition to any applicable charges by intermediary travel suppliers and airlines.</li>
                    <li>Please visit the airline&apos;s official website for the latest flight details, including departure times, terminals, and terms and conditions of carriage. Add-on services such as baggage, seats, meals, and other offerings may be added directly on the airline&apos;s official website and may incur additional charges.</li>
                    <li>In the event any government-imposed taxes on the purchased air transportation are raised or imposed before your scheduled flight, you may be required to pay the newly imposed or increased tax or fee.</li>
                  </ul>
                </div>
              </section>
            </div>
          </aside>
        </div>
      </main>
      <Footer />

      {showDetailsModal && (
        <>
          <div className="book-modal-backdrop" onClick={() => setShowDetailsModal(false)} aria-hidden="true" />
          <div role="dialog" aria-modal="true" aria-label="Flight details" data-testid="product-detail-side-sheet" className={`book-details-modal ${showDetailsModal ? "open" : ""}`}>
            <div className="book-modal-header">
              <h2 className="book-modal-title">Flight details</h2>
              <button type="button" className="book-modal-close" aria-label="Close" onClick={() => setShowDetailsModal(false)}>×</button>
            </div>
            <div className="book-modal-tabs" role="tablist">
              <button type="button" role="tab" aria-selected={detailsTab === "route"} className={`book-modal-tab ${detailsTab === "route" ? "active" : ""}`} onClick={() => setDetailsTab("route")}>Route</button>
              <button type="button" role="tab" aria-selected={detailsTab === "baggage"} className={`book-modal-tab ${detailsTab === "baggage" ? "active" : ""}`} onClick={() => setDetailsTab("baggage")}>Baggage</button>
              <button type="button" role="tab" aria-selected={detailsTab === "policies"} className={`book-modal-tab ${detailsTab === "policies" ? "active" : ""}`} onClick={() => setDetailsTab("policies")}>Policies</button>
            </div>
            <div className="book-modal-body">
              {detailsTab === "route" && (
                <section className="book-modal-section">
                  <h3>Flight Route</h3>
                  <div className="book-modal-badge">Departure</div>
                  <div className="book-modal-timeline">
                    <div className="book-modal-timeline-row">
                      <div className="book-modal-timeline-left">
                        <div className="book-modal-timeline-time">{depart}</div>
                        <div className="book-modal-timeline-date">{dateShort}</div>
                      </div>
                      <div className="book-modal-timeline-line-wrap">
                        <div className="book-modal-timeline-dot" />
                        <div className="book-modal-timeline-line" />
                      </div>
                      <div className="book-modal-timeline-right">
                        <div className="book-modal-location">{fromCity} ({from})</div>
                        <div className="book-modal-airport">{from === "LHE" ? "Allama Iqbal International Airport" : "Airport"}</div>
                        <div className="book-modal-duration">{duration}</div>
                        <div className="book-modal-airline">
                          {logo && <img src={logo} alt={airline} width="24" height="24" />}
                          {airline} • Economy class • {flightNumber}
                        </div>
                      </div>
                    </div>
                    <div className="book-modal-timeline-row book-modal-timeline-row-last">
                      <div className="book-modal-timeline-left">
                        <div className="book-modal-timeline-time">{arrive}</div>
                        <div className="book-modal-timeline-date">{dateShort}</div>
                      </div>
                      <div className="book-modal-timeline-line-wrap">
                        <div className="book-modal-timeline-dot" />
                      </div>
                      <div className="book-modal-timeline-right">
                        <div className="book-modal-location">{toCity} ({to})</div>
                        <div className="book-modal-airport">{to === "DXB" ? "Dubai International Airport" : "Airport"}</div>
                      </div>
                    </div>
                  </div>
                </section>
              )}
              {detailsTab === "baggage" && (
                <section className="book-modal-section">
                  <h3>Baggage allowance</h3>
                  <div className="book-modal-badge">{fromCity} ({from}) - {toCity} ({to})</div>
                  <table className="book-modal-table">
                    <thead>
                      <tr><th colSpan="2">Adult tickets</th></tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Checked baggage</td>
                        <td>No free bag available</td>
                      </tr>
                    </tbody>
                  </table>
                </section>
              )}
              {detailsTab === "policies" && (
                <section className="book-modal-section">
                  <h3>Ticket policies</h3>
                  <div className="book-modal-badge">{fromCity} ({from}) - {toCity} ({to})</div>
                  <table className="book-modal-table">
                    <thead>
                      <tr><th colSpan="2">Adult tickets</th></tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Cancellation policy</td>
                        <td>Your tickets cannot be cancelled for any refund.</td>
                      </tr>
                      <tr>
                        <td>Change policy</td>
                        <td>Your tickets may not be changed. If you wish to book a different flight, you will need to book a new ticket.</td>
                      </tr>
                    </tbody>
                  </table>
                </section>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense fallback={<div className="book-page"><Header /><main className="book-main"><p>Loading...</p></main></div>}>
      <BookingContent />
    </Suspense>
  );
}
