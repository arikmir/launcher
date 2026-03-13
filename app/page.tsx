import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Features } from "@/components/landing/features";
import { Pricing } from "@/components/landing/pricing";
import { FAQ } from "@/components/landing/faq";
import { CTA } from "@/components/landing/cta";
import { Waitlist } from "@/components/landing/waitlist";

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

          <div className="mt-10 w-full max-w-md">
            <Waitlist />
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Join 0 indie hackers on the waitlist
          </p>

          <div className="mt-6">
            <Button size="lg" variant="outline" asChild>
              <Link href="#features">See How It Works</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <Features />

      {/* Pricing */}
      <Pricing />

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <CTA />
    </div>
  );
}
