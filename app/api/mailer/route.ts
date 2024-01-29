import { NextRequest, NextResponse } from "next/server";

var nodemailer = require("nodemailer");

export async function POST(request: NextRequest) {
    try {

        const reqBody = await request.json()
        const { fullName, email, subject, phone, message } = reqBody

        console.log('Fullname:', fullName, "; email:", ";Subject:", subject, "; Phone:", phone, ",Msg:", message)

        var transporter = await nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.NODEMAILER_EMAIL,
                pass: process.env.NODEMAILER_PW,
            },
        });

        const clientCopy = `Dear ${fullName},

I trust this message finds you well. We appreciate your recent visit to our website and the time you took to submit your inquiry through our contact form.
        
This email is to confirm that we have received your message and want to assure you that our team is actively reviewing the details you provided. We understand the importance of your query and are committed to providing you with the assistance you need.
        
Our team is diligently working on your request, and you can expect a detailed response within the next 24 hours. If you have any additional information or specific details to add, please feel free to reply directly to this email. Your feedback and updates are valuable to us, and we want to ensure that we address your needs comprehensively.
        
We appreciate your patience as we work towards resolving your inquiry. Should you have any immediate concerns or require urgent assistance, please don't hesitate to contact us at [Your Contact Information].
        
Thank you for choosing [Your Company Name]. We look forward to the opportunity to serve you, and we will do our utmost to exceed your expectations.
        
Best regards,
Team MythVortex
Where Myths Meet The Innovation`

        var clientMailOptions = {
            from: process.env.NODEMAILER_EMAIL,
            to: email,
            bcc: 'taryan3087@gmail.com',
            subject: "MythVortex: Inquiry Acknowledged",
            text: clientCopy,
        };

        var companyMessage = `Hi Team,
        
We received a new query. Please have a look.

Name: ${fullName}
Phone: ${phone}
Email: ${email}
Subject: ${subject}
Message: ${message}

Thanks,
MythVortex`

        var companyMailoptions = {
            from: process.env.NODEMAILER_EMAIL,
            to: 'contact@mythvortex.com',
            bcc: 'taryan3087@gmail.com',
            subject: subject,
            text: companyMessage,
        };

        // console.log("Mailoption set successfully to client!")

        const sendStatus = await transporter.sendMail(companyMailoptions);

        if (sendStatus.accepted.length > 0) {
            console.log("Email Sent to ", email);

            const sendStatus = await transporter.sendMail(clientMailOptions);

            if (sendStatus.accepted.length > 0) {

                return NextResponse.json({
                    message: "Email sent!",
                    status: 200,
                });
            }

        } else {
            console.error("Email not accepted for delivery.");
            throw new Error("Email not accepted for delivery.");
        }

    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }
}

