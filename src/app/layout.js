import "./globals.scss";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata = {
  title: "Travelian",
  description: "Travelian Travel Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ScrollToTop />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}