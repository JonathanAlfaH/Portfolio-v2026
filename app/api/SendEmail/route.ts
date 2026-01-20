import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export const runtime = "nodejs";
export async function POST(request: Request) {
  const body = await request.json();

  if (!body.email || !body.text) {
    return NextResponse.json({ error: "Datos incompletos" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const message = {
    from: `Contacto por portafolio de ${body.name} a <${body.email}>`,
    to: process.env.EMAIL_USERNAME,
    replyTo: body.email,
    subject: `Mensaje de contacto de ${body.name}`,
    text: body.text,
    headers: {
      "X-Priority": "1",
      "X-MSMail-Priority": "High",
      Importance: "High",
    },
  };

  try {
    await transporter.sendMail(message);
    return NextResponse.json({ message: "Email enviado con éxito!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error enviando el email" },
      { status: 500 }
    );
  }
}
