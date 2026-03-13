"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// Demo data - would come from database in production
const generations = [
  {
    id: "1",
    productName: "Launcher",
    platform: "Twitter",
    createdAt: "2024-03-13 14:30",
    content: `HOOK:
I spent 6 months writing launch posts that got ignored.

Then I realized: every platform has unwritten rules.

Here's what I learned (and built):

1/
The problem isn't your product. It's your copy.

Reddit hates self-promo. HN wants depth. Twitter needs hooks.

Generic AI gives you generic output that sounds like... AI.

2/
So I built something different.

A tool that knows each platform's culture.

Posts that don't get flagged. Copy that sounds human.`,
  },
  {
    id: "2",
    productName: "Launcher",
    platform: "Reddit",
    createdAt: "2024-03-13 14:25",
    content: `TITLE: I built a tool that writes launch posts for different platforms (feedback wanted)

POST:
Hey everyone,

I've been lurking here for a while and noticed a common pattern: people build great products but struggle with the launch copy.

I had the same problem. I'd spend hours crafting a Reddit post, only to have it removed for self-promotion. Or write a tweet thread that got zero engagement.

The issue? Each platform has its own culture and unwritten rules.`,
  },
  {
    id: "3",
    productName: "Launcher",
    platform: "Hacker News",
    createdAt: "2024-03-13 14:20",
    content: `TITLE: Show HN: Launcher – AI-powered launch copy that knows each platform's rules

POST:
Hi HN,

I built Launcher after struggling with my own product launches. The problem: every platform has different expectations, and generic AI copy gets ignored or flagged.

The approach: instead of one generic prompt, I created platform-specific prompts that encode each community's norms.`,
  },
  {
    id: "4",
    productName: "Launcher",
    platform: "Product Hunt",
    createdAt: "2024-03-13 14:15",
    content: `TAGLINE: AI launch copy that knows each platform's rules

DESCRIPTION:
Launcher helps indie hackers and makers create launch posts that actually get engagement.

The problem with generic AI copy: it doesn't know that Reddit hates self-promotion, HN wants technical depth, or that Twitter hashtags hurt reach.`,
  },
];

export default function HistoryPage() {
  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  return (
    <div className="container max-w-screen-xl py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Link href="/dashboard" className="hover:text-foreground">
              Dashboard
            </Link>
            <span>/</span>
            <span>History</span>
          </div>
          <h1 className="text-3xl font-bold">Generation History</h1>
          <p className="text-muted-foreground">
            All your generated copy in one place.
          </p>
        </div>
        <Button asChild>
          <Link href="/generate">Generate New</Link>
        </Button>
      </div>

      {/* Filter tabs - placeholder for future */}
      <div className="flex gap-2 mb-6">
        <Button variant="secondary" size="sm">
          All
        </Button>
        <Button variant="ghost" size="sm">
          Twitter
        </Button>
        <Button variant="ghost" size="sm">
          Reddit
        </Button>
        <Button variant="ghost" size="sm">
          Hacker News
        </Button>
        <Button variant="ghost" size="sm">
          Product Hunt
        </Button>
      </div>

      {/* Generations list */}
      <div className="space-y-4">
        {generations.map((gen) => (
          <Card key={gen.id}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {gen.platform}
                  </span>
                  <span className="text-sm font-medium">{gen.productName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    {gen.createdAt}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCopy(gen.content)}
                  >
                    Copy
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <pre className="whitespace-pre-wrap text-sm text-muted-foreground font-mono bg-muted/50 p-4 rounded-lg max-h-48 overflow-auto">
                {gen.content}
              </pre>
            </CardContent>
          </Card>
        ))}
      </div>

      {generations.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground mb-4">
              No generations yet. Create your first one.
            </p>
            <Button asChild>
              <Link href="/generate">Generate Copy</Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
