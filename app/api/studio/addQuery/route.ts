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
        const { details }: { details: DetailsInterface } = await request.json()

        const sqlQuery = `INSERT INTO studiolead (changeid, short_description, mode, name, phone, email, medium, itemid) 
                  VALUES (${details.changeNumber === '' ? null : `'${details.changeNumber}'`}, 
                          '${details.itemTitle}', 
                          ${details.mode}, 
                          '${details.name}', 
                          '${details.phone}', 
                          '${details.email}', 
                          '${details.medium}', 
                          ${details.itemId}) 
                  RETURNING changeid, sctask;`;


        console.log("Query:", sqlQuery);

        const result: any = await sql.query(sqlQuery);
        const data = result.rows[0];

        // Organize data by category
        return NextResponse.json({ success: true, data }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error }, { status: 500 });
    }
}
