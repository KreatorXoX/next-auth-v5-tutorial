"use server";
import bcrypt from "bcryptjs";
import { RegisterSchema, registerSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/lib/user";

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

  const { email, password, name } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingEmail = await getUserByEmail(email);
  if (existingEmail) {
    return {
      status: "error",
      message: "Email already exists",
    };
  }

  const user = await db.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });

  return {
    status: "success",
    message: "Verification email is sent",
  };
};
