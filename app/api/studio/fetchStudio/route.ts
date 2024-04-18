import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const sqlQuery = 'SELECT * FROM studio'; // Query to retrieve all data from the table

        console.log("Query:", sqlQuery);

        const result: any = await sql.query(sqlQuery);
        const data = result.rows;

        // Organize data by category
        const groupedData:any = [];
        data.forEach(row => {
            const index = groupedData.findIndex(item => item.categoryName === row.category);
            if (index === -1) {
                groupedData.push({ categoryName: row.category, data: [row] }); // Create a new category entry
            } else {
                groupedData[index].data.push(row); // Push the row data into the corresponding category array
            }
        });

        return NextResponse.json({ success: true, result: groupedData }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error }, { status: 500 });
    }
}
