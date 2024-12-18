"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import { STRIPE_PRICE_IDS } from "@/lib/stripe";

interface Subscription {
  status: string;
  plan_id: string;
  current_period_end: string;
}

export default function SubscriptionPage() {
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      fetchSubscription();
    }
  }, [user]);

  async function fetchSubscription() {
    try {
      const { data, error } = await supabase
        .from("subscriptions")
        .select("*")
        .eq("user_id", user?.id)
        .single();

      if (error) throw error;

      setSubscription(data);
    } catch (error) {
      console.error("Error fetching subscription:", error);
      toast({
        title: "Error",
        description: "Failed to fetch subscription details",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  const handleUpgrade = async (newPlanId: string) => {
    // Implement upgrade logic here
    console.log("Upgrading to plan:", newPlanId);
  };

  const handleCancel = async () => {
    // Implement cancellation logic here
    console.log("Cancelling subscription");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Subscription Management</h1>
      {subscription ? (
        <Card>
          <CardHeader>
            <CardTitle>Current Subscription</CardTitle>
            <CardDescription>Status: {subscription.status}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Plan: {getPlanName(subscription.plan_id)}</p>
            <p>
              Renews on:{" "}
              {new Date(subscription.current_period_end).toLocaleDateString()}
            </p>
            <div className="mt-4 space-x-4">
              {subscription.plan_id !== STRIPE_PRICE_IDS.ENTERPRISE && (
                <Button
                  onClick={() => handleUpgrade(STRIPE_PRICE_IDS.ENTERPRISE)}
                >
                  Upgrade to Enterprise
                </Button>
              )}
              <Button variant="destructive" onClick={handleCancel}>
                Cancel Subscription
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>No Active Subscription</CardTitle>
          </CardHeader>
          <CardContent>
            <p>You don&apos;t have an active subscription.</p>
            <Button className="mt-4" onClick={() => router.push("/pricing")}>
              View Plans
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function getPlanName(planId: string): string {
  switch (planId) {
    case STRIPE_PRICE_IDS.BASIC:
      return "Basic";
    case STRIPE_PRICE_IDS.PRO:
      return "Pro";
    case STRIPE_PRICE_IDS.ENTERPRISE:
      return "Enterprise";
    default:
      return "Unknown";
  }
}
