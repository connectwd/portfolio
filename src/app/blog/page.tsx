import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "Nextfolio Blog",
};

export default function BlogPosts() {

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Our Blog</h1>
      <div>
        <h3>No Blogs Yet</h3>
      </div>
    </section>
  );
}
