"use client"
import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = {
  "#about": { name: "Who am I?" },
  "#employment": { name: "Experience" },
  "#projects": { name: "Projects" },
  "#contact": { name: "Contact" },
  "jake_owen_cv.pdf": { name: "CV"},
};

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
          if (rect.top <= 600 && rect.bottom >= 0) {
            currentSection = section;
          } else if (isLastSection && scrollPosition >= documentHeight - 150) {
            currentSection = section;
          }
        }
      });
      setActiveSection(currentSection);
    };

    const debouncedHandleScroll = debounce(handleScroll, 20);

    window.addEventListener("scroll", debouncedHandleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []);

  return (
    <nav className="lg:mb-16 mb-12 fixed top-0 lg:relative lg:py-5 navBackground justify-evenly flex lg:flex-col md:items-center lg:gap-6 h-14 lg:h-auto lg:bg-transparent  lg:shadow-none sm:w-fill-available lg:w-auto" aria-label="Main Navigation">
        <ul className="flex lg:flex-col md:mt-0 md:ml-auto lg:gap-4 w-fill-available">
          {Object.entries(navItems).map(([path, { name }]) => (
            <li
              key={path}
              className={`flex text-sm lg:text-base lg:pl-3 items-center px-auto justify-center lg:justify-start transition-all duration-200 grow navItem ${
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