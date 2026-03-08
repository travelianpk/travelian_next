import Image from "next/image";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import ContactCTA from "@/components/ContactCTA";

export const metadata = {
  title: "Contact - Travelian",
  description:
    "Contact Travelian for flight bookings, Umrah packages, visas, hotels and travel insurance.",
};

export default function Contact() {
  return (
    <main>
      <section className="hero">
        <Image
          src="/images/contactban.svg"
          alt="Travelian Contact Us"
          width={1920}
          height={600}
          className="hero-image"
          priority
        />
      </section>

     <ContactInfo />
     <ContactForm />
     <ContactCTA />


    </main>
  );
}