import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, company, serviceType, message } = data;

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const recipient = process.env.CONSULTATION_RECIPIENT || "gaurangdadujagtap@gmail.com";
    const resendApiKey = process.env.RESEND_API_KEY;

    // Production Path 1: If RESEND_API_KEY is configured in .env.local
    if (resendApiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "ENTRABALANCE Portal <onboarding@resend.dev>",
          to: [recipient],
          reply_to: email,
          subject: `Consultation Request: ${serviceType || "General"} — ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #E8E0D8; background-color: #FAF7F2; color: #1A1412;">
              <h2 style="color: #B87333; margin-bottom: 8px;">New Client Consultation Request</h2>
              <p style="font-size: 13px; color: #7A6F6B; margin-top: 0;">Received via ENTRABALANCE GLOBAL LLP Client Portal</p>
              
              <div style="background-color: #ffffff; padding: 20px; border: 1px solid #E8E0D8; margin: 20px 0;">
                <p style="margin: 8px 0;"><strong>Client Full Name:</strong> ${name}</p>
                <p style="margin: 8px 0;"><strong>Corporate Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p style="margin: 8px 0;"><strong>Contact Phone:</strong> ${phone || "Not provided"}</p>
                <p style="margin: 8px 0;"><strong>Organization / Entity:</strong> ${company || "Not provided"}</p>
                <p style="margin: 8px 0;"><strong>Selected Work Area:</strong> <span style="background-color: #FAF7F2; padding: 2px 8px; border: 1px solid #E8E0D8; font-weight: bold; color: #B87333;">${serviceType}</span></p>
              </div>

              <div style="background-color: #ffffff; padding: 20px; border: 1px solid #E8E0D8; margin: 20px 0;">
                <h3 style="margin-top: 0; font-size: 14px; text-transform: uppercase; color: #1A1412;">Operational Requirements / Scope Brief:</h3>
                <p style="white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #3D312E;">${message}</p>
              </div>

              <p style="font-size: 11px; color: #7A6F6B; text-align: center; margin-top: 24px;">
                ENTRABALANCE GLOBAL LLP &bull; LLPIN: ACF-4900 &bull; Confidential Client Communication
              </p>
            </div>
          `,
        }),
      });

      const result = await res.json();
      if (!res.ok) {
        return NextResponse.json({ error: result.message || "Failed to dispatch email" }, { status: 500 });
      }

      return NextResponse.json({ success: true, message: "Consultation inquiry dispatched via Resend" });
    }

    // Default Fallback: Formspree Dispatch Directly to gaurangdadujagtap@gmail.com
    const formspreeRes = await fetch("https://formspree.io/f/xbldwzzp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        recipient: recipient,
        name,
        email,
        phone: phone || "Not provided",
        company: company || "Not provided",
        serviceType,
        message,
        _subject: `New Consultation Request: ${serviceType} from ${name}`,
      }),
    });

    if (!formspreeRes.ok) {
      console.warn("Formspree returned status:", formspreeRes.status);
    }

    return NextResponse.json({
      success: true,
      message: "Consultation request processed successfully",
    });
  } catch (error) {
    console.error("Inquiry API Error:", error);
    return NextResponse.json(
      { error: "Internal server error processing consultation request" },
      { status: 500 }
    );
  }
}
