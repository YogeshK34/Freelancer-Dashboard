"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart2, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "@/components/Logo";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-muted/50 to-background">
      <div className="absolute top-0 left-0 right-0 p-6">
        <Logo size="lg" />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Empower Your{" "}
              <span className="text-primary">Freelance Career</span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Streamline your workflow, manage clients, and boost your
              productivity with our all-in-one freelance management platform.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button asChild size="lg" className="group">
                <Link href="/dashboard">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/dashboard">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative z-10 bg-card rounded-lg shadow-2xl p-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-6">
              <DashboardCard
                icon={BarChart2}
                title="Projects"
                value="12"
                trend="+3 this month"
              />
              <DashboardCard
                icon={DollarSign}
                title="Earnings"
                value="$8,750"
                trend="+15% vs last month"
              />
              <DashboardCard
                icon={Clock}
                title="Hours Tracked"
                value="164h"
                trend="23h this week"
              />
              <DashboardCard
                icon={ArrowRight}
                title="Active Clients"
                value="5"
                trend="2 new this month"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function DashboardCard({ icon: Icon, title, value, trend }: any) {
  return (
    <div className="bg-card-foreground/5 p-4 rounded-lg ">
      <div className="flex items-center justify-between mb-2">
        <Icon className="text-primary h-6 w-6" />
        <span className="text-xs text-muted-foreground">{title}</span>
      </div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-xs text-muted-foreground">{trend}</div>
    </div>
  );
}
