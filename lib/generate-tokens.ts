import { v4 as uuid } from "uuid";
import { db } from "./db";
import { getTokenByEmail } from "./verification-token";

export const generateVerificationToken = async (email: string) => {
  const token = uuid();

  const existingToken = await getTokenByEmail(email);

  if (existingToken) {
    await db.verificationToken.delete({
      where: { id: existingToken.id },
    });
  }
  let verificationToken;
  try {
    verificationToken = await db.verificationToken.create({
      data: {
        email,
        token,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      },
    });
  } catch (error) {
    return null;
  }
  return verificationToken;
};
