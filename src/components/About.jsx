function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center py-16 px-6 text-center"
    >

      <img
        src="/Portfolio.jpeg"
        alt="Profile photo"
        className="w-28 h-28 rounded-full object-cover border-4 border-[#2BB7A5]/40 mb-5"
      />

      <p className="text-[#12203A] font-medium text-sm tracking-wide mb-3">
        B.E. Student · Specialisation in AI & ML
      </p>

      <p className="text-slate-500 text-base max-w-md leading-relaxed mb-6">
        I'm a Bachelor of Engineering student specialising in
        Artificial Intelligence and Machine Learning. I like turning
        messy data into models that actually make decisions; from
        classroom experiments to side projects I build for fun.
      </p>

      <hr className="w-24 border-t-2 border-slate-200" />

    </section>
  );
}

export default About;