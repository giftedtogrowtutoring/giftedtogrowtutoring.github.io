// Single source of truth for business facts.
// Keep aligned with CLAUDE.md §6 "Critical Facts About Jennifer".

export const business = {
  name: "Gifted to Grow Tutoring",
  owner: "Jennifer Pollard",
  ownerCredentials: ["Certified PreK-6", "Reading Endorsed", "ESOL Endorsed"],
  yearsExperience: 25,
  email: "jennifer@giftedtogrowtutoring.com",
  phoneDisplay: "(941) 586-8421",
  phoneTel: "+19415868421",
  serviceArea: "Sarasota / Bradenton, Florida",
  description:
    "Personalized K–6 reading, writing, math, homeschool, private, and small-group tutoring for families in Sarasota and Bradenton, Florida.",
  areaServed: [
    "Sarasota",
    "Bradenton",
    "Lakewood Ranch",
    "Manatee County",
    "Sarasota County",
  ],
  serviceTypes: [
    "K–6 tutoring",
    "reading tutoring",
    "writing tutoring",
    "math tutoring",
    "homeschool support",
    "private tutoring",
    "semi-private tutoring",
    "small-group tutoring",
  ],
  city: "Sarasota",
  region: "FL",
  country: "US",
  url: "https://giftedtogrowtutoring.com",
  hours: "After-school 3-7pm Mon-Thu; Daytime Mon/Tue/Thu",
  grades: "K-6",
  stepUpProvider: true,
  modes: ["in-home", "library", "online (Zoom)"],
};

export const navLinks = [
  { href: "/approach/", label: "Philosophy" },
  { href: "/services/", label: "What we do" },
  { href: "/testimonials/", label: "Stories" },
  { href: "/about/", label: "About Jennifer" },
];
