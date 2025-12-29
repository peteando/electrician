import { site } from "@/lib/content";

export default function About() {
  return (
    <section className="py-20  rounded-xl">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-cyan-950 ">Melbourne Residential and Commerical Electricians</h2>
          <p className="text-cyan-950 mb-4">
            At Northland Electrical we have been providing high-quality electrical services to Melbourne homes and businesses for over 35 years.
          </p>
          
        </div>

        <img
          src="images/van.jpg"
          alt="Landscaping"
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}
