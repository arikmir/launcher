"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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

interface GeneratedContent {
  platform: string;
  content: string;
  mock: boolean;
}

const platforms = [
  { id: "twitter", name: "Twitter/X", description: "Launch thread" },
  { id: "reddit", name: "Reddit", description: "r/SideProject post" },
  { id: "hackernews", name: "Hacker News", description: "Show HN post" },
  { id: "producthunt", name: "Product Hunt", description: "Launch listing" },
  { id: "channels", name: "Channel Analysis", description: "Best platforms" },
];

export default function GeneratePage() {
  const [step, setStep] = useState<"input" | "select" | "generate">("input");
  const [product, setProduct] = useState<ProductData | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [generated, setGenerated] = useState<GeneratedContent | null>(null);
  const [loading, setLoading] = useState(false);

  const handleProductComplete = (data: ProductData) => {
    setProduct(data);
    setStep("select");
  };

  const handleGenerate = async (platform: string) => {
    if (!product) return;
    
    setSelectedPlatform(platform);
    setLoading(true);
    setStep("generate");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product, platform }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setGenerated({
          platform,
          content: data.content,
          mock: data.mock,
        });
      } else {
        console.error("Generation failed:", data.error);
      }
    } catch (error) {
      console.error("Generation error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    if (step === "generate") {
      setStep("select");
      setGenerated(null);
    } else if (step === "select") {
      setStep("input");
    }
  };

  const handleCopy = () => {
    if (generated) {
      navigator.clipboard.writeText(generated.content);
    }
  };

  return (
    <div className="container max-w-screen-xl py-12">
      {step === "input" && (
        <>
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold">Generate Launch Copy</h1>
            <p className="mt-4 text-muted-foreground">
              Tell us about your product and we&apos;ll create platform-native copy.
            </p>
          </div>
          <ProductForm onComplete={handleProductComplete} />
        </>
      )}

      {step === "select" && product && (
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold">Choose a Platform</h1>
            <p className="mt-4 text-muted-foreground">
              Generating copy for: <strong>{product.name}</strong>
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {platforms.map((platform) => (
              <Card
                key={platform.id}
                className="cursor-pointer hover:border-primary/40 transition-colors"
                onClick={() => handleGenerate(platform.id)}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{platform.name}</CardTitle>
                  <CardDescription>{platform.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" onClick={handleBack}>
              Back to Edit Product
            </Button>
          </div>
        </div>
      )}

      {step === "generate" && (
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">
                {platforms.find((p) => p.id === selectedPlatform)?.name} Copy
              </h1>
              <p className="text-muted-foreground">
                For: {product?.name}
              </p>
            </div>
            <Button variant="outline" onClick={handleBack}>
              Try Another Platform
            </Button>
          </div>

          {loading ? (
            <Card>
              <CardContent className="py-12 text-center">
                <div className="animate-pulse">
                  <div className="h-4 bg-muted rounded w-3/4 mx-auto mb-4"></div>
                  <div className="h-4 bg-muted rounded w-1/2 mx-auto mb-4"></div>
                  <div className="h-4 bg-muted rounded w-2/3 mx-auto"></div>
                </div>
                <p className="mt-6 text-muted-foreground">Generating your copy...</p>
              </CardContent>
            </Card>
          ) : generated ? (
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Generated Copy</CardTitle>
                  {generated.mock && (
                    <CardDescription className="text-orange-600">
                      Demo mode (add OpenAI API key for real generation)
                    </CardDescription>
                  )}
                </div>
                <Button onClick={handleCopy} variant="outline" size="sm">
                  Copy to Clipboard
                </Button>
              </CardHeader>
              <CardContent>
                <pre className="whitespace-pre-wrap text-sm font-mono bg-muted p-4 rounded-lg overflow-auto max-h-[600px]">
                  {generated.content}
                </pre>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="py-12 text-center text-muted-foreground">
                Something went wrong. Please try again.
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}
