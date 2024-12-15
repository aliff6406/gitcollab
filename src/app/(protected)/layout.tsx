import { SidebarProvider } from "@/components/ui/sidebar";
import { UserButton } from "@clerk/nextjs";
import AppSidebar from "./dashboard/app-sidebar";

interface SidebarLayoutProps {
  children: React.ReactNode;
}
const SidebarLayout = ({ children }: SidebarLayoutProps) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="m-2 w-full">
        {/* top bar */}
        <div className="flex items-center gap-2 rounded-md border border-sidebar-border bg-sidebar p-2 px-4 shadow">
          {/* <SearchBar /> */}
          <div className="ml-auto"></div>
          <UserButton />
        </div>

        {/* main content */}
        <div className="border-sidebar-borderbg-sidebar h-[calc(100vh-6rem)] overflow-y-scroll rounded-md border p-4 shadow">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
};
export default SidebarLayout;
