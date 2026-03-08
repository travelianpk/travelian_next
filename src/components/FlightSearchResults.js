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


const airports = airportsData.map((a) => ({
city: a.City + ", " + a.Country,
airport: a["Airport Name"],
code: a["IATA Code"]
}));


export default function FlightSearchResults(){

const wrapperRef = useRef(null);
const router = useRouter();

/* route */

const [from,setFrom] = useState("");
const [to,setTo] = useState("");

/* airport dropdown */

const [activeField,setActiveField] = useState(null);
const [airportQuery,setAirportQuery] = useState("");

/* calendar */

const [calendarOpen,setCalendarOpen] = useState(false);
const [dateSelected,setDateSelected] = useState(false);

const [range,setRange] = useState([
{
startDate:new Date(),
endDate:new Date(),
key:"selection"
}
]);

/* passengers */

const [showGuestPanel,setShowGuestPanel] = useState(false);
const [showCabinPanel,setShowCabinPanel] = useState(false);

const [adults,setAdults] = useState(1);
const [children,setChildren] = useState(0);
const [infants,setInfants] = useState(0);

const [cabin,setCabin] = useState("Economy");

const totalPassengers = adults + children + infants;


/* close dropdowns */

useEffect(()=>{

function handleClick(e){

if(wrapperRef.current && !wrapperRef.current.contains(e.target)){
setActiveField(null);
setCalendarOpen(false);
setShowGuestPanel(false);
setShowCabinPanel(false);
}

}

document.addEventListener("mousedown",handleClick);
return()=>document.removeEventListener("mousedown",handleClick);

},[]);


/* airport filter */

const filteredAirports = airports.filter((a)=>{

if(!airportQuery) return true;

const q = airportQuery.toLowerCase();

return(
a.city.toLowerCase().includes(q) ||
a.airport.toLowerCase().includes(q) ||
a.code.toLowerCase().includes(q)
);

});


function selectAirport(airport){

const city = airport.city.split(",")[0];
const value = city + " (" + airport.code + ")";

if(activeField === "from"){
setFrom(value);
setActiveField("to");
setAirportQuery("");
return;
}

if(activeField === "to"){
setTo(value);
setActiveField(null);
setCalendarOpen(true);
}

}


function swapAirports(){

const temp = from;
setFrom(to);
setTo(temp);

}


function handleSearch(){

const departureDate =
range[0].startDate.toISOString().split("T")[0];

router.push(
`/flights?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${departureDate}`
);

}


return(

<div className="rs-container" ref={wrapperRef}>
  <div className="rs-bar">

    {/* ROUTE GROUP: From + Swap + To */}
    <div className="rs-route-group">
      <div className="rs-field airport-wrapper">
        <FaPlaneDeparture className="rs-icon" />
        <input
          value={from}
          placeholder="Flying from"
onFocus={()=>{setActiveField("from");setAirportQuery("")}}
onChange={(e)=>{setFrom(e.target.value);setAirportQuery(e.target.value)}}
/>

{activeField==="from" && (
          <div className="rs-airport-dropdown">
            {filteredAirports.slice(0,30).map((airport,i)=>(

<div key={i} className="rs-airport-item" onClick={()=>selectAirport(airport)}>
              <div><div>{airport.city}</div><small>{airport.airport}</small></div>
              <strong>{airport.code}</strong>
            </div>
            ))}
          </div>
        )}
      </div>


<button className="rs-swap" onClick={swapAirports}>
        <FaExchangeAlt size={14} />
      </button>

      <div className="rs-field airport-wrapper">
        <FaPlaneArrival className="rs-icon" />
        <input
          value={to}
          placeholder="Flying to"
          onFocus={()=>{setActiveField("to");setAirportQuery("")}}
          onChange={(e)=>{setTo(e.target.value);setAirportQuery(e.target.value)}}
        />
        {activeField==="to" && (
          <div className="rs-airport-dropdown">
            {filteredAirports.slice(0,30).map((airport,i)=>(

<div
key={i}
className="rs-airport-item"
onClick={()=>selectAirport(airport)}
>

<div>
<div>{airport.city}</div>
<small>{airport.airport}</small>
</div>

<strong>{airport.code}</strong>

</div>

))}
            </div>
          )}
      </div>
    </div>

    {/* DATE */}
    <div
className="rs-field"
onClick={()=>setCalendarOpen(!calendarOpen)}
>

<FaCalendarAlt className="rs-icon"/>

<input
readOnly
value={
dateSelected
? range[0].startDate.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" })
: "Select date"
}
/>

</div>


{/* PASSENGERS */}

<div
className="rs-field passenger-wrapper"
onClick={()=>setShowGuestPanel(!showGuestPanel)}
>

<FaUser className="rs-icon"/>

<span className="rs-passenger-text">
{totalPassengers}
</span>

<span className="rs-arrow">▾</span>


{showGuestPanel && (

<div className="rs-passenger-panel">

<div className="rs-guest-row">
<span>Adults</span>
<div>
<button onClick={()=>setAdults(Math.max(1,adults-1))}>-</button>
<span>{adults}</span>
<button onClick={()=>setAdults(adults+1)}>+</button>
</div>
</div>

<div className="rs-guest-row">
<span>Children</span>
<div>
<button onClick={()=>setChildren(Math.max(0,children-1))}>-</button>
<span>{children}</span>
<button onClick={()=>setChildren(children+1)}>+</button>
</div>
</div>

<div className="rs-guest-row">
<span>Infants</span>
<div>
<button onClick={()=>setInfants(Math.max(0,infants-1))}>-</button>
<span>{infants}</span>
<button onClick={()=>setInfants(infants+1)}>+</button>
</div>
</div>

</div>

)}

</div>


{/* CABIN */}

<div
className="rs-field cabin-wrapper"
onClick={()=>setShowCabinPanel(!showCabinPanel)}
>

<span>{cabin}</span>

<span className="rs-arrow">▾</span>


{showCabinPanel && (

<div className="rs-cabin-panel">

<label>
<input
type="radio"
checked={cabin==="Economy"}
onChange={()=>setCabin("Economy")}
/>
Economy
</label>

<label>
<input
type="radio"
checked={cabin==="Business"}
onChange={()=>setCabin("Business")}
/>
Business
</label>

<label>
<input
type="radio"
checked={cabin==="First"}
onChange={()=>setCabin("First")}
/>
First
</label>

</div>

)}

</div>


<button className="rs-search-btn" onClick={handleSearch}>
Search
</button>


</div>


{calendarOpen && (

<div className="rs-calendar">

<DateRange
editableDateInputs={false}
minDate={new Date()}
onChange={(item)=>{
setRange([item.selection]);
setDateSelected(true);
setCalendarOpen(false);
}}
ranges={range}
months={2}
direction="horizontal"
/>

</div>

)}

</div>

);

}