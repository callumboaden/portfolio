"use server";

import { Resend } from "resend";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Extract fields
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const business = formData.get("business")?.toString().trim();
  const budget = formData.get("budget")?.toString().trim();
  const details = formData.get("details")?.toString().trim();

  // Basic server-side validation
  if (!name || !email || !business || !budget || !details) {
    return {
      status: "error",
      message: "All fields are required. Please fill out the form completely.",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
    };
  }

  // Check if API key is provided
  if (!process.env.RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY environment variable.");
    return {
      status: "error",
      message: "Server configuration error. Please try again later.",
    };
  }

  try {
    // Send email using Resend
    // NOTE: Free Resend accounts can only send from onboarding@resend.dev to the registered account email.
    // Once you verify callumboaden.com.au on Resend, you can change the "from" to your domain.
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "hello@callumboaden.com.au", // Target email address
      subject: `New Lead: ${name} from ${business}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business Name:</strong> ${business}</p>
        <p><strong>Project Budget:</strong> ${budget}</p>
        <hr />
        <p><strong>Project Details:</strong></p>
        <p style="white-space: pre-line;">${details}</p>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return {
        status: "error",
        message: "Failed to send message. Please try again or email directly.",
      };
    }

    console.log("Contact form submission sent successfully via Resend:", data);

    return {
      status: "success",
      message: `Thank you, ${name}! I've received your request and will be in touch within 24 hours.`,
    };
  } catch (err) {
    console.error("Unhandled error submitting contact form:", err);
    return {
      status: "error",
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}

