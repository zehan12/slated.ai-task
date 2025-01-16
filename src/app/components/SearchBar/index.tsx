"use client";

import { useState } from "react";

export const SearchBar = ({ onSearch }: any) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (value: string) => {
    setQuery(value);
    onSearch(value);
  }
  return (
    <div className="flex flex-col">
      <label>Search Bar</label>
      <input
        onChange={(e) => handleChange(e.target.value)}
        value={query}
        placeholder="Search Documents..."
        type="text"
        className="border border-gray-400 px-4 py-2 rounded"
      />
      <p>{query}</p>
    </div>
  )
}