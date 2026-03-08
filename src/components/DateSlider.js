"use client";

import { useState } from "react";

export default function DateSlider() {
  const [selected, setSelected] = useState(2);

  const dates = [
    "Thu, 26 Mar",
    "Fri, 27 Mar",
    "Sat, 28 Mar",
    "Sun, 29 Mar",
    "Mon, 30 Mar",
    "Tue, 31 Mar",
    "Wed, 01 Apr"
  ];

  return (
    <div className="date-slider" role="radiogroup">
      {dates.map((date, i) => (
        <button
          key={i}
          type="button"
          role="radio"
          aria-checked={selected === i}
          aria-label={date}
          className={`date-card ${selected === i ? "active" : ""}`}
          onClick={() => setSelected(i)}
        >
          <span className="date-card-date">{date}</span>
        </button>
      ))}
    </div>
  );
}