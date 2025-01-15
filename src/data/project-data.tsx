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
    title: "GainzClub",
    description: "Solana based NFT project.",
    extraDescription: "A full-stack application enabling users to mint NFTs on the Solana blockchain. This project marked my first experience building and deploying a complete web application, providing valuable insights into the complexities of full-stack development and deployment processes.",
    technologies: ["React", "CSS", "GitHub Pages", "Firebase"],
    image: "/photos/photo1.jpg",
    link: "https://gainzclub.xyz",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built in Next.js.",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    image: "/photos/photo2.jpg",
    link: "https://myportfolio.com",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built in Next.js.",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    image: "/photos/photo3.jpg",
    link: "https://myportfolio.com",
  },
];
