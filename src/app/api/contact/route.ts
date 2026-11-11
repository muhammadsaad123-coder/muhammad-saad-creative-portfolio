import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate inputs
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Please fill in all fields (name, email, subject, message)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // 1. Try Web3Forms if ACCESS_KEY is configured
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3formsKey) {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          name,
          email,
          subject: `Portfolio Contact: ${subject}`,
          message,
          from_name: "Muhammad Saad Creative Portfolio",
          replyto: email,
        }),
      });

      const result = await response.json();
      if (result.success) {
        return NextResponse.json({
          success: true,
          message: "Your message has been sent directly to Muhammad Saad's inbox!",
        });
      }
    }

    // 2. Default: Log details and confirm receipt (with client mailto fallback)
    console.log("-----------------------------------------");
    console.log("NEW PORTFOLIO INQUIRY RECEIVED:");
    console.log(`From: ${name} <${email}>`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
    console.log(`Time: ${new Date().toLocaleString()}`);
    console.log("-----------------------------------------");

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been received.",
        isLocalFallback: !web3formsKey,
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please contact via WhatsApp or email directly." },
      { status: 500 }
    );
  }
}
