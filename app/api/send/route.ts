import { EmailTemplate } from "../../../components/shared/EmailTemplate";
import { Resend } from "resend";
import { NextApiRequest, NextApiResponse } from "next";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const body = await req.body;
  console.log(body);

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["fromdevtoprod23@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({
        firstName: body.firstName || "empty",
        lastName: body.lastName || "empty",
        email: body.email || "empty",
        message: body.message || "empty",
      }),
    });
    return res.json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
}
