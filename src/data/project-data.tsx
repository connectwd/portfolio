export interface Project {
  title: string;
  description: string;
  extraDescription?: string;
  technologies: string[] | [];
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built in Next.js.",
    extraDescription: "This project was created to showcase my skills and experience as a software developer. It was built using Next.js and Vercel as speed to production was a key requirement.",
    technologies: ["Next.js", "Tailwind CSS", "Vercel", "AI Automation"],
    image: "/opengraph-image.png",
    link: "portfolio-connectedwds-projects.vercel.app",
  },
  {
    title: "GainzClub",
    description: "A React leanding page made to drive users to mint NFTs on the Solana blockchain.",
    extraDescription: "This project marked my first experience building and deploying a complete web application, providing valuable insights into the complexities of full-stack development and deployment processes.",
    technologies: ["React", "CSS", "GitHub Pages", "Firebase"],
    image: "/photos/gainzclub.png",
    link: "https://gainzclub.xyz",
  },
  {
    title: "Compound Interest Calculator",
    description: "A free to use to calulator to help you understand the power of compound interest.",
    extraDescription: "This project was created to help fill a need for a tool that could help users see how their saving were gaining with a focus on how each deposit gains interest over time.",
    technologies: ["React", "HTML", "CSS", "GitHub Pages"],
    image: "/photos/interesttool.png",
    link: "https://compoundinteresttools.co.uk",
  },
];

export type jobLinks = {
  name: string
  url: string
}

export interface Jobs  {
  title: string
  company: string
  date: string
  description: string,
  technologies: string[],
  links: jobLinks[]
}

export const jobs: Jobs[] = [
  {
    title: "Full-Stack Software Developer",
    company: "STEM Learning",
    date: "APR 2024 — CURRENT",
    description: "Developed an in-house user management application for over 20,000 users. Supported Agile development processes and ceremonies. Provided onboarding and support to new team members. Collaborated with UX/UI teams to ensure accessibility standards were met.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Auth0", "Jest", "SQL"],
    links: [{ name: "STEM Learning", url: "https://www.stem.org.uk"}]
  },
  {
    title: "Software Engineer",
    company: "William Hill",
    date: "AUG 2019 — APR 2024",
    description: "Developed new functionality in line with end-user and architectural requirements. Created unit tests to maintain high developmental and technical standards. Participated in and supported Agile development processes. Investigated, researched, and implemented coding solutions. Integrated a new content management system (CMS) to make the application more dynamic.",
    technologies: ["JavaScript", "React", "TypeScript", "Java", "Jest", "React Testing Library", "HTML", "CSS", "Sass", "SQL", "Serverless", "AWS Lambda", "AWS CloudFront", "Jira"],
    links: [{ name: "William Hill", url: "https://www.williamhill.com/"}]
  },
  {
    title: "Software Developer in Test",
    company: "William Hill",
    date: "JUN 2022 — NOV 2022",
    description: "Developed automation tests to streamline feature deployments. Supported multi-environment release management and monitoring using CI/CD pipelines. Performed manual integration and regression testing of codebases.",
    technologies: ["TestCafe", "TypeScript", "SuperTest", "GitLab", "Splunk"],
    links: [{ name: "William Hill", url: "https://www.williamhill.com/"}]
  }
];