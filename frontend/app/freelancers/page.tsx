"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { FaYoutube, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import {
  Mail,
  Phone,
  Globe,
  MapPin,
  Calendar,
  DollarSign,
  Star,
  Briefcase,
} from "lucide-react";

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface Freelancer {
  id: number;
  name: string;
  avatar: string;
  role: string;
  badges: string[];
  projectsCompleted: number;
  totalRevenue: number;
  rating: number;
  email: string;
  phone: string;
  website: string;
  location: string;
  since: string;
  lastProject: string;
  quote: string;
  youtubeChannel?: string;
  twitterHandle?: string;
  linkedinProfile?: string;
  githubProfile?: string;
  skills: string[];
  projects: Project[];
}

const freelancers: Freelancer[] = [
  {
    id: 1,
    name: "Alice Johnson",
    avatar: "/placeholder.svg?height=128&width=128&text=AJ",
    role: "Full Stack Developer",
    badges: ["Pro", "Top Rated"],
    projectsCompleted: 45,
    totalRevenue: 120000,
    rating: 4.9,
    email: "alice@example.com",
    phone: "+1 (555) 123-4567",
    website: "https://alicejohnson.dev",
    location: "San Francisco, CA",
    since: "2020-01-15",
    lastProject: "2023-11-30",
    quote: "Turning coffee into code since 2010.",
    youtubeChannel: "https://youtube.com/alicecodes",
    twitterHandle: "https://twitter.com/alicecodes",
    linkedinProfile: "https://linkedin.com/in/alicejohnson",
    githubProfile: "https://github.com/alicejohnson",
    skills: ["React", "Node.js", "TypeScript", "GraphQL", "AWS"],
    projects: [
      {
        id: 1,
        name: "E-commerce Platform",
        description:
          "Built a scalable e-commerce platform using React and Node.js",
        image: "/placeholder.svg?height=200&width=300&text=E-commerce",
      },
      {
        id: 2,
        name: "Social Media Dashboard",
        description: "Developed a real-time social media analytics dashboard",
        image: "/placeholder.svg?height=200&width=300&text=Dashboard",
      },
    ],
  },
  {
    id: 2,
    name: "Bob Smith",
    avatar: "/placeholder.svg?height=128&width=128&text=BS",
    role: "UI/UX Designer",
    badges: ["Rising Talent"],
    projectsCompleted: 28,
    totalRevenue: 75000,
    rating: 4.7,
    email: "bob@example.com",
    phone: "+1 (555) 987-6543",
    website: "https://bobsmithdesign.com",
    location: "New York, NY",
    since: "2021-03-01",
    lastProject: "2023-10-15",
    quote:
      "Design is not just what it looks like and feels like. Design is how it works.",
    twitterHandle: "https://twitter.com/bobdesigns",
    linkedinProfile: "https://linkedin.com/in/bobsmith",
    skills: ["Figma", "Adobe XD", "Sketch", "User Research", "Prototyping"],
    projects: [
      {
        id: 1,
        name: "Mobile Banking App",
        description:
          "Redesigned a mobile banking app for improved user experience",
        image: "/placeholder.svg?height=200&width=300&text=Banking+App",
      },
      {
        id: 2,
        name: "Travel Booking Website",
        description:
          "Created an intuitive design for a travel booking platform",
        image: "/placeholder.svg?height=200&width=300&text=Travel+Website",
      },
    ],
  },
  {
    id: 3,
    name: "Carol Williams",
    avatar: "/placeholder.svg?height=128&width=128&text=CW",
    role: "Mobile App Developer",
    badges: ["Pro", "Beta"],
    projectsCompleted: 37,
    totalRevenue: 95000,
    rating: 4.8,
    email: "carol@example.com",
    phone: "+1 (555) 246-8135",
    website: "https://carolwilliams.dev",
    location: "Seattle, WA",
    since: "2019-07-10",
    lastProject: "2023-12-01",
    quote: "Mobile first, always.",
    youtubeChannel: "https://youtube.com/carolcodes",
    githubProfile: "https://github.com/carolwilliams",
    skills: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase"],
    projects: [
      {
        id: 1,
        name: "Fitness Tracking App",
        description:
          "Developed a cross-platform fitness tracking app using React Native",
        image: "/placeholder.svg?height=200&width=300&text=Fitness+App",
      },
      {
        id: 2,
        name: "AR Shopping Experience",
        description: "Created an augmented reality shopping app for iOS",
        image: "/placeholder.svg?height=200&width=300&text=AR+Shopping",
      },
    ],
  },
  {
    id: 4,
    name: "David Lee",
    avatar: "/placeholder.svg?height=128&width=128&text=DL",
    role: "Data Scientist",
    badges: ["Expert", "Mentor"],
    projectsCompleted: 52,
    totalRevenue: 150000,
    rating: 4.9,
    email: "david@example.com",
    phone: "+1 (555) 369-2580",
    website: "https://davidleedata.com",
    location: "Austin, TX",
    since: "2018-05-20",
    lastProject: "2023-11-15",
    quote: "In God we trust. All others must bring data.",
    youtubeChannel: "https://youtube.com/davidleedata",
    twitterHandle: "https://twitter.com/davidleedata",
    linkedinProfile: "https://linkedin.com/in/davidlee",
    githubProfile: "https://github.com/davidlee",
    skills: ["Python", "R", "Machine Learning", "Deep Learning", "Big Data"],
    projects: [
      {
        id: 1,
        name: "Predictive Maintenance System",
        description:
          "Developed an AI-powered predictive maintenance system for manufacturing",
        image:
          "/placeholder.svg?height=200&width=300&text=Predictive+Maintenance",
      },
      {
        id: 2,
        name: "Customer Churn Prediction",
        description:
          "Built a machine learning model to predict and prevent customer churn",
        image: "/placeholder.svg?height=200&width=300&text=Churn+Prediction",
      },
    ],
  },
];

