import React from "react";
import JobCard from "../molecule/jobCard";

const WorkHistory = () => {
  const jobs = [
    {
      title: "Full-Stack Software Developer",
      company: "STEM Learning",
      date: "APR 2024 — CURRENT",
      description: "Developed an in-house user management application for over 20,000 users. Supported Agile development processes and ceremonies. Provided onboarding and support to new team members. Collaborated with UX/UI teams to ensure accessibility standards were met.",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Auth0", "Jest", "SQL"],
      links: []
    },
    {
      title: "Software Engineer",
      company: "William Hill",
      date: "AUG 2019 — APR 2024",
      description: "Developed new functionality in line with end-user and architectural requirements. Created unit tests to maintain high developmental and technical standards. Participated in and supported Agile development processes. Investigated, researched, and implemented coding solutions. Integrated a new content management system (CMS) to make the application more dynamic.",
      technologies: ["JavaScript", "React", "TypeScript", "Java", "Jest", "React Testing Library", "HTML", "CSS", "Sass", "SQL", "Serverless", "AWS Lambda", "AWS CloudFront", "Jira"],
      links: []
    },
    {
      title: "Software Developer in Test",
      company: "William Hill",
      date: "JUN 2022 — NOV 2022",
      description: "Developed automation tests to streamline feature deployments. Supported multi-environment release management and monitoring using CI/CD pipelines. Performed manual integration and regression testing of codebases.",
      technologies: ["TestCafe", "TypeScript", "SuperTest", "GitLab", "Splunk"],
      links: []
    }
  ];

  return (
    <section id="employment" className="py-10 max-w-3xl mx-auto px-3">
      <ul className="w-fullspace-y-6 space-x-1">
        {jobs.map((job, index) => (
          <li className="mx-1 my-3 group transition-all rounded-xl" key={index}>
          <JobCard key={index} job={job} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WorkHistory;
