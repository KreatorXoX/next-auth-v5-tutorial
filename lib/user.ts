"use server";
import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  let user;
  try {
    user = await db.user.findUnique({
      where: {
        email,
      },
    });
  } catch (error) {
    return null;
  }

  return user;
};
export const getUserById = async (id: string) => {
  let user;
  try {
    user = await db.user.findUnique({
      where: {
        id,
      },
    });
  } catch (error) {
    return null;
  }

  return user;
};
