"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const integrations = [
  {
    name: "Slack",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-12 h-12"
      >
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
      </svg>
    ),
  },
  {
    name: "Trello",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-12 h-12"
      >
        <path d="M21 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.3 3 3 3h18c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zM10.44 18.18c0 .76-.62 1.38-1.38 1.38H4.56c-.76 0-1.38-.62-1.38-1.38V4.56c0-.76.62-1.38 1.38-1.38h4.5c.76 0 1.38.62 1.38 1.38v13.62zm10.38-6c0 .76-.62 1.38-1.38 1.38h-4.5c-.76 0-1.38-.62-1.38-1.38V4.56c0-.76.62-1.38 1.38-1.38h4.5c.76 0 1.38.62 1.38 1.38v7.62z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-12 h-12"
      >
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "Asana",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-12 h-12"
      >
        <path d="M18.78 12.653c2.75 0 4.972 2.221 4.972 4.97 0 2.748-2.221 4.97-4.972 4.97a4.971 4.971 0 01-4.97-4.97c0-2.749 2.22-4.97 4.97-4.97zm-13.556 0c2.749 0 4.97 2.221 4.97 4.97 0 2.748-2.221 4.97-4.97 4.97a4.971 4.971 0 01-4.97-4.97c0-2.749 2.22-4.97 4.97-4.97zm6.778-11.3c2.749 0 4.97 2.22 4.97 4.97 0 2.748-2.221 4.97-4.97 4.97a4.971 4.971 0 01-4.97-4.97c0-2.75 2.22-4.97 4.97-4.97z" />
      </svg>
    ),
  },
  {
    name: "Dropbox",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-12 h-12"
      >
        <path d="M12 14.316l7.454-4.704-4.746-3.097L12 3.818l-2.708 2.697L4.546 9.612 12 14.316zm0 1.523L4.546 11.135v3.097l7.454 4.705 7.454-4.705v-3.097L12 15.839z" />
      </svg>
    ),
  },
  {
    name: "Google Drive",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-12 h-12"
      >
        <path d="M1.8 20.25l3.15-5.4h17.25l-3.15 5.4H1.8zM12 3.9l5.4 9.45H6.6L12 3.9zm1.8 0h7.2l-5.4 9.45-1.8-3.15 3.6-6.3z" />
      </svg>
    ),
  },
  {
    name: "Zoom",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-12 h-12"
      >
        <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-6.219-3.735c-1.863-1.677-4.282-2.677-6.781-2.677-2.5 0-4.919 1-6.781 2.677-.307.277-.307.747 0 1.024 1.862 1.677 4.281 2.677 6.781 2.677 2.499 0 4.918-1 6.781-2.677.307-.277.307-.747 0-1.024zm-6.781 1.677c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2z" />
      </svg>
    ),
  },
  {
    name: "Stripe",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-12 h-12"
      >
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" />
      </svg>
    ),
  },
];

export function IntegrationSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Seamless Integrations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect FreelancePro with your favorite tools and services to
            streamline your workflow.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="mb-4 text-primary">{integration.logo}</div>
                  <h3 className="text-lg font-semibold">{integration.name}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
