"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

function ConfirmedContent() {
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "LHE";
  const to = searchParams.get("to") || "DXB";
  const date = searchParams.get("date") || "2026-04-15";
  const airline = searchParams.get("airline") || "Airblue";
  const price = searchParams.get("price") || "71848";
  const flightNumber = searchParams.get("flightNumber") || "PA-410";
  const depart = searchParams.get("depart") || "02:10";
  const arrive = searchParams.get("arrive") || "05:05";
  const duration = searchParams.get("duration") || "3h 55m";
  const logo = searchParams.get("logo") || "/images/airlines-logo/airblue.png";

  const bookingId = searchParams.get("bookingId") || "W77S6O6DMI9";
  const pnr = searchParams.get("pnr") || "OEQINM";

  const dateFormatted = date ? new Date(date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) : "";
  const totalPrice = Number(price) || 86356;
  const fee = 430;
  const grossFare = totalPrice - fee;
  const baseFare = Math.round(grossFare * 0.387);
  const tax = grossFare - baseFare;

  const [pnrSeconds, setPnrSeconds] = useState(23 * 3600 + 59 * 60 + 39);

  useEffect(() => {
    const t = setInterval(() => {
      setPnrSeconds((s) => (s <= 0 ? 0 : s - 1));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const hh = Math.floor(pnrSeconds / 3600);
  const mm = Math.floor((pnrSeconds % 3600) / 60);
  const ss = pnrSeconds % 60;

  return (
    <div className="confirm-page">
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
                <li className="book-stepper-item active">
                  <div className="book-step-row">
                    <div className="book-stepper-circle filled">2</div>
                    <div className="book-stepper-line"><div className="book-stepper-bar half" style={{ width: "100%" }} /></div>
                  </div>
                  <span className="book-stepper-label">Payment information</span>
                </li>
                <li className="book-stepper-item active">
                  <div className="book-step-row">
                    <div className="book-stepper-circle filled">3</div>
                  </div>
                  <span className="book-stepper-label">Booking is confirmed!</span>
                </li>
              </ul>
            </div>
            <div className="book-header-spacer" />
          </div>
        </div>
      </div>
      <main className="confirm-body">
        <div className="confirm-content">
          <div className="confirm-success-banner">
            <h1 className="confirm-success-title">Booking Confirmed</h1>
            <p className="confirm-success-desc">Your flight has been successfully booked. Payment confirmed.</p>
          </div>
          <div className="confirm-main">
            <section className="confirm-section">
              <div className="confirm-accordion open">
                <button type="button" className="confirm-accordion-btn" aria-expanded="true">
                  <div className="confirm-section-title">
                    <span className="confirm-icon">ℹ</span>
                    <span>Booking Details</span>
                  </div>
                  <svg className="confirm-accordion-icon" viewBox="0 0 16 10"><path d="M15 1.2l-7 7-7-7" strokeWidth="2" strokeLinecap="round" /></svg>
                </button>
                <div className="confirm-accordion-content">
                  <div className="confirm-detail-grid">
                    <div className="confirm-detail-card">
                      <span className="confirm-detail-icon">#</span>
                      <div>
                        <div className="confirm-detail-value">{bookingId}</div>
                        <div className="confirm-detail-label">Booking ID</div>
                      </div>
                    </div>
                    <div className="confirm-detail-card">
                      <span className="confirm-detail-icon">◉</span>
                      <div>
                        <div className="confirm-detail-value status-confirmed">CONFIRMED</div>
                        <div className="confirm-detail-label">Status</div>
                      </div>
                    </div>
                    <div className="confirm-detail-card">
                      <span className="confirm-detail-icon">✈</span>
                      <div>
                        <div className="confirm-detail-value">{airline.toUpperCase()}</div>
                        <div className="confirm-detail-label">Supplier</div>
                      </div>
                    </div>
                    <div className="confirm-detail-card">
                      <span className="confirm-detail-icon">#</span>
                      <div>
                        <div className="confirm-detail-value">{pnr}</div>
                        <div className="confirm-detail-label">PNR</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="confirm-accordion">
                <button type="button" className="confirm-accordion-btn" aria-expanded="false">
                  <div className="confirm-flight-header">
                    <img src={logo} alt={airline} className="confirm-flight-logo" width="48" height="48" />
                    <div className="confirm-flight-info">
                      <div className="confirm-airline-name">{airline}</div>
                      <div className="confirm-flight-number">{flightNumber}</div>
                      <div className="confirm-flight-date">{dateFormatted}</div>
                    </div>
                    <div className="confirm-route-preview">
                      <span>{from} {depart}</span>
                      <span className="confirm-route-arrow">→</span>
                      <span>{to} {arrive}</span>
                    </div>
                  </div>
                  <svg className="confirm-accordion-icon rotate-0" viewBox="0 0 16 10"><path d="M15 1.2l-7 7-7-7" strokeWidth="2" strokeLinecap="round" /></svg>
                </button>
                <div className="confirm-accordion-content collapsed">
                  <div className="confirm-segment">
                    <div className="confirm-segment-row">
                      <span className="confirm-segment-dot" />
                      <div>
                        <div>{depart} - {from === "LHE" ? "Lahore" : from} <span className="confirm-segment-date">({dateFormatted})</span></div>
                        <div className="confirm-segment-airport">(LHE) Allama Iqbal International Airport</div>
                      </div>
                    </div>
                    <div className="confirm-segment-duration">({duration})</div>
                    <div className="confirm-segment-row">
                      <span className="confirm-segment-dot" />
                      <div>
                        <div>{arrive} - {to === "DXB" ? "Dubai" : to} <span className="confirm-segment-date">({dateFormatted})</span></div>
                        <div className="confirm-segment-airport">(DXB) Dubai International Airport</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="confirm-accordion open">
                <button type="button" className="confirm-accordion-btn" aria-expanded="true">
                  <div className="confirm-section-title">
                    <span className="confirm-icon">👤</span>
                    <span>Passenger Details</span>
                  </div>
                  <svg className="confirm-accordion-icon" viewBox="0 0 16 10"><path d="M15 1.2l-7 7-7-7" strokeWidth="2" strokeLinecap="round" /></svg>
                </button>
                <div className="confirm-accordion-content">
                  <div className="confirm-table-wrap">
                    <table className="confirm-table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Gender</th>
                          <th>Passenger Type</th>
                          <th>Date of Birth</th>
                          <th>Passport Number</th>
                          <th>Passport Expiry</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>MR Shahyaiz Tariq</td>
                          <td>M</td>
                          <td>ADT</td>
                          <td>01-Jan-1997</td>
                          <td>DY7961312</td>
                          <td>12-Sep-2032</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="confirm-accordion open">
                <button type="button" className="confirm-accordion-btn" aria-expanded="true">
                  <div className="confirm-section-title">
                    <span className="confirm-icon">⋮</span>
                    <span>Additional Services</span>
                  </div>
                  <svg className="confirm-accordion-icon" viewBox="0 0 16 10"><path d="M15 1.2l-7 7-7-7" strokeWidth="2" strokeLinecap="round" /></svg>
                </button>
                <div className="confirm-accordion-content">
                  <div className="confirm-additional">
                    <div className="confirm-additional-title">Flight 1</div>
                    <div className="confirm-additional-item">🍳 Meal Included</div>
                    <div className="confirm-additional-item">🧳 Luggage included: 1 piece of 20 KGS</div>
                  </div>
                </div>
              </div>
            </section>

            <section className="confirm-sidebar">
              <div className="confirm-card">
                <div className="confirm-card-title">Organization Details</div>
                <div className="confirm-org-row">
                  <span className="confirm-org-icon">🏢</span>
                  <div>
                    <div className="confirm-org-label">Name:</div>
                    <div className="confirm-org-value">Travelian Tours <span className="confirm-org-badge">32357</span></div>
                  </div>
                </div>
                <div className="confirm-org-row">
                  <span className="confirm-org-icon">✉</span>
                  <div>
                    <div className="confirm-org-label">Booking Created By:</div>
                    <div className="confirm-org-value">support@travelian.pk</div>
                  </div>
                </div>
                <div className="confirm-org-row">
                  <span className="confirm-org-icon">🛡</span>
                  <div>
                    <div className="confirm-org-label">Role:</div>
                    <span className="confirm-org-badge-gray">Self Booking</span>
                  </div>
                </div>
              </div>

              <div className="confirm-card confirm-pnr-timer">
                <div className="confirm-pnr-heading">PNR Expires In</div>
                <ul className="confirm-pnr-countdown">
                  <li><span id="confirm-hours">{String(hh).padStart(2, "0")}</span> Hours</li>
                  <li><span id="confirm-minutes">{String(mm).padStart(2, "0")}</span> Minutes</li>
                  <li><span id="confirm-seconds">{String(ss).padStart(2, "0")}</span> Seconds</li>
                </ul>
                <p className="confirm-pnr-expiry">09 Mar 2026 - 23:50:04 (PST)</p>
                <button type="button" className="confirm-issue-btn">Proceed To Issuance →</button>
              </div>

              <div className="confirm-card">
                <div className="confirm-actions-title">Booking Actions</div>
                <div className="confirm-actions">
                  <button type="button" className="confirm-action-btn" title="Cancel Ticket">✕ Cancel</button>
                  <button type="button" className="confirm-action-btn" title="Download Ticket">⬇ Download</button>
                </div>
              </div>

              <div className="confirm-card">
                <div className="confirm-card-title">Price Summary</div>
                <div className="confirm-price-row">
                  <span>{airline} (adult) x 1</span>
                  <span>PKR {totalPrice.toLocaleString()}</span>
                </div>
                <div className="confirm-price-row confirm-price-total">
                  <span>Price You Pay</span>
                  <span>PKR {totalPrice.toLocaleString()}</span>
                </div>
              </div>

              <div className="confirm-card">
                <div className="confirm-card-title">Fare Break Down</div>
                <div className="confirm-fare-heading">Adult Break Down</div>
                <div className="confirm-price-row">
                  <span>Base Fare</span>
                  <span>PKR {baseFare.toLocaleString()}</span>
                </div>
                <div className="confirm-price-row">
                  <span>Tax</span>
                  <span>PKR {tax.toLocaleString()}</span>
                </div>
                <div className="confirm-price-row">
                  <span>Gross Fare</span>
                  <span>PKR {(baseFare + tax).toLocaleString()}</span>
                </div>
                <div className="confirm-price-row">
                  <span>Fee</span>
                  <span>PKR {fee.toLocaleString()}</span>
                </div>
                <div className="confirm-price-row confirm-price-total">
                  <span>Total</span>
                  <span>PKR {totalPrice.toLocaleString()}</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function ConfirmedPage() {
  return (
    <Suspense fallback={<div className="confirm-page"><Header /><main><p>Loading...</p></main></div>}>
      <ConfirmedContent />
    </Suspense>
  );
}
