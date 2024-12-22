/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart2, Clock, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
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
            className="lg:w-1/2 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <DashboardCard
              icon={BarChart2}
              title="Projects"
              value="12"
              trend="+3 this month"
              color="primary"
              progress={65}
            />
            <DashboardCard
              icon={DollarSign}
              title="Earnings"
              value="$8,750"
              trend="+15% vs last month"
              color="blue"
              progress={78}
            />
            <DashboardCard
              icon={Clock}
              title="Hours Tracked"
              value="164h"
              trend="23h this week"
              color="green"
              progress={85}
            />
            <DashboardCard
              icon={Users}
              title="Active Clients"
              value="5"
              trend="2 new this month"
              color="orange"
              progress={70}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DashboardCard({
  icon: Icon,
  title,
  value,
  trend,
  color,
  progress,
}: any) {
  return (
    <Card
      className={`relative overflow-hidden bg-gradient-to-br from-${color}-50 to-background`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br from-${color}-500/10 to-${color}-500/5 rounded-lg`}
      />
      <CardHeader className="relative pb-2">
        <div className="flex items-center justify-between">
          <div className={`p-2 bg-${color}-500/10 rounded-lg`}>
            <Icon className={`w-6 h-6 text-${color}-500`} />
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="relative pt-2">
        <div className="text-3xl font-bold mb-1">{value}</div>
        <div className="flex items-center justify-between mb-2">
          <CardDescription>{trend}</CardDescription>
          <ArrowRight className={`w-4 h-4 text-${color}-500`} />
        </div>
        <Progress value={progress} className={`h-1 bg-${color}-100`}>
          <div
            className={`h-full bg-${color}-500`}
            style={{ width: `${progress}%` }}
          />
        </Progress>
        <p className="text-xs text-muted-foreground mt-2">
          {progress}% of target
        </p>
      </CardContent>
    </Card>
  );
}
