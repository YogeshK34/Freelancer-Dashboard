"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Clock, DollarSign, Tag } from "lucide-react";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
      avatar: "/placeholder.svg?height=40&width=40",
    },
    team: [
      { name: "John Doe", avatar: "/placeholder.svg?height=40&width=40" },
      { name: "Jane Smith", avatar: "/placeholder.svg?height=40&width=40" },
    ],
    image: "/placeholder.svg?height=200&width=300",
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
      avatar: "/placeholder.svg?height=40&width=40",
    },
    team: [
      { name: "Alice Johnson", avatar: "/placeholder.svg?height=40&width=40" },
      { name: "Bob Williams", avatar: "/placeholder.svg?height=40&width=40" },
    ],
    image: "/placeholder.svg?height=200&width=300",
    liveLink: "https://example-taskmanager.com",
    githubLink: "https://github.com/username/task-manager",
  },
];

export default function ProjectsPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Projects</h1>
        <Button>+ New Project</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onHoverStart={() => setHoveredProject(project.id)}
            onHoverEnd={() => setHoveredProject(null)}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  {project.name}
                  <Badge variant="outline">{`${project.progress}%`}</Badge>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <Image
                  src={project.image}
                  alt={project.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                  width={120}
                  height={120}
                />
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
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage
                      src={project.client.avatar}
                      alt={project.client.name}
                    />
                    <AvatarFallback>{project.client.name[0]}</AvatarFallback>
                  </Avatar>
                  <span>{project.client.name}</span>
                </div>
                <div className="flex -space-x-2">
                  {project.team.map((member, index) => (
                    <Avatar key={index} className="border-2 border-background">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
