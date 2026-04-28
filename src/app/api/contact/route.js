import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const body = await req.json();

        const {
            fullName,
            email,
            phone,
            budget,
            message,
            nda,
        } = body;

        // 🔒 Transporter (Mailtrap)
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });


        // 📧 Send Email
        await transporter.sendMail({
            from: "Website Inquiry <no-reply@devlys.com>",
            to: "dev@devlys.com",
            subject: "New Contact Form Submission",
            html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>New Website Inquiry</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
          <p><strong>NDA:</strong> ${nda ? "Yes" : "No"}</p>
          <p><strong>Message:</strong></p>
          <p>${message || "—"}</p>
        </div>
      `,
        });

        return new Response(
            JSON.stringify({ success: true, message: "Email sent successfully" }),
            { status: 200 }
        );

    } catch (error) {
        console.error("Contact API Error:", error);

        return new Response(
            JSON.stringify({ success: false, message: "Failed to send email" }),
            { status: 500 }
        );
    }
}
