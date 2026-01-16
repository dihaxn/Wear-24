import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, address, city, zip, country, cartItems, total } = body;

    // Create a transporter using SMTP
    // You needs to add these values to your .env file
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Format the email content
    const itemsList = cartItems
      .map(
        (item: any) =>
          `- ${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`
      )
      .join("\n");

    const emailContent = `
      New Order Received!
      
      Customer Details:
      Name: ${name}
      Email: ${email}
      Address: ${address}, ${city}, ${zip}, ${country}
      
      Order Summary:
      ${itemsList}
      
      Total: $${total.toFixed(2)}
    `;

    // Send email to store owner
    await transporter.sendMail({
      from: process.env.SMTP_USER, // Sender address
      to: process.env.SMTP_USER, // List of receivers (sending to self/owner)
      subject: `New Order from ${name} - $${total.toFixed(2)}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, "<br>"),
    });

    return NextResponse.json({ success: true, message: "Order placed successfully" });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to place order" },
      { status: 500 }
    );
  }
}
