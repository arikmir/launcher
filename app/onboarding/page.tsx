"use client";

import { useState } from "react";
import { ProductForm } from "@/components/onboarding/product-form";

interface ProductData {
  name: string;
  tagline: string;
  description: string;
  targetAudience: string;
  problem: string;
  solution: string;
  features: string;
  techStack: string;
  pricing: string;
  url: string;
}

export default function OnboardingPage() {
  const [productData, setProductData] = useState<ProductData | null>(null);

  const handleComplete = (data: ProductData) => {
    setProductData(data);
    // TODO: Save to database and redirect to generation page
    console.log("Product data:", data);
  };

  if (productData) {
    return (
      <div className="container max-w-screen-xl py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Product Saved</h1>
          <p className="mt-4 text-muted-foreground">
            Your product &quot;{productData.name}&quot; has been saved. Ready to generate copy.
          </p>
          <pre className="mt-8 p-4 bg-muted rounded-lg text-left text-sm overflow-auto max-w-2xl mx-auto">
            {JSON.stringify(productData, null, 2)}
          </pre>
        </div>
      </div>
    );
  }

  return (
    <div className="container max-w-screen-xl py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold">Add Your Product</h1>
        <p className="mt-4 text-muted-foreground">
          Tell us about your product and we&apos;ll generate launch copy for all platforms.
        </p>
      </div>
      <ProductForm onComplete={handleComplete} />
    </div>
  );
}
