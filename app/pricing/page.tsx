import { Pricing } from "@/components/landing/pricing";

export default function PricingPage() {
  return (
    <div className="py-12">
      <div className="container max-w-screen-xl text-center mb-12">
        <h1 className="text-4xl font-bold">Pricing</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Start free. Upgrade when you need more.
        </p>
      </div>
      <Pricing />
    </div>
  );
}
