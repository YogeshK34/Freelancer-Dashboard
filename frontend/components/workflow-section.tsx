"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Create Your Profile",
    description: "Set up your professional profile and showcase your skills.",
  },
  {
    title: "Find Opportunities",
    description: "Browse and apply to relevant freelance projects.",
  },
  {
    title: "Manage Projects",
    description:
      "Use our tools to track time, tasks, and communicate with clients.",
  },
  {
    title: "Get Paid",
    description:
      "Invoice clients and receive payments securely through our platform.",
  },
];

export function WorkflowSection() {
  return (
    <section id="workflow" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your Freelance Workflow Simplified
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-muted rounded-lg p-6 h-full">
                <div className="text-4xl font-bold text-primary mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight
                  className="hidden lg:block absolute top-1/2 -right-5 text-primary"
                  size={24}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
