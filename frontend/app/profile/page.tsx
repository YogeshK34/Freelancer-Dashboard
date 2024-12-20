/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Globe,
  MapPin,
  DollarSign,
  Clock,
} from "lucide-react";
import Image from "next/image";
import { UserProjects } from "@/components/UserProjects";

interface UserSettings {
  full_name: string;
  bio: string;
  location: string;
  website: string;
  github_username: string;
  linkedin_profile: string;
  skills: string[];
  hourly_rate: number;
  availability: string;
  avatar_url: string;
  background_image_url: string;
  uploaded_avatar_path: string | null;
  uploaded_background_path: string | null;
}

export default function ProfilePage() {
  const [settings, setSettings] = useState<UserSettings | null>(null);
  const { user } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      fetchSettings();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  async function fetchSettings() {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user?.id)
        .single();

      if (error) throw error;

      if (data) {
        setSettings(data);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch user settings",
        variant: "destructive",
      });
    }
  }

  const isProfileIncomplete =
    !settings ||
    !settings.full_name ||
    !settings.bio ||
    settings.skills.length === 0;

  if (isProfileIncomplete) {
    return (
      <ProtectedRoute>
        <div className="container mx-auto py-10">
          <Card>
            <CardHeader>
              <CardTitle>Complete Your Profile</CardTitle>
              <CardDescription>
                Your profile is incomplete. Please update your settings to view
                your full profile.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => router.push("/settings")}>
                Update Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </ProtectedRoute>
    );
  }

  const avatarSrc = settings.uploaded_avatar_path
    ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${settings.uploaded_avatar_path}`
    : settings.avatar_url ||
      "/placeholder.svg?height=128&width=128&text=Avatar";

  const backgroundSrc = settings.uploaded_background_path
    ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${settings.uploaded_background_path}`
    : settings.background_image_url ||
      "/placeholder.svg?height=200&width=1024&text=Background";

  return (
    <ProtectedRoute>
      <div className="container mx-auto py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden">
            <div className="relative h-32 overflow-hidden">
              <Image
                src={backgroundSrc}
                alt="Profile background"
                width={1024}
                height={200}
                quality={100}
                className="object-cover w-full h-full"
              />
            </div>
            <CardHeader className="relative">
              <div className="absolute -top-16 left-4">
                <Image
                  src={avatarSrc}
                  alt={settings.full_name}
                  width={128}
                  height={128}
                  quality={100}
                  className="rounded-full border-4 border-white"
                />
              </div>
              <div className="ml-36">
                <CardTitle className="text-3xl">{settings.full_name}</CardTitle>
                <CardDescription className="text-lg">
                  {settings.bio}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-lg font-semibold mb-2">Details</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{settings.location || "Not specified"}</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>${settings.hourly_rate}/hour</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{settings.availability || "Not specified"}</span>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h3 className="text-lg font-semibold mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {settings.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              </div>
              <motion.div
                className="mt-6 flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {settings.website && (
                  <a
                    href={settings.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="icon">
                      <Globe className="h-4 w-4" />
                    </Button>
                  </a>
                )}
                {settings.github_username && (
                  <a
                    href={`https://github.com/${settings.github_username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="icon">
                      <Github className="h-4 w-4" />
                    </Button>
                  </a>
                )}
                {settings.linkedin_profile && (
                  <a
                    href={settings.linkedin_profile}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="icon">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </a>
                )}
              </motion.div>
              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Button onClick={() => router.push("/settings")}>
                  Edit Profile
                </Button>
              </motion.div>
            </CardContent>
          </Card>

          {user && <UserProjects userId={user.id} />}
        </motion.div>
      </div>
    </ProtectedRoute>
  );
}
