"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const AIRPORT_NAMES = {
  LHE: { city: "Lahore", name: "Allama Iqbal International Airport" },
  DXB: { city: "Dubai", name: "Dubai International Airport" },
};

export default function FlightResults() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleSelect = (f) => {
    const params = new URLSearchParams();
    params.set("from", f.from);
    params.set("to", f.to);
    params.set("date", searchParams.get("date") || "2026-04-15");
    params.set("airline", f.airline);
    params.set("price", f.price);
    params.set("flightNumber", f.flightNumber);
    params.set("depart", f.depart);
    params.set("arrive", f.arrive);
    params.set("duration", f.duration);
    params.set("logo", f.logo);
    router.push(`/flights/book?${params.toString()}`);
  };

  const flights = [
    { airline: "AirBlue", logo: "/images/airlines-logo/airblue.png", depart: "02:15", arrive: "04:45", from: "LHE", to: "DXB", duration: "3h 30m", price: 71848, badge: ["cheapest", "best"], layover: null, features: [], date: "15 Apr", flightNumber: "PA 410" },
    { airline: "Fly Jinnah", logo: "/images/airlines-logo/flyjinnah.png", depart: "17:00", arrive: "19:25", from: "LHE", to: "DXB", duration: "3h 25m", price: 73307, badge: [], layover: null, features: [], date: "15 Apr", flightNumber: "9P 201" },
    { airline: "Flydubai", logo: "/images/airlines-logo/flydubai.png", depart: "09:25", arrive: "11:35", from: "LHE", to: "DXB", duration: "3h 10m", price: 96230, badge: [], layover: null, features: ["cabin"], date: "15 Apr", flightNumber: "FZ 340" },
    { airline: "Emirates Airline", logo: "/images/airlines-logo/flydubai.png", depart: "09:10", arrive: "11:25", from: "LHE", to: "DXB", duration: "3h 15m", price: 121483, badge: [], layover: null, terminal: "T3", features: ["cabin", "checked"], date: "15 Apr", flightNumber: "EK 624" },
    { airline: "Flynas", logo: "/images/airlines-logo/flynas.png", depart: "03:55", arrive: "10:35", from: "LHE", to: "DXB", duration: "7h 40m", price: 94278, badge: [], layover: 1, terminal: "T1", features: [], date: "15 Apr", flightNumber: "XY 312" },
    { airline: "Pakistan International Airlines", logo: "/images/airlines-logo/pia.png", depart: "17:00", arrive: "00:05", from: "LHE", to: "DXB", duration: "8h 5m", price: 100673, badge: [], layover: 1, plusOne: true, operatedBy: "Emirates Airline", features: ["checked"], date: "15 Apr", arrDate: "16 Apr", flightNumber: "PK 213" },
    { airline: "Saudia", logo: "/images/airlines-logo/saudia.png", depart: "10:30", arrive: "19:30", from: "LHE", to: "DXB", duration: "10h 0m", price: 109232, badge: [], layover: 1, terminal: "T1", features: ["checked"], date: "15 Apr", flightNumber: "SV 708" },
  ];

  const FlightPathSvg = () => (
    <svg role="img" aria-hidden="true" viewBox="0 0 95 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="flight-path-svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 5C0 4.44772 0.498412 4 1.11323 4H82C82 4 82 4.44772 82 5C82 5.55228 82 6 82 6H1.11323C0.498412 6 0 5.55228 0 5Z" fill="#B1B9CB" />
      <path d="M82 4.85714L82.0001 0L94.2767 4.66835C94.323 4.68595 94.3712 4.69952 94.4189 4.71269C95.3459 4.96838 95.1124 6 94.0829 6H82.0001L82 4.85714Z" fill="#B1B9CB" />
    </svg>
  );

  return (
    <div className="flight-card-container">
      <div className="flight-grid">
        {flights.map((f, i) => (
          <div key={i} className="flight-grid-item">
            <article className="fl-card" data-testid="web-refresh-flights-card">
              <section className="fl-card-section">
                <div
                  className="fl-card-detail"
                  role="button"
                  tabIndex={0}
                  onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setExpandedIndex(expandedIndex === i ? null : i); } }}
                  aria-expanded={expandedIndex === i}
                >
                  <div className="fl-card-body">
                    {f.badge?.length > 0 && (
                      <div className="fl-badges">
                        {f.badge.includes("cheapest") && <span className="fl-badge cheapest">Cheapest</span>}
                        {f.badge.includes("best") && <span className="fl-badge best">Best</span>}
                      </div>
                    )}
                    <div className="fl-card-row">
                      <div className="fl-airline-block">
                        <div className="fl-airline">
                          <div className="fl-airline-logo-wrap">
                            <img src={f.logo} alt={f.airline} loading="lazy" className="fl-airline-logo" />
                          </div>
                          <div className="fl-airline-info">
                            <p className="fl-airline-name">{f.airline}</p>
                            {f.operatedBy && <span className="fl-operated-by">Partially operated by {f.operatedBy}</span>}
                            {f.features?.length > 0 && (
                              <div className="fl-features">
                                {f.features.includes("cabin") && <span className="fl-feature">Cabin bag</span>}
                                {f.features.includes("checked") && <span className="fl-feature">Checked baggage</span>}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="fl-route-block">
                        <div className="fl-route-row">
                          <div className="fl-time-block">
                            <h3 className="fl-time" data-testid="departure-time">{f.depart}</h3>
                            <p className="fl-airport" data-testid="origin">{f.from}</p>
                          </div>
                          <div className="fl-path-block">
                            <div className="fl-path-wrap">
                              <FlightPathSvg />
                            </div>
                            {f.layover != null && <span className="fl-layover">{f.layover}</span>}
                            <span className="fl-duration" data-testid="duration">{f.duration}</span>
                          </div>
                          <div className="fl-time-block">
                            <div className="fl-arrival-wrap">
                              <h3 className="fl-time" data-testid="arrival-time">{f.arrive}</h3>
                              {f.plusOne && <span className="fl-plus-one">+1</span>}
                            </div>
                            <p className="fl-airport" data-testid="destination">{f.to}{f.terminal && ` ${f.terminal}`}</p>
                          </div>
                        </div>
                      </div>
                      <div className="fl-price-block">
                        <div className="fl-price-wrap">
                          <div className="fl-price" data-testid="flight-price-breakdown">
                            <span className="fl-price-row"><span className="fl-currency">PKR</span><span className="fl-amount">{f.price.toLocaleString("en-PK")}</span></span>
                          </div>
                          <button
                            type="button"
                            className={`fl-expand-btn ${expandedIndex === i ? "open" : ""}`}
                            aria-label={expandedIndex === i ? `Collapse flight details ${f.airline}` : `Expand flight details ${f.airline} ${f.depart} - ${f.arrive}`}
                            onClick={(e) => { e.stopPropagation(); setExpandedIndex(expandedIndex === i ? null : i); }}
                          >
                            <span aria-hidden="true">›</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className={`fl-collapse ${expandedIndex === i ? "open" : ""}`} data-testid="flight-details-expand">
                <div className="fl-collapse-inner">
                  <div className="fl-collapse-row">
                    <div className="fl-collapse-times">
                      <div>
                        <p className="fl-collapse-time" data-testid="departure-time">{f.depart}</p>
                        <p className="fl-collapse-date" data-testid="departure-date">{f.date}</p>
                      </div>
                      <p className="fl-collapse-duration" data-testid="duration">{f.duration}</p>
                      <div>
                        <p className="fl-collapse-time" data-testid="arrival-time">{f.arrive}</p>
                        <p className="fl-collapse-date" data-testid="arrival-date">{f.arrDate || f.date}</p>
                      </div>
                    </div>
                    <div className="fl-collapse-line">
                      <span className="fl-collapse-dot" aria-hidden="true">●</span>
                      <div className="fl-collapse-bar"></div>
                      <span className="fl-collapse-dot" aria-hidden="true">●</span>
                    </div>
                    <div className="fl-collapse-airports">
                      <div className="fl-collapse-airport">
                        <p className="fl-collapse-airport-code" data-testid="origin-airport">{AIRPORT_NAMES[f.from] ? `${AIRPORT_NAMES[f.from].city} (${f.from})` : f.from}</p>
                        <p className="fl-collapse-airport-name" data-testid="origin-airportName">{AIRPORT_NAMES[f.from]?.name || ""}</p>
                      </div>
                      <div className="fl-collapse-segment">
                        <div className="fl-collapse-carrier">
                          <img src={f.logo} alt={f.airline} loading="lazy" className="fl-collapse-logo" />
                          <p data-testid="carrier-name">{f.airline}</p>
                        </div>
                        <p className="fl-collapse-flight" data-testid="flight-number">Economy • {f.flightNumber}</p>
                      </div>
                      <div className="fl-collapse-airport">
                        <p className="fl-collapse-airport-code" data-testid="destination-airport">{AIRPORT_NAMES[f.to] ? `${AIRPORT_NAMES[f.to].city} (${f.to})` : f.to}</p>
                        <p className="fl-collapse-airport-name" data-testid="destination-airportName">{AIRPORT_NAMES[f.to]?.name || ""}</p>
                      </div>
                    </div>
                  </div>
                  <div className="fl-collapse-actions">
                    <button type="button" className="fl-select-btn" data-testid="flight-detail-select-button" onClick={(e) => { e.stopPropagation(); handleSelect(f); }}>Select</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}
