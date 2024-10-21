import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../lib/mongodb";
import User from "../../models/User";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    await connectToDatabase();

    const data = req.body; // Get form data from request
    const newUser = new User(data);
    await newUser.save(); // Save to MongoDB

    // Set up Nodemailer to send email
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USERNAME, // Use your verified sender email
      to: "adisharma151ays@gmail.com", // Recipient's email
      subject: `New Enquiry from ${data.name}!`, // Email subject
      text: `You have received a new enquiry.\n\nName: ${data.name}\nEmail: ${
        data.email
      }\nPhone: ${data.phone}\nNumber of Guests: ${
        data.numberOfGuests
      }\nDate From: ${data.dateFrom}\nDate To: ${
        data.dateTo
      }\nAdditional Requirements: ${data.additionalRequirements || "None"}`,
    };

    await transporter.sendMail(mailOptions); // Send the email

    // Respond with success
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "Server error", details: (error as Error).message });
  }
}
