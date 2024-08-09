import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { fullName, email, subject, phone, content } = reqBody;

        console.log(
            `Fullname: ${fullName}; Email: ${email}; Subject: ${subject}; Phone: ${phone}; Msg: ${content}`
        );

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: 'yaryanyadav3087@gmail.com',
                pass: 'oirr dbgs rppx pcjz',
            },
            tls: {
                // This allows self-signed certificates
                rejectUnauthorized: false,
            },
        });

        const clientMailOptions = {
            from: 'contact@mythvortex.com',
            to: email,
            subject: "Mythvortex: Inquiry Acknowledged",
            text: content,
        };

        const companyMailOptions = {
            from: 'contact@mythvortex.com',
            to: 'taryan3087@gmail.com',
            subject: subject,
            text: content,
        };

        const sendCompanyMailStatus = await transporter.sendMail(companyMailOptions);
        console.log("Company email send status:", sendCompanyMailStatus);

        if (sendCompanyMailStatus.accepted.length > 0) {
            console.log("Company email sent successfully.");

            const sendClientMailStatus = await transporter.sendMail(clientMailOptions);
            console.log("Client email send status:", sendClientMailStatus);

            if (sendClientMailStatus.accepted.length > 0) {
                return NextResponse.json({
                    content: "Emails sent successfully!",
                    status: 200,
                });
            } else {
                console.error("Client email not accepted for delivery.");
                throw new Error("Client email not accepted for delivery.");
            }
        } else {
            console.error("Company email not accepted for delivery.");
            throw new Error("Company email not accepted for delivery.");
        }
    } catch (error: any) {
        if (error.response && error.response.includes("Recipient address rejected")) {
            return NextResponse.json({
                error: "The provided email address does not exist.",
                status: 400,
            });
        } else {
            console.error("Error sending email:", error);
            return NextResponse.json({
                error: "An error occurred while sending emails.",
                details: error.message || "Unknown error",
                status: 500,
            });
        }
    }
}
