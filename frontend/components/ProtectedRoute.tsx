"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import { Loader2 } from "lucide-react";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      if (!user) {
        router.push("/auth");
        return;
      }

      try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { data, error } = await supabase
          .from("profiles")
          .select("full_name, email")
          .eq("id", user.id)
          .single();

        if (error) throw error;

        // if (!data.email) {
        //   if (window.location.pathname !== "/settings") {
        //     router.push("/settings");
        //   }
        // }
      } catch (error) {
        console.error("Error checking profile:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [user, router]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return <>{children}</>;
}
