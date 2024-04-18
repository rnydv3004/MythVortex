import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { id } = await request.json()
        console.log("========>", id)

        var sqlQuery = `select title, description, category, tag from blog where id = '${id}'`

        const result: any =
            await sql.query(sqlQuery);

        const data = result.rows

        return NextResponse.json({ success: true, result: data }, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error }, { status: 500 });
    }
}