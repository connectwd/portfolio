const workHistory = [
    {
      title: "Software Engineer",
      company: "TechCorp Inc.",
      duration: "Jan 2020 - Present",
      responsibilities: [
        "Developed scalable web applications using React and Node.js.",
        "Collaborated with cross-functional teams to deliver high-quality software.",
        "Implemented CI/CD pipelines to streamline development workflows.",
      ],
    },
  ];
  
  export default function WorkHistory() {
    return (
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">Work History</h2>
          {workHistory.map((job, index) => (
            //make into a job card
            <div key={index} className="mb-8">
              <h3 className="text-xl font-bold">{job.title}</h3>
              <p className="text-gray-500">{job.company} | {job.duration}</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                {job.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }
  