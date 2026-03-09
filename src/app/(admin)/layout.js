import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import DashboardShell from "@/components/admin/AdminLayoutClient";
import DashboardScripts from "@/components/admin/AdminLTEScripts";
import DashboardStyles from "@/components/admin/DashboardStyles";

export const metadata = {
  title: "Agent Portal | Travelian",
};

export default async function AdminLayout({ children }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin?callbackUrl=/agent");
  }

  return (
    <>
      <DashboardStyles />
      <DashboardShell session={session}>{children}</DashboardShell>
      <DashboardScripts />
    </>
  );
}
