import React from "react";
import JobCard from "../molecule/jobCard";
import { jobs } from "src/data/project-data";

const WorkHistory = () => {
  
  return (
    <section id="employment" className="pt-5 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold text-left mb-2 px-5 pb-3">Experience</h2>
      <ul className="w-fullspace-y-6 space-x-1 px-2">
        {jobs.map((job, index) => (
          <li className="mx-1 my-3 group transition-all rounded-xl" key={job.company + job.date}>
            
          <JobCard {...job}  />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WorkHistory;
