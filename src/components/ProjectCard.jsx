function ProjectCard({
  image,
  title,
  description
}) {
  return (
    <div
      className="
        bg-slate-50
        rounded-xl
        shadow-md
        w-72
        overflow-hidden
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
      "
    >

      <img
        src={image}
        alt={title}
        className="w-full h-44 object-cover"
      />

      <div className="p-5">

        <h3 className="text-[#12203A] font-semibold text-base mb-2">
          {title}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-3">
          {description}
        </p>

        <a
          href="#contact"
          className="text-[#2BB7A5] text-sm font-medium hover:text-[#12203A] transition-colors"
        >
          View Project →
        </a>

      </div>

    </div>
  );
}

export default ProjectCard;