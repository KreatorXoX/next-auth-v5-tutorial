"use server";
import { db } from "@/lib/db";

export const getTokenByEmail = async (email: string) => {
  let token;
  try {
    token = await db.verificationToken.findFirst({
      where: {
        email,
      },
    });
  } catch (error) {
    return null;
  }

  return token;
};
export const getTokenByToken = async (token: string) => {
  let verificationToken;
  try {
    verificationToken = await db.verificationToken.findUnique({
      where: {
        token,
      },
    });
  } catch (error) {
    return null;
  }

  return verificationToken;
};
