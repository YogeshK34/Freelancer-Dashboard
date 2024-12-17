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
import { ChartBar } from "@/components/chart-bar";

interface Freelancer {
  id: number;
  name: string;
  avatar: string;
  role: string;
  badges: string[];
  projectsCompleted: number;
  totalRevenue: number;
  rating: number;
}

const freelancers: Freelancer[] = [
  {
    id: 1,
    name: "Alice Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Full Stack Developer",
    badges: ["Pro", "Top Rated"],
    projectsCompleted: 45,
    totalRevenue: 120000,
    rating: 4.9,
  },
  {
    id: 2,
    name: "Bob Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "UI/UX Designer",
    badges: ["Rising Talent"],
    projectsCompleted: 28,
    totalRevenue: 75000,
    rating: 4.7,
  },
  {
    id: 3,
    name: "Carol Williams",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Mobile App Developer",
    badges: ["Pro", "Beta"],
    projectsCompleted: 37,
    totalRevenue: 95000,
    rating: 4.8,
  },
];

export default function FreelancersPage() {
  const [selectedFreelancer, setSelectedFreelancer] =
    useState<Freelancer | null>(null);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Top Freelancers</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {freelancers.map((freelancer) => (
          <motion.div
            key={freelancer.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card
              className="cursor-pointer h-full"
              onClick={() => setSelectedFreelancer(freelancer)}
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarImage src={freelancer.avatar} alt={freelancer.name} />
                  <AvatarFallback>{freelancer.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{freelancer.name}</CardTitle>
                  <CardDescription>{freelancer.role}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {freelancer.badges.map((badge) => (
                      <Badge key={badge} variant="secondary">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Projects Completed:</span>
                      <span className="font-bold">
                        {freelancer.projectsCompleted}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Revenue:</span>
                      <span className="font-bold">
                        ${freelancer.totalRevenue.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rating:</span>
                      <span className="font-bold">{freelancer.rating}/5.0</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      {selectedFreelancer && (
        <Card className="mt-8 h-full">
          <CardHeader>
            <CardTitle>{selectedFreelancer.name} - Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Freelancer Details
                </h3>
                <p>
                  <strong>Role:</strong> {selectedFreelancer.role}
                </p>
                <p>
                  <strong>Projects Completed:</strong>{" "}
                  {selectedFreelancer.projectsCompleted}
                </p>
                <p>
                  <strong>Total Revenue:</strong> $
                  {selectedFreelancer.totalRevenue.toLocaleString()}
                </p>
                <p>
                  <strong>Rating:</strong> {selectedFreelancer.rating}/5.0
                </p>
                <div className="mt-4">
                  <strong>Badges:</strong>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedFreelancer.badges.map((badge) => (
                      <Badge key={badge} variant="secondary">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Revenue Breakdown
                </h3>
                <ChartBar />
              </div>
            </div>
            <Button
              className="mt-6"
              onClick={() => setSelectedFreelancer(null)}
            >
              Close Profile
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
