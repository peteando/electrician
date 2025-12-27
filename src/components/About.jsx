import { site } from "@/lib/content";

export default function About() {
  return (
    <section className="py-20 bg-cyan-50 rounded-xl">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">{site.about.title}</h2>
          <p className="text-gray-700 mb-4">
            {site.about.text}
          </p>
          
        </div>

        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
          alt="Landscaping"
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}
