import React from 'react';
import { site } from "@/lib/content";

export default function Faq() {
  const faqs = [
    {
      question: "How quickly can I get approved for a solar loan?",
      answer: "Most approvals are completed within 24–48 hours once all required documents are submitted.",
    },
    {
      question: "Do I need good credit to qualify?",
      answer: "We offer options for a range of credit histories — we'll work with you to find the best solution.",
    },
    {
      question: "Can I use the loan to cover full installation costs?",
      answer: "Yes, our loans can cover solar panel purchase, installation, and any related equipment.",
    },
    {
      question: "Will applying for a solar loan affect my credit score?",
      answer: "No. The initial eligibility check is a soft inquiry and won’t impact your credit rating.",
    },
    {
      question: "Can I get advice before applying?",
      answer: "Definitely! Our team is here to answer your questions and help you choose the right loan.",
    },
  ];

  return (
    <section id={site.faq.id} className="py-20 bg-white">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-4xl font-bold text-slate-900">
          {site.faq.title}
        </h2>

        <div className="mt-10 space-y-8">
          {site.faq.items.map((item, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-slate-900">
                {item.question}
              </h3>
              <p className="mt-2 text-slate-700 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
