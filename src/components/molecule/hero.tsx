export default function Hero() {
    return (
      <section className="bg-light-blue text-center py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Your Name</h1>
          <p className="text-lg text-gray-700 mb-6">
            Full-Stack Developer | Problem Solver
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/resume.pdf"
              className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="border border-blue-500 text-blue-500 py-2 px-6 rounded hover:bg-blue-100"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    );
  }
  