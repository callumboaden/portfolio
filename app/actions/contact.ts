"use server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

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

  // Simulate network delay (replace with Resend / Formspree in production)
  await new Promise((resolve) => setTimeout(resolve, 800));

  // TODO: Integrate with Resend, Formspree, or another email service
  // Example with Resend:
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: 'portfolio@callumboaden.com.au',
  //   to: 'callum@callumboaden.com.au',
  //   subject: `New enquiry from ${name} — ${business}`,
  //   html: `<p>${details}</p>`,
  // });

  console.log("New contact form submission:", { name, email, business, budget, details });

  return {
    status: "success",
    message: `Thank you, ${name}! I'll be in touch within 24 hours.`,
  };
}
