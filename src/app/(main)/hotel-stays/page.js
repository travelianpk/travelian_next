import Image from "next/image";
import WhyChooseHotel from "@/components/WhyChooseHotel";
import HotelDestinations from "@/components/HotelDestinations";
import HotelServices from "@/components/HotelServices";
import HotelCTA from "@/components/HotelCTA";
import HotelHowItWorks from "@/components/HotelHowItWorks";


export const metadata = {
  title: "Hotel Stays - Travelian",
  description:
    "Book hotel stays worldwide with Travelian. Best prices, premium locations, trusted service.",
};

export default function HotelStays() {
  return (
    <main>
      <section className="hero">
        <Image
          src="/images/hotelbookingban.svg"
          alt="Travelian Hotel Stays"
          width={1920}
          height={600}
          className="hero-image"
          priority
        />
      </section>

      <WhyChooseHotel />
      <HotelDestinations />
      <HotelServices />
      <HotelHowItWorks />
      <HotelCTA />

    </main>
  );
}