"use client";

import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Filters from "@/components/Filters";
import FlightResults from "@/components/FlightResults";
import FlightSearchResults from "@/components/FlightSearchResults";
import DateSlider from "@/components/DateSlider";
import ResultTabs from "@/components/ResultTabs";

export default function FlightsPage() {

return (

<div className="flights-page">

{/* Header */}
<Header />


{/* Sticky Search Bar */}
<div className="searchbar-sticky">
<FlightSearchResults />
</div>


{/* Main Results Section */}
<main className="results-layout">


{/* Filters Sidebar */}
<aside className="filters">
<Filters />
</aside>


{/* Flight Results */}
<section className="results">

{/* Date price slider */}
<DateSlider />


{/* Route heading */}
<div className="results-heading">
<h2>Flights from Lahore to Dubai</h2>
<p>
Average price per person. The price includes taxes and fees.
</p>
</div>


{/* Cheapest / Best / Fastest tabs */}
<ResultTabs />


{/* Flight cards */}
<Suspense fallback={<div className="results-loading">Loading flights...</div>}>
  <FlightResults />
</Suspense>


</section>

</main>


{/* Footer */}
<Footer />

</div>

);

}