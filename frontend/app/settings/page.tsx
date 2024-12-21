/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Loader2, Upload } from "lucide-react";
import Image from "next/image";

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

export default function SettingsPage() {
  const [settings, setSettings] = useState<UserSettings>({
    full_name: "",
    bio: "",
    location: "",
    website: "",
    github_username: "",
    linkedin_profile: "",
    skills: [],
    hourly_rate: 0,
    availability: "",
    avatar_url: "",
    background_image_url: "",
    uploaded_avatar_path: null,
    uploaded_background_path: null,
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [backgroundFile, setBackgroundFile] = useState<File | null>(null);
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
    if (!user) {
      toast({
        title: "Error",
        description: "User not found",
        variant: "destructive",
      });
      return;
    }

    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (error) throw error;

      if (data) {
        setSettings({
          ...data,
          skills: data.skills || [],
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch user settings",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  async function uploadImage(file: File, path: string) {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${path}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("images")
      .upload(filePath, file);

    if (uploadError) {
      throw uploadError;
    }

    return filePath;
  }

  async function updateSettings(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);

    if (!user) {
      toast({
        title: "Error",
        description: "User not found",
        variant: "destructive",
      });
      setSaving(false);
      return;
    }

    try {
      let avatarPath = settings.uploaded_avatar_path;
      let backgroundPath = settings.uploaded_background_path;

      if (avatarFile) {
        avatarPath = await uploadImage(avatarFile, "avatars");
      }

      if (backgroundFile) {
        backgroundPath = await uploadImage(backgroundFile, "backgrounds");
      }

      const { error } = await supabase.from("profiles").upsert({
        id: user.id,
        ...settings,
        uploaded_avatar_path: avatarPath,
        uploaded_background_path: backgroundPath,
        updated_at: new Date().toISOString(),
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Settings updated successfully",
      });

      router.push("/profile");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update settings",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div className="container mx-auto py-10">
        <Card>
          <CardHeader>
            <CardTitle>User Settings</CardTitle>
            <CardDescription>
              Update your profile and preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={updateSettings} className="space-y-4">
              <div>
                <Label htmlFor="full_name">Full Name</Label>
                <Input
                  id="full_name"
                  value={settings.full_name}
                  onChange={(e) =>
                    setSettings({ ...settings, full_name: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={settings.bio}
                  onChange={(e) =>
                    setSettings({ ...settings, bio: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={settings.location}
                  onChange={(e) =>
                    setSettings({ ...settings, location: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  type="url"
                  value={settings.website}
                  onChange={(e) =>
                    setSettings({ ...settings, website: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="github_username">GitHub Username</Label>
                <Input
                  id="github_username"
                  value={settings.github_username}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      github_username: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <Label htmlFor="linkedin_profile">LinkedIn Profile</Label>
                <Input
                  id="linkedin_profile"
                  type="url"
                  value={settings.linkedin_profile}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      linkedin_profile: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <Label htmlFor="skills">Skills (comma-separated)</Label>
                <Input
                  id="skills"
                  value={settings.skills?.join(", ") ?? ""}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      skills: e.target.value
                        .split(",")
                        .map((skill) => skill.trim())
                        .filter(Boolean),
                    })
                  }
                />
              </div>
              <div>
                <Label htmlFor="hourly_rate">Hourly Rate ($)</Label>
                <Input
                  id="hourly_rate"
                  type="number"
                  value={settings.hourly_rate}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      hourly_rate: parseFloat(e.target.value) || 0,
                    })
                  }
                />
              </div>
              <div>
                <Label htmlFor="availability">Availability</Label>
                <Input
                  id="availability"
                  value={settings.availability}
                  onChange={(e) =>
                    setSettings({ ...settings, availability: e.target.value })
                  }
                  placeholder="e.g., Full-time, Part-time, Weekends only"
                />
              </div>
              <div>
                <Label htmlFor="avatar_url">Avatar URL</Label>
                <Input
                  id="avatar_url"
                  type="url"
                  value={settings.avatar_url}
                  onChange={(e) =>
                    setSettings({ ...settings, avatar_url: e.target.value })
                  }
                  placeholder="https://example.com/your-avatar.jpg"
                />
              </div>
              <div>
                <Label htmlFor="background_image_url">
                  Background Image URL
                </Label>
                <Input
                  id="background_image_url"
                  type="url"
                  value={settings.background_image_url}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      background_image_url: e.target.value,
                    })
                  }
                  placeholder="https://example.com/your-background.jpg"
                />
              </div>
              <Button type="submit" disabled={saving}>
                {saving ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Save Settings
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </ProtectedRoute>
  );
}
