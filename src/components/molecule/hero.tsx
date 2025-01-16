import Button from "../atoms/buttons/button";

export default function Hero() {
    return (
      <section className="bg-light-blue text-center py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Your Name</h1>
          <p className="text-lg mb-6">
            Full-Stack Developer | Problem Solver
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="primary-button" text="View Resume" />
            <Button variant="secondary-link" text="Contact Me" href="#contact"/>
          </div>
        </div>
      </section>
    );
  }
  