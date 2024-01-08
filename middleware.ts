import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import {
  DEFAULT_REDIRECT,
  publicRoutes,
  apiAuthPrefix,
  authRoutes,
} from "@/routes";

export const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = !!req.auth?.user;

  const url = req.nextUrl ?? req.url;

  const isApiAuthRoute = url.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(url.pathname);
  const isAuthRoute = authRoutes.includes(url.pathname);

  if (isApiAuthRoute) {
    return null;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_REDIRECT, url));
    } else {
      return null;
    }
  }

  if (!isPublicRoute && !isLoggedIn) {
    return Response.redirect(new URL("/auth/login", url));
  }

  return null;
});

// Optionally, don't invoke Middleware on some paths
// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
