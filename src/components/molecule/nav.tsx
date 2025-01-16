"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "../atoms/buttons/button";
import { FiDownload } from "react-icons/fi";

const navItems = {
  "#about": { name: "About" },
  "#employment": { name: "Experience" },
  "#projects": { name: "Projects" },
  "#contact": { name: "Contact" },
};

// Debounce function to limit the rate of function execution
function debounce(func: Function, wait: number) {
  let timeout: NodeJS.Timeout;
  return function(...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.keys(navItems);
      let currentSection = "";
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      sections.forEach((section, index) => {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isLastSection = index === sections.length - 1;
          if (rect.top <= 500 && rect.bottom >= 0) {
            currentSection = section;
          } else if (isLastSection && scrollPosition >= documentHeight - 150) {
            currentSection = section;
          }
        }
      });
      console.log('currentSection', currentSection);
      setActiveSection(currentSection);
    };

    const debouncedHandleScroll = debounce(handleScroll, 20);

    window.addEventListener("scroll", debouncedHandleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []);

  return (
    <nav className="lg:mb-16 mb-12 fixed top-0 lg:relative lg:py-5 justify-evenly flex lg:flex-col md:items-center lg:gap-6 h-14 lg:bg-transparent sm:navBackground lg:shadow-none sm:w-fill-available lg:w-auto" aria-label="Main Navigation">
        <ul className="flex lg:flex-col gap-4 mx-2 md:mt-0 md:ml-auto">
          {Object.entries(navItems).map(([path, { name }]) => (
            <li
              key={path}
              className={`flex items-center px-2 transition-all duration-200 ${
                activeSection === path ? "lg:border-l-8 border-b-8 lg:border-b-0" : "border-gray-400 lg:border-l-4 border-b-4 lg:border-b-0"
              }`}
            >
              <Link
                href={path}
                className="dark:hover:text-neutral-200 flex align-middle relative"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
    </nav>
  );
}