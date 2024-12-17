"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BarChart,
  Users,
  Briefcase,
  Clock,
  DollarSign,
  Shield,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Pricing } from "@/components/pricing";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <BarChart className="h-6 w-6" />
          <span className="sr-only">Freelance Dashboard</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#faq"
          >
            FAQ
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Empower Your Freelance Career
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Manage projects, track time, and collaborate with clients all
                  in one place. Boost your productivity and take control of your
                  freelance business.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button asChild>
                  <Link href="/dashboard">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Briefcase className="h-6 w-6 mr-2" />
                      Project Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Easily manage and track all your projects in one
                      centralized dashboard. Set milestones, assign tasks, and
                      monitor progress effortlessly.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="h-6 w-6 mr-2" />
                      Time Tracking
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Track your time efficiently with our intuitive time
                      tracking tool. Generate detailed reports for accurate
                      billing and productivity analysis.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="h-6 w-6 mr-2" />
                      Client Collaboration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Seamlessly communicate and share progress with your
                      clients. Keep everyone in the loop with real-time updates
                      and file sharing.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart className="h-6 w-6 mr-2" />
                      Analytics & Reporting
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Gain valuable insights into your freelance business with
                      comprehensive analytics and customizable reports.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <DollarSign className="h-6 w-6 mr-2" />
                      Invoicing & Payments
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Streamline your billing process with integrated invoicing
                      and payment features. Get paid faster and manage your
                      finances effortlessly.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-6 w-6 mr-2" />
                      Security & Privacy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Rest easy knowing your data is protected with
                      state-of-the-art security measures. We prioritize your
                      privacy and the confidentiality of your client
                      information.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Pricing Plans
            </h2>
            <Pricing />
          </div>
        </section>
        <section
          id="faq"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion
              type="single"
              collapsible
              className="w-full max-w-3xl mx-auto"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How does the free trial work?
                </AccordionTrigger>
                <AccordionContent>
                  Our free trial gives you full access to all features for 14
                  days. No credit card required. You can upgrade to a paid plan
                  at any time during or after the trial.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I change my plan later?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can upgrade or downgrade your plan at any time.
                  Changes will be reflected in your next billing cycle.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What payment methods do you accept?
                </AccordionTrigger>
                <AccordionContent>
                  We accept all major credit cards, PayPal, and bank transfers
                  for annual plans.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Is my data safe and secure?</AccordionTrigger>
                <AccordionContent>
                  Absolutely. We use industry-standard encryption and security
                  measures to protect your data. Your information is never
                  shared with third parties.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Do you offer discounts for non-profits or educational
                  institutions?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we offer special pricing for non-profits and educational
                  institutions. Please contact our sales team for more
                  information.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Freelance Dashboard. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
