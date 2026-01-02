// import React from 'react';
// import Image from "next/image";
// import { site } from "@/lib/content";

// function Hero() {
  
//   return (
//     <section className="bg-green-800 py-20 bg-center bg-contain bg-no-repeat">
//       <div className="container mx-auto px-6 md:px-12">
//         <div className="flex flex-col md:flex-row items-center md:items-start">
          
//           {/* Left Column */}
//           <div className="md:w-1/2 text-left pr-10 mb-10 md:mb-0">
//             <h1 className="text-6xl font-bold text-white mt-40 leading-tight">
//               {site.hero.title}
//             </h1>
//             <h2 className="text-2xl mt-4 text-white leading-snug">
//               {site.hero.subtitle}
//             </h2>
//             <a
//               href="#contact"
//               className="inline-block mt-6 bg-amber-400 hover:bg-[#cc0000] text-lime-900 font-semibold py-3 px-6 rounded shadow-md transition"
//             >
//               Apply Now
//             </a>
//           </div>

//           {/* Right Column: Image */}
//           <div className="md:w-1/2 pl-10 flex justify-center">
//           <img src="/images/solar.png" alt="Description of image" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;

import React from 'react';
import { site } from "@/lib/content";

function Hero() {
  return (
    <section className="bg-cyan-800 py-20 bg-center bg-contain bg-no-repeat">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          
          {/* Left Column */}
          <div className="md:w-1/2 text-left pr-10 mb-10 md:mb-0">
            <h1 className="text-6xl font-bold text-white mt-40 leading-tight">
              {/* {site.hero.title} */}deploy test
            </h1>
            <h2 className="text-2xl mt-4 text-white leading-snug">
              {site.hero.subtitle}
            </h2>
            <div className="mt-6 flex flex-wrap gap-4">
  <a
    href="#contact"
    className="inline-flex items-center justify-center rounded-full bg-amber-400 hover:bg-[#cc0000] text-lime-900 font-semibold py-3 px-6 shadow-md transition"
  >
    0412 345 678
  </a>

  <a
    href="#contact"
    className="inline-flex items-center justify-center rounded-full bg-white hover:bg-[#cc0000] text-lime-900 font-semibold py-3 px-6 shadow-md transition"
  >
    REQUEST A QUOTE
  </a>
</div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="md:w-1/2 pl-10 flex justify-center">
            <form
              id="contact"
              className="w-full max-w-md bg-white rounded-lg shadow-lg pt-12 px-10 pb-6 space-y-10"
            >
              <h3 className="text-2xl text-center font-semibold text-cyan-800 mb-2">
                Get a Free Quote
              </h3>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="0412 345 678"
                  className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows="3"
                  className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-[#cc0000] text-white font-semibold py-3 px-6 rounded-full shadow-md transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;

