"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Mail,
  Phone,
  Globe,
  MapPin,
  Calendar,
  DollarSign,
  Activity,
  Star,
  Users,
  Briefcase,
  TrendingUp,
  Building,
} from "lucide-react";
import Image from "next/image";
import { ClientAreaChart } from "@/components/clients/client-area-chart";
import { ChartThemeProvider } from "@/components/dashboard/chart-theme-provider";
import { AnimatedTestimonialsDemo } from "@/components/testimonial-section";
import { ThemeSelector } from "@/components/dashboard/theme-selector";
import { Progress } from "@/components/ui/progress";
const clients = [
  {
    id: 1,
    name: "Acme Corporation",
    industry: "Technology",
    projectCount: 3,
    totalRevenue: 50000,
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    logo: "/logo1.png",
    email: "contact@acme.com",
    phone: "+1 (555) 123-4567",
    website: "https://www.acme.com",
    location: "San Francisco, CA",
    since: "2022-03-15",
    lastProject: "2023-11-30",
    rating: 4.8,
    projects: [
      {
        name: "E-commerce Platform",
        description: "Built a scalable e-commerce solution",
        image: "/project1.jpeg",
        value: 25000,
      },
      {
        name: "Mobile App",
        description: "Developed iOS and Android apps",
        image: "/project2.png",
        value: 15000,
      },
      {
        name: "Cloud Migration",
        description: "AWS infrastructure setup",
        image: "/project3.jpeg",
        value: 10000,
      },
    ],
  },
  {
    id: 2,
    name: "Beta Solutions",
    industry: "Healthcare",
    projectCount: 2,
    totalRevenue: 32000,
    status: "Inactive",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    logo: "/logo2.jpg",
    email: "info@beta-solutions.com",
    phone: "+1 (555) 987-6543",
    website: "https://www.beta-solutions.com",
    location: "Boston, MA",
    since: "2021-07-22",
    lastProject: "2023-08-14",
    rating: 4.3,
    projects: [
      {
        name: "Patient Management System",
        description: "Developed a CRM for patient management",
        image: "/project4.jpg",
        value: 20000,
      },
      {
        name: "Telehealth App",
        description: "Designed a platform for remote healthcare",
        image: "/project5.jpg",
        value: 12000,
      },
    ],
  },
  {
    id: 3,
    name: "Gamma Innovators",
    industry: "Finance",
    projectCount: 4,
    totalRevenue: 85000,
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    logo: "/logo3.jpg",
    email: "contact@gamma-innovators.com",
    phone: "+1 (555) 222-3344",
    website: "https://www.gamma-innovators.com",
    location: "New York, NY",
    since: "2020-02-10",
    lastProject: "2023-12-05",
    rating: 4.9,
    projects: [
      {
        name: "Trading Platform",
        description: "Built a high-frequency trading application",
        image: "/project6.png",
        value: 50000,
      },
      {
        name: "Risk Analysis Dashboard",
        description: "Created tools for financial risk assessment",
        image: "/project7.jpeg",
        value: 20000,
      },
      {
        name: "Mobile Banking App",
        description: "Developed a seamless banking experience",
        image: "/project8.jpeg",
        value: 10000,
      },
      {
        name: "Blockchain Integration",
        description: "Integrated blockchain for secure transactions",
        image: "/project9.jpg",
        value: 5000,
      },
    ],
  },
];

