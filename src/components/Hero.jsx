function Hero() {
  return (
    <section
      className="relative group"
      tabIndex="0"
    >

      <img
        src="/img1.jpg"
        alt="Banner of Portfolio"
        className="w-full h-96 object-cover object-center"
      />

      <div
        className="
          absolute bottom-0 left-0 w-full
          bg-[#12203A]/80
          text-white
          text-center
          text-2xl
          font-semibold
          tracking-wide
          py-5
          opacity-0
          translate-y-3
          group-hover:opacity-100
          group-hover:translate-y-0
          group-focus-within:opacity-100
          group-focus-within:translate-y-0
          transition-all
          duration-300
        "
      >
        Hey, I'm Yashika Gupta
      </div>

    </section>
  );
}

export default Hero;