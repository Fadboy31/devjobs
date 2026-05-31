import { useState } from "react";
import "./App.css";

import {
  Header,
  JobList,
} from "./components";

import { JOBS } from "./data/jobs";

export default function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <>
      <Header />

      <input
        type="text"
        placeholder="Search jobs..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <p>
        Searching for: {searchQuery}
      </p>

      <JobList jobs={JOBS} />
    </>
  );
}