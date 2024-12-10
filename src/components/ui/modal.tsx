"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const { status } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/home");
      onClose();
    }
  }, [status, router, onClose]);

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      console.log("Attempting to sign in with Google...");
      const result = await signIn("google", { callbackUrl: "/home" });
      console.log("result", result);

      if (!result?.ok) {
        console.error(
          "Google sign-in failed:",
          result?.error || "Unknown error"
        );
        setIsLoading(false);
      } else {
        console.log("Google sign-in successful!");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-primary-50 rounded-2xl p-8 z-50 shadow-xl">
          {/* Close Button */}
          <Dialog.Close className="absolute right-4 top-4 text-primary-700 hover:text-primary-800 transition-colors">
            <X className="w-5 h-5" />
          </Dialog.Close>

          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/craft-nova.svg"
              alt="CraftNova Logo"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </div>

          {/* Content */}
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-2xl font-bold text-primary-800">
              Welcome to CraftNova
            </h2>
            <p className="text-primary-700">
              Sign in to create stunning designs with AI in seconds. No design
              skills needed.
            </p>
          </div>

          {/* Sign In Button */}
          <button
            className="w-full flex items-center justify-center gap-3 bg-primary-800 text-primary-50 py-3 px-6 rounded-full hover:bg-opacity-90 transition-colors"
            onClick={handleGoogleSignIn}
            disabled={isLoading}
          >
            {/* Google Icon */}
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Signing in...
              </>
            ) : (
              <>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Sign in with Google
              </>
            )}
          </button>

          {/* Terms */}
          <p className="text-xs text-primary-700 text-center mt-6">
            By signing in, you agree to our{" "}
            <a href="/terms" className="text-primary-800 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-primary-800 hover:underline">
              Privacy Policy
            </a>
          </p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default SignInModal;
