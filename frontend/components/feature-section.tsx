"use client";

import { motion } from "framer-motion";
import { Zap, Target, Layers, Repeat, BarChart, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Automated Workflows",
    description: "Streamline your processes with intelligent automation tools.",
  },
  {
    icon: Target,
    title: "Goal Tracking",
    description:
      "Set, monitor, and achieve your freelance business objectives.",
  },
  {
    icon: Layers,
    title: "Project Templates",
    description: "Kickstart projects quickly with customizable templates.",
  },
  {
    icon: Repeat,
    title: "Recurring Tasks",
    description:
      "Easily manage repetitive work with scheduled recurring tasks.",
  },
  {
    icon: BarChart,
    title: "Advanced Analytics",
    description: "Gain deep insights into your productivity and earnings.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Seamlessly work with other freelancers or clients on projects.",
  },
];

export function FeatureSection() {
  return (
    <section id="features" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Powerful Features for Modern Freelancers
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card hover:bg-accent transition-colors duration-300">
                <CardHeader>
                  <feature.icon className="h-10 w-10 mb-4 text-primary" />
                  <CardTitle className="text-xl font-semibold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
