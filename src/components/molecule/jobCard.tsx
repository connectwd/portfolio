// JobCard.js
import React from "react";
import TechBubble from "../atoms/techBubble";

const JobCard = ({ job }) => {
  const { title, company, date, description, technologies, links } = job;

  return (
    <div className=" group-hover:!opacity-100 group-hover:/list:opacity-50 group-hover transition motion-reduce:transition-none p-5 shadow-inner-glow rounded-lg">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm">{date}</p>
          <h2 className="text-xl font-semibold">
            {title} <span>· {company}</span>
          </h2>
        </div>
        {links.length > 0 && (
          <a
            href={links[0]?.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            ↗
          </a>
        )}
      </div>
      <p className="mt-4">{description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {technologies.map((tech, index) => (
                <TechBubble tech={tech} index={index} />
            ))}
        </div>
        {links.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-sm"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobCard;
