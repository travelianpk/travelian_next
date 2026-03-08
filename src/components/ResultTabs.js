"use client";

import { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaCheck } from "react-icons/fa";

export default function ResultTabs() {
  const [active, setActive] = useState("best");
  const [sortOpen, setSortOpen] = useState(false);
  const [sortSelected, setSortSelected] = useState("best");
  const sortRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setSortOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const sortOptions = [
    { id: "price", title: "Price per person", desc: "Cheapest first" },
    { id: "best", title: "Best", desc: "Cheap short flights" },
    { id: "duration", title: "Total journey time", desc: "Fastest first" },
    { id: "departure", title: "Departure time", desc: "Earliest first" },
    { id: "arrival", title: "Arrival time", desc: "Earliest first" },
    { id: "stops", title: "Stops", desc: "Fewest stops first" }
  ];

  const tabs = [
    { id: "cheapest", title: "Cheapest", price: "PKR 71,848", duration: "3h 30m" },
    { id: "best", title: "Best overall", price: "PKR 71,848", duration: "3h 30m" },
    { id: "fastest", title: "Fastest", price: "PKR 96,230", duration: "3h 10m" }
  ];

  return (
    <div className="result-tabs">
      {tabs.map((t, i) => (
        <span key={t.id} className="tab-wrap">
          {i > 0 && (
            <div className="tab-divider" role="separator" aria-orientation="vertical" />
          )}
          <button
            type="button"
            className={`tab ${active === t.id ? "active" : ""}`}
            onClick={() => setActive(t.id)}
          >
            <span className="tab-title">{t.title}</span>
            <span className="tab-content">{t.price} • {t.duration}</span>
          </button>
        </span>
      ))}
      <div className="tab-divider" role="separator" aria-orientation="vertical" />
      <div className="sort-wrap" ref={sortRef}>
        <div className="sort-popover">
          <button
            type="button"
            className="sort"
            id="sort-options-label"
            aria-expanded={sortOpen}
            aria-haspopup="listbox"
            aria-label="Sort by"
            onClick={() => setSortOpen(!sortOpen)}
          >
            <span className="sort-label">Sort by</span>
            <FaChevronDown className={`sort-icon ${sortOpen ? "open" : ""}`} size={12} />
          </button>
        </div>
        {sortOpen && (
          <div className="sort-dropdown" role="listbox" aria-labelledby="sort-options-label">
            <ul className="sort-list">
              {sortOptions.map((opt) => (
                <li key={opt.id} role="presentation">
                  <button
                    type="button"
                    role="option"
                    aria-selected={sortSelected === opt.id}
                    className={`sort-option ${sortSelected === opt.id ? "selected" : ""}`}
                    onClick={() => {
                      setSortSelected(opt.id);
                      setSortOpen(false);
                    }}
                  >
                    <span className="sort-option-icon">
                      {sortSelected === opt.id && <FaCheck size={14} />}
                    </span>
                    <span className="sort-option-content">
                      <span className="sort-option-title">{opt.title}</span>
                      <span className="sort-option-desc">{opt.desc}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}