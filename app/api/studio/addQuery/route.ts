import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

interface DetailsInterface {
    itemId: number;
    itemTitle: string;
    name: string;
    changeNumber: string | null;
    mode: string;
    email: string;
    phone: string;
    medium: string;
}

export async function POST(request: Request) {
    try {
        const { details }: { details: DetailsInterface } = await request.json();

        // Using parameterized queries to prevent SQL injection
        const sqlQuery = `
            INSERT INTO studiolead (changeid, short_description, mode, name, phone, email, medium, itemid) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
            RETURNING id, changeid, sctask;`;

        const result: any = await sql.query(sqlQuery, [
            details.changeNumber || null,
            details.itemTitle,
            details.mode,
            details.name,
            details.phone,
            details.email,
            details.medium,
            details.itemId
        ]);

        const data: any = result.rows[0];

        // Escaping backticks in the SQL query
        const sqlQuery2 = `INSERT INTO worklogs (sctaskid, note) VALUES ($1, 'Task: ' || $2 || ' created with change number: ' || $3 || ': ' || $4);`;

        await sql.query(sqlQuery2, [data.sctask, data.sctask, data.changeid, details.itemTitle]);


        // Organize data by category
        return NextResponse.json({ success: true, data }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error }, { status: 500 });
    }
}
