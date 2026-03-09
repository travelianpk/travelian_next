import "./globals.scss";
import Providers from "@/components/SessionProvider";
import AdminAwareWrapper from "@/components/AdminAwareWrapper";

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
          <AdminAwareWrapper />
        </Providers>
      </body>
    </html>
  );
}