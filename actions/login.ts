"use server";

import { LoginSchema, loginSchema } from "@/schemas";

export const login = async (
  values: LoginSchema
): Promise<{ status: "error" | "success"; message: string }> => {
  const validatedFields = loginSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      status: "error",
      message: "Login fields are invalid",
    };
  }

  return {
    status: "success",
    message: "Verification email is sent",
  };
};
