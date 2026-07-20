export interface FaqEntry {
  id: string;
  question: string;
  answer: string;
  aliases?: string[];
}

// Array order is meaningful: the first 5 entries surface as suggested-question
// pills in the chat opening (grades, location, consultative approach, Step Up, getting started).
export const faq: readonly FaqEntry[] = [
  {
    id: "what-grades",
    question: "What grades do you tutor?",
    answer:
      "I work with K–6 students — the elementary years where I spent 25 years teaching and where I know I can help most.",
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
      "I serve families in Sarasota and Bradenton, Florida. Sessions are currently offered in person, in your home or in my workspace.",
    aliases: [
      "where do you tutor",
      "do you come to my house",
      "are you in sarasota",
      "what cities do you serve",
    ],
  },
  {
    id: "pricing",
    question: "Consultative approach",
    answer:
      "Gifted to Grow uses a consultative approach because every child’s needs are different. Cost is determined after we talk through your child’s goals, learning needs, schedule, and best tutoring format.",
    aliases: [
      "how much does tutoring cost",
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
      "Send me a note through the contact form on this site, or call me at (941) 586-8421. Jennifer will get back to you within 48 hours.",
    aliases: [
      "how do i sign up",
      "how do i schedule",
      "how do we begin",
      "where do i start",
    ],
  },

  {
    id: "tutoring-student-intake",
    question: "Where is the New Tutoring Student Welcome & Partnership Form?",
    answer:
      "The New Tutoring Student Welcome & Partnership Form is only for students who have already been accepted and scheduled for tutoring. It takes about 10 minutes and asks about the child’s strengths, needs, goals, interests, learning preferences, and anything the parent wants Jennifer to know. It also includes the Tutoring Partnership Agreement and rolling 90-day cancellation policy. New tutoring leads should contact Jennifer before completing this form; homeschool consulting and portfolio evaluations use separate forms.",
    aliases: [
      "student intake form",
      "tutoring intake form",
      "partnership form",
      "cancellation policy form",
      "new tutoring families",
      "complete student intake",
      "accepted and scheduled",
    ],
  },
  {
    id: "established-tutoring-family",
    question: "My child is already accepted and scheduled. What should I complete?",
    answer:
      "Since your child has already been accepted and scheduled, please complete the New Tutoring Student Welcome & Partnership Form before the first session. It takes about 10 minutes and gives you an opportunity to share your child’s strengths, needs, goals, interests, learning style, and anything else you would like Jennifer to know.",
    aliases: [
      "already scheduled for tutoring",
      "already accepted for tutoring",
      "first tutoring session form",
      "scheduled with jennifer",
      "onboarding form",
    ],
  },
  {
    id: "new-tutoring-lead-routing",
    question: "Should I complete the tutoring intake form if I am asking about availability?",
    answer:
      "The tutoring intake and partnership form is only for students who have already been accepted and scheduled. If you are still asking about tutoring availability, please contact Jennifer first.",
    aliases: [
      "asking about tutoring availability",
      "new tutoring lead",
      "can i fill out intake before accepted",
      "not scheduled yet",
      "availability request",
    ],
  },
  {
    id: "tutoring-partnership-agreement",
    question: "What is the tutoring partnership agreement?",
    answer:
      "Gifted To Grow Tutoring approaches tutoring as a partnership among Jennifer, the parent or guardian, the student, and, when appropriate, the classroom teacher. Instruction is tailored to the child’s individual strengths, needs, gifts, abilities, and learning style.",
    aliases: ["partnership agreement", "tutoring agreement", "parent agreement", "educational team"],
  },
  {
    id: "cancellation-policy",
    question: "What is the cancellation policy?",
    answer:
      "Families may cancel without a fee when they provide more than 24 hours’ notice and contact Jennifer directly. Cancellations or rescheduling requests made within 24 hours are charged at 50%. If three cancellations or rescheduling requests occur within any rolling 90-day period, the third occurrence is charged at 100%. Illnesses and family emergencies may be discussed directly with Jennifer and reviewed individually.",
    aliases: ["cancel session", "reschedule", "rolling 90 day", "no show", "cancellation fee"],
  },
  {
    id: "specific-cancellation-fee-review",
    question: "Will I be charged a cancellation fee for my situation?",
    answer:
      "Jennifer will need to review the specific circumstances with you directly. Please contact her as soon as possible so you can discuss the situation together.",
    aliases: ["will i be charged", "waive fee", "emergency exception", "calculate cancellations", "do i owe"],
  },

  {
    id: "homeschool-portfolio-evaluations",
    question: "Do you offer homeschool portfolio evaluations?",
    answer:
      "Gifted To Grow Tutoring offers in-person Florida homeschool portfolio evaluations with a Florida-certified teacher. Evaluations are held by appointment in the Bradenton/Sarasota area. Pricing is provided on a consultative basis. Use the separate Homeschool Portfolio Evaluation Intake Form to request an appointment. Appointment requests are not confirmed until Jennifer confirms them.",
    aliases: [
      "florida homeschool evaluations",
      "homeschool portfolio evaluations",
      "bradenton homeschool evaluations",
      "sarasota homeschool evaluations",
      "florida certified teacher evaluations",
      "homeschool portfolio reviewer",
      "do you do homeschool evaluations",
      "annual homeschool evaluation",
      "portfolio review",
    ],
  },
  {
    id: "homeschool-evaluation-cost",
    question: "How much do your homeschool services cost?",
    answer:
      "Homeschool services are customized to each family, so pricing is provided on a consultative basis. After learning more about your children’s needs and the type of support you are requesting, Gifted To Grow Tutoring will provide personalized recommendations and pricing.",
    aliases: [
      "portfolio evaluation price",
      "homeschool evaluation cost",
      "how much is a portfolio evaluation",
      "multiple children discount",
      "do you offer discounts for multiple children",
    ],
  },
  {
    id: "homeschool-evaluation-location",
    question: "Are evaluations in person or where are evaluations held?",
    answer:
      "Homeschool portfolio evaluations are held in person by appointment in the Bradenton/Sarasota area.",
    aliases: [
      "evaluation meeting format",
      "where are evaluations held",
      "where do portfolio evaluations happen",
      "evaluation appointment location",
    ],
  },
  {
    id: "homeschool-evaluation-materials",
    question: "What should I bring?",
    answer:
      "Please bring representative samples of your child's work from throughout the year, such as a reading list, writing samples, math work, projects, artwork, science activities, and optional photos of field trips or hands-on learning. Your portfolio does not need to be perfectly organized.",
    aliases: [
      "portfolio materials",
      "does my portfolio need to be perfectly organized",
      "what do i need for evaluation",
      "reading list writing samples math work projects artwork science photos",
    ],
  },
  {
    id: "homeschool-evaluation-after",
    question: "What happens after the evaluation?",
    answer:
      "After a satisfactory evaluation, Jennifer provides a signed evaluation letter for your family to submit to its Florida school district. Gifted To Grow Tutoring cannot provide legal advice or guarantee a satisfactory evaluation.",
    aliases: [
      "signed evaluation letter",
      "district letter",
      "after portfolio evaluation",
      "do you guarantee satisfactory evaluation",
      "legal advice homeschool evaluation",
    ],
  },
  {
    id: "subjects",
    question: "What subjects do you tutor?",
    answer:
      "Reading, writing, math, test readiness, executive function skills, and homeschool support. I'm Reading Endorsed and ESOL Endorsed, so I'm well-prepared for kids who need extra support with language and literacy.",
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
      "Both 60-minute and 30-minute sessions are available. We start by getting your child comfortable, then work patiently on the thing that's been hard.",
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
    id: "in-person-only",
    question: "Are sessions in person?",
    answer:
      "Yes. Tutoring is currently offered in person only, either in your home in Sarasota or Bradenton or in my workspace.",
    aliases: [
      "where do sessions happen",
      "can we meet at your workspace",
      "can you come to my home",
      "distance tutoring",
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
    question: "Do you work with homeschool families?",
    answer:
      "Yes. Gifted To Grow Tutoring provides personalized support for homeschool families, including family consultations, curriculum guidance, scheduling and planning support, academic needs consultations, tutoring, and Florida homeschool portfolio evaluations. Complete the Homeschool Family Intake Form or select the service you are interested in to get started.",
    aliases: [
      "homeschool support",
      "help homeschooling",
      "what homeschool services do you offer",
      "can i ask about more than one service",
      "can you help multiple children in one family",
    ],
  },

  {
    id: "homeschool-curriculum",
    question: "Can you help me choose curriculum?",
    answer:
      "Yes. Gifted To Grow Tutoring can help you review your current curriculum, compare options, identify materials that fit your child’s needs, and make adjustments when your current program is not working well. Complete the Homeschool Family Intake Form and select ‘Curriculum Guidance and Selection.’",
    aliases: ["homeschool curriculum help", "curriculum guidance", "curriculum consultant", "curriculum selection"],
  },
  {
    id: "homeschool-scheduling",
    question: "Can you help me create a homeschool schedule?",
    answer:
      "Yes. Scheduling support can include daily or weekly routines, subject rotations, planning for multiple children, and creating a realistic homeschool schedule that fits your family. Select ‘Homeschool Scheduling and Planning Support’ on the intake form.",
    aliases: ["homeschool scheduling help", "weekly homeschool plan", "daily homeschool routine", "planning support"],
  },
  {
    id: "homeschool-academic-needs",
    question: "Can you help me determine what my child needs academically?",
    answer:
      "Yes. Academic needs consultations help parents understand educational strengths, areas for growth, and helpful next steps such as tutoring or supplemental support. This is an educational consultation, not a medical, psychological, diagnostic, special education, or clinical evaluation.",
    aliases: ["academic needs consultation", "is this diagnostic", "do you diagnose", "special education testing"],
  },
  {
    id: "homeschool-request",
    question: "How do I request a homeschool consultation?",
    answer:
      "Visit the Homeschool Support Services page and choose the service you are interested in, or complete the Homeschool Family Intake Form. You can select more than one service and share information for multiple children in one request.",
    aliases: ["how do i request a consultation", "homeschool intake form", "request portfolio evaluation", "ask about more than one service"],
  },
  {
    id: "fsa-prep",
    question: "Can you help my child with test readiness?",
    answer:
      "Yes. I support test readiness with calm, confidence-building practice — never high-pressure cramming.",
    aliases: [
      "state assessment prep",
      "florida assessment",
      "test prep",
      "standardized test help",
    ],
  },
  {
    id: "parent-progress-updates",
    question: "How do parents receive progress updates?",
    answer:
      "Parents receive a quarterly progress report with a summary of their child’s growth, goals, and next steps. I’m also always available for progress updates at a parent’s request.",
    aliases: [
      "progress update",
      "progress updates",
      "progress report",
      "quarterly progress report",
      "parent updates",
      "how will i know my child is growing",
      "how do you communicate with parents",
      "parent communication",
    ],
  },
  {
    id: "response-time",
    question: "How quickly will you respond if I reach out?",
    answer:
      "Thanks for reaching out! Jennifer will get back to you within 48 hours.",
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
      "Yes — semi-private (2 students) and small groups (3–4 students) are both options. We’ll use a consultative approach to talk through each student’s needs, the best format, and the cost after consultation.",
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
      "Right now I'm focused on K–6 so I can serve elementary learners really well.",
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
