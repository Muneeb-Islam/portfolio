import { NextResponse } from "next/server";
import { sendMail } from "mailcub";

export async function POST(req) {
  try {
    const email_body = await req.json();

    await sendMail(email_body, process.env.MAILCUB_API_KEY);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Email sending error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Email sending failed",
      },
      { status: 500 }
    );
  }
}