/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, Clock, DollarSign } from "lucide-react";
import Image from "next/image";

interface Project {
  id: string;
  name: string;
  description: string;
  status: string;
  start_date: string;
  end_date: string | null;
  client: string;
  budget: number;
  hourly_rate: number;
  estimated_hours: number;
  technologies: string[];
  progress: number;
  time_spent: number;
  image: string;
}

interface UserProjectsProps {
  userId: string;
}

export function UserProjects({ userId }: UserProjectsProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeTab, setActiveTab] = useState<string>("all");
  const { toast } = useToast();

  useEffect(() => {
    fetchProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  async function fetchProjects() {
    try {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

      if (error) throw error;

      setProjects(data || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch projects",
        variant: "destructive",
      });
    }
  }

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter(
          (project) => project.status.toLowerCase() === activeTab
        );

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Projects</CardTitle>
        <CardDescription>Overview of your freelance projects</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue="all"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="on hold">On Hold</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-4">
            <ProjectGrid projects={filteredProjects} />
          </TabsContent>
          <TabsContent value="active" className="mt-4">
            <ProjectGrid projects={filteredProjects} />
          </TabsContent>
          <TabsContent value="completed" className="mt-4">
            <ProjectGrid projects={filteredProjects} />
          </TabsContent>
          <TabsContent value="on hold" className="mt-4">
            <ProjectGrid projects={filteredProjects} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full flex flex-col">
        <CardHeader className="relative p-0">
          <Image
            src={
              project.image ||
              "/placeholder.svg?height=100&width=200&text=Project"
            }
            alt={project.name}
            width={200}
            height={100}
            className="w-full h-32 object-cover rounded-t-lg"
          />
          <Badge
            className="absolute top-2 right-2"
            variant={
              project.status.toLowerCase() === "completed"
                ? "default"
                : "secondary"
            }
          >
            {project.status}
          </Badge>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-between p-4">
          <div>
            <CardTitle className="text-lg mb-2">{project.name}</CardTitle>
            <CardDescription className="text-sm mb-4 line-clamp-2">
              {project.description}
            </CardDescription>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <Badge key={index} variant="outline">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 3 && (
                <Badge variant="outline">
                  +{project.technologies.length - 3}
                </Badge>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(project.start_date).toLocaleDateString()}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {project.time_spent}h
              </span>
              <span className="flex items-center">
                <DollarSign className="w-4 h-4 mr-1" />
                {project.budget}
              </span>
            </div>
            <div className="space-y-1">
              <div className="text-sm font-medium">Progress</div>
              <Progress value={project.progress} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
