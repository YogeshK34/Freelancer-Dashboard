/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  BarChart,
  Briefcase,
  Users,
  Settings,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  LogOut,
  User,
  CreditCard,
  HomeIcon,
  DollarSign,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import { Logo } from "./Logo";

const sidebarItems = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Dashboard", href: "/dashboard", icon: BarChart },
  { name: "Projects", href: "/projects", icon: Briefcase },
  { name: "Clients", href: "/clients", icon: Users },
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Profile", href: "/profile", icon: User },
  { name: "Pricing", href: "/pricing", icon: DollarSign },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktopOpen, setIsDesktopOpen] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  const toggleSidebar = () => setIsDesktopOpen(!isDesktopOpen);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      router.push("/auth");
      toast({
        title: "Logged out successfully",
        description: "You have been logged out of your account.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to log out. Please try again.",
        variant: "destructive",
      });
    }
  };

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
              !isDesktopOpen && "md:px-2"
            )}
            onClick={() => setIsOpen(false)}
          >
            <Link href={item.href}>
              <item.icon className={cn("h-4 w-4", "mr-2")} />
              <span>{item.name}</span>
            </Link>
          </Button>
        </li>
      ))}
      <li>
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4 mr-2" />
          <span>Logout</span>
        </Button>
      </li>
    </ul>
  );

  return (
    <>
      {isMobile ? (
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="fixed top-4 left-4 z-50 md:hidden"
            >
              <BarChart className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <div className="flex h-14 items-center border-b px-4">
              <Link
                className="flex items-center justify-center"
                href="/"
                onClick={() => setIsMobileOpen(false)}
              >
                <Logo />
                {/* <span className="ml-2 text-lg font-semibold">FreelancePro</span> */}
              </Link>
            </div>
            <nav className="flex-1 overflow-y-auto p-4">
              <SidebarContent />
            </nav>
          </SheetContent>
        </Sheet>
      ) : (
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key="sidebar"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: isDesktopOpen ? 256 : 64, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="hidden md:flex h-screen border-r flex-col"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="self-end m-2"
            >
              {isDesktopOpen ? (
                <ChevronLeft className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </Button>
            <SidebarContent />
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}
