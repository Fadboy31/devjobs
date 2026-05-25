import type { Job } from "../types";

export const JOBS: Job[] = [
  {
    id: 1,
    title: "Frontend Engineer",
    company: {
      name: "Stripe",
      logo: "https://logo.clearbit.com/stripe.com",
      website: "https://stripe.com",
    },
    location: "Remote — US",
    isRemote: true,
  },
  {
    id: 2,
    title: "React Developer",
    company: {
      name: "Vercel",
      logo: "https://logo.clearbit.com/vercel.com",
    },
    location: "Remote — Global",
    salary: "$110k–$140k",
    isRemote: true,
    postedAt: "5h ago",
  },
  {
    id: 3,
    title: "UI Engineer",
    company: {
      name: "Airbnb",
    },
    location: "San Francisco, CA",
    salary: "$130k–$160k",
    isRemote: false,
    postedAt: "1d ago",
  },
];