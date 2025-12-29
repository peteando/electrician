// src/lib/content.ts

export const site = {
  brand: {
    name: "Sparkies Electrical",
    tagline: "Fast, tidy, reliable electricians",
    logoText: "Northside Electrical", // or omit if using an image logo
  },

  nav: [
    { label: "Services", href: "#services" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    title: "Electrical work done right — the first time.",
    subtitle:
      "Same-week bookings, upfront pricing, clean workmanship. Serving Melbourne’s inner suburbs.",
    primaryCta: { label: "Get a Quote", href: "#contact" },
    secondaryCta: { label: "Call Now", href: "tel:+61400111222" },
    trust: ["Licensed & insured", "Upfront pricing", "Clean + punctual"],
  },

   about: {
    id: "about",
    eyebrow: "About",
    title: "About Us",
    text:"With over 10 years of experience, we deliver electrical work that’s safe, tidy, and built to last. From small repairs to full installations, we help homeowners and businesses get the job done properly the first time. Our team is licensed, reliable, and committed to clear communication and quality workmanship — no shortcuts, no surprises.",
    subtitle:
      "We’re the kind of crew that shows up on time, cleans up properly, and explains what we’re doing — without upselling.",
    bullets: [
      "Same-week bookings when possible",
      "Upfront pricing and clear options",
      "Tidy workmanship (shoe covers, vacuum, no mess)",
      "Licensed, insured, and compliant",
    ],
    stats: [
      { label: "Avg response time", value: "1–2 hrs" },
      { label: "Jobs completed", value: "500+" },
      { label: "Return customers", value: "High" },
    ],
  },

  services: {
    title: "Our Services",
    subtitle: "The common jobs we handle every week.",
    items: [
      {
        title: "Switchboards & safety checks",
        description: "Switchboard upgrades, RCD checks, compliance and safety testing.",
      },
      {
        title: "Lighting & fans",
        description: "Downlights, pendants, outdoor lighting, ceiling fans and dimmers.",
      },
      {
        title: "Power points & circuits",
        description: "New outlets, dedicated circuits, kitchen upgrades, fault finding.",
      },
      {
        title: "Emergency callouts",
        description: "Urgent faults and power issues — quick response when it matters.",
      },
    ],
  },

  faq: {
  id: "faq",
  title: "Frequently Asked Questions",
  items: [
    {
      question: "Do you provide quotes before starting work?",
      answer:
        "Yes. We provide clear, upfront pricing before any work begins so you know exactly what to expect. If anything changes once we’re on site, we’ll discuss it with you first.",
    },
    {
      question: "Are you licensed and insured?",
      answer:
        "Yes. All work is carried out by fully licensed and insured electricians and complies with current Australian safety standards.",
    },
    {
      question: "What areas do you service?",
      answer:
        "We service Melbourne’s inner suburbs and surrounding areas. If you’re unsure whether we cover your location, feel free to get in touch.",
    },
    {
      question: "Do you offer emergency callouts?",
      answer:
        "Yes. We offer emergency electrical callouts for urgent faults and power issues. Availability can vary, so contact us as soon as possible.",
    },
    {
      question: "What types of electrical work do you do?",
      answer:
        "We handle most residential and small commercial electrical work, including lighting, power points, switchboards, safety checks, fault finding, and general maintenance.",
    },
    {
      question: "How quickly can you book me in?",
      answer:
        "In many cases we can offer same-week bookings. Timeframes depend on the job and availability, but we’ll always give you a clear estimate.",
    },
    {
      question: "Will you clean up after the job?",
      answer:
        "Yes. We take pride in tidy workmanship and always clean up before we leave — no mess left behind.",
    },
    {
      question: "Do you guarantee your work?",
      answer:
        "Yes. All workmanship is backed by a guarantee, and we’re happy to address any concerns after the job is completed.",
    },
  ],
},

  testimonials: {
  title: "What Our Clients Say",
  items: [
    {
      name: "Jess, Brunswick",
      quote:
        "On time, explained everything clearly, and left the place spotless. Highly recommend.",
    },
    {
      name: "Tom, South Yarra",
      quote:
        "Quick quote, fair price, and the work was super tidy. Will use again.",
    },
    {
      name: "Aisha, St Kilda",
      quote:
        "Found the fault fast and fixed it the same day. Really professional.",
    },
    {
      name: "Mark, Coburg",
      quote:
        "Showed up when they said they would and got the job done properly. No shortcuts.",
    },
    {
      name: "Emily, Fitzroy",
      quote:
        "Clear pricing, friendly service, and everything works perfectly now.",
    },
    {
      name: "Daniel, Northcote",
      quote:
        "Explained the options without pushing anything. Really appreciated that.",
    },
    {
      name: "Sarah, Carlton",
      quote:
        "Neat work, good communication, and no mess left behind.",
    },
    {
      name: "Liam, Richmond",
      quote:
        "Booked in quickly and fixed an issue others couldn’t. Solid experience.",
    },
    {
      name: "Priya, Hawthorn",
      quote:
        "Professional from start to finish. Would recommend to friends.",
    },
    {
      name: "Chris, Footscray",
      quote:
        "Good advice, fair price, and the job was done right the first time.",
    },
  ],
},


  cta: {
    title: "Need an electrician this week?",
    subtitle: "Tell us what you need and we’ll get back to you fast.",
    cta: { label: "Request a Quote", href: "#contact" },
  },

  contact: {
    title: "Contact",
    phone: "+61 400 111 222",
    email: "hello@sparkieselectrical.com.au",
    areas: ["Brunswick", "Fitzroy", "Carlton", "Richmond", "St Kilda"],
    form: {
      fields: [
        { name: "name", label: "Name", placeholder: "Your name" },
        { name: "email", label: "Email", placeholder: "you@email.com" },
        { name: "suburb", label: "Suburb", placeholder: "e.g. Brunswick" },
        { name: "message", label: "Message", placeholder: "What do you need done?" },
      ],
      submitLabel: "Send",
      helperText: "We usually reply within a few hours.",
    },
  },

  footer: {
    smallPrint: "© " + new Date().getFullYear() + " Sparkies Electrical. All rights reserved.",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
} 
