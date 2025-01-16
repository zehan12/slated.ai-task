"use client"
import { useEffect, useState } from "react";
import { DocumentLists } from "./components";
import { SearchBar } from "./components/SearchBar";
import { transcriptSearch } from "./utils/transcript-search";


export default function Home() {
  const [documents, setDocuments] = useState([]);
  const [searchResult, setSearchResults] = useState([]);

  useEffect(() => {
    async function fetchDocs() {
      const res = await fetch("/api/transcripts");
      const data = await res.json();
      setDocuments(data.transcripts);
      setSearchResults(data.transcripts);
    }

    fetchDocs();
  }, [])

  const handleSearch = async (query: string) => {
    if (!query) {
      setSearchResults(documents);
    } else {
      const results: any = await transcriptSearch(query, documents);
      setSearchResults(results);
    }
  }


  return (
    <main className="flex flex-col items-center">
      <h1>Transcript search app</h1>
      <div >
        <SearchBar onSearch={handleSearch} />
      </div>
      <DocumentLists documents={searchResult} />
    </main>
  );
}
