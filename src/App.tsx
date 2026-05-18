import Header from "./components/Header";
import JobCard from "./components/JobCard";
// @ts-ignore: Allow importing CSS without type declarations
import "./App.css";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <JobCard />
        <JobCard />
        <JobCard />
      </main>
    </>
  );
}