import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sidebar } from "@/components/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/AuthContext";

import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FreelancePro",
  description: "Manage your freelance business with ease",
  applicationName: "FreelancePro",
  authors: [{ name: "Yogesh Khutwad" }],
  keywords: ["freelance", "management", "dashboard", "projects", "clients"],
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="flex h-screen overflow-hidden bg-background">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
              <main className="flex-1 overflow-y-auto p-4 md:p-6 pt-16 md:pt-6">
                {children}
              </main>
              <footer className="border-t p-4 text-center">
                <p className="text-sm text-muted-foreground">
                  © 2024 Freelance Dashboard. All rights reserved.
                </p>
              </footer>
            </div>
          </div>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
