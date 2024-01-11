import { type NextRequest, NextResponse } from "next/server";

import sendEmail from "@/lib/mailer";

export async function POST(request: NextRequest) {
  console.log("in post");
  const { email } = await request.json();
  console.log(email);
  console.log("we on route");
  try {
    await sendEmail({
      from: "test@example.com",
      to: email,
      subject: "Please verify your account",
      text: `Verification code , Id:`,
      html: `<a href=".env.BASE_URLverify//">Click to Verify your Account</a>`,
    });
    console.log("send mail");
    return NextResponse.json({ message: "Email sent" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error sending the email" });
  }
}
