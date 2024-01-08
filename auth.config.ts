import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import bcrypt from "bcryptjs";

import { loginSchema } from "./schemas";
import { getUserByEmail } from "@/lib/user";

export default {
  providers: [
    Credentials({
      credentials: {
        email: { type: "text" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        const validatedFields = loginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          const user = await getUserByEmail(email);

          // oauth users don't have password
          if (!user || !user.password) {
            return null;
          }

          const match = await bcrypt.compare(password, user.password);

          if (match) {
            return user;
          }
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
