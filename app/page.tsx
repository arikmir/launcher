import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container max-w-screen-xl py-24 md:py-32">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full border border-border/60 bg-muted/50 px-4 py-1.5 text-sm font-medium text-muted-foreground mb-6">
            Launch your product faster
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            AI-powered launch copy for{" "}
            <span className="text-primary">indie hackers</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Generate ready-to-post content for Twitter, Reddit, Hacker News,
            and Product Hunt in seconds. No more blank page anxiety.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/signup">Get Started Free</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#features">See How It Works</Link>
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required · 10 free generations
          </p>
        </div>
      </section>

      {/* Placeholder for features, pricing, etc. */}
      <section id="features" className="border-t border-border/40 bg-muted/30 py-24">
        <div className="container max-w-screen-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Platform-native copy in seconds
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Coming soon: Features section
          </p>
        </div>
      </section>

      <section id="pricing" className="py-24">
        <div className="container max-w-screen-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Coming soon: Pricing section
          </p>
        </div>
      </section>

      <section id="faq" className="border-t border-border/40 bg-muted/30 py-24">
        <div className="container max-w-screen-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Coming soon: FAQ section
          </p>
        </div>
      </section>
    </div>
  );
}
