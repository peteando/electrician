import { site } from "@/lib/content";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah T.",
      text: "Absolutely transformed our backyard. Professional, friendly, and incredibly skilled!",
    },
    {
      name: "Daniel R.",
      text: "Reliable service and stunning workmanship. Highly recommend!",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">{site.testimonials.title}</h2>

      <div className="max-w-4xl mx-auto px-6 space-y-6">
        {site.testimonials.items.map((t, i) => (
          <div
            key={i}
            className="p-6 bg-green-50 rounded-xl shadow text-center"
          >
            <p className="text-gray-800 mb-3 italic">"{t.quote}"</p>
            <span className="font-semibold text-green-700">{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
