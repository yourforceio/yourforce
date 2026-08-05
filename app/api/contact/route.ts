import { render } from "@react-email/render";
import { NextResponse } from "next/server";

import AutoReply from "@/emails/AutoReply";
import ContactEmail from "@/emails/ContactEmail";

import { getResend } from "@/lib/resend";
import { contactSchema } from "@/lib/validations/contact";

const FROM_EMAIL =
  "YourForce <contact@yourforce.io>";

export async function POST(
  request: Request,
) {
  try {
    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          message:
            "The submitted request is not valid JSON.",
        },
        {
          status: 400,
        },
      );
    }

    const validationResult =
      contactSchema.safeParse(body);

    if (!validationResult.success) {
      const validationMessage =
        validationResult.error.issues[0]
          ?.message ??
        "Please check the submitted information.";

      return NextResponse.json(
        {
          success: false,
          message: validationMessage,
        },
        {
          status: 400,
        },
      );
    }

    const data = validationResult.data;

    /**
     * Honeypot spam protection.
     *
     * A genuine user should never populate this field.
     */
    if (data.website) {
      return NextResponse.json({
        success: true,
        message:
          "Your enquiry has been received.",
      });
    }

    const contactEmail =
      process.env.CONTACT_EMAIL?.trim();

    if (!contactEmail) {
      throw new Error(
        "CONTACT_EMAIL is not configured.",
      );
    }

    /**
     * Resend is initialized only when a valid request
     * reaches the endpoint.
     */
    const resend = getResend();

    /**
     * ContactEmail expects the complete parsed
     * ContactFormData object, including website.
     */
    const [
      contactEmailHtml,
      autoReplyHtml,
    ] = await Promise.all([
      render(
        ContactEmail(data),
      ),

      render(
        AutoReply({
          name: data.name,
          service: data.service,
        }),
      ),
    ]);

    const {
      error: contactSendError,
    } = await resend.emails.send({
      from: FROM_EMAIL,
      to: contactEmail,
      replyTo: data.email,
      subject: `New enquiry from ${data.name}`,
      html: contactEmailHtml,
    });

    if (contactSendError) {
      throw new Error(
        `Unable to send contact notification: ${contactSendError.message}`,
      );
    }

    const {
      error: autoReplySendError,
    } = await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject:
        "We've received your enquiry",
      html: autoReplyHtml,
    });

    if (autoReplySendError) {
      throw new Error(
        `Unable to send visitor acknowledgment: ${autoReplySendError.message}`,
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you. Your enquiry has been sent successfully.",
    });
  } catch (error) {
    console.error(
      "Contact form submission failed:",
      error,
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to send your enquiry. Please try again.",
      },
      {
        status: 500,
      },
    );
  }
}
