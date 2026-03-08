import { redirect } from "next/navigation";

export const metadata = {
  title: "Help Center & FAQs - Travelian",
  description: "Frequently asked questions about flights, accommodation, bookings and travel services.",
};

export default function FAQPage() {
  redirect("/info/help");
}
