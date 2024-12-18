/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Clock,
  DollarSign,
  Users,
  Tag,
  X,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with product management, cart functionality, and secure checkout.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    progress: 75,
    budget: 15000,
    timeSpent: 120,
    dueDate: "2024-08-15",
    client: {
      name: "TechCorp",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    team: [
      { name: "John Doe", avatar: "https://i.pravatar.cc/150?img=2" },
      { name: "Jane Smith", avatar: "https://i.pravatar.cc/150?img=3" },
    ],
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80",
    liveLink: "https://example-ecommerce.com",
    githubLink: "https://github.com/username/ecommerce-project",
  },
  {
    id: 2,
    name: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team features.",
    technologies: ["Vue.js", "Firebase", "Vuex"],
    progress: 40,
    budget: 8000,
    timeSpent: 80,
    dueDate: "2024-09-30",
    client: {
      name: "ProductiveCo",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    team: [
      { name: "Alice Johnson", avatar: "https://i.pravatar.cc/150?img=5" },
      { name: "Bob Williams", avatar: "https://i.pravatar.cc/150?img=6" },
    ],
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1939&q=80",
    liveLink: "https://example-taskmanager.com",
    githubLink: "https://github.com/username/task-manager",
  },
  {
    id: 3,
    name: "AI-Powered Analytics Dashboard",
    description:
      "An advanced analytics dashboard using machine learning to provide predictive insights.",
    technologies: ["Python", "TensorFlow", "React", "D3.js"],
    progress: 60,
    budget: 25000,
    timeSpent: 200,
    dueDate: "2024-11-30",
    client: {
      name: "DataViz Inc.",
      avatar: "https://i.pravatar.cc/150?img=7",
    },
    team: [
      { name: "Eva Chen", avatar: "https://i.pravatar.cc/150?img=8" },
      { name: "David Lee", avatar: "https://i.pravatar.cc/150?img=9" },
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    liveLink: "https://example-analytics.com",
    githubLink: "https://github.com/username/ai-analytics",
  },
  {
    id: 4,
    name: "Social Media Scheduler",
    description:
      "A comprehensive tool for scheduling and analyzing social media posts across multiple platforms.",
    technologies: ["React Native", "Node.js", "GraphQL", "PostgreSQL"],
    progress: 90,
    budget: 12000,
    timeSpent: 150,
    dueDate: "2024-07-15",
    client: {
      name: "SocialBoost",
      avatar: "https://i.pravatar.cc/150?img=10",
    },
    team: [
      { name: "Fiona White", avatar: "https://i.pravatar.cc/150?img=11" },
      { name: "George Brown", avatar: "https://i.pravatar.cc/150?img=12" },
    ],
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    liveLink: "https://example-socialscheduler.com",
    githubLink: "https://github.com/username/social-scheduler",
  },
];

export default function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.technologies.includes(filter);
  });

  return (
    <div className="container mx-auto py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center mb-6"
      >
        <h1 className="text-3xl font-bold">Projects</h1>
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
            <SelectItem value="React">React</SelectItem>
            <SelectItem value="Vue.js">Vue.js</SelectItem>
            <SelectItem value="Node.js">Node.js</SelectItem>
            <SelectItem value="Python">Python</SelectItem>
          </SelectContent>
        </Select>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover"
                    width={200}
                    height={200}
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
                    <Badge variant="outline">{`${project.progress}%`}</Badge>
                  </CardTitle>
                  <CardDescription className="mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      <span>Time Spent: {project.timeSpent} hours</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="mr-2 h-4 w-4" />
                      <span>Budget: ${project.budget.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Tag className="mr-2 h-4 w-4" />
                      <span>Due Date: {project.dueDate}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center p-4">
                  <div className="flex items-center space-x-2">
                    <Avatar>
                      <AvatarImage
                        src={project.client.avatar}
                        alt={project.client.name}
                      />
                      <AvatarFallback>{project.client.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{project.client.name}</span>
                  </div>
                  <div className="flex -space-x-2">
                    {project.team.map((member, index) => (
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
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedProject?.name}</DialogTitle>
            <DialogDescription>Project Details</DialogDescription>
          </DialogHeader>
          {selectedProject && (
            <div className="mt-4">
              <Image
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
                width={200}
                height={200}
              />
              <p className="text-lg mb-4">{selectedProject.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h3 className="font-semibold">Technologies</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">Progress</h3>
                  <Progress value={selectedProject.progress} className="mt-2" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h3 className="font-semibold">Budget</h3>
                  <p>${selectedProject.budget.toLocaleString()}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Time Spent</h3>
                  <p>{selectedProject.timeSpent} hours</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-6">
                <Button asChild variant="outline">
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
