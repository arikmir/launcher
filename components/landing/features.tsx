const features = [
  {
    title: "Twitter Threads",
    description:
      "Hook-first tweets that grab attention. No hashtags (they hurt reach). Optimized for engagement.",
    icon: "twitter",
  },
  {
    title: "Reddit Posts",
    description:
      "Problem-led posts that don't get flagged as self-promo. Authentic tone that fits each subreddit.",
    icon: "reddit",
  },
  {
    title: "Hacker News",
    description:
      "Technical depth with humble tone. Show HN format that invites constructive feedback.",
    icon: "hackernews",
  },
  {
    title: "Product Hunt",
    description:
      "60-char taglines, maker stories, and topic tags. Ready to paste into your launch.",
    icon: "producthunt",
  },
  {
    title: "Channel Recommendations",
    description:
      "AI analyzes your product and suggests the best platforms to launch on, with reasoning.",
    icon: "compass",
  },
  {
    title: "One Input, All Platforms",
    description:
      "Describe your product once. Get native copy for every platform in seconds.",
    icon: "zap",
  },
];

export function Features() {
  return (
    <section id="features" className="border-t border-border/40 bg-muted/30 py-24">
      <div className="container max-w-screen-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Platform-native copy in seconds
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Each platform has unwritten rules. We bake them into every generation
            so your posts don't get ignored or flagged.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative rounded-lg border border-border/60 bg-background p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold">
                {feature.title.charAt(0)}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
