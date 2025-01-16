import { readFileSync } from "fs";
import path from "path"

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const id = (await params).id

    const formattedStr = id.replace(/%20/g, " ")
        .replace(/%2C/g, ",")


    const dirPath = path.join(process.cwd(), "/src/app/transcripts/files")
    const filePath = path.join(dirPath, formattedStr);
    const content = readFileSync(filePath, "utf-8");

    return (
        <div className="">
            {formattedStr}
            {content}
        </div>
    )
}


