"use client";

import { useState } from "react";

export default function Filters() {
  const [showAllAirlines, setShowAllAirlines] = useState(false);

  const airlines = [
    "AirSial", "Airblue", "Fly Jinnah", "PIA", "SalamAir", "Oman Air",
    "Air Arabia", "Flydubai", "FlyAdeal", "Flynas", "Gulf Air", "Saudia"
  ];

  return (
    <div className="filters-box">
      {/* Recommended */}
      <div className="filter-section">
        <div className="filter-header">
          <h3 id="Recommended">Recommended</h3>
          <button type="button" className="filter-clear" aria-label="Recommended-Clear">Clear</button>
        </div>
        <ul role="listbox" aria-label="Recommended" aria-multiselectable="true" className="filter-list">
          <li role="option" className="filter-item">
            <label className="filter-item-label">
              <input type="checkbox" value="checked" />
              <span>Checked baggage included</span>
            </label>
          </li>
        </ul>
      </div>

      <div className="filter-divider" role="separator" aria-orientation="horizontal" />

      {/* Airlines */}
      <div className="filter-section">
        <div className="filter-header">
          <h3 id="Airlines">Airlines</h3>
        </div>
        <div className="filter-select-all">
          <span>Select all airlines</span>
          <label>
            <input type="checkbox" role="switch" aria-label="Select all airlines" />
          </label>
        </div>
        <ul role="listbox" aria-label="Airlines" aria-multiselectable="true" className="filter-list">
          {(showAllAirlines ? airlines : airlines.slice(0, 3)).map((airline, i) => (
            <li key={i} role="option" className="filter-item">
              <label className="filter-item-label">
                <input type="checkbox" value={airline.toLowerCase().replace(/ /g, "")} />
                <span>{airline}</span>
              </label>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="filter-show-all"
          onClick={() => setShowAllAirlines(!showAllAirlines)}
        >
          {showAllAirlines ? "Show less" : `Show all ${airlines.length} airlines`}
        </button>
      </div>

      <div className="filter-divider" role="separator" aria-orientation="horizontal" />

      {/* Stops */}
      <div className="filter-section">
        <div className="filter-header">
          <h3 id="Stops">Stops</h3>
          <button type="button" className="filter-clear" aria-label="Stops-Clear">Clear</button>
        </div>
        <ul role="listbox" aria-label="Stops" aria-multiselectable="true" className="filter-list">
          {["Direct", "1 Stop", "2 Stops+"].map((s) => (
            <li key={s} role="option" className="filter-item">
              <label className="filter-item-label">
                <input type="checkbox" value={s.toLowerCase().replace(/\s/g, "")} />
                <span>{s}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="filter-divider" role="separator" aria-orientation="horizontal" />

      {/* Times */}
      <div className="filter-section">
        <div className="filter-header">
          <h3 id="Times">Times</h3>
          <button type="button" className="filter-clear" aria-label="Times-Clear">Clear</button>
        </div>
        <div className="time-filter">
          <p id="departure">Departure 00:00 - 23:59</p>
          <input type="range" min="0" max="24" aria-label="Departure 00:00 - 23:59" className="time-slider" />
          <div className="time-labels"><span>00:00</span><span>23:59</span></div>
        </div>
        <div className="time-filter">
          <p id="arrival">Arrival 00:00 - 23:59</p>
          <input type="range" min="0" max="24" aria-label="Arrival 00:00 - 23:59" className="time-slider" />
          <div className="time-labels"><span>00:00</span><span>23:59</span></div>
        </div>
      </div>

      <div className="filter-divider" role="separator" aria-orientation="horizontal" />

      {/* Price per person */}
      <div className="filter-section">
        <div className="filter-header">
          <h3 id="Price">Price per person</h3>
          <button type="button" className="filter-clear" aria-label="Price-Clear">Clear</button>
        </div>
        <div className="time-filter">
          <p id="price">PKR 0 - 150,000+</p>
          <input type="range" min="0" max="150000" step="5000" aria-label="Price per person PKR 0 - 150,000" className="time-slider" />
          <div className="time-labels"><span>PKR 0</span><span>150,000+</span></div>
        </div>
      </div>

      <div className="filter-divider" role="separator" aria-orientation="horizontal" />

      {/* Duration */}
      <div className="filter-section">
        <div className="filter-header">
          <h3 id="Duration">Duration</h3>
          <button type="button" className="filter-clear" aria-label="Duration-Clear">Clear</button>
        </div>
        <div className="time-filter">
          <p id="duration">Total journey 0h - 24h</p>
          <input type="range" min="0" max="24" aria-label="Total journey duration 0h - 24h" className="time-slider" />
          <div className="time-labels"><span>0h</span><span>24h</span></div>
        </div>
      </div>
    </div>
  );
}
