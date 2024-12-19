import { ProfileChecker } from "@/components/ProfileChecker";

export default function DebugPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Debug Page</h1>
      <ProfileChecker />
    </div>
  );
}
