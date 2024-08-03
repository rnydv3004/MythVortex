import { NextRequest, NextResponse } from "next/server";
import { DateTime } from "luxon";
const { google } = require('googleapis');
const sheets = google.sheets('v4');
var nodemailer = require("nodemailer");

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
// const CREDENTIALS_PATH = 'path-to-your-credentials.json'; // Replace with the path to your JSON key file
const SPREADSHEET_ID = "1wk_XqkgtPx0oMZBQk_J6MHwkL27qlZBAv9raqLGF4CU"; // Replace with your Google Sheet's ID
const RANGE_NAME = 'Details!A2'; // Replace with the sheet name where you want to start writing data


export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { firstName, lastName, type, email, phone, date, time, timeZone } = reqBody;

        const appendData = async () => {

            const auth = new google.auth.GoogleAuth({

                credentials: {
                    "type": "service_account",
                    "project_id": "mythvortex",
                    "private_key_id": process.env.PRIVATE_KEY_ID,
                    "private_key": process.env.GOOGLE_PRIVATE_KEY,
                    "client_email": "mythvortex@mythvortex.iam.gserviceaccount.com",
                    "client_id": process.env.CLIENT_ID,
                    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
                    "token_uri": "https://oauth2.googleapis.com/token",
                    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
                    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/mythvortex%40mythvortex.iam.gserviceaccount.com",
                    "universe_domain": "googleapis.com",
                    "redirect_uris": ["https://mythvortex.com/api/addgsheet", "http://localhost:3000/api/addgsheet", "http://localhost:3000"],
                    "javascript_origins": ["https://mythvortex.com/api/addgsheet", "http://localhost:3000/api/addgsheet", "http://localhost:3000"]
                },
                scopes: SCOPES, //full access to edit spreedsheet
            });

            const sheets = google.sheets({ version: 'v4', auth });

            const dateTime = DateTime.now().setZone('America/Toronto');
            const currentTime = dateTime.toFormat('yyyy-MM-dd : HH:mm');

            const values = [
                [firstName, lastName, email, phone, date, time, currentTime, 'https://meet.google.com/qzy-zerf-nqz'], // Replace with your data
            ];

            const resource = {
                values,
            };

            try {
                const response = await sheets.spreadsheets.values.append({
                    spreadsheetId: SPREADSHEET_ID,
                    range: RANGE_NAME,
                    valueInputOption: 'RAW',
                    resource,
                });

                console.log('Data added to Google Sheet:', response.data);
            } catch (err) {
                console.error('Error adding data to Google Sheet:', err);
            }
        };
        // Add data to the Google Sheet
        await appendData();

        sendMail(`${firstName} ${lastName}`, email, phone, `Appointment with ${firstName} ${lastName}`, date, time, timeZone)


        return NextResponse.json({
            message: "Appointment Booked Successfully!",
            status: 200,
        }, { status: 200 });
        
    } catch (error: any) {
        console.error('Error:', error);
        return NextResponse.json({ error: error.message });
    }
}

async function sendMail(fullName, email, phone, subject, date, time, timeZone) {

    const americaTorontoDateTime = `${date}T${time}:00`;

    const convertToTimezone = (dateTimeString, fromZone, toZone) => {
        return DateTime.fromISO(dateTimeString, { zone: fromZone }).setZone(toZone);
    };

    const convertedDateTime = convertToTimezone(americaTorontoDateTime, 'America/Toronto', timeZone);

    var transporter = await nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'yaryanyadav3087@gmail.com',
            pass: 'oirr dbgs rppx pcjz',
        },
    });

    const clientCopy = `Dear ${fullName},

We are pleased to confirm your appointment with MythVortex. Below are the details of your scheduled appointment:

Subject: ${subject}
Timing: ${convertedDateTime.toFormat('yyyy-MM-dd HH:mm')} ${timeZone} | ${date} ${time} (America/Toronto)
Venue: Google Meet (https://meet.google.com/qzy-zerf-nqz)

Please join the meeting a few minutes before the scheduled time using the provided Google Meet link. Ensure that you have a stable internet connection and your microphone and camera (if needed) are working properly.

In preparation for the appointment, kindly review the following:

1. **Documentation**: If there are any documents or information that you need to share during the meeting, please have them ready.
2. **Questions and Concerns**: Write down any questions or concerns you might have, so we can address them efficiently during the appointment.
3. **Agenda**: We will be discussing [briefly mention the key points or topics], ensuring we cover all necessary aspects to make the most out of our time together.

If you need to reschedule or cancel your appointment, please contact us at least 24 hours in advance. You can reach us at [Your Contact Information] or reply to this email for any changes.

We look forward to our meeting and are excited to assist you with [briefly mention the service or purpose of the appointment].

Thank you for choosing MythVortex. Your trust in us is greatly appreciated, and we are committed to providing you with the best service.

Best regards,

MythVortex Team
180 John St. Toronto, ON M5T1X5
www.mythvortex.com`

    var clientMailOptions = {
        from: 'contact@mythvortex.com',
        to: email,
        bcc: 'taryan3087@gmail.com',
        subject: subject,
        text: clientCopy,
    };

    var companyMessage = `Hi Team,
        
We received a new query. Please have a look.

Type: Appointment
Name: ${fullName}
Phone: ${phone}
Email: ${email}
Subject: ${subject}
Timing: ${date} ${time}
Venue: Google Meet (https://meet.google.com/qzy-zerf-nqz)

Thanks,
MythVortex`

    var companyMailoptions = {
        from: 'contact@mythvortex.com',
        to: 'contact@mythvortex.com',
        bcc: 'taryan3087@gmail.com',
        subject: subject,
        text: companyMessage,
    };


    const sendStatus = await transporter.sendMail(companyMailoptions);
    console.log("Send status 1:", sendStatus)


    if (sendStatus.accepted.length > 0) {
        console.log("Email Sent to ", email);

        const sendStatus = await transporter.sendMail(clientMailOptions);
        console.log("Send status 2:", sendStatus)

    } else {
        console.error("Email not accepted for delivery.");
        throw new Error("Email not accepted for delivery.");
    }
}

