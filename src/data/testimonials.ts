// Real testimonials only — never invent.
// Source: testimonials.txt (May 2026 emails from Jennifer's families).
// Bodies lightly trimmed for length; meaning preserved.

export interface Testimonial {
  body: string;
  sig: string;
  meta: string;
  full?: string; // optional unabridged version for /testimonials
}

export const testimonials: Testimonial[] = [
  {
    body:
      "Penelope and Lucas have improved tremendously in both math and reading since they began working with Jennifer. Their test results are a great reflection of the confidence they’ve gained with her support.",
    sig: "— Beatriz Tremols",
    meta: "Mother of two · Sarasota",
    full:
      "It has been an amazing experience having you as Penelope and Lucas's tutor. They have improved tremendously in both Math and Reading since they began working with you. Their test results are a great reflection of the confidence they've gained with your support. We look forward to continuing tutoring in July and throughout the next school year.",
  },
  {
    body:
      "We are so grateful for the support and care Ms. Pollard gave our daughter after we moved to a new state. She showed so much compassion, patience, and intelligence. Our daughter’s confidence has grown and her test grades have improved significantly.",
    sig: "— Theresa Giuliani",
    meta: "Elementary school family",
    full:
      "We are so grateful for the support and care Ms. Pollard gave our daughter after we moved to a new state. Starting at a new school was a big adjustment, but she showed so much compassion, patience, and intelligence throughout the entire process. She truly cares about her students and made learning feel comfortable and encouraging. Since working with her, our daughter's confidence has grown and test grades have improved significantly. She took the time to understand our child's needs and helped build strong academic skills in a positive way. I highly recommend her to any elementary school family looking for a caring, knowledgeable, and dedicated tutor.",
  },
  {
    body:
      "After our 3rd-grade son scored a Level 2 on his first FAST test, we worked with Ms. Pollard throughout the school year. By the end of the year, he achieved a Level 5 on the FAST assessment, earned straight A’s, and grew in confidence along the way.",
    sig: "— Tara Goettel",
    meta: "Parent of a 3rd-grade student",
    full:
      "After our 3rd-grade son scored a Level 2 on his first FAST test, we were referred to Ms. Pollard’s tutoring services. We worked with her throughout the school year, and by the end of the year he achieved a Level 5 on the FAST assessment and earned straight A’s.\n\nMs. Pollard was amazing. She tailored each session to his individual challenges and learning needs, communicated regularly, and helped build his confidence along the way. He truly enjoyed working with her. We highly recommend her to any family looking for a caring and effective tutor!",
  },

  {
    body:
      "I cannot say enough wonderful things about the exceptional tutoring my daughter received this past year from Ms. Pollard. She created a supportive and encouraging environment that helped build both my daughter’s academic skills and confidence. Her ability to connect with students, tailor lessons to individual needs, and clearly explain challenging concepts made a meaningful difference.\n\nOne thing we are especially grateful for is that Ms. Pollard recognized my daughter’s strong comprehension skills while also identifying that she needed additional support with foundational reading skills and fluency. She encouraged us to pursue further evaluation and school support, which ultimately helped my daughter receive the accommodations she needed. Those supports have made a lasting difference and will continue to benefit her throughout her school career.\n\nWhat truly sets Ms. Pollard apart is her dedication and passion for teaching. She not only strengthens academic performance but also fosters independence, resilience, and a positive attitude toward learning. She is patient, attentive, highly knowledgeable, and genuinely committed to student success. We are incredibly grateful for the lasting impact she has had on our daughter’s growth.",
    sig: "— Kristina Kipp",
    meta: "Mom of a 3rd Grader",
  },
];
