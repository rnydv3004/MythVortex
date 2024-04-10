import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { postId } = await request.json()

        var sqlQuery = `select category, markdown from blog where id = ${postId}`


        const result: any =
            await sql.query(sqlQuery);

        const data = result.rows

        return NextResponse.json({ success: true, result: data }, { status: 200 });

    } catch (error) {
        console.log(error)
        return NextResponse.json({ error }, { status: 500 });
    }
}