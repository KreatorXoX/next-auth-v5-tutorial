import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email(),
  password: z.string().min(1, { message: "Password is required" }),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().min(1, { message: "Email is required" }).email(),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 chars" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 chars" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
