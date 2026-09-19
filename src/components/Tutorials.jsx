import TutorialCard from "./TutorialCard";

function Tutorials() {
  const tutorials = [
    {
      image: "/images/img12.png",
      title: "HTML & CSS for Beginners",
      description:
        "Learn the basics of HTML and CSS and create the structure and design of your first webpage.",
      username: "Yashika Gupta",
      rating: "4.9"
    },
    {
      image: "/images/img13.png",
      title: "Getting Started with JavaScript",
      description:
        "Learn JavaScript fundamentals such as variables, functions, conditions and basic webpage interaction.",
      username: "Yashika Gupta",
      rating: "4.8"
    },
    {
      image: "/images/img15.png",
      title: "Introduction to React",
      description:
        "Understand React components, props and how to build reusable and interactive user interfaces.",
      username: "Yashika Gupta",
      rating: "5.0"
    }
  ];

  return (
    <section id="tutorials" className="py-14 px-10 bg-white">
      <h2 className="text-center text-2xl font-bold text-[#12203A] mb-8 tracking-wide">
        Featured Tutorials
      </h2>

      <div className="flex flex-wrap justify-center gap-12">
        {tutorials.map((tutorial) => (
          <TutorialCard
            key={tutorial.title}
            image={tutorial.image}
            title={tutorial.title}
            description={tutorial.description}
            username={tutorial.username}
            rating={tutorial.rating}
          />
        ))}
      </div>

      <button className="block mx-auto mt-8 px-5 py-2 rounded-full bg-slate-300 text-[#12203A] text-sm hover:bg-[#2BB7A5] hover:text-white transition">
        See all tutorials
      </button>
    </section>
  );
}

export default Tutorials;