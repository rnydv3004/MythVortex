import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { note, docLink, admin, sctaskid } = await request.json();
        console.log("SCTASK:--->",sctaskid)

        const sender = admin === 'adminid000' ? 'Reviewer' : 'Client'

        // Using parameterized queries to prevent SQL injection
        const sqlQuery = `
            INSERT INTO worklogs (note, docLink, sender, sctaskid) 
            VALUES ($1, $2, $3, $4)`;

        const result: any = await sql.query(sqlQuery, [
            note, docLink, sender, sctaskid
        ]);

        console.log("Result:", result)


        // Organize data by category
        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error }, { status: 500 });
    }
}
