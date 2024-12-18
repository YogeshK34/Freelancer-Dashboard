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
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
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
} from "lucide-react";
import Image from "next/image";
import { AnimatedTestimonialsDemo } from "@/components/testimonial-section";

const clients = [
  {
    id: 1,
    name: "Acme Corporation",
    industry: "Technology",
    projectCount: 3,
    totalRevenue: 50000,
    status: "Active",
    avatar: "/placeholder.svg?height=128&width=128",
    logo: "/placeholder.svg?height=64&width=64&text=Acme",
    email: "contact@acme.com",
    phone: "+1 (555) 123-4567",
    website: "https://www.acme.com",
    location: "San Francisco, CA",
    since: "2022-03-15",
    lastProject: "2023-11-30",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Global Innovations",
    industry: "Healthcare",
    projectCount: 2,
    totalRevenue: 35000,
    status: "Active",
    avatar: "/placeholder.svg?height=128&width=128",
    logo: "/placeholder.svg?height=64&width=64&text=GI",
    email: "info@globalinnovations.com",
    phone: "+1 (555) 987-6543",
    website: "https://www.globalinnovations.com",
    location: "New York, NY",
    since: "2022-07-01",
    lastProject: "2023-10-15",
    rating: 4.5,
  },
  {
    id: 3,
    name: "EcoSolutions",
    industry: "Environmental",
    projectCount: 1,
    totalRevenue: 20000,
    status: "Inactive",
    avatar: "/placeholder.svg?height=128&width=128",
    logo: "/placeholder.svg?height=64&width=64&text=Eco",
    email: "support@ecosolutions.com",
    phone: "+1 (555) 246-8135",
    website: "https://www.ecosolutions.com",
    location: "Seattle, WA",
    since: "2023-01-10",
    lastProject: "2023-06-30",
    rating: 4.2,
  },
  {
    id: 4,
    name: "TechStart",
    industry: "Technology",
    projectCount: 4,
    totalRevenue: 75000,
    status: "Active",
    avatar: "/placeholder.svg?height=128&width=128",
    logo: "/placeholder.svg?height=64&width=64&text=Tech",
    email: "hello@techstart.io",
    phone: "+1 (555) 369-2580",
    website: "https://www.techstart.io",
    location: "Austin, TX",
    since: "2021-11-05",
    lastProject: "2023-12-01",
    rating: 4.9,
  },
  {
    id: 5,
    name: "MediCare Solutions",
    industry: "Healthcare",
    projectCount: 2,
    totalRevenue: 40000,
    status: "Active",
    avatar: "/placeholder.svg?height=128&width=128",
    logo: "/placeholder.svg?height=64&width=64&text=Medi",
    email: "contact@medicaresolutions.com",
    phone: "+1 (555) 147-2589",
    website: "https://www.medicaresolutions.com",
    location: "Boston, MA",
    since: "2022-09-20",
    lastProject: "2023-11-15",
    rating: 4.6,
  },
];

export default function ClientsPage() {
  const [selectedClient, setSelectedClient] = useState(clients[0]);

  return (
    <div className="container mx-auto py-10">
      <motion.h1
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Clients
      </motion.h1>
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
            <Card>
              <CardHeader className="flex flex-row items-center space-x-4">
                <Users className="w-8 h-8 text-primary" />
                <CardTitle>Total Clients</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{clients.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center space-x-4">
                <Briefcase className="w-8 h-8 text-primary" />
                <CardTitle>Active Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {clients.reduce(
                    (sum, client) => sum + client.projectCount,
                    0
                  )}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center space-x-4">
                <DollarSign className="w-8 h-8 text-primary" />
                <CardTitle>Total Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  $
                  {clients
                    .reduce((sum, client) => sum + client.totalRevenue, 0)
                    .toLocaleString()}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Revenue by Client</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] sm:h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={clients}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="totalRevenue" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
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
                      className={`cursor-pointer transition-all ${
                        selectedClient.id === client.id
                          ? "ring-2 ring-primary"
                          : ""
                      }`}
                      onClick={() => setSelectedClient(client)}
                    >
                      <CardHeader className="flex flex-row items-center gap-4">
                        <div className="relative w-16 h-16">
                          <Image
                            src={client.logo}
                            alt={`${client.name} logo`}
                            width={64}
                            height={64}
                            className="rounded-full object-contain"
                          />
                        </div>
                        <div>
                          <CardTitle>{client.name}</CardTitle>
                          <CardDescription>{client.industry}</CardDescription>
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
                        <div className="relative w-20 h-20">
                          <Image
                            src={selectedClient.logo}
                            alt={`${selectedClient.name} logo`}
                            width={80}
                            height={80}
                            className="rounded-full object-contain"
                          />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">
                            {selectedClient.name}
                          </CardTitle>
                          <CardDescription>
                            {selectedClient.industry}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
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
                      <div className="mt-4">
                        <h3 className="text-lg font-semibold mb-2">Projects</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                          {Array.from({
                            length: selectedClient.projectCount,
                          }).map((_, index) => (
                            <Card key={index}>
                              <CardHeader>
                                <CardTitle className="text-sm">
                                  Project {index + 1}
                                </CardTitle>
                              </CardHeader>
                              <CardContent>
                                <p className="text-2xl font-bold">
                                  $
                                  {(
                                    selectedClient.totalRevenue /
                                    selectedClient.projectCount
                                  ).toFixed(2)}
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
  );
}
