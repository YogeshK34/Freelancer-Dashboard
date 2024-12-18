"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart,
  Briefcase,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
  Award,
  Menu,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const sidebarItems = [
  { name: "Dashboard", href: "/dashboard", icon: BarChart },
  { name: "Projects", href: "/projects", icon: Briefcase },
  { name: "Clients", href: "/clients", icon: Users },
  { name: "Freelancers", href: "/freelancers", icon: Award },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const SidebarContent = () => (
    <ul className="space-y-2">
      {sidebarItems.map((item) => (
        <li key={item.name}>
          <Button
            asChild
            variant="ghost"
            className={cn(
              "w-full justify-start",
              pathname === item.href && "bg-accent",
              !isOpen && "px-2"
            )}
            onClick={() => setIsMobileOpen(false)}
          >
            <Link href={item.href}>
              <item.icon className={cn("h-4 w-4", isOpen && "mr-2")} />
              {isOpen && <span>{item.name}</span>}
            </Link>
          </Button>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "hidden md:flex h-screen flex-col bg-background border-r transition-all duration-300",
          isOpen ? "w-64" : "w-16"
        )}
      >
        <div className="flex h-14 items-center justify-between px-4 border-b">
          <Link className="flex items-center justify-center" href="/">
            <BarChart className="h-6 w-6 text-primary" />
            {isOpen && (
              <span className="ml-2 text-lg font-semibold">FreelancePro</span>
            )}
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto p-4">
          <SidebarContent />
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="m-4"
          onClick={toggleSidebar}
        >
          {isOpen ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>
      </aside>

      {/* Mobile Sidebar */}
      <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed top-4 left-4 z-50 md:hidden"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <div className="flex h-14 items-center border-b px-4">
            <Link
              className="flex items-center justify-center"
              href="/"
              onClick={() => setIsMobileOpen(false)}
            >
              <BarChart className="h-6 w-6 text-primary" />
              <span className="ml-2 text-lg font-semibold">FreelancePro</span>
            </Link>
          </div>
          <nav className="flex-1 overflow-y-auto p-4">
            <SidebarContent />
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
