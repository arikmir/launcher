import { Button } from "@/components/ui/button";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Try it out, no credit card required",
    features: [
      "10 generations per month",
      "All platforms (Twitter, Reddit, HN, PH)",
      "Basic channel recommendations",
    ],
    cta: "Get Started",
    href: "/signup",
    highlighted: false,
  },
  {
    name: "Launcher",
    price: "$29",
    period: "/month",
    description: "For indie hackers shipping regularly",
    features: [
      "100 generations per month",
      "All platforms + variations",
      "Advanced channel analysis",
      "Generation history",
      "Priority support",
    ],
    cta: "Start Launching",
    href: "/signup?plan=launcher",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "$79",
    period: "/month",
    description: "For agencies and power users",
    features: [
      "Unlimited generations",
      "Multiple products",
      "Team collaboration",
      "API access",
      "Custom tone training",
      "Dedicated support",
    ],
    cta: "Go Pro",
    href: "/signup?plan=pro",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="container max-w-screen-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free. Upgrade when you need more. Cancel anytime.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl border p-8 ${
                plan.highlighted
                  ? "border-primary bg-primary/5 shadow-lg"
                  : "border-border/60 bg-background"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="ml-1 text-muted-foreground">
                    {plan.period}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className="mt-8 w-full"
                variant={plan.highlighted ? "default" : "outline"}
                asChild
              >
                <Link href={plan.href}>{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Want lifetime access?{" "}
            <Link href="/lifetime" className="text-primary hover:underline">
              Get it for $299
            </Link>{" "}
            (first 100 only)
          </p>
        </div>
      </div>
    </section>
  );
}
