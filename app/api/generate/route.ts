import { NextRequest, NextResponse } from "next/server";
import { getOpenAI, isOpenAIConfigured } from "@/lib/openai";
import { prompts, ProductContext, Platform } from "@/lib/prompts";

// Mock responses for when OpenAI is not configured
const mockResponses: Record<Platform, string> = {
  twitter: `HOOK:
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

Posts that don't get flagged. Copy that sounds human.

3/
It's called Launcher.

You describe your product once.

Get native copy for Twitter, Reddit, HN, and Product Hunt.

4/
Currently in beta. Free to try.

[LINK]

Would love your feedback. What platforms do you struggle with most?`,

  reddit: `TITLE: I built a tool that writes launch posts for different platforms (feedback wanted)

POST:
Hey everyone,

I've been lurking here for a while and noticed a common pattern: people build great products but struggle with the launch copy.

I had the same problem. I'd spend hours crafting a Reddit post, only to have it removed for self-promotion. Or write a tweet thread that got zero engagement.

The issue? Each platform has its own culture and unwritten rules.

So I built Launcher - a tool that generates platform-native launch copy. You describe your product once, and it creates posts optimized for Reddit, Twitter/X, Hacker News, and Product Hunt.

The key difference: it knows what NOT to do. No emoji spam on HN. No hashtags on Twitter. No marketing speak on Reddit.

Tech stack: Next.js, Tailwind, OpenAI

Would love any feedback on the idea or the execution. What makes you skip past most product launches?`,

  hackernews: `TITLE: Show HN: Launcher – AI-powered launch copy that knows each platform's rules

POST:
Hi HN,

I built Launcher after struggling with my own product launches. The problem: every platform has different expectations, and generic AI copy gets ignored or flagged.

The approach: instead of one generic prompt, I created platform-specific prompts that encode each community's norms. Reddit posts lead with the problem. HN posts include technical depth. Twitter threads have scroll-stopping hooks.

Technical decisions:
- Next.js 14 with App Router
- Tailwind + shadcn/ui for the UI
- OpenAI GPT-4o-mini for generation (good cost/quality ratio)

What it doesn't do: write your entire marketing strategy. It's specifically for launch copy - that first post that introduces your product.

Looking for feedback on the prompts themselves. I've included anti-patterns for each platform (no hashtags on Twitter, no superlatives on Reddit, etc.) but would love to hear what I'm missing.`,

  producthunt: `TAGLINE: AI launch copy that knows each platform's rules

DESCRIPTION:
Launcher helps indie hackers and makers create launch posts that actually get engagement.

The problem with generic AI copy: it doesn't know that Reddit hates self-promotion, HN wants technical depth, or that Twitter hashtags hurt reach.

Launcher encodes each platform's unwritten rules into the generation. You describe your product once, and get native copy for Twitter, Reddit, Hacker News, and Product Hunt.

KEY FEATURES:
- Platform-specific generation (not one-size-fits-all)
- Anti-pattern detection (tells you what to avoid)
- Channel recommendations based on your product type
- Generation history to iterate on your copy
- Export ready-to-paste format

FIRST COMMENT (Maker Story):
Hey Product Hunt!

I built Launcher after my third product launch flopped. Not because the product was bad, but because my launch posts were.

I'd write a tweet thread with hashtags (kills reach). A Reddit post that sounded like an ad (got removed). An HN post with emojis (got ignored).

Each platform has rules. Most AI doesn't know them. Launcher does.

This is day one. Would love your feedback on what platforms you struggle with most.`,

  channels: `TOP 3 CHANNELS:

1. Twitter/X
Why: Your target audience (indie hackers, makers) is highly active here. The product solves a relatable problem.
Approach: Build in public before launch. Share learnings about platform-specific copy. Launch with a thread that demonstrates the value.
Avoid: Hashtags (they hurt reach). Being too salesy. Not engaging with replies.

2. Reddit (r/SideProject, r/startups, r/indiehackers)
Why: These communities are your exact target users. They appreciate tools built by builders.
Approach: Lead with the problem, not the product. Share your journey. Ask for genuine feedback.
Avoid: Direct promotion without context. Marketing speak. Posting the same thing to multiple subreddits.

3. Product Hunt
Why: It's the canonical launch platform for tools like this. Your target users browse PH regularly.
Approach: Pick a Tuesday-Thursday. Have your maker story ready. Engage heavily on launch day.
Avoid: Launching on a Monday (slower). Ignoring comments. Not having social proof ready.

SKIP THESE:
- LinkedIn: Too corporate for this audience
- Dev.to: More technical/educational, less product-focused
- Indie Hackers: Good for discussion, but not as launch-focused as the others`,
};

export async function POST(request: NextRequest) {
  try {
    const { product, platform } = await request.json();

    if (!product || !platform) {
      return NextResponse.json(
        { error: "Product data and platform are required" },
        { status: 400 }
      );
    }

    if (!Object.keys(prompts).includes(platform)) {
      return NextResponse.json(
        { error: "Invalid platform" },
        { status: 400 }
      );
    }

    const productContext: ProductContext = {
      name: product.name,
      tagline: product.tagline,
      description: product.description,
      targetAudience: product.targetAudience,
      problem: product.problem,
      solution: product.solution,
      features: product.features,
      techStack: product.techStack,
      pricing: product.pricing,
      url: product.url,
    };

    // If OpenAI is not configured, return mock response
    if (!isOpenAIConfigured()) {
      console.log("[Generate] Using mock response (OpenAI not configured)");
      return NextResponse.json({
        content: mockResponses[platform as Platform],
        mock: true,
      });
    }

    const prompt = prompts[platform as Platform](productContext);
    const openai = getOpenAI();

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 1500,
      temperature: 0.7,
    });

    const content = completion.choices[0]?.message?.content || "";

    return NextResponse.json({ content, mock: false });
  } catch (error) {
    console.error("[Generate] Error:", error);
    return NextResponse.json(
      { error: "Failed to generate copy" },
      { status: 500 }
    );
  }
}
