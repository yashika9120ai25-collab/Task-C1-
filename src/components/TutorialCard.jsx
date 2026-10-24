function TutorialCard({
  image,
  title,
  description,
  username,
  rating
}) {
  return (
    <article className="w-60">

      <img
        src={image}
        alt={title}
        className="w-full h-36 object-cover border-2 border-slate-800"
      />

      <h3 className="text-[#12203A] font-semibold text-base mt-2 mb-1">
        {title}
      </h3>

      <p className="text-slate-600 text-sm leading-relaxed mb-2">
        {description}
      </p>

      <p className="text-sm text-slate-700">
        ⭐ {rating} &nbsp; {username}
      </p>

    </article>
  );
}

export default TutorialCard;