import Image from "next/image";
import WhyChooseStudy from "@/components/WhyChooseStudy";
import StudyCountries from "@/components/StudyCountries";
import StudyProcess from "@/components/StudyProcess";
import StudentServices from "@/components/StudentServices";
import StudyCTA from "@/components/StudyCTA";

export const metadata = {
  title: "Study Abroad - Travelian",
  description:
    "Study abroad with Travelian. Apply for UK, Hungary, Sweden, Finland and other international study visas.",
};

export default function StudyAbroad() {
  return (
    <main>
      <section className="hero">
        <Image
          src="/images/studyvisaban.svg"
          alt="Travelian Study Abroad"
          width={1920}
          height={600}
          className="hero-image"
          priority
        />
      </section>
      <WhyChooseStudy />
      <StudyCountries />
      <StudyProcess />
      <StudentServices />
      <StudyCTA />
    </main>
  );
}