function Gallery() {

  const images = [
    "image1.jpeg",
    "image2.jpeg",
    "image3.jpeg",
    "image4.jpeg",
    "image5.jpeg",
    "image6.jpeg",
    "image7.jpeg",
    "image8.jpeg"
  ];

  return (
    <section className="py-14 px-10 bg-slate-50">

      <hr className="w-24 border-t-2 border-slate-200 mx-auto mb-8" />

      <h2 className="text-center text-2xl font-bold text-[#12203A] mb-8">
        Gallery
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

        {images.map((image, index) => (

          <img
            key={image}
            src={`/images/${image}`}
            alt={`Gallery image ${index + 1}`}
            className="
              w-full
              h-48
              object-cover
              rounded-lg
              hover:scale-105
              transition
            "
          />

        ))}

      </div>

    </section>
  );
}

export default Gallery;