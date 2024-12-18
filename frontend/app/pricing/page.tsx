"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { STRIPE_PRICE_IDS } from "@/lib/stripe";

const plans = [
  {
    name: "Basic",
    price: 9.99,
    features: ["1 project", "Basic analytics", "Email support"],
    stripePriceId: STRIPE_PRICE_IDS.BASIC,
  },
  {
    name: "Pro",
    price: 19.99,
    features: [
      "5 projects",
      "Advanced analytics",
      "Priority support",
      "Custom reporting",
    ],
    stripePriceId: STRIPE_PRICE_IDS.PRO,
  },
  {
    name: "Enterprise",
    price: 49.99,
    features: [
      "Unlimited projects",
      "Full analytics suite",
      "24/7 phone support",
      "Dedicated account manager",
    ],
    stripePriceId: STRIPE_PRICE_IDS.ENTERPRISE,
  },
];

export default function PricingPage() {
  const [loading, setLoading] = useState<string | null>(null);
  const router = useRouter();
  const { user } = useAuth();
  const { toast } = useToast();

  const handleSubscribe = async (stripePriceId: string) => {
    if (!user) {
      toast({
        title: "Error",
        description: "You must be logged in to subscribe",
        variant: "destructive",
      });
      return;
    }

    setLoading(stripePriceId);

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId: stripePriceId,
          userId: user.id,
        }),
      });

      const session = await response.json();

      if (session.url) {
        router.push(session.url);
      } else {
        throw new Error("Failed to create checkout session");
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Failed to initiate checkout. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Choose Your Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>${plan.price}/month</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc list-inside space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  onClick={() => handleSubscribe(plan.stripePriceId)}
                  disabled={loading === plan.stripePriceId}
                >
                  {loading === plan.stripePriceId
                    ? "Processing..."
                    : "Subscribe"}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
