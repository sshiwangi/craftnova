"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useUserStore } from "@/store/useUserStore";
import { userService } from "@/services/api/user.service";
import { Loader2, Image as ImageIcon, Clock, Star } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  const { data: session } = useSession();
  const { user, setUser } = useUserStore();

  // Loading state
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const syncUser = async () => {
      if (session?.user) {
        try {
          setIsLoading(true);
          const syncedUser = await userService.syncUser({
            id: session.user.id,
            email: session.user.email!,
            name: session.user.name,
            imageUrl: `https://lh3.googleusercontent.com/a/${session.user.id}`,
          });

          setUser(syncedUser);
        } catch (error) {
          console.error("Error syncing user:", error);
          setError("Failed to sync user data");
        } finally {
          setIsLoading(false);
        }
      }
    };

    syncUser();
  }, [session, setUser]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 text-primary-800 animate-spin" />
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-600 p-4">Error: {error}</div>;
  }

  if (!user) {
    return (
      <div className="text-center text-primary-700 p-4">No user data found</div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary-800 mb-2">
          Welcome back, {user.name}!
        </h1>
        <p className="text-primary-700">
          Here's what's happening with your designs
        </p>
      </div>

      {/* Recent Activity or Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-primary-800 mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/dashboard/new-design"
            className="flex items-center gap-3 p-4 rounded-lg border border-primary-100 hover:bg-primary-50 transition-colors"
          >
            <div className="bg-lightgreen/10 p-2 rounded-lg">
              <ImageIcon className="w-5 h-5 text-lightgreen" />
            </div>
            <div>
              <h3 className="font-medium text-primary-800">
                Create New Design
              </h3>
              <p className="text-sm text-primary-700">
                Start a new design project
              </p>
            </div>
          </Link>

          <Link
            href="/dashboard/designs"
            className="flex items-center gap-3 p-4 rounded-lg border border-primary-100 hover:bg-primary-50 transition-colors"
          >
            <div className="bg-saffron/10 p-2 rounded-lg">
              <Clock className="w-5 h-5 text-saffron" />
            </div>
            <div>
              <h3 className="font-medium text-primary-800">View All Designs</h3>
              <p className="text-sm text-primary-700">
                Browse your design history
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
