import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";
const TEMPLATE_ID = "template_generico";

export async function sendEmail(params: {
  subject: string;
  from_email: string;
  body: string;
}) {
  if (!SERVICE_ID || !PUBLIC_KEY) {
    throw new Error("EmailJS credentials are not configured");
  }

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, params, {
    publicKey: PUBLIC_KEY,
  });
}
