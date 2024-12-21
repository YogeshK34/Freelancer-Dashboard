/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ExternalLink,
  Github,
  Clock,
  DollarSign,
  Tag,
  PlusCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";
import { ProjectForm } from "@/components/ProjectForm";

interface Project {
  id: string;
  user_id: string;
  name: string;
  description?: string;
  status: string;
  start_date: string;
  end_date: string | null;
  client: string;
  budget: number;
  hourly_rate: number;
  estimated_hours: number;
  created_at: string;
  technologies?: string[];
  progress?: number;
  time_spent?: number;
  client_avatar?: string;
  team?: { name: string; avatar: string }[];
  image?: string;
  live_link?: string;
  github_link?: string;
}

const predefinedProjects: Project[] = [
  {
    id: "pre-1",
    user_id: "system",
    name: "E-commerce Platform",
    description:
      "A fully-featured online store with product management, cart, and checkout functionality.",
    status: "Completed",
    start_date: "2023-01-15",
    end_date: "2023-04-30",
    client: "TechRetail Inc.",
    budget: 15000,
    hourly_rate: 75,
    estimated_hours: 200,
    created_at: "2023-01-10",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    progress: 100,
    time_spent: 210,
    client_avatar: "/avatar5.jpg?height=50&width=50&text=TR",
    team: [
      { name: "Alice", avatar: "/avatar.jpg?height=40&width=40&text=A" },
      { name: "Bob", avatar: "/avatar1.jpg?height=40&width=40&text=B" },
    ],
    image: "/projectimage3.png",
    live_link: "https://example-ecommerce.com",
    github_link: "https://github.com/example/ecommerce-platform",
  },
  {
    id: "pre-2",
    user_id: "system",
    name: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team features.",
    status: "In Progress",
    start_date: "2023-05-01",
    end_date: null,
    client: "ProductiveCo",
    budget: 10000,
    hourly_rate: 70,
    estimated_hours: 150,
    created_at: "2023-04-25",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    progress: 60,
    time_spent: 90,
    client_avatar: "/avatar4.jpg?height=50&width=50&text=PC",
    team: [
      { name: "Charlie", avatar: "/avatar2.jpg?height=40&width=40&text=C" },
      { name: "Diana", avatar: "/avatar3.jpg?height=40&width=40&text=D" },
    ],
    image: "/projectimage1.jpg?height=300&width=400&text=Task+Management+App",
    live_link: "https://example-taskmanager.com",
    github_link: "https://github.com/example/task-management-app",
  },
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState("all");
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      fetchProjects();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  async function fetchProjects() {
    try {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("user_id", user?.id)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setProjects([...predefinedProjects, ...(data || [])]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch projects",
        variant: "destructive",
      });
    }
  }

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.technologies?.includes(filter);
  });

  const uniqueTechnologies = Array.from(
    new Set(projects.flatMap((project) => project.technologies || []))
  );

  return (
    <ProtectedRoute>
      <div className="container mx-auto py-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-6"
        >
          <h1 className="text-3xl font-bold">Projects</h1>
          <Button onClick={() => setShowForm(true)}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Your Project
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          <Select onValueChange={setFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by technology" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Technologies</SelectItem>
              {uniqueTechnologies.map((tech) => (
                <SelectItem key={tech} value={tech}>
                  {tech}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                layout
              >
                <Card className="h-full flex flex-col overflow-hidden">
                  <CardHeader className="relative p-0">
                    <Image
                      src={
                        project.image ||
                        "/placeholder.svg?height=300&width=400&text=Project"
                      }
                      alt={project.name}
                      className="w-full h-48 sm:h-64 object-cover rounded-t-lg"
                      width={400}
                      height={300}
                      quality={100}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <Button
                        variant="secondary"
                        onClick={() => setSelectedProject(project)}
                      >
                        View Details
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow p-4">
                    <CardTitle className="flex justify-between items-center mb-2">
                      {project.name}
                      <Badge variant="outline">{`${
                        project.progress || 0
                      }%`}</Badge>
                    </CardTitle>
                    <CardDescription className="mb-4">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies?.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
                        <span>Time Spent: {project.time_spent || 0} hours</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="mr-2 h-4 w-4" />
                        <span>Budget: ${project.budget.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center">
                        <Tag className="mr-2 h-4 w-4" />
                        <span>Due Date: {project.end_date || "Not set"}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center p-4">
                    <div className="flex items-center space-x-2">
                      <Avatar>
                        <AvatarImage
                          src={project.client_avatar}
                          alt={project.client}
                        />
                        <AvatarFallback>{project.client[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{project.client}</span>
                    </div>
                    <div className="flex -space-x-2">
                      {project.team?.map((member, index) => (
                        <Avatar
                          key={index}
                          className="border-2 border-background"
                        >
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback>{member.name[0]}</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent className="max-w-3xl w-11/12 max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{selectedProject?.name}</DialogTitle>
              <DialogDescription>Project Details</DialogDescription>
            </DialogHeader>
            {selectedProject && (
              <div className="mt-4">
                <Image
                  src={
                    selectedProject.image ||
                    "/placeholder.svg?height=300&width=400&text=Project"
                  }
                  alt={selectedProject.name}
                  className="w-full h-40 sm:h-64 object-cover rounded-lg mb-4"
                  width={400}
                  height={300}
                  quality={100}
                />
                <p className="text-lg mb-4">{selectedProject.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h3 className="font-semibold">Technologies</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedProject.technologies?.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Progress</h3>
                    <Progress
                      value={selectedProject.progress}
                      className="mt-2"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h3 className="font-semibold">Budget</h3>
                    <p>${selectedProject.budget.toLocaleString()}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Time Spent</h3>
                    <p>{selectedProject.time_spent || 0} hours</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-6">
                  {selectedProject.live_link && (
                    <Button asChild variant="outline">
                      <a
                        href={selectedProject.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {selectedProject.github_link && (
                    <Button asChild variant="outline">
                      <a
                        href={selectedProject.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        <ProjectForm
          open={showForm}
          onOpenChange={setShowForm}
          onProjectCreated={(newProject) => {
            setProjects([newProject, ...projects]);
            setShowForm(false);
          }}
        />
      </div>
    </ProtectedRoute>
  );
}
