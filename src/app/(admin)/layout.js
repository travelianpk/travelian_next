import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import DashboardShell from "@/components/admin/AdminLayoutClient";
import DashboardScripts from "@/components/admin/AdminLTEScripts";

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
      <DashboardShell session={session}>{children}</DashboardShell>
      <DashboardScripts />
    </>
  );
}
