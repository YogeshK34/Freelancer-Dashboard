"use client";

import { useEffect, useState, useCallback } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function ProfileChecker() {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const { toast } = useToast();

  const checkProfile = useCallback(async () => {
    if (!user) return;
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (error) throw error;

      setProfile(data);
      console.log("Profile data:", data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      checkProfile();
    }
  }, [user, checkProfile]);

  const forceProfileUpdate = async () => {
    if (!user) return;
    try {
      const { data, error } = await supabase
        .from("profiles")
        .update({
          full_name: user.user_metadata?.full_name || "Unknown",
          avatar_url: user.user_metadata?.avatar_url || "",
          updated_at: new Date().toISOString(),
        })
        .eq("id", user.id)
        .select();

      if (error) throw error;

      setProfile(data[0]);
      toast({
        title: "Profile Updated",
        description: "Your profile has been forcefully updated.",
      });
    } catch (error) {
      console.error("Error updating profile:", error);
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (!profile) {
    return <div>Loading profile...</div>;
  }

  return (
    <div>
      <h2>Profile Information</h2>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
      <Button onClick={forceProfileUpdate}>Force Profile Update</Button>
    </div>
  );
}
