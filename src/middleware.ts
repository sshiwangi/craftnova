export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/home/:path*",
    "/dashboard/:path*",
    // Add other protected routes
  ],
  exclude: ["/api/auth/:path*"],
};
