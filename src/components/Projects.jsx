import ProjectCard from "./ProjectCard";

function Projects() {

  const projects = [

    {
      image: "/water.png",
      title: "Water Reminder",
      description:
        "A simple application designed to help users track their daily water intake and receive reminders to stay hydrated throughout the day."
    },

    {
      image: "/pro2.png",
      title: "Fruit Freshness Monitoring System",
      description:
        "A smart monitoring system using gas, weight, and temperature sensors to monitor fruit freshness and detect possible signs of spoilage."
    },

    {
      image: "/pro3.png",
      title: "Swimming Pool Cleaning Robot",
      description:
        "An Arduino UNO based project designed to assist with swimming pool cleaning using sensors for obstacle detection, water monitoring and automated cleaning."
    },

    {
      image: "/pro4.png",
      title: "Machine Learning Model Training",
      description:
        "A machine learning project focused on preparing datasets, training models, evaluating their performance and improving predictions."
    },

    {
      image: "/pro5.png",
      title: "Ethical Implications of AI & Algorithmic Bias",
      description:
        "An exploration of ethical issues in AI-driven database systems, focusing on privacy, data security, transparency, accountability and algorithmic bias."
    }

  ];

  return (
    <section
      id="work"
      className="bg-white py-14 px-10"
    >

      <h2 className="text-center text-2xl font-bold text-[#12203A] mb-10 tracking-wide">
        Here are some of my projects!
      </h2>

      <div className="flex flex-wrap justify-center gap-6">

        {projects.map((project) => (

          <ProjectCard
            key={project.title}
            image={project.image}
            title={project.title}
            description={project.description}
          />

        ))}

      </div>

    </section>
  );
}

export default Projects;