export interface ProductContext {
  name: string;
  tagline: string;
  description: string;
  targetAudience: string;
  problem: string;
  solution: string;
  features: string;
  techStack?: string;
  pricing?: string;
  url?: string;
}

export const prompts = {
  twitter: (ctx: ProductContext) => `You are a viral Twitter/X copywriter who specializes in product launches.

Write a launch tweet thread (1 hook tweet + 4-5 follow-up tweets) for this product:

**Product:** ${ctx.name}
**Tagline:** ${ctx.tagline}
**Description:** ${ctx.description}
**Problem it solves:** ${ctx.problem}
**Solution:** ${ctx.solution}
**Target audience:** ${ctx.targetAudience}
**Key features:** ${ctx.features}
${ctx.pricing ? `**Pricing:** ${ctx.pricing}` : ""}
${ctx.url ? `**URL:** ${ctx.url}` : ""}

Requirements:
- Hook tweet must stop the scroll (provocative statement, surprising stat, or bold claim)
- Each tweet should be <280 characters
- Use a conversational, authentic tone (not corporate)
- NO emojis at all
- End with a clear CTA and link placeholder [LINK]
- NO hashtags (they hurt reach)

Format your response as:
HOOK:
[hook tweet]

1/
[tweet 1]

2/
[tweet 2]

(etc.)`,

  reddit: (ctx: ProductContext) => `You are an experienced Reddit user who knows how to share products without getting downvoted or flagged as spam.

Write a Reddit post for r/SideProject about this product:

**Product:** ${ctx.name}
**Tagline:** ${ctx.tagline}
**Description:** ${ctx.description}
**Problem it solves:** ${ctx.problem}
**Solution:** ${ctx.solution}
**Target audience:** ${ctx.targetAudience}
**Key features:** ${ctx.features}
${ctx.techStack ? `**Tech Stack:** ${ctx.techStack}` : ""}
${ctx.pricing ? `**Pricing:** ${ctx.pricing}` : ""}

Requirements:
- Lead with the problem, not the product
- Be humble and authentic - you're sharing a project, not advertising
- Ask for genuine feedback
- NO emojis
- NO marketing speak or superlatives ("revolutionary", "game-changing")
- Keep it conversational, like talking to fellow builders
- Include tech stack if provided (Reddit loves technical details)

Format your response as:
TITLE: [title]

POST:
[post body]`,

  hackernews: (ctx: ProductContext) => `You are a seasoned Hacker News user who knows the community's preferences.

Write a Show HN post for this product:

**Product:** ${ctx.name}
**Tagline:** ${ctx.tagline}
**Description:** ${ctx.description}
**Problem it solves:** ${ctx.problem}
**Solution:** ${ctx.solution}
**Target audience:** ${ctx.targetAudience}
**Key features:** ${ctx.features}
${ctx.techStack ? `**Tech Stack:** ${ctx.techStack}` : ""}

Requirements:
- Title format: "Show HN: ${ctx.name} – [concise description]"
- Lead with technical substance
- Be humble - HN users hate self-promotion
- Mention interesting technical decisions
- Invite constructive criticism
- NO emojis
- NO marketing fluff
- Short paragraphs, easy to scan

Format your response as:
TITLE: Show HN: [title]

POST:
[post body]`,

  producthunt: (ctx: ProductContext) => `You are a Product Hunt launch expert who has helped products reach the top.

Write a Product Hunt listing for this product:

**Product:** ${ctx.name}
**Tagline:** ${ctx.tagline}
**Description:** ${ctx.description}
**Problem it solves:** ${ctx.problem}
**Solution:** ${ctx.solution}
**Target audience:** ${ctx.targetAudience}
**Key features:** ${ctx.features}
${ctx.pricing ? `**Pricing:** ${ctx.pricing}` : ""}

Requirements:
- Tagline must be 60 characters or less
- First comment should tell the maker story (why you built this)
- List 3-5 key features as bullet points
- Include a clear value proposition
- NO emojis
- Mention any special launch offer if pricing is provided

Format your response as:
TAGLINE: [60 chars max]

DESCRIPTION:
[2-3 paragraph description]

KEY FEATURES:
- [feature 1]
- [feature 2]
- [feature 3]

FIRST COMMENT (Maker Story):
[personal story about why you built this]`,

  channels: (ctx: ProductContext) => `You are a launch strategy expert who helps indie hackers decide where to launch their products.

Analyze this product and recommend the best launch channels:

**Product:** ${ctx.name}
**Tagline:** ${ctx.tagline}
**Description:** ${ctx.description}
**Problem it solves:** ${ctx.problem}
**Target audience:** ${ctx.targetAudience}

Available channels:
- Twitter/X
- Reddit (various subreddits)
- Hacker News
- Product Hunt
- Indie Hackers
- LinkedIn
- Dev.to

For each recommended channel, explain:
1. Why it's a good fit
2. Best timing/approach
3. What to avoid

Format your response as:
TOP 3 CHANNELS:

1. [Channel Name]
Why: [explanation]
Approach: [strategy]
Avoid: [pitfalls]

2. [Channel Name]
...

3. [Channel Name]
...

SKIP THESE:
[channels that won't work well and why]`,
};

export type Platform = keyof typeof prompts;
