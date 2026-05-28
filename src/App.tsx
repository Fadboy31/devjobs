import "./App.css";

import {
  Header,
  JobList,
} from "./components";

import { JOBS } from "./data/jobs";

export default function App() {
  return (
    <>
      <Header />
      <JobList jobs={JOBS} />
    </>
  );
}