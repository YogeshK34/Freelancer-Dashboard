"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart,
  Briefcase,
  Users,
  Settings,
  Menu,
  X,
  Award,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";

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

  const SidebarContent = () => (
    <ul className="space-y-2">
      {sidebarItems.map((item) => (
        <li key={item.name}>
          <Button
            asChild
            variant="ghost"
            className={cn(
              "w-full justify-start",
              pathname === item.href && "bg-gray-200 dark:bg-gray-700"
            )}
            onClick={() => setIsOpen(false)}
          >
            <Link href={item.href}>
              <item.icon className="mr-2 h-4 w-4" />
              {item.name}
            </Link>
          </Button>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="h-4 w-4" />
      </Button>

      {/* Desktop Sidebar */}
      <div
        className={cn(
          "hidden md:flex h-screen w-64 flex-col bg-accent transition-all duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex h-14 items-center border-b px-4">
          <Link className="flex items-center justify-center" href="/">
            <BarChart className="h-6 w-6 text-blue-500" />
            <span className="ml-2 text-lg font-semibold">
              Freelance Dashboard
            </span>
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto p-4">
          <SidebarContent />
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <div className="flex h-14 items-center border-b px-4">
            <Link
              className="flex items-center justify-center"
              href="/"
              onClick={() => setIsOpen(false)}
            >
              <BarChart className="h-6 w-6 text-blue-500" />
              <span className="ml-2 text-lg font-semibold">
                Freelance Dashboard
              </span>
            </Link>
            <Button
              variant="ghost"
              className="ml-auto"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex-1 overflow-y-auto p-4">
            <SidebarContent />
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
