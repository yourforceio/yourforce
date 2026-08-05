import { NextResponse } from "next/server";

import AutoReply from "@/emails/AutoReply";
import ContactEmail from "@/emails/ContactEmail";
import { resend } from "@/lib/resend";
import { contactSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
      console.error(
        "Missing RESEND_API_KEY or CONTACT_EMAIL environment variable.",
      );

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 },
      );
    }

    const body: unknown = await request.json();

    const validation = contactSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          message:
            validation.error.issues[0]?.message ??
            "Invalid form submission.",
          errors: validation.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const data = validation.data;

    /**
     * Honeypot spam protection
     *
     * Real users cannot see or focus this field. Bots often fill every
     * available input, including this one.
     *
     * Return a successful response so bots do not learn that they were
     * detected, but do not send either email.
     */
    if (data.website) {
      console.warn("Honeypot spam submission blocked.");

      return NextResponse.json({
        success: true,
        message: "Your message has been sent successfully.",
      });
    }

    // Send the inquiry notification to YourForce.
    const notification = await resend.emails.send({
      from: "YourForce <hello@yourforce.io>",
      to: process.env.CONTACT_EMAIL,
      replyTo: data.email,
      subject: `New ${data.service} inquiry from ${data.name}`,
      react: ContactEmail(data),
    });

    if (notification.error) {
      console.error(
        "Contact notification failed:",
        notification.error,
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Unable to send your message. Please try again.",
        },
        { status: 502 },
      );
    }

    // Send an acknowledgement email to the visitor.
    const autoReply = await resend.emails.send({
      from: "YourForce <hello@yourforce.io>",
      to: data.email,
      replyTo: process.env.CONTACT_EMAIL,
      subject: "We've received your message",
      react: AutoReply({
        name: data.name,
        service: data.service,
      }),
    });

    /**
     * The main inquiry was already delivered, so an auto-reply failure
     * should be logged without failing the visitor's form submission.
     */
    if (autoReply.error) {
      console.error(
        "Contact auto-reply failed:",
        autoReply.error,
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 },
    );
  }
}