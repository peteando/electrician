// import { site } from "@/lib/content";

// export default function Services() {
//   const services = [
//     {
//       title: "Garden Design",
//       description: "Custom designs to elevate your outdoor living space.",
//     },
//     {
//       title: "Lawn Care & Maintenance",
//       description: "Regular maintenance to keep your garden healthy and vibrant.",
//     },
//     {
//       title: "Paving & Stonework",
//       description: "Beautiful, durable pathways, patios, and stone features.",
//     },
//     {
//       title: "Hedging & Pruning",
//       description: "Expert trimming to keep your garden tidy and stylish.",
//     },
//   ];

//   return (
//     <section className="py-20">
//       <h2 className="text-3xl font-bold text-center mb-12">{site.services.title}</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto px-6">
//         {site.services.items.map((s) => (
//           <div key={s.title} className="p-6 bg-white rounded-xl shadow">
//             <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
//             <p className="text-gray-600">{s.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import { site } from "@/lib/content";
import { FaPlug, FaLightbulb, FaBolt, FaTools } from "react-icons/fa";

export default function Services() {
  const icons = [FaPlug, FaLightbulb, FaBolt, FaTools];

  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">
        {site.services.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto px-6">
        {site.services.items.map((s, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div
              key={s.title}
              className="p-6 bg-white rounded-xl shadow hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
              </div>
              <p className="text-gray-600">{s.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

