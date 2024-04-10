import { MetadataRoute } from "next";
import { sql } from '@vercel/postgres';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Retrieve blog data from PostgreSQL database
    var sqlQuery = 'select id, updated from blog where 1 = 1'

    try {
        const result: any = await sql.query(sqlQuery);

        const blogs = result.rows

        // Generate URLs for blogs and add them to the sitemap
        const sitemap = blogs.map((blog) => {
            const url = `https://mythvortex.com/blog/${blog.id}`;
            const lastModified = new Date(blog.updated); // Assuming you have a last_modified field in your database
            return {
                url,
                lastModified,
            };
        });

        // Add other static URLs to the sitemap
        sitemap.push(
            {
                url: "https://mythvortex.com",
                lastModified: new Date(),
                changeFrequency: "weekly",
                priority: 1,
            },
            {
                url: "https://mythvortex.com/careers",
                lastModified: new Date(),
                changeFrequency: "weekly",
                priority: 0.6,
            },
            {
                url: "https://mythvortex.com/workflow",
                lastModified: new Date(),
                changeFrequency: "weekly",
                priority: 0.7,
            },
            {
                url: "https://mythvortex.com/contact",
                lastModified: new Date(),
                changeFrequency: "weekly",
                priority: 0.8,
            },
            {
                url: "https://mythvortex.com/blog",
                lastModified: new Date(),
                changeFrequency: "weekly",
                priority: 0.9,
            }
        );

        // Add other URLs here
        return sitemap;
    } catch (error) {
        console.error("Error generating sitemap:", error);
        // Handle error here
        throw error; // Rethrow the error to be caught by the caller
    }
}
