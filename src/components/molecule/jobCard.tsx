"use client"
import React from "react";
import TechBubble from "../atoms/bubbles/techBubble";

const JobCard = ({ job }) => {
  const { title, company, date, description, technologies, links } = job;

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  };

  return (
    <div id={``} className="group-hover:!opacity-100 group-hover:/list:opacity-50 group-hover group transition motion-reduce:transition-none rounded-lg p-2 my-2">
      <a
        href={links[0]?.url || "#employment"}
        target="_blank"
        rel="noopener noreferrer"
        className="peer cursor-progress"
      >
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm">{date}</p>
            <h2 className="text-xl font-semibold">
              {title} <span>· {company}</span>
            </h2>
          </div>
          {links.length > 0 && isValidUrl(links[0]?.url) && (
            <span className="text-blue-400 group-hover:underline inline grow text-right h-8 group-hover:text-lg transition-all motion-reduce:transition-none">
              ↗
            </span>
          )}
        </div>
        <p className="mt-4">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <TechBubble tech={tech} index={index} />
          ))}
        </div>
      </a>
    </div>
  );
};

export default JobCard;
