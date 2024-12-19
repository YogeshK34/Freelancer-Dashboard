"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRouter } from "next/navigation";

interface ProjectFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onProjectCreated: (project: any) => void;
}

export function ProjectForm({
  open,
  onOpenChange,
  onProjectCreated,
}: ProjectFormProps) {
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    status: "Planning",
    start_date: format(new Date(), "yyyy-MM-dd"),
    end_date: "",
    client: "",
    budget: 0,
    hourly_rate: 0,
    estimated_hours: 0,
    technologies: [] as string[],
    progress: 0,
    time_spent: 0,
    client_avatar: "",
    team: [],
    image: "",
    live_link: "",
    github_link: "",
  });

  const { user } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  async function createProject(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!user) {
      toast({
        title: "Error",
        description: "You must be logged in to create a project",
        variant: "destructive",
      });
      return;
    }

    try {
      const { data: existingProjects, error: projectError } = await supabase
        .from("projects")
        .select("id")
        .eq("user_id", user.id);

      if (projectError) throw projectError;

      if (existingProjects && existingProjects.length > 0) {
        const { data: subscription, error: subscriptionError } = await supabase
          .from("subscriptions")
          .select("status, plan_id")
          .eq("user_id", user.id)
          .single();

        if (subscriptionError) throw subscriptionError;

        if (!subscription) {
          toast({
            title: "Subscription required",
            description:
              "You need an active subscription to create more projects.",
            variant: "default",
          });
          router.push("/pricing");
          return;
        }

        console.log("Subscription status:", subscription.status);
        console.log("Plan ID:", subscription.plan_id);

        if (subscription.status !== "active") {
          toast({
            title: "Subscription required",
            description:
              "You need to subscribe to create more than one project.",
            variant: "default",
          });
          router.push("/pricing");
          return;
        }

        const projectLimit = getProjectLimit(subscription.plan_id);
        if (existingProjects.length >= projectLimit) {
          toast({
            title: "Project limit reached",
            description: `Your current plan allows up to ${projectLimit} projects. Please upgrade to create more.`,
            variant: "default",
          });
          router.push("/pricing");
          return;
        }
      }

      const { data, error } = await supabase
        .from("projects")
        .insert({
          user_id: user.id,
          ...newProject,
          technologies: newProject.technologies || [],
          team: newProject.team || [],
        })
        .select();

      if (error) throw error;

      if (data) {
        onProjectCreated(data[0]);
        toast({
          title: "Success",
          description: "Project created successfully",
        });
        onOpenChange(false);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Project creation error:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to create project",
        variant: "destructive",
      });
    }
  }

  function getProjectLimit(planId: string): number {
    switch (planId) {
      case "price_1234567890":
        return 1;
      case "price_0987654321":
        return 5;
      case "price_1357924680":
        return Infinity;
      default:
        return 0;
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl w-11/12 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Project</DialogTitle>
        </DialogHeader>
        <form onSubmit={createProject} className="space-y-4">
          <div>
            <Label htmlFor="name">Project Name</Label>
            <Input
              id="name"
              value={newProject.name}
              onChange={(e) =>
                setNewProject({ ...newProject, name: e.target.value })
              }
              required
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={newProject.description}
              onChange={(e) =>
                setNewProject({ ...newProject, description: e.target.value })
              }
            />
          </div>
          <div>
            <Label htmlFor="status">Status</Label>
            <Select
              value={newProject.status}
              onValueChange={(value) =>
                setNewProject({ ...newProject, status: value })
              }
            >
              <SelectTrigger id="status">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Planning">Planning</SelectItem>
                <SelectItem value="In Progress">In Progress</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
                <SelectItem value="On Hold">On Hold</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="start_date">Start Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !newProject.start_date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {newProject.start_date ? (
                    format(new Date(newProject.start_date), "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={
                    newProject.start_date
                      ? new Date(newProject.start_date)
                      : undefined
                  }
                  onSelect={(date) =>
                    setNewProject({
                      ...newProject,
                      start_date: date ? format(date, "yyyy-MM-dd") : "",
                    })
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Label htmlFor="end_date">End Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !newProject.end_date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {newProject.end_date ? (
                    format(new Date(newProject.end_date), "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={
                    newProject.end_date
                      ? new Date(newProject.end_date)
                      : undefined
                  }
                  onSelect={(date) =>
                    setNewProject({
                      ...newProject,
                      end_date: date ? format(date, "yyyy-MM-dd") : "",
                    })
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Label htmlFor="client">Client</Label>
            <Input
              id="client"
              value={newProject.client}
              onChange={(e) =>
                setNewProject({ ...newProject, client: e.target.value })
              }
            />
          </div>
          <div>
            <Label htmlFor="budget">Budget</Label>
            <Input
              id="budget"
              type="number"
              value={newProject.budget}
              onChange={(e) =>
                setNewProject({
                  ...newProject,
                  budget: parseFloat(e.target.value),
                })
              }
            />
          </div>
          <div>
            <Label htmlFor="hourly_rate">Hourly Rate</Label>
            <Input
              id="hourly_rate"
              type="number"
              value={newProject.hourly_rate}
              onChange={(e) =>
                setNewProject({
                  ...newProject,
                  hourly_rate: parseFloat(e.target.value),
                })
              }
            />
          </div>
          <div>
            <Label htmlFor="estimated_hours">Estimated Hours</Label>
            <Input
              id="estimated_hours"
              type="number"
              value={newProject.estimated_hours}
              onChange={(e) =>
                setNewProject({
                  ...newProject,
                  estimated_hours: parseFloat(e.target.value),
                })
              }
            />
          </div>
          <div>
            <Label htmlFor="technologies">Technologies (comma-separated)</Label>
            <Input
              id="technologies"
              value={newProject.technologies.join(", ")}
              onChange={(e) =>
                setNewProject({
                  ...newProject,
                  technologies: e.target.value
                    .split(",")
                    .map((tech) => tech.trim()),
                })
              }
            />
          </div>
          <div>
            <Label htmlFor="progress">Progress (%)</Label>
            <Input
              id="progress"
              type="number"
              min="0"
              max="100"
              value={newProject.progress}
              onChange={(e) =>
                setNewProject({
                  ...newProject,
                  progress: parseInt(e.target.value),
                })
              }
            />
          </div>
          <div>
            <Label htmlFor="time_spent">Time Spent (hours)</Label>
            <Input
              id="time_spent"
              type="number"
              value={newProject.time_spent}
              onChange={(e) =>
                setNewProject({
                  ...newProject,
                  time_spent: parseInt(e.target.value),
                })
              }
            />
          </div>
          <div>
            <Label htmlFor="client_avatar">Client Avatar URL</Label>
            <Input
              id="client_avatar"
              type="url"
              value={newProject.client_avatar}
              onChange={(e) =>
                setNewProject({ ...newProject, client_avatar: e.target.value })
              }
            />
          </div>
          <div>
            <Label htmlFor="image">Project Image URL</Label>
            <Input
              id="image"
              type="url"
              value={newProject.image}
              onChange={(e) =>
                setNewProject({ ...newProject, image: e.target.value })
              }
              placeholder="https://example.com/your-project-image.jpg"
            />
          </div>
          <div>
            <Label htmlFor="live_link">Live Project Link</Label>
            <Input
              id="live_link"
              type="url"
              value={newProject.live_link}
              onChange={(e) =>
                setNewProject({ ...newProject, live_link: e.target.value })
              }
            />
          </div>
          <div>
            <Label htmlFor="github_link">GitHub Repository Link</Label>
            <Input
              id="github_link"
              type="url"
              value={newProject.github_link}
              onChange={(e) =>
                setNewProject({ ...newProject, github_link: e.target.value })
              }
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Create Project</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
