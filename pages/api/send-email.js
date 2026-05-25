import { sendEmailKey } from "@/config/config";
import { sendMail } from "mailcub";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }
  
  try {
    const emailBody = req.body;

    await sendMail(emailBody, sendEmailKey);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Email sending error:", error);

    return res.status(500).json({
      success: false,
      message: error?.message || "Email sending failed",
    });
  }
}