"use server";

import { signIn } from "@/auth";
import { DEFAULT_REDIRECT } from "@/routes";
import { LoginSchema, loginSchema } from "@/schemas";
import { AuthError } from "next-auth";

export const login = async (
  values: LoginSchema
): Promise<{ status: "error" | "success"; message: string } | undefined> => {
  const validatedFields = loginSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      status: "error",
      message: "Login fields are invalid",
    };
  }

  const { email, password } = validatedFields.data;
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_REDIRECT,
    });
    return undefined;
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin") {
        return {
          status: "error",
          message: "Invalid email or password",
        };
      }
      return {
        status: "error",
        message: "Something went wrong. Please try again later",
      };
    }

    throw error;
  }
};
