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
  const [showTripMenu, setShowTripMenu] = useState(false);

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

  const totalPassengers = adults + children + infants;

  const guestSummary =
    totalPassengers +
    " Passenger" +
    (totalPassengers > 1 ? "s" : "") +
    ", " +
    cabin;

  /* outside click */
  useEffect(() => {

    function handleClick(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setActiveField(null);
        setShowGuestPanel(false);
        setCalendarOpen(false);
        setShowTripMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);

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

<div className="trip-dropdown">

<button
className="trip-button"
onClick={() => setShowTripMenu(!showTripMenu)}
>

{tripType === "oneway" && "One way"}
{tripType === "round" && "Return"}
{tripType === "multi" && "Multi-city"} ▼

</button>

{showTripMenu && (

<div className="trip-menu">

<div
className="trip-item"
onClick={()=>{setTripType("oneway");setShowTripMenu(false)}}
>
One way
</div>

<div
className="trip-item"
onClick={()=>{setTripType("round");setShowTripMenu(false)}}
>
Return
</div>

<div
className="trip-item"
onClick={()=>{setTripType("multi");setShowTripMenu(false)}}
>
Multi-city
</div>

</div>

)}

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
? range[0].startDate.toLocaleDateString()
: range[0].startDate.toLocaleDateString() +
" - " +
range[0].endDate.toLocaleDateString()
: ""
}
/>

{dateSelected && (
<button
className="clear-btn"
onClick={(e)=>{
e.stopPropagation()
setDateSelected(false)
}}
>
✕
</button>
)}

</div>

</div>

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
          <span>Adults</span>
          <div>
            <button onClick={() => setAdults(Math.max(1, adults - 1))}>-</button>
            <span>{adults}</span>
            <button onClick={() => setAdults(adults + 1)}>+</button>
          </div>
        </div>

        <div className="guest-row">
          <span>Children</span>
          <div>
            <button onClick={() => setChildren(Math.max(0, children - 1))}>-</button>
            <span>{children}</span>
            <button onClick={() => setChildren(children + 1)}>+</button>
          </div>
        </div>

        <div className="guest-row">
          <span>Infants</span>
          <div>
            <button onClick={() => setInfants(Math.max(0, infants - 1))}>-</button>
            <span>{infants}</span>
            <button onClick={() => setInfants(infants + 1)}>+</button>
          </div>
        </div>

      </div>

      <div className="cabin-section">

        <label>
          <input
            type="radio"
            checked={cabin === "Economy"}
            onChange={() => setCabin("Economy")}
          />
          Economy
        </label>

        <label>
          <input
            type="radio"
            checked={cabin === "Business"}
            onChange={() => setCabin("Business")}
          />
          Business
        </label>

        <label>
          <input
            type="radio"
            checked={cabin === "First"}
            onChange={() => setCabin("First")}
          />
          First
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

{/* CALENDAR */}

{calendarOpen && (

<div className="calendar-popup">

<DateRange
editableDateInputs={false}
minDate={new Date()}
onChange={(item) => {

setRange([item.selection]);
setDateSelected(true);

if (tripType === "oneway") {
setCalendarOpen(false);
}

}}
moveRangeOnFirstSelection={false}
ranges={range}
months={3}
direction="horizontal"
/>

</div>

)}

</div>

);
}