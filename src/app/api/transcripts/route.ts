import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";

export async function GET() {
    const directoryPath = path.join(
        process.cwd(),
        "/src/app/transcripts/files"
    );
    const files = fs.readdirSync(directoryPath);

    const transcripts = files.map((filename) => {
        const filePath = path.join(directoryPath, filename);
        const content = fs.readFileSync(filePath, "utf-8");
        return {
            id: filename,
            name: filename.replace(".text", ""),
            text: content,
        };
    });
    return Response.json({ transcripts });
}
