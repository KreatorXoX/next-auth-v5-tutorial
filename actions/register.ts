"use server";
import bcrypt from "bcryptjs";
import { RegisterSchema, registerSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/lib/user";
import { generateVerificationToken } from "@/lib/generate-tokens";

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

  await generateVerificationToken(email);
  // TODO send token to email

  return {
    status: "success",
    message: "Verification email is sent",
  };
};
