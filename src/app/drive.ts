// import { google } from "googleapis";
// import path from "path";

// const SERVICE_ACCOUNT_KEY_FILE = path.join(
//     process.cwd(),
//     "service-account.json"
// );

// const auth = new google.auth.GoogleAuth({
//     keyFile: SERVICE_ACCOUNT_KEY_FILE,
//     scope: ["https://googleapis.com/auth/drive.readonly"],
// });

// const drive = google.drive({ version: "v3", auth });

// export const getFiles = async (folderId: string) => {
//     const res = await drive.files.list({
//         q: `${folderId} in parents`,
//         fields: "files(id, name)",
//     }) as any;
//     return res.data.files;
// };
