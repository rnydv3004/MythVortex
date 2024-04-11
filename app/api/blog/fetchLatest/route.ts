import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        var sqlQuery = `select hero, title, id, description from blog  order by created desc limit 4`

        const result: any =
            await sql.query(sqlQuery);

        const data = result.rows
        console.log('Data:', data)

        return NextResponse.json({ success: true, result: data }, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error }, { status: 500 });
    }
}