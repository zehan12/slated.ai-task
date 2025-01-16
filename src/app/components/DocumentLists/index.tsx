"use client";

import Link from "next/link";

export const DocumentLists = ({ documents }: any) => {

    function removeSpaces(url: string) {
        return encodeURIComponent(decodeURIComponent(url).replace(/\s+/g, ''));
    }

    return (<>
        <table className="w-full border-collapse border border-gray-500">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {
                    documents.map((doc: any, idx: number) => (
                        <tr key={idx}>
                            <td>
                                <Link href={`docs/${doc.id}`} >{doc.name}</Link>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>)
}