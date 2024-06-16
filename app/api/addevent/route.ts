import { DateTime } from "luxon";
import { NextRequest, NextResponse } from "next/server";

const { google } = require('googleapis');

const SCOPES = process.env.SCOPES;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL
const GOOGLE_PROJECT_NUMBER = process.env.GOOGLE_PROJECT_NUMBER
const GOOGLE_CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID

const jwtClient = new google.auth.JWT(
    GOOGLE_CLIENT_EMAIL,
    null,
    GOOGLE_PRIVATE_KEY,
    SCOPES,
    null, // The email of the user for impersonation (if needed)
    {
        expiresIn: "1d", // Set the token expiration to 1 day
    }
);

const calendar = google.calendar({
    version: 'v3',
    project: GOOGLE_PROJECT_NUMBER,
    auth: jwtClient
});

export async function POST(request: NextRequest) {

    try {
        const reqBody = await request.json()
        const { firstName, lastName, date, time } = reqBody

        const dateTime = DateTime.fromISO(`${date}T${time}`, { zone: 'America/Toronto' });

        console.log(dateTime.toString()); // Print the DateTime object

        const startTime = dateTime.toUTC()
        const endTime = startTime.plus({ minutes: 20 })

        console.log("Start date:", date)
        console.log("Start date:", time)

        var event = {
            'summary': `Appointment with ${firstName} ${lastName}`,
            'location': 'Google Meet',
            'description': 'Join meeting: https://meet.google.com/fks-hpzs-jwa',
            'start': {
                'dateTime': startTime,

            },
            'end': {
                'dateTime': endTime,

            },
            'attendees': [],
            'reminders': {
                'useDefault': false,
                'overrides': [
                    { 'method': 'email', 'minutes': 24 * 60 },
                    { 'method': 'email', 'minutes': 4 * 60 },
                    { 'method': 'popup', 'minutes': 10 },
                ],
            },
        };

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
                "redirect_uris": ["https://mythvortex.com/api/addevent", "http://localhost:3000/api/addevent", "http://localhost:3000"],
                "javascript_origins": ["https://mythvortex.com/api/addevent", "http://localhost:3000/api/addevent", "http://localhost:3000"]
            },
            scopes: 'https://www.googleapis.com/auth/calendar', //full access to edit calendar
        });

        const addCalendarEvent = async () => {
            return new Promise<void>(async (resolve, reject) => {
                try {
                    const authClient = await auth.getClient();
                    const response = await calendar.events.insert({
                        auth: authClient,
                        calendarId: GOOGLE_CALENDAR_ID,
                        resource: event,
                    });
                    console.log("Event created successfully.");
                    console.log("Event details: ", response.data);
                    resolve(response.data.id);
                } catch (error) {
                    console.log("Something went wrong: " + error);
                    reject(error);
                }
            });
        };

        console.log("Calender event:", addCalendarEvent)

        let test: undefined | any
        let counter = 0
        test = await addCalendarEvent(); // Wait for the insert operation to complete

        while(!test && counter++ < 10){
            console.log("Adding event ... please wait...")
            test = await addCalendarEvent(); // Wait for the insert operation to complete
        }
        

        // while(addCalendarEvent()){
        //     console.log("Adding event ... please wait...")
        // }

        return NextResponse.json({
            data: "Event Added!", details: test
        }, { status: 200 });



    } catch (error: any) {
        console.log("Error occurred while adding event:", error)
        return NextResponse.json({ error: error.message });

    }

}



