import type { Job } from "../types";

export const JOBS: Job[] = [
  {
    id: 1,
    title: "Frontend Engineer",
    company: "Stripe",
    location: "Remote — US",
    isRemote: true,
  },

  {
    id: 2,
    title: "React Developer",
    company: "Vercel",
    location: "Remote — Global",
    salary: "$110k–$140k",
    isRemote: true,
    postedAt: "5h ago",
  },

  {
    id: 3,
    title: "UI Engineer",
    company: "Airbnb",
    location: "San Francisco, CA",
    salary: "$130k–$160k",
    isRemote: false,
    postedAt: "1d ago",
  },

  {
    id: 4,
    title: "TypeScript Developer",
    company: "Microsoft",
    location: "Remote — US",
    isRemote: true,
  },

  {
    id: 5,
    title: "Web Developer",
    company: "Shopify",
    location: "Ottawa, Canada",
    salary: "$90k–$120k",
    isRemote: false,
    postedAt: "1w ago",
  },
];