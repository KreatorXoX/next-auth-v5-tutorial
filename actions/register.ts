"use server";

import { RegisterSchema, registerSchema } from "@/schemas";

export const register = async (
  values: RegisterSchema
): Promise<{ status: "error" | "success"; message: string }> => {
  const validatedFields = registerSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      status: "error",
      message: "Register fields are invalid",
    };
  }

  return {
    status: "success",
    message: "Verification email is sent",
  };
};
