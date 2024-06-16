import { NextRequest, NextResponse } from "next/server";
import { DateTime } from "luxon";
const { google } = require('googleapis');
const sheets = google.sheets('v4');

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
// const CREDENTIALS_PATH = 'path-to-your-credentials.json'; // Replace with the path to your JSON key file
const SPREADSHEET_ID = "1wk_XqkgtPx0oMZBQk_J6MHwkL27qlZBAv9raqLGF4CU"; // Replace with your Google Sheet's ID
const RANGE_NAME = 'Details!A2'; // Replace with the sheet name where you want to start writing data



export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { firstName, lastName, type, email, phone, date, time } = reqBody;

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

        return NextResponse.json({
            message: "Appointment Booked Successfully!",
            status: 200,
        }, { status: 200 });
    } catch (error:any) {
        console.error('Error:', error);
        return NextResponse.json({ error: error.message });
    }
}
