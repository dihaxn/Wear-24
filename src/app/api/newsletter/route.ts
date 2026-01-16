import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { message: "Invalid email address" },
        { status: 400 }
      );
    }

    // In a real application, you would save this to your database
    // or send it to a service like Mailchimp/ConvertKit
    console.log(`New newsletter subscription: ${email}`);

    return NextResponse.json(
      { message: "Successfully subscribed to newsletter" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
