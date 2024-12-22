/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { HeroSection } from "@/components/hero-section";
import { FloatingCTA } from "@/components/FloatingCTA";
import { IntegrationSection } from "@/components/integration-section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadarChartDemo } from "@/components/dashboard/radar-chart";
import { TooltipChartDemo } from "@/components/dashboard/tooltip-chart";
import { BrowserChartDemo } from "@/components/dashboard/browser-chart";
import { ChartThemeProvider } from "@/components/dashboard/chart-theme-provider";
import { ThemeSelector } from "@/components/dashboard/theme-selector";
import { useChartTheme } from "@/components/dashboard/chart-theme-provider";
import { StatsSection } from "@/components/stats-section";
import { PieChartDemo } from "@/components/dashboard/pie-chart";
import { WorkflowSection } from "@/components/workflow-section";
import { Newsletter } from "@/components/newsletter";

export default function LandingPage() {
  return (
    <ChartThemeProvider>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <main className="flex-grow relative">
          <div className="p-4"></div>
          <HeroSection />
          <StatsSection />
          <InsightsSection />
          <WorkflowSection />
          <IntegrationSection />
          <Newsletter />
        </main>

        <footer className="border-t border-border/40 bg-muted">
          <div className="container py-8 md:py-12">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="pl-4">
                <h3 className="mb-4 text-sm font-semibold">Product</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="transition-colors hover:text-foreground/80"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="transition-colors hover:text-foreground/80"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="transition-colors hover:text-foreground/80"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-semibold">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="transition-colors hover:text-foreground/80"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="transition-colors hover:text-foreground/80"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="transition-colors hover:text-foreground/80"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-semibold">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="transition-colors hover:text-foreground/80"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="transition-colors hover:text-foreground/80"
                    >
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="transition-colors hover:text-foreground/80"
                    >
                      API
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-semibold">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="transition-colors hover:text-foreground/80"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="transition-colors hover:text-foreground/80"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="transition-colors hover:text-foreground/80"
                    >
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <FloatingCTA />
      </div>
    </ChartThemeProvider>
  );
}

function InsightsSection() {
  const { getColors } = useChartTheme();
  const theme = getColors();

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Powerful Insights at Your Fingertips
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visualize your freelance business performance with our advanced
            analytics
          </p>
        </motion.div>

        <div className="flex justify-end mb-4">
          <ThemeSelector />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
                <CardDescription>
                  Your freelance metrics at a glance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RadarChartDemo />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Revenue Breakdown</CardTitle>
                <CardDescription>
                  Monthly earnings by project type
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TooltipChartDemo />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Projects Distribution</CardTitle>
                <CardDescription>Breakdown of clients projects</CardDescription>
              </CardHeader>
              <CardContent>
                {/* <AreaChartDemo variant="icons" /> */}
                <PieChartDemo />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Website Traffic</CardTitle>
                <CardDescription>Visitor analytics by browser</CardDescription>
              </CardHeader>
              <CardContent>
                <BrowserChartDemo />
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Make data-driven decisions to grow your freelance business
          </p>
          <Button asChild size="lg">
            <Link href="/auth">Start Your Free Trial</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
