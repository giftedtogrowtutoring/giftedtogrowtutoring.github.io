export interface FaqEntry {
  id: string;
  question: string;
  answer: string;
  aliases?: string[];
}

// Array order is meaningful: the first 5 entries surface as suggested-question
// pills in the chat opening (grades, location, cost, Step Up, getting started).
export const faq: readonly FaqEntry[] = [
  {
    id: "what-grades",
    question: "What grades do you tutor?",
    answer:
      "I work with kids in kindergarten through 6th grade — that's where I spent 25 years teaching, and where I know I can help most. I'm planning to expand to middle and high school down the road.",
    aliases: [
      "what ages do you teach",
      "do you tutor elementary",
      "do you tutor middle school",
      "what grade levels",
    ],
  },
  {
    id: "location",
    question: "Where are you located?",
    answer:
      "I serve families in Sarasota and Bradenton, Florida. I tutor in your home, at the library, or online — whichever works best for your family.",
    aliases: [
      "where do you tutor",
      "do you come to my house",
      "are you in sarasota",
      "what cities do you serve",
    ],
  },
  {
    id: "pricing",
    question: "How much does tutoring cost?",
    answer:
      "1:1 sessions are $60–$75, 2:1 semi-private is $45–$55 per student, and small groups of 3–4 students are $35–$45 per student. Homeschool partnerships are quote-based — let's talk about what you need.",
    aliases: [
      "what are your rates",
      "how much per hour",
      "tutoring price",
      "what do you charge",
    ],
  },
  {
    id: "step-up",
    question: "Do you accept Florida Step Up scholarships?",
    answer:
      "Yes — I'm a registered FL Step Up for Students Provider. If your family qualifies, there's no out-of-pocket cost.",
    aliases: [
      "do you take step up",
      "step up for students",
      "do you take scholarships",
      "do you take insurance",
    ],
  },
  {
    id: "get-started",
    question: "How do I get started?",
    answer:
      "Send me a note through the contact form on this site, or call me at (941) 586-8421. I respond to every message myself, usually the same day.",
    aliases: [
      "how do i sign up",
      "how do i schedule",
      "how do we begin",
      "where do i start",
    ],
  },
  {
    id: "subjects",
    question: "What subjects do you tutor?",
    answer:
      "Reading, writing, math, test prep (including FSA), executive function skills, and full homeschool support. I'm Reading Endorsed and ESOL Endorsed, so I'm well-prepared for kids who need extra support with either.",
    aliases: [
      "what do you teach",
      "which subjects",
      "what areas do you cover",
    ],
  },
  {
    id: "session-length",
    question: "How long is a session?",
    answer:
      "Fifty minutes, one-on-one. We start by getting your child comfortable, then work patiently on the thing that's been hard.",
    aliases: [
      "how long are sessions",
      "session duration",
      "how much time per lesson",
    ],
  },
  {
    id: "availability",
    question: "What are your availability hours?",
    answer:
      "After-school 3–7pm Monday through Thursday, and daytime hours Monday, Tuesday, and Thursday.",
    aliases: [
      "what times are you available",
      "when can we meet",
      "your schedule",
      "after school hours",
    ],
  },
  {
    id: "iep-504",
    question: "Do you work with kids who have IEPs or 504 plans?",
    answer:
      "Yes — and I'm grateful when families share those with me. Knowing how your child learns best helps me teach them better from day one.",
    aliases: [
      "iep",
      "504 plan",
      "special education",
      "learning differences",
    ],
  },
  {
    id: "teaching-style",
    question: "What's your teaching style?",
    answer:
      "Gentle, patient, and built around your specific child. I keep my caseload small on purpose so I can really know each of your children. No worksheets pulled from a binder — every session is built around them.",
    aliases: [
      "how do you teach",
      "your approach",
      "what method do you use",
    ],
  },
  {
    id: "free-consult",
    question: "Is the first conversation free?",
    answer:
      "Yes — a free 15-minute consultation to see if we're the right fit. No sales pitch, ever.",
    aliases: [
      "free consultation",
      "is the first call free",
      "do you offer a free trial",
    ],
  },
  {
    id: "online",
    question: "Do you offer online tutoring?",
    answer:
      "Yes, I tutor over Zoom for families who prefer it or who live a bit farther out.",
    aliases: [
      "do you tutor online",
      "virtual tutoring",
      "zoom tutoring",
      "remote tutoring",
    ],
  },
  {
    id: "reading-help",
    question: "Can you help with reading specifically?",
    answer:
      "Yes — reading is the doorway, and I love opening it. I'm Reading Endorsed, and I work with phonics, fluency, and comprehension depending on what your child needs.",
    aliases: [
      "reading tutor",
      "phonics help",
      "reading comprehension",
      "my child can't read",
    ],
  },
  {
    id: "math-help",
    question: "Can you help with math?",
    answer:
      "Yes. I teach the sense behind the steps, not just procedures — we use manipulatives, paper, and real-life problems so your child understands the \"why.\"",
    aliases: [
      "math tutor",
      "help with math",
      "struggling with math",
    ],
  },
  {
    id: "faith",
    question: "How is faith part of what you do?",
    answer:
      "Faith is part of who I am. It shows up as patience, as belief in each child's worth, as steadiness on the slow days. If that matters to you, you're in good company. If it doesn't, you're just as welcome — what your child gets from our sessions is the same either way.",
    aliases: [
      "christian tutor",
      "religious tutoring",
      "is this faith-based",
      "do you pray with kids",
    ],
  },
  {
    id: "homeschool",
    question: "Do you tutor homeschool families?",
    answer:
      "Yes. I work alongside homeschool parents to supplement curriculum, fill specific gaps, or take on subjects you'd rather not teach yourself.",
    aliases: [
      "homeschool support",
      "help homeschooling",
      "homeschool curriculum",
    ],
  },
  {
    id: "fsa-prep",
    question: "Can you help my child prepare for the FSA?",
    answer:
      "Absolutely. I prepare students for Florida state assessments with calm, confidence-building practice — never high-pressure cramming.",
    aliases: [
      "fsa prep",
      "florida state assessment",
      "test prep",
      "standardized test help",
    ],
  },
  {
    id: "response-time",
    question: "How quickly will you respond if I reach out?",
    answer:
      "I read every note myself, and I'll write back the same day — within one business day at the latest.",
    aliases: [
      "how fast do you respond",
      "when will you reply",
      "response time",
    ],
  },
  {
    id: "guarantee",
    question: "Will you guarantee a specific score improvement?",
    answer:
      "I won't make promises I can't keep. What I promise is patient, thoughtful teaching, and a child who feels seen. The growth follows.",
    aliases: [
      "do you guarantee results",
      "guaranteed improvement",
      "money back guarantee",
    ],
  },
  {
    id: "group-tutoring",
    question: "Do you tutor groups of friends together?",
    answer:
      "Yes — semi-private (2 students) and small groups (3–4 students) are both options, and they come at a lower per-student rate. Just reach out and we'll figure out the right setup.",
    aliases: [
      "group tutoring",
      "tutor with friends",
      "semi-private",
      "small group rate",
    ],
  },
  {
    id: "ages-not-tutored",
    question: "What ages do you NOT tutor?",
    answer:
      "Right now I'm focused on K–6. I may expand to older grades in the future, but I want to do K–6 really well first.",
    aliases: [
      "do you tutor high school",
      "do you tutor teenagers",
      "older kids",
    ],
  },
  {
    id: "phone",
    question: "Can I just call instead of filling out the form?",
    answer:
      "Of course. Jennifer's direct line is (941) 586-8421.",
    aliases: [
      "phone number",
      "can i call",
      "what's your number",
      "jennifer's phone",
    ],
  },
];

export const suggestedQuestions: readonly FaqEntry[] = faq.slice(0, 5);
