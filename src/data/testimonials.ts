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
];
