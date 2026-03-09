"use client";

import { useState, useEffect, useRef } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useRouter } from "next/navigation";
import airportsData from "../data/airports150.json";

import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaCalendarAlt,
  FaUser,
  FaExchangeAlt
} from "react-icons/fa";

/* Normalize airport data */
const airports = airportsData.map((a) => ({
  city: a.City + ", " + a.Country,
  airport: a["Airport Name"],
  code: a["IATA Code"]
}));

export default function FlightSearch() {

  const wrapperRef = useRef(null);
  const router = useRouter();

  /* trip type */
  const [tripType, setTripType] = useState("oneway");

  /* route */
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  /* airport dropdown */
  const [activeField, setActiveField] = useState(null);
  const [airportQuery, setAirportQuery] = useState("");

  /* calendar */
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [dateSelected, setDateSelected] = useState(false);

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    }
  ]);

  /* guests */
  const [showGuestPanel, setShowGuestPanel] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [cabin, setCabin] = useState("Economy");

  /* validation error */
  const [error, setError] = useState("");

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const totalPassengers = adults + children + infants;

  const guestSummary =
    totalPassengers +
    " Passenger" +
    (totalPassengers > 1 ? "s" : "") +
    ", " +
    cabin;

  /* outside click – close dropdowns when clicking outside */
  useEffect(() => {
    function handleOutsideClick(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setActiveField(null);
        setShowGuestPanel(false);
        setCalendarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, []);

  /* airport filter */
  const filteredAirports = airports.filter((a) => {

    if (!airportQuery) return true;

    const q = airportQuery.toLowerCase();

    return (
      a.city.toLowerCase().includes(q) ||
      a.airport.toLowerCase().includes(q) ||
      a.code.toLowerCase().includes(q)
    );

  });

  /* select airport */
  function selectAirport(airport) {

    const city = airport.city.split(",")[0];
    const value = city + " (" + airport.code + ")";

    if (activeField === "from") {
      setFrom(value);
      setActiveField("to");
      setAirportQuery("");
      return;
    }

    if (activeField === "to") {
      setTo(value);
      setActiveField(null);
      setCalendarOpen(true);
    }

  }

  /* swap airports */
  function swapAirports() {
    const temp = from;
    setFrom(to);
    setTo(temp);
  }

  /* validation */
  function validateSearch() {

    if (!from) {
      setError("Please select departure airport");
      return false;
    }

    if (!to) {
      setError("Please select destination airport");
      return false;
    }

    if (from === to) {
      setError("Departure and destination cannot be the same");
      return false;
    }

    setError("");
    return true;
  }

  function handleSearch() {

  if (!validateSearch()) return;

  const departureDate = range[0].startDate
    .toISOString()
    .split("T")[0];

  router.push(
    `/flights?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${departureDate}&trip=${tripType}&adults=${adults}&children=${children}&infants=${infants}&cabin=${cabin}`
  );

}

  return (

<div className="flight-container" ref={wrapperRef}>

{/* HEADER */}

<div className="flight-header">
  <div className="trip-pill-row">
    <label className={`trip-pill-option ${tripType === "oneway" ? "active" : ""}`}>
      <input
        type="radio"
        name="trip-home"
        value="oneway"
        checked={tripType === "oneway"}
        onChange={() => setTripType("oneway")}
      />
      <span>One-way</span>
    </label>
    <label className={`trip-pill-option ${tripType === "round" ? "active" : ""}`}>
      <input
        type="radio"
        name="trip-home"
        value="return"
        checked={tripType === "round"}
        onChange={() => setTripType("round")}
      />
      <span>Round trip</span>
    </label>
    <label className={`trip-pill-option ${tripType === "multi" ? "active" : ""}`}>
      <input
        type="radio"
        name="trip-home"
        value="multicity"
        checked={tripType === "multi"}
        onChange={() => setTripType("multi")}
      />
      <span>Multi-city</span>
    </label>
  </div>
<div className="flight-title">
✈ Book Flights
</div>

</div>

{error && <div className="search-error">{error}</div>}

{/* SEARCH GRID */}

<div className="search-grid">

{/* FROM */}

<div className="search-card airport-wrapper">

<FaPlaneDeparture className="field-icon" />

<div className="field-content">

<label>From</label>

<div className="input-clear-wrapper">

<input
value={from}
placeholder="Origin"
onFocus={() => {
setActiveField("from");
setAirportQuery("");
}}
onChange={(e) => {
setFrom(e.target.value);
setAirportQuery(e.target.value);
}}
/>

{from && (
<button
className="clear-btn"
onClick={(e)=>{
e.stopPropagation()
setFrom("")
}}
>
✕
</button>
)}

</div>

</div>

{activeField === "from" && (

<div className="airport-dropdown">

{filteredAirports.slice(0,30).map((airport,i) => (

<div
key={i}
className="airport-item"
onClick={() => selectAirport(airport)}
>

<div>
<div className="airport-city">{airport.city}</div>
<div className="airport-name">{airport.airport}</div>
</div>

<div className="airport-code">{airport.code}</div>

</div>

))}

</div>

)}

</div>

{/* SWAP */}

<button className="swap-btn" onClick={swapAirports}>
<FaExchangeAlt size={14} />
</button>

{/* TO */}

<div className="search-card airport-wrapper">

<FaPlaneArrival className="field-icon" />

<div className="field-content">

<label>To</label>

<div className="input-clear-wrapper">

<input
value={to}
placeholder="Destination"
onFocus={() => {
setActiveField("to");
setAirportQuery("");
}}
onChange={(e) => {
setTo(e.target.value);
setAirportQuery(e.target.value);
}}
/>

{to && (
<button
className="clear-btn"
onClick={(e)=>{
e.stopPropagation()
setTo("")
}}
>
✕
</button>
)}

</div>

</div>

{activeField === "to" && (

<div className="airport-dropdown">

{filteredAirports.slice(0,30).map((airport,i) => (

<div
key={i}
className="airport-item"
onClick={() => selectAirport(airport)}
>

<div>
<div className="airport-city">{airport.city}</div>
<div className="airport-name">{airport.airport}</div>
</div>

<div className="airport-code">{airport.code}</div>

</div>

))}

</div>

)}

</div>

{/* DATE */}
<div className="date-field-wrapper">
  <div className="search-card">
    <FaCalendarAlt className="field-icon" />
    <div
      className="field-content"
      onClick={() => setCalendarOpen(!calendarOpen)}
    >
      <label>Travelling when?</label>
      <div className="input-clear-wrapper">
        <input
          readOnly
          placeholder="Add dates"
          value={
            dateSelected
              ? tripType === "oneway"
                ? range[0].startDate.toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" })
                : range[0].startDate.toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" }) +
                  " - " +
                  range[0].endDate.toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" })
              : ""
          }
        />
        {dateSelected && (
          <button
            className="clear-btn"
            onClick={(e) => {
              e.stopPropagation();
              setDateSelected(false);
            }}
          >
            ✕
          </button>
        )}
      </div>
    </div>
  </div>
  {calendarOpen && (
    <div className="calendar-popup">
      <DateRange
        editableDateInputs={false}
        minDate={new Date()}
        onChange={(item) => {
          setRange([item.selection]);
          setDateSelected(true);
          if (tripType === "oneway") setCalendarOpen(false);
        }}
        moveRangeOnFirstSelection={false}
        ranges={range}
        months={isMobile ? 1 : 3}
        direction="horizontal"
      />
    </div>
  )}
</div>

{/* GUESTS */}

<div className="search-card guest-wrapper">

  <FaUser className="field-icon" />

  <div
    className="field-content"
    onClick={() => setShowGuestPanel(!showGuestPanel)}
  >
    <label>Guests & Cabin</label>
    <input value={guestSummary} readOnly />
  </div>

  {showGuestPanel && (

    <div className="guest-panel">

      <div className="guest-left">

        <div className="guest-row">
          <div className="guest-row-label">
            <span className="guest-row-title">Adults</span>
            <span className="guest-row-desc">(12 years and above)</span>
          </div>
          <div className="guest-row-controls">
            <button onClick={() => setAdults(Math.max(1, adults - 1))}>−</button>
            <span>{adults}</span>
            <button onClick={() => setAdults(adults + 1)}>+</button>
          </div>
        </div>

        <div className="guest-row">
          <div className="guest-row-label">
            <span className="guest-row-title">Children</span>
            <span className="guest-row-desc">(2 to 11 years)</span>
          </div>
          <div className="guest-row-controls">
            <button onClick={() => setChildren(Math.max(0, children - 1))}>−</button>
            <span>{children}</span>
            <button onClick={() => setChildren(children + 1)}>+</button>
          </div>
        </div>

        <div className="guest-row">
          <div className="guest-row-label">
            <span className="guest-row-title">Infants</span>
            <span className="guest-row-desc">(0 to less than 2 years)</span>
          </div>
          <div className="guest-row-controls">
            <button onClick={() => setInfants(Math.max(0, infants - 1))}>−</button>
            <span>{infants}</span>
            <button onClick={() => setInfants(infants + 1)}>+</button>
          </div>
        </div>

      </div>

      <div className="cabin-section">
        <span className="cabin-section-title">Cabin Class</span>

        <label className="cabin-option">
          <input
            type="radio"
            checked={cabin === "Economy"}
            onChange={() => setCabin("Economy")}
          />
          <span>Economy</span>
        </label>

        <label className="cabin-option">
          <input
            type="radio"
            checked={cabin === "Business"}
            onChange={() => setCabin("Business")}
          />
          <span>Business</span>
        </label>

        <label className="cabin-option">
          <input
            type="radio"
            checked={cabin === "First"}
            onChange={() => setCabin("First")}
          />
          <span>First</span>
        </label>

        <label className="cabin-option">
          <input
            type="radio"
            checked={cabin === "Premium Economy"}
            onChange={() => setCabin("Premium Economy")}
          />
          <span>Premium Economy</span>
        </label>

      </div>

    </div>

  )}

</div>

{/* SEARCH */}

<button className="search-main-btn" onClick={handleSearch}>
Search
</button>

</div>

</div>

);
}