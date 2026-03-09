import "./globals.scss";
import Providers from "@/components/SessionProvider";
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
        <Providers>
          {children}
          <ScrollToTop />
          <FloatingWhatsApp />
        </Providers>
      </body>
    </html>
  );
}