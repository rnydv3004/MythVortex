import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { category } = await request.json()
        

        var sqlQuery = `select hero, title, id from blog where category = '${category}' limit 10`

        const result: any =
            await sql.query(sqlQuery);

        const data = result.rows

        return NextResponse.json({ success: true, result: data }, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error }, { status: 500 });
    }
}