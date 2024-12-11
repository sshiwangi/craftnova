"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useUserStore } from "@/store/useUserStore";
import { Mail, Calendar } from "lucide-react";

export default function ProfilePage() {
  const { data: session } = useSession();
  const user = useUserStore((state) => state.user);

  if (!session?.user) return null;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-sm mb-6">
        <div className="p-8">
          <div className="flex items-start gap-6">
            <div className="relative">
              <Image
                src={session.user.image!}
                alt={session.user.name || "Profile"}
                width={100}
                height={100}
                className="rounded-full"
              />
              <div className="absolute bottom-0 right-0 w-5 h-5 bg-lightgreen rounded-full border-2 border-white" />
            </div>

            <div className="flex-1">
              <h1 className="text-2xl font-bold text-primary-800 mb-2">
                {session.user.name}
              </h1>
              <div className="flex items-center gap-4 text-primary-700">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {session.user.email}
                </div>
                {/* {user?.createdAt && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Member since {new Date(user.createdAt).toLocaleDateString()}
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-primary-800 mb-4">
            Account Details
          </h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-primary-700">Full Name</label>
              <div className="mt-1 text-primary-800 font-medium">
                {session.user.name}
              </div>
            </div>
            <div>
              <label className="text-sm text-primary-700">Email</label>
              <div className="mt-1 text-primary-800 font-medium">
                {session.user.email}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-primary-800 mb-4">
            Account Statistics
          </h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-primary-700">Total Designs</label>
              {/* <div className="mt-1 text-primary-800 font-medium">
                {user?.designCount || 0}
              </div> */}
            </div>
            <div>
              <label className="text-sm text-primary-700">Last Active</label>
              {/* <div className="mt-1 text-primary-800 font-medium">
                {user?.lastLogin
                  ? new Date(user.lastLogin).toLocaleString()
                  : "N/A"}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
