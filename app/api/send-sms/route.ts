import { NextResponse } from "next/server";
import twilio from "twilio";

export async function POST(req: Request) {
  const { name, phone, email, message } = await req.json();

  const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

  try {
    await client.messages.create({
      body:
        `Zpráva od ${name}, z telefonu ${phone}, nebo emailu ${email}:\n ` +
        message,
      from: process.env.TWILIO_PHONE, // tvoje Twilio číslo
      to: "+420603973654",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Chyba při odesílání" },
      { status: 500 }
    );
  }
}
