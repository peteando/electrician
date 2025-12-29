// import React from 'react';
// import { site } from "@/lib/content";

// export default function Faq() {
//   const faqs = [
//     {
//       question: "How quickly can I get approved for a solar loan?",
//       answer: "Most approvals are completed within 24–48 hours once all required documents are submitted.",
//     },
//     {
//       question: "Do I need good credit to qualify?",
//       answer: "We offer options for a range of credit histories — we'll work with you to find the best solution.",
//     },
//     {
//       question: "Can I use the loan to cover full installation costs?",
//       answer: "Yes, our loans can cover solar panel purchase, installation, and any related equipment.",
//     },
//     {
//       question: "Will applying for a solar loan affect my credit score?",
//       answer: "No. The initial eligibility check is a soft inquiry and won’t impact your credit rating.",
//     },
//     {
//       question: "Can I get advice before applying?",
//       answer: "Definitely! Our team is here to answer your questions and help you choose the right loan.",
//     },
//   ];

//   return (
//     <section id={site.faq.id} className="py-20 bg-gray-100">
      

//       <div className="grid grid-cols-2  gap-10 max-w-7xl mx-auto">
//             <div>
//         <h1 className='text-3xl text-cyan-950 font-bold  mb-4'>Frequently Asked Questions</h1>
//         <p className="mb-6 text-cyan-950">welcome to our FAQ section. Here you'll find answers to some of the most common question our customers
//           ask about our products and services
//         </p>
        
//         </div>
//         <div className='rounded-xl bg-white shadow p-10 '>
//             {site.faq.items.map((item, index) => (
//             <div key={index}>
//               <h3 className="text-lg font-semibold text-slate-900">
//                 {item.question}
//               </h3>
//               <p className="mt-2 text-slate-700 leading-relaxed">
//                 {item.answer}
//               </p>
//             </div>
//           ))}
//         </div>
//         </div>
//     </section>
//   );
// }

import React from "react";
import { site } from "@/lib/content";

export default function Faq() {
  return (
    <section id={site.faq.id} className="py-20 bg-gray-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mr-10">
            <h2 className="text-3xl text-cyan-950 font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-cyan-950">
              Welcome to our FAQ section. Here you&apos;ll find answers to common questions.
            </p>
          </div>

          <div className="rounded-xl bg-white shadow p-6 md:p-10">
            <div className="space-y-3">
              {site.faq.items.map((item, index) => (
                <details
                  key={index}
                  className="group rounded-lg border border-slate-200 p-4"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="text-lg font-semibold text-slate-900">
                      {item.question}
                    </span>

                    {/* plus icon that turns into x */}
                    <span className="relative h-5 w-5 shrink-0">
                      <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-slate-500" />
                      <span className="absolute left-1/2 top-0 h-5 w-0.5 -translate-x-1/2 bg-slate-500 transition-transform duration-200 group-open:rotate-90" />
                    </span>
                  </summary>

                  <div className="mt-3 text-slate-700 leading-relaxed">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
