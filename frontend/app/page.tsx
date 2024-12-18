"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { HeroSection } from "@/components/hero-section";
import { UniqueFeatures } from "@/components/feature-section";
import { AnimatedTestimonialsDemo } from "@/components/testimonial-section";
import { Pricing } from "@/components/pricing";
import { FloatingCTA } from "@/components/FloatingCTA";
import { WorkflowSection } from "@/components/workflow-section";
import { IntegrationSection } from "@/components/integration-section";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow pt-4">
        <nav className="bg-slate-700 sticky top-4 z-50 mx-auto max-w-2xl bg-background/95 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-muted-foreground rounded-full border border-border/40">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
            </Link>
            <div className="flex items-center space-x-4 text-sm font-medium">
              <Link
                href="#features"
                className="transition-colors hover:text-foreground/80"
              >
                Features
              </Link>
              <Link
                href="#workflow"
                className="transition-colors hover:text-foreground/80"
              >
                Workflow
              </Link>
              <Link
                href="#pricing"
                className="transition-colors hover:text-foreground/80"
              >
                Pricing
              </Link>
              <Button asChild variant="default" size="sm">
                <Link href="/login">Get Started</Link>
              </Button>
            </div>
          </div>
        </nav>
        <HeroSection />
        <UniqueFeatures />
        <UniqueFeatures />
        <WorkflowSection />
        <AnimatedTestimonialsDemo />
        <IntegrationSection />
        <Pricing />
      </main>

      <footer className="border-t border-border/40 bg-muted">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
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
          <div className="mt-8 border-t border-border pt-8 text-center text-sm">
            <p>&copy; 2024 FreelancePro. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <FloatingCTA />
    </div>
  );
}
