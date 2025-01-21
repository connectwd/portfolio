"use client"
import React from "react";
import { metaData, socialLinks } from "src/config";
import SocialLinks from "./linkGroups";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <small className="block lg:mt-24 lg:mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <time>© {YEAR}</time>{" "}
      <a
        className="no-underline text-wrap"
        href={socialLinks.linkedin.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {metaData.title}
      </a>
    </small>
  );
}
