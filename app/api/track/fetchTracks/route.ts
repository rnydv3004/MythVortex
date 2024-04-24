import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { changeid, sctask } = await request.json();
        console.log("--->", changeid, sctask);
        let sqlQuery = '';
        if (changeid && sctask) {
            // If both changeid and sctask are provided, fetch data for both
            sqlQuery = `
                SELECT s.sctask, w.sender, w.note, w.doclink, w.createddate 
                FROM studiolead s
                JOIN worklogs w ON s.sctask = w.sctaskid
                WHERE s.changeid = '${changeid}' AND s.sctask = '${sctask}'
            `;
        } else if (changeid) {
            // If only changeid is provided, fetch all sctask with track logs for the given changeid
            sqlQuery = `
                SELECT s.sctask, w.sender, w.note, w.doclink, w.createddate 
                FROM studiolead s
                JOIN worklogs w ON s.sctask = w.sctaskid
                WHERE s.changeid = '${changeid}'
            `;
        } else {
            // If changeid is blank, fetch all track logs for the given sctask
            sqlQuery = `
                SELECT s.sctask, w.sender, w.note, w.doclink, w.createddate 
                FROM studiolead s
                JOIN worklogs w ON s.sctask = w.sctaskid
                WHERE s.sctask = '${sctask}'
            `;
        }

        const result: any = await sql.query(sqlQuery);
        let data = result.rows;

        console.log(data);

        // If changeid is provided, group the data by sctask and sort each array by createddate in descending order
        const groupedData: any = {};

        data.forEach(row => {
            const { sctask, note, doclink, sender, createddate } = row;
            if (!groupedData[sctask]) {
                groupedData[sctask] = [];
            }
            groupedData[sctask].push({ note, sender, doclink, createddate });
        });

        // Sort each array by createddate in descending order
        Object.keys(groupedData).forEach(sctask => {
            groupedData[sctask].sort((a, b) => new Date(b.createddate).getTime() - new Date(a.createddate).getTime());
        });

        return NextResponse.json({ success: true, result: groupedData }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error }, { status: 500 });
    }
}
