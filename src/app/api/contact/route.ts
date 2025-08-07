import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, topic, message } = await req.json();
    if(!firstName || !lastName || !email || !topic || !message){      
      return NextResponse.json({ message: "Please fill in all required fields." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New contact form submission from ${firstName} ${lastName} in AcademyKit`,
      text: `
New Contact Form Submission from AcademyKit:

Full Name: ${firstName} ${lastName}
Email: ${email}
Phone Number: ${phone || "N/A"}
Topic: ${topic}

Message:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Thank you for your message. We will get back to you soon." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
