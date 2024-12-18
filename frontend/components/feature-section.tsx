"use client";

import { motion } from "framer-motion";
import {
  Fingerprint,
  Zap,
  Sparkles,
  Lightbulb,
  Puzzle,
  Glasses,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const uniqueFeatures = [
  {
    icon: Fingerprint,
    title: "AI-Powered Client Matching",
    description:
      "Our advanced AI algorithm matches you with clients based on your skills, experience, and preferences.",
  },
  {
    icon: Zap,
    title: "Smart Contract Generation",
    description:
      "Automatically generate legally-binding contracts tailored to your specific project requirements.",
  },
  {
    icon: Sparkles,
    title: "Dynamic Pricing Optimizer",
    description:
      "Maximize your earnings with our real-time pricing suggestions based on market trends and your expertise.",
  },
  {
    icon: Lightbulb,
    title: "Skill Gap Analyzer",
    description:
      "Identify and bridge skill gaps with personalized learning recommendations to stay competitive.",
  },
  {
    icon: Puzzle,
    title: "Cross-Platform Project Sync",
    description:
      "Seamlessly sync your projects across multiple platforms and tools for unified project management.",
  },
  {
    icon: Glasses,
    title: "Virtual Co-working Spaces",
    description:
      "Collaborate in immersive virtual environments designed to boost productivity and networking.",
  },
];

export function UniqueFeatures() {
  return (
    <section id="unique-features" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Innovative Features for Modern Freelancers
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uniqueFeatures.map((feature, index) => (
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
