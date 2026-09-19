import ArticleCard from "./ArticleCard";

function Articles() {
  const articles = [
    {
      image: "/images/image9.png",
      title: "The Role of Artificial Intelligence in Everyday Life",
      description:
        "Artificial intelligence is becoming an important part of everyday life, from recommendation systems to smart assistants.",
      author: "Yashika Gupta",
      rating: "4.8"
    },
    {
      image: "/images/image10.png",
      title: "Why Learning to Code Matters",
      description:
        "Learning programming helps develop problem-solving skills and provides a foundation for building digital solutions.",
      author: "Yashika Gupta",
      rating: "4.9"
    },
    {
      image: "/images/image11.png",
      title: "The Importance of Data in Technology",
      description:
        "Data plays an important role in modern technology and helps organisations make informed decisions.",
      author: "Yashika Gupta",
      rating: "4.7"
    }
  ];

  return (
    <section id="articles" className="py-14 px-10 bg-slate-50">
      <h2 className="text-center text-2xl font-bold text-[#12203A] mb-8 tracking-wide">
        Featured Articles
      </h2>

      <div className="flex flex-wrap justify-center gap-12">
        {articles.map((article) => (
          <ArticleCard
            key={article.title}
            image={article.image}
            title={article.title}
            description={article.description}
            author={article.author}
            rating={article.rating}
          />
        ))}
      </div>

      <button className="block mx-auto mt-8 px-5 py-2 rounded-full bg-slate-300 text-[#12203A] text-sm hover:bg-[#2BB7A5] hover:text-white transition">
        See all articles
      </button>
    </section>
  );
}

export default Articles;