import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { categorySearchList, searchText } = await request.json()
        console.log("CL:", categorySearchList, "ST:", searchText)

        var sqlQuery = 'select * from blog where 1 = 1'

        if (searchText) {
            sqlQuery += ` AND ( title ILIKE CONCAT('%', '${searchText}', '%') OR category ILIKE CONCAT('%', '${searchText}', '%') or tag ILIKE CONCAT('%', '${searchText}', '%') or description ILIKE CONCAT('%', '${searchText}', '%') )`
        }

        // Assuming categorySearchList is an array of strings
        if (categorySearchList.length > 0) {
            // Create placeholders for each category in the list
            const placeholders = categorySearchList.map((category) => `'${category}'`).join(', ');

            // Append the condition to the SQL query
            sqlQuery += ` AND category IN (${placeholders})`;

        }


        console.log("Query:", sqlQuery)
        const result: any =
            await sql.query(sqlQuery);

        const data = result.rows

        return NextResponse.json({ success: true, result: data }, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error }, { status: 500 });
    }
}