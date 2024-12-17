"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartPie } from "@/components/chart-pie";

const clients = [
  {
    id: 1,
    name: "Acme Corporation",
    industry: "Technology",
    projectCount: 3,
    totalRevenue: 50000,
    status: "Active",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Global Innovations",
    industry: "Healthcare",
    projectCount: 2,
    totalRevenue: 35000,
    status: "Active",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "EcoSolutions",
    industry: "Environmental",
    projectCount: 1,
    totalRevenue: 20000,
    status: "Inactive",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    company: "Acme Corporation",
    testimonial:
      "The freelance dashboard has significantly improved our project management and collaboration.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Jane Smith",
    company: "Global Innovations",
    testimonial:
      "Excellent work! The team delivered our project on time and exceeded our expectations.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Mike Johnson",
    company: "EcoSolutions",
    testimonial:
      "Great communication and professionalism throughout the entire project lifecycle.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

export default function ClientsPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hoveredClient, setHoveredClient] = useState<number | null>(null);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Clients</h1>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="flex justify-center items-center">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="list">Client List</TabsTrigger>
          <TabsTrigger value="add">Add Client</TabsTrigger>
          <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Total Clients</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{clients.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
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
              <CardHeader>
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
          </div>
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Client Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartPie />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="list">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onHoverStart={() => setHoveredClient(client.id)}
                onHoverEnd={() => setHoveredClient(null)}
              >
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage src={client.avatar} alt={client.name} />
                      <AvatarFallback>{client.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>{client.name}</CardTitle>
                      <CardDescription>{client.industry}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Projects
                        </p>
                        <p className="text-2xl font-bold">
                          {client.projectCount}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Revenue</p>
                        <p className="text-2xl font-bold">
                          ${client.totalRevenue.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <Badge
                        variant={
                          client.status === "Active" ? "default" : "secondary"
                        }
                      >
                        {client.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="add">
          <Card>
            <CardHeader>
              <CardTitle>Add New Client</CardTitle>
              <CardDescription>
                Enter the details of the new client below.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="client-name">Client Name</Label>
                    <Input id="client-name" placeholder="Enter client name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Input id="industry" placeholder="Enter industry" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="Enter phone number" />
                  </div>
                </div>
                <Button type="submit">Add Client</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="testimonials">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.company}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="italic">
                      &ldquo;{testimonial.testimonial}&rdquo;
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