export default function ClientsPage() {
  const [selectedClient, setSelectedClient] = useState(clients[0]);

  return (
    <ChartThemeProvider>
      <div className="container mx-auto py-10">
        <div className="flex justify-between items-center mb-6">
          <motion.h1
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Clients
          </motion.h1>
          <ThemeSelector />
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="flex justify-center items-center">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="list">Client List</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg" />
                <CardHeader className="relative">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Total Clients</CardTitle>
                      <CardDescription>Active accounts</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <div className="flex items-baseline gap-2">
                    <div className="text-4xl font-bold">{clients.length}</div>
                    <div className="flex items-center text-sm text-green-500">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      +12.5%
                    </div>
                  </div>
                  <Progress value={65} className="mt-4" />
                  <p className="text-sm text-muted-foreground mt-2">
                    65% to yearly goal
                  </p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-lg" />
                <CardHeader className="relative">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <Briefcase className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <CardTitle>Active Projects</CardTitle>
                      <CardDescription>In progress</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <div className="flex items-baseline gap-2">
                    <div className="text-4xl font-bold">
                      {clients.reduce(
                        (sum, client) => sum + client.projectCount,
                        0
                      )}
                    </div>
                    <div className="flex items-center text-sm text-green-500">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      +8.2%
                    </div>
                  </div>
                  <Progress value={78} className="mt-4" />
                  <p className="text-sm text-muted-foreground mt-2">
                    78% completion rate
                  </p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden bg-white">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-lg" />
                <CardHeader className="relative">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-500/10 rounded-lg">
                      <DollarSign className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <CardTitle>Total Revenue</CardTitle>
                      <CardDescription>Year to date</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <div className="flex items-baseline gap-2">
                    <div className="text-4xl font-bold">
                      $
                      {clients
                        .reduce((sum, client) => sum + client.totalRevenue, 0)
                        .toLocaleString()}
                    </div>
                    <div className="flex items-center text-sm text-green-500">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      +15.3%
                    </div>
                  </div>
                  <Progress value={85} className="mt-4" />
                  <p className="text-sm text-muted-foreground mt-2">
                    85% of yearly target
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ClientAreaChart />
            </motion.div>
          </TabsContent>

          <TabsContent value="list">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1 space-y-6">
                <AnimatePresence>
                  {clients.map((client) => (
                    <motion.div
                      key={client.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card
                        className={`cursor-pointer transition-all hover:shadow-md ${
                          selectedClient.id === client.id
                            ? "ring-2 ring-primary"
                            : ""
                        }`}
                        onClick={() => setSelectedClient(client)}
                      >
                        <CardHeader className="flex flex-row items-center gap-4">
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden border">
                            <Image
                              src={client.logo}
                              alt={`${client.name} logo`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <CardTitle>{client.name}</CardTitle>
                            <CardDescription className="flex items-center gap-2">
                              <Building className="w-4 h-4" />
                              {client.industry}
                            </CardDescription>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="flex justify-between items-center">
                            <Badge
                              variant={
                                client.status === "Active"
                                  ? "default"
                                  : "secondary"
                              }
                              className="capitalize"
                            >
                              {client.status}
                            </Badge>
                            <span className="text-sm text-muted-foreground">
                              {client.projectCount} project
                              {client.projectCount !== 1 ? "s" : ""}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="lg:col-span-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedClient.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="relative w-24 h-24 rounded-xl overflow-hidden border">
                            <Image
                              src={selectedClient.logo}
                              alt={`${selectedClient.name} logo`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <CardTitle className="text-2xl">
                              {selectedClient.name}
                            </CardTitle>
                            <CardDescription className="flex items-center gap-2">
                              <Building className="w-4 h-4" />
                              {selectedClient.industry}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <span>{selectedClient.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span>{selectedClient.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Globe className="h-4 w-4 text-muted-foreground" />
                            <a
                              href={selectedClient.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              {selectedClient.website}
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>{selectedClient.location}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>
                              Client since:{" "}
                              {new Date(
                                selectedClient.since
                              ).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Activity className="h-4 w-4 text-muted-foreground" />
                            <span>
                              Last project:{" "}
                              {new Date(
                                selectedClient.lastProject
                              ).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                            <span>
                              Total revenue: $
                              {selectedClient.totalRevenue.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-muted-foreground" />
                            <span>Rating: {selectedClient.rating}/5</span>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-4">
                            Projects
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {selectedClient.projects.map((project, index) => (
                              <Card key={index} className="overflow-hidden">
                                <div className="relative h-32 w-full">
                                  <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <CardHeader>
                                  <CardTitle className="text-sm">
                                    {project.name}
                                  </CardTitle>
                                  <CardDescription className="text-xs">
                                    {project.description}
                                  </CardDescription>
                                </CardHeader>
                                <CardContent>
                                  <p className="text-xl font-bold">
                                    ${project.value.toLocaleString()}
                                  </p>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="testimonials">
            <AnimatedTestimonialsDemo />
          </TabsContent>
        </Tabs>
      </div>
    </ChartThemeProvider>
  );
}
