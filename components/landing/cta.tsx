import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-24">
      <div className="container max-w-screen-xl">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-16 sm:px-12 sm:py-20">
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Stop staring at the blank page
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Your product deserves a great launch. Get platform-native copy
              in seconds and ship with confidence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
                asChild
              >
                <Link href="/signup">Start Free — No Credit Card</Link>
              </Button>
            </div>
          </div>

          {/* Background decoration */}
          <div
            className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
