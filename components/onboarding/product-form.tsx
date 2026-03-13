"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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

const initialData: ProductData = {
  name: "",
  tagline: "",
  description: "",
  targetAudience: "",
  problem: "",
  solution: "",
  features: "",
  techStack: "",
  pricing: "",
  url: "",
};

const steps = [
  {
    title: "Basic Info",
    description: "Tell us about your product",
    fields: ["name", "tagline", "description", "url"],
  },
  {
    title: "Problem & Solution",
    description: "What problem does it solve?",
    fields: ["targetAudience", "problem", "solution"],
  },
  {
    title: "Details",
    description: "Features, tech, and pricing",
    fields: ["features", "techStack", "pricing"],
  },
];

const fieldConfig: Record<keyof ProductData, { label: string; placeholder: string; type: "input" | "textarea" }> = {
  name: { label: "Product Name", placeholder: "e.g., Launcher", type: "input" },
  tagline: { label: "Tagline (60 chars max)", placeholder: "e.g., AI-powered launch copy for indie hackers", type: "input" },
  description: { label: "Description", placeholder: "What does your product do? (2-3 sentences)", type: "textarea" },
  url: { label: "Website URL", placeholder: "https://yourproduct.com", type: "input" },
  targetAudience: { label: "Target Audience", placeholder: "Who is this for? e.g., indie hackers, small business owners", type: "input" },
  problem: { label: "Problem", placeholder: "What problem does your product solve?", type: "textarea" },
  solution: { label: "Solution", placeholder: "How does your product solve this problem?", type: "textarea" },
  features: { label: "Key Features", placeholder: "List 3-5 main features, one per line", type: "textarea" },
  techStack: { label: "Tech Stack (optional)", placeholder: "e.g., Next.js, Supabase, OpenAI", type: "input" },
  pricing: { label: "Pricing", placeholder: "e.g., Free tier, $29/mo, lifetime $299", type: "input" },
};

interface ProductFormProps {
  onComplete: (data: ProductData) => void;
}

export function ProductForm({ onComplete }: ProductFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<ProductData>(initialData);

  const handleChange = (field: keyof ProductData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      onComplete(data);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const currentFields = steps[currentStep].fields as (keyof ProductData)[];
  const isLastStep = currentStep === steps.length - 1;

  // Check if required fields in current step are filled
  const canProceed = currentFields.every((field) => {
    // techStack is optional
    if (field === "techStack" || field === "url") return true;
    return data[field].trim().length > 0;
  });

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          {steps.map((_, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  index <= currentStep
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`h-1 w-16 mx-2 ${
                    index < currentStep ? "bg-primary" : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <CardTitle>{steps[currentStep].title}</CardTitle>
        <CardDescription>{steps[currentStep].description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {currentFields.map((field) => {
            const config = fieldConfig[field];
            return (
              <div key={field} className="space-y-2">
                <Label htmlFor={field}>{config.label}</Label>
                {config.type === "input" ? (
                  <Input
                    id={field}
                    placeholder={config.placeholder}
                    value={data[field]}
                    onChange={(e) => handleChange(field, e.target.value)}
                  />
                ) : (
                  <Textarea
                    id={field}
                    placeholder={config.placeholder}
                    value={data[field]}
                    onChange={(e) => handleChange(field, e.target.value)}
                    rows={4}
                  />
                )}
              </div>
            );
          })}
        </div>

        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 0}
          >
            Back
          </Button>
          <Button onClick={handleNext} disabled={!canProceed}>
            {isLastStep ? "Generate Copy" : "Next"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