export default function FreelancersPage() {
  const [selectedFreelancer, setSelectedFreelancer] =
    useState<Freelancer | null>(null);

  return (
    <div className="container mx-auto py-10">
      <motion.h1
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Top Freelancers
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-6">
          <AnimatePresence>
            {freelancers.map((freelancer) => (
              <motion.div
                key={freelancer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className={`cursor-pointer transition-all ${
                    selectedFreelancer?.id === freelancer.id
                      ? "ring-2 ring-primary"
                      : ""
                  }`}
                  onClick={() => setSelectedFreelancer(freelancer)}
                >
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage
                        src={freelancer.avatar}
                        alt={freelancer.name}
                      />
                      <AvatarFallback>{freelancer.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>{freelancer.name}</CardTitle>
                      <CardDescription>{freelancer.role}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {freelancer.badges.map((badge) => (
                        <Badge key={badge} variant="secondary">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Projects:</span>
                        <span className="font-bold">
                          {freelancer.projectsCompleted}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Revenue:</span>
                        <span className="font-bold">
                          ${freelancer.totalRevenue.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Rating:</span>
                        <span className="font-bold">
                          {freelancer.rating}/5.0
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="md:col-span-2">
          <AnimatePresence mode="wait">
            {selectedFreelancer && (
              <motion.div
                key={selectedFreelancer.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar className="h-20 w-20">
                        <AvatarImage
                          src={selectedFreelancer.avatar}
                          alt={selectedFreelancer.name}
                        />
                        <AvatarFallback>
                          {selectedFreelancer.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-2xl">
                          {selectedFreelancer.name}
                        </CardTitle>
                        <CardDescription>
                          {selectedFreelancer.role}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {selectedFreelancer.badges.map((badge) => (
                        <Badge key={badge} variant="secondary">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    <blockquote className="italic border-l-4 border-primary pl-4 py-2">
                      &quot;{selectedFreelancer.quote}&quot;
                    </blockquote>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span>{selectedFreelancer.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>{selectedFreelancer.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <a
                          href={selectedFreelancer.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {selectedFreelancer.website}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{selectedFreelancer.location}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>
                          Member since:{" "}
                          {new Date(
                            selectedFreelancer.since
                          ).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-muted-foreground" />
                        <span>
                          Last project:{" "}
                          {new Date(
                            selectedFreelancer.lastProject
                          ).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span>
                          Total revenue: $
                          {selectedFreelancer.totalRevenue.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-muted-foreground" />
                        <span>Rating: {selectedFreelancer.rating}/5</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Skills</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {selectedFreelancer.skills.map((skill) => (
                          <Badge key={skill} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Projects</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedFreelancer.projects.map((project) => (
                          <Card key={project.id}>
                            <CardHeader>
                              <CardTitle className="text-md">
                                {project.name}
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <Image
                                src={project.image}
                                alt={project.name}
                                width={300}
                                height={200}
                                className="rounded-md mb-2"
                              />
                              <p className="text-sm text-muted-foreground">
                                {project.description}
                              </p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Social Media
                      </h3>
                      <div className="flex gap-4">
                        {selectedFreelancer.youtubeChannel && (
                          <a
                            href={selectedFreelancer.youtubeChannel}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaYoutube className="w-6 h-6 text-red-600" />
                          </a>
                        )}
                        {selectedFreelancer.twitterHandle && (
                          <a
                            href={selectedFreelancer.twitterHandle}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaTwitter className="w-6 h-6 text-blue-400" />
                          </a>
                        )}
                        {selectedFreelancer.linkedinProfile && (
                          <a
                            href={selectedFreelancer.linkedinProfile}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaLinkedin className="w-6 h-6 text-blue-700" />
                          </a>
                        )}
                        {selectedFreelancer.githubProfile && (
                          <a
                            href={selectedFreelancer.githubProfile}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaGithub className="w-6 h-6 text-gray-800" />
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
