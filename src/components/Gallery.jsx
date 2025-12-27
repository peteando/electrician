export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  ];

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Recent Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto px-6">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Project"
            className="rounded-xl shadow-lg object-cover h-64 w-full"
          />
        ))}
      </div>
    </section>
  );
}
