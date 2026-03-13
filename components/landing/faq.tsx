"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How is this different from ChatGPT?",
    answer:
      "ChatGPT gives you generic output. Launcher knows each platform's unwritten rules — Reddit hates self-promo, HN wants technical depth, Twitter needs hooks. We bake these patterns into every generation so your posts actually perform.",
  },
  {
    question: "What platforms do you support?",
    answer:
      "Twitter/X threads, Reddit posts (with subreddit-specific tone), Hacker News Show HN posts, and Product Hunt listings. We also give you channel recommendations based on your product type.",
  },
  {
    question: "Can I edit the generated copy?",
    answer:
      "Absolutely. We give you a strong starting point, not a final draft. Edit, tweak, make it yours. That's the point — skip the blank page, not the human touch.",
  },
  {
    question: "What if I'm not happy with the output?",
    answer:
      "Regenerate as many times as you want within your plan limits. Each generation gives you variations to choose from. If you're consistently unhappy, reach out — we'll make it right.",
  },
  {
    question: "Do you store my product information?",
    answer:
      "Yes, securely. We store your product details so you can generate new copy without re-entering everything. You can delete your data anytime from your dashboard.",
  },
  {
    question: "Is there an API?",
    answer:
      "Pro plan includes API access. Perfect for integrating launch copy generation into your own tools or automating multi-product launches.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="border-t border-border/40 bg-muted/30 py-24">
      <div className="container max-w-screen-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Launcher.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="divide-y divide-border/60">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="py-6">
                <button
                  className="flex w-full items-start justify-between text-left"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span className="font-medium">{faq.question}</span>
                  <svg
                    className={`ml-6 h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <p className="mt-4 text-muted-foreground">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
